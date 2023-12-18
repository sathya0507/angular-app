// api.model.ts
export interface ApiResponse {
    countries: Country[];
    states: State[];
    cities: City[];
  }
  
  export interface Country {
    id: number;
    name: string;
  }
  
  export interface State {
    id: number;
    country_id: number;
    name: string;
  }
  
  export interface City {
    id: number;
    state_id: number;
    name: string;
  }
  