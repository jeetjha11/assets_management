import { environment } from "./enviroment";


export const API_ENDPOINTS = {
  login: `${environment.env_url}${environment.service_url}/login`,
  register: `${environment.env_url}${environment.service_url}/register`,
  get_tranding_assets: `${environment.env_url}${environment.asset_service_url}/tranding_assets`,



};
