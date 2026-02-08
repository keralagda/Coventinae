export async function fetcher<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    const error = new Error(errorBody.message || "An error occurred while fetching the data.");
    // @ts-ignore
    error.info = errorBody;
    // @ts-ignore
    error.status = res.status;
    throw error;
  }

  return res.json();
}
