export interface IService {
  id: number;
  description: string;
}

export interface IEvent {
  id: number;
  title: string;
  start_date: string;
  due_date: string;
  description: string;
}

const getFullUrl = (uri: string): string =>
  `${import.meta.env.VITE_API_HOST}${uri}`;

export const getServices = (): Promise<IService[]> =>
  fetch(getFullUrl("/services.json"))
    .then((response) => response.json())
    .catch(() => []);

export const getEvents = (): Promise<IEvent[]> =>
  fetch(getFullUrl("/events.json"))
    .then((response) => response.json())
    .catch(() => []);
