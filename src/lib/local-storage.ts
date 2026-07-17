export function readLocalStorage<T>(
  key: string,
  fallback: T,
  parse: (value: unknown) => T | null
) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    return parse(parsedValue) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeLocalStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}
