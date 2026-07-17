import { signInAction } from "@/features/auth/actions/sign-in";
import { AuthFormShell } from "@/features/auth/components/auth-form-shell";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <AuthFormShell
      title="Connexion"
      description="Connecte-toi pour retrouver tes taches, ton planning et tes sessions focus."
      alternateHref="/register"
      alternateLabel="Creer un compte"
      alternateText="Pas encore de compte ?"
      error={params.error}
      message={params.message}
    >
      <form action={signInAction} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Se connecter
        </button>
      </form>
    </AuthFormShell>
  );
}
