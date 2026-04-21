import { useAuthStore } from "../store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function fetchWrapper<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const { accessToken, logout } = useAuthStore.getState();

  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    logout();
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "API Error" }));
    throw new Error(error.message || "Something went wrong");
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: "GET" }),
  post: <T>(endpoint: string, data: unknown, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: "POST", body: JSON.stringify(data) }),
  put: <T>(endpoint: string, data: unknown, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: "PUT", body: JSON.stringify(data) }),
  patch: <T>(endpoint: string, data: unknown, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: "PATCH", body: JSON.stringify(data) }),
  delete: <T>(endpoint: string, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: "DELETE" }),
};
