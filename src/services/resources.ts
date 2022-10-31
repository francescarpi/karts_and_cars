export interface IService {
  id: number;
  description: string;
}

const getFullUrl = (uri: string): string =>
  `${import.meta.env.VITE_API_HOST}${uri}`;

export const getServices = (): Promise<IService[]> =>
  fetch(getFullUrl("/services.json"))
    .then((response) => response.json())
    .catch(() => []);
