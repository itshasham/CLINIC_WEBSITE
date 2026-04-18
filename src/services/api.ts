export async function apiRequest<T>(data: T): Promise<T> {
  return Promise.resolve(data);
}
