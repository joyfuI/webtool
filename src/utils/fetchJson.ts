const fetchJson = async <T>(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<T> => {
  const res = await fetch(input, init);
  if (!res.ok) {
    throw new Error(res.statusText, { cause: res });
  }

  const json = await res.json();

  return json as T;
};

export default fetchJson;
