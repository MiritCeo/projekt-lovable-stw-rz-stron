export type LeadPayload = {
  source: "contact_form" | "floating_widget";
  organization?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  consent: boolean;
};

export type LeadStatus = "new" | "contacted" | "qualified" | "closed";

export type Lead = {
  id: string;
  source: LeadPayload["source"];
  organization?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  consent: boolean;
  status: LeadStatus;
  assignedTo?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type LeadListResponse = {
  total: number;
  items: Lead[];
};

const tokenStorageKey = "crm_token";

export const getAuthToken = () => localStorage.getItem(tokenStorageKey);

export const setAuthToken = (token: string) => {
  localStorage.setItem(tokenStorageKey, token);
};

export const clearAuthToken = () => {
  localStorage.removeItem(tokenStorageKey);
};

const authHeaders = () => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export async function createLead(payload: LeadPayload): Promise<void> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Lead submission failed");
  }
}

export async function loginAdmin(password: string): Promise<void> {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  if (!data?.token) {
    throw new Error("Login failed");
  }

  setAuthToken(data.token);
}

export async function fetchLeads(params: {
  status?: LeadStatus | "all";
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<LeadListResponse> {
  const query = new URLSearchParams();

  if (params.status && params.status !== "all") {
    query.set("status", params.status);
  }
  if (params.search) {
    query.set("search", params.search);
  }
  if (params.limit) {
    query.set("limit", String(params.limit));
  }
  if (params.offset) {
    query.set("offset", String(params.offset));
  }

  const response = await fetch(`/api/leads?${query.toString()}`, {
    headers: {
      ...authHeaders(),
    },
  });
  if (response.status === 401) {
    throw new Error("Unauthorized");
  }
  if (!response.ok) {
    throw new Error("Failed to load leads");
  }

  return response.json();
}

export async function updateLead(
  id: string,
  payload: { status?: LeadStatus; notes?: string; assignedTo?: string },
): Promise<void> {
  const response = await fetch(`/api/leads/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 401) {
    throw new Error("Unauthorized");
  }
  if (!response.ok) {
    throw new Error("Failed to update lead");
  }
}
