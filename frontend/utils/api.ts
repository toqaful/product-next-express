const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL; // 'http://localhost:4000'

async function request(url: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  const json = await res.json();

  if (json.status === 'error') {
    throw new Error(json.message);
  }

  return json.data;
}

export const api = {
  get: (url: string) => request(url),
  post: (url: string, body: any) =>
    request(url, { method: 'POST', body: JSON.stringify(body) }),
  put: (url: string, body: any) =>
    request(url, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (url: string) =>
    request(url, { method: 'DELETE' })
};
