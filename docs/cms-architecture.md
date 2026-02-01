# CMS Lead Management Architecture

## Scope (Phase 1)
- Collect leads from `Contact` form and floating lead widget.
- Store leads in MySQL (recommended).
- Provide basic admin panel for lead viewing and status updates.

## Frontend Integration
- `src/lib/leads.ts` sends lead data to `POST /api/leads`.
- Two sources are defined:
  - `contact_form`
  - `floating_widget`

## Minimal API (Backend)
- `POST /api/leads`
  - Creates a new lead.
  - Validates `name`, `email`, `consent`.
- `GET /api/leads?status=...`
  - Returns list with pagination.
- `PATCH /api/leads/:id`
  - Updates status, notes, assignee.
- `GET /api/leads/:id`
  - Lead detail view.

## Suggested MySQL Schema
```
leads
  id              CHAR(36) PRIMARY KEY
  source          VARCHAR(32) NOT NULL
  organization    VARCHAR(255) NULL
  name            VARCHAR(255) NOT NULL
  email           VARCHAR(255) NOT NULL
  phone           VARCHAR(64) NULL
  message         TEXT NULL
  consent         TINYINT(1) NOT NULL
  status          VARCHAR(32) NOT NULL DEFAULT 'new'
  assigned_to     VARCHAR(255) NULL
  notes           TEXT NULL
  created_at      DATETIME NOT NULL
  updated_at      DATETIME NOT NULL
```

## Admin Panel (Planned)
- Route: `/admin`
- Views:
  - Lead list (filters + status)
  - Lead details (notes + status changes)
- Access control (simple login or SSO integration).
