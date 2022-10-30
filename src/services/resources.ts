export interface IService {
  id: number;
  description: string;
}

export const getServices = (): Promise<IService[]> =>
  fetch("/api/services.json")
    .then((response) => response.json())
    .catch(() => []);
