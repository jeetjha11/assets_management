import { environment } from "./enviroment";


export const API_ENDPOINTS = {
  login: `${environment.env_url}${environment.service_url}/login`,
  register: `${environment.env_url}${environment.service_url}/register`



};
