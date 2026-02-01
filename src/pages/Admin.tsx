import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clearAuthToken, fetchLeads, getAuthToken, LeadStatus, updateLead } from "@/lib/leads";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const statusOptions: { value: LeadStatus | "all"; label: string }[] = [
  { value: "all", label: "Wszystkie" },
  { value: "new", label: "Nowe" },
  { value: "contacted", label: "W kontakcie" },
  { value: "qualified", label: "Zakwalifikowane" },
  { value: "closed", label: "Zamknięte" },
];

const formatDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("pl-PL");
};

export default function Admin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [status, setStatus] = useState<LeadStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draftStatus, setDraftStatus] = useState<LeadStatus>("new");
  const [draftNotes, setDraftNotes] = useState("");

  useEffect(() => {
    if (!getAuthToken()) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["leads", status, search],
    queryFn: () => fetchLeads({ status, search, limit: 50 }),
  });

  const leads = data?.items ?? [];
  const selectedLead = useMemo(
    () => leads.find((lead) => lead.id === selectedId) || null,
    [leads, selectedId],
  );

  useEffect(() => {
    if (selectedLead) {
      setDraftStatus(selectedLead.status);
      setDraftNotes(selectedLead.notes || "");
    }
  }, [selectedLead]);

  const mutation = useMutation({
    mutationFn: (payload: { id: string; status: LeadStatus; notes: string }) =>
      updateLead(payload.id, { status: payload.status, notes: payload.notes }),
    onSuccess: () => {
      toast.success("Zapisano zmiany");
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: () => {
      toast.error("Nie udało się zapisać zmian");
    },
  });

  const handleLogout = () => {
    clearAuthToken();
    navigate("/login");
  };

  useEffect(() => {
    if (error instanceof Error && /unauthorized/i.test(error.message)) {
      handleLogout();
    }
  }, [error]);

  const handleSave = () => {
    if (!selectedLead) {
      return;
    }
    mutation.mutate({ id: selectedLead.id, status: draftStatus, notes: draftNotes });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">CRM — Leady</h1>
            <p className="text-muted-foreground">
              Zarządzaj kontaktami pozyskanymi z formularza i widżetu.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start md:self-center px-4 py-2 rounded-md border border-border text-sm hover:bg-muted/40"
          >
            Wyloguj
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as LeadStatus | "all")}
              className="border border-border rounded-md bg-background px-3 py-2 text-sm"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Szukaj po nazwie, mailu lub telefonie"
              className="w-full border border-border rounded-md bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Wyników: {data?.total ?? 0}
          </div>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-12 gap-2 bg-muted/40 px-4 py-3 text-xs font-semibold text-muted-foreground">
            <div className="col-span-2">Data</div>
            <div className="col-span-2">Kontakt</div>
            <div className="col-span-2">Organizacja</div>
            <div className="col-span-2">Telefon</div>
            <div className="col-span-2">Źródło</div>
            <div className="col-span-2">Status</div>
          </div>

          {isLoading && (
            <div className="p-6 text-sm text-muted-foreground">Ładowanie danych...</div>
          )}

          {!isLoading && leads.length === 0 && (
            <div className="p-6 text-sm text-muted-foreground">Brak leadów.</div>
          )}

          {leads.map((lead) => (
            <button
              key={lead.id}
              onClick={() => setSelectedId(lead.id)}
              className={`grid grid-cols-12 gap-2 px-4 py-3 text-left text-sm border-t border-border hover:bg-muted/30 transition-colors ${
                selectedId === lead.id ? "bg-muted/40" : ""
              }`}
            >
              <div className="col-span-2">{formatDate(lead.createdAt)}</div>
              <div className="col-span-2">
                <div className="font-medium">{lead.name}</div>
                <div className="text-xs text-muted-foreground">{lead.email}</div>
              </div>
              <div className="col-span-2">{lead.organization || "-"}</div>
              <div className="col-span-2">{lead.phone || "-"}</div>
              <div className="col-span-2">{lead.source}</div>
              <div className="col-span-2 capitalize">{lead.status}</div>
            </button>
          ))}
        </div>

        {selectedLead && (
          <div className="rounded-2xl border border-border p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold">{selectedLead.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {selectedLead.organization || "Brak organizacji"} •{" "}
                  {selectedLead.email} • {selectedLead.phone || "brak telefonu"}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Ostatnia aktualizacja: {formatDate(selectedLead.updatedAt)}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Status</label>
                <select
                  value={draftStatus}
                  onChange={(event) => setDraftStatus(event.target.value as LeadStatus)}
                  className="w-full border border-border rounded-md bg-background px-3 py-2 text-sm"
                >
                  {statusOptions
                    .filter((option) => option.value !== "all")
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Źródło</label>
                <div className="border border-border rounded-md px-3 py-2 text-sm bg-muted/20">
                  {selectedLead.source}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Wiadomość</label>
              <div className="border border-border rounded-md px-3 py-2 text-sm bg-muted/10">
                {selectedLead.message || "Brak wiadomości"}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Notatki</label>
              <textarea
                value={draftNotes}
                onChange={(event) => setDraftNotes(event.target.value)}
                rows={4}
                className="w-full border border-border rounded-md bg-background px-3 py-2 text-sm"
                placeholder="Dodaj notatki z rozmowy..."
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={mutation.isPending}
                className="px-4 py-2 rounded-md bg-hero-gradient text-primary-foreground text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {mutation.isPending ? "Zapisywanie..." : "Zapisz zmiany"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
