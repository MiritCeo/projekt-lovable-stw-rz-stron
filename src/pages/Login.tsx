import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "@/lib/leads";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await loginAdmin(password);
      toast.success("Zalogowano");
      navigate("/admin");
    } catch (error) {
      toast.error("Nieprawidłowe hasło");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">CRM — Logowanie</h1>
          <p className="text-sm text-muted-foreground">
            Wprowadź hasło dostępu do panelu leadów.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-muted-foreground">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-border rounded-md bg-background px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-hero-gradient text-primary-foreground py-2 text-sm font-medium hover:opacity-90 disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
      </div>
    </div>
  );
}
