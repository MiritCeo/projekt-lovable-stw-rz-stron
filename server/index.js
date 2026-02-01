import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

const adminPassword = process.env.ADMIN_PASSWORD;
const adminToken = process.env.ADMIN_TOKEN || adminPassword;

const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");

  if (!adminToken || token !== adminToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};

app.post("/api/login", (req, res) => {
  if (!adminPassword || !adminToken) {
    return res.status(500).json({ error: "Login not configured" });
  }

  const { password } = req.body || {};
  if (!password || password !== adminPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ token: adminToken });
});

app.post("/api/leads", async (req, res) => {
  try {
    const {
      source = "contact_form",
      organization,
      name,
      email,
      phone,
      message,
      consent,
    } = req.body || {};

    if (!name || !email || consent !== true) {
      return res.status(400).json({ error: "Invalid lead payload" });
    }

    const id = uuid();
    const now = new Date();

    await pool.execute(
      `INSERT INTO leads
        (id, source, organization, name, email, phone, message, consent, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        source,
        organization || null,
        name,
        email,
        phone || null,
        message || null,
        consent ? 1 : 0,
        "new",
        now,
        now,
      ],
    );

    res.status(201).json({ id });
  } catch (error) {
    console.error("Failed to create lead", error);
    res.status(500).json({ error: "Failed to create lead" });
  }
});

app.get("/api/leads", requireAuth, async (req, res) => {
  try {
    const { status, search, limit = "25", offset = "0" } = req.query;
    const where = [];
    const params = [];

    if (status) {
      where.push("status = ?");
      params.push(status);
    }

    if (search) {
      where.push(
        "(name LIKE ? OR email LIKE ? OR phone LIKE ? OR organization LIKE ?)",
      );
      const value = `%${search}%`;
      params.push(value, value, value, value);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    const [countRows] = await pool.execute(
      `SELECT COUNT(*) as total FROM leads ${whereClause}`,
      params,
    );

    const [rows] = await pool.execute(
      `SELECT id, source, organization, name, email, phone, message, consent, status,
              assigned_to as assignedTo, notes, created_at as createdAt, updated_at as updatedAt
       FROM leads
       ${whereClause}
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, Number(limit), Number(offset)],
    );

    res.json({ total: countRows[0].total, items: rows });
  } catch (error) {
    console.error("Failed to fetch leads", error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

app.get("/api/leads/:id", requireAuth, async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT id, source, organization, name, email, phone, message, consent, status,
              assigned_to as assignedTo, notes, created_at as createdAt, updated_at as updatedAt
       FROM leads
       WHERE id = ?`,
      [req.params.id],
    );

    if (!rows.length) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Failed to fetch lead", error);
    res.status(500).json({ error: "Failed to fetch lead" });
  }
});

app.patch("/api/leads/:id", requireAuth, async (req, res) => {
  try {
    const { status, notes, assignedTo } = req.body || {};
    const fields = [];
    const params = [];

    if (status) {
      fields.push("status = ?");
      params.push(status);
    }

    if (notes !== undefined) {
      fields.push("notes = ?");
      params.push(notes || null);
    }

    if (assignedTo !== undefined) {
      fields.push("assigned_to = ?");
      params.push(assignedTo || null);
    }

    if (!fields.length) {
      return res.status(400).json({ error: "No fields to update" });
    }

    fields.push("updated_at = ?");
    params.push(new Date());
    params.push(req.params.id);

    const [result] = await pool.execute(
      `UPDATE leads SET ${fields.join(", ")} WHERE id = ?`,
      params,
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to update lead", error);
    res.status(500).json({ error: "Failed to update lead" });
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`CRM API listening on port ${port}`);
});
