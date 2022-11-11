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

export interface IIdentity {
  id: number;
  text: string;
}

export interface IPhotoGallery {
  id: string;
  src: string;
  thumbnail: string;
  w: number;
  h: number;
}

const getFullUrl = (uri: string): string =>
  `${import.meta.env.VITE_API_HOST}${uri}`;

const json = (response: Response) => response.json();
const defaultList = () => [];

export const getServices = (): Promise<IService[]> =>
  fetch(getFullUrl("/services.json")).then(json).catch(defaultList);

export const getEvents = (): Promise<IEvent[]> =>
  fetch(getFullUrl("/events.json")).then(json).catch(defaultList);

export const getIdentity = (): Promise<IIdentity[]> =>
  fetch(getFullUrl("/identity.json")).then(json).catch(defaultList);

export const getGallery = (): Promise<IPhotoGallery[]> =>
  fetch(getFullUrl("/gallery.json")).then(json).catch(defaultList);
