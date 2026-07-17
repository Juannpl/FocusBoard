export function getSupabaseEnv() {
  const url = normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    return null;
  }

  return {
    url,
    publishableKey,
  };
}

export function isSupabaseConfigured() {
  return getSupabaseEnv() !== null;
}

function normalizeSupabaseUrl(url: string | undefined) {
  if (!url) {
    return null;
  }

  return url
    .replace(/\/rest\/v1\/?$/, "")
    .replace(/\/+$/, "");
}
