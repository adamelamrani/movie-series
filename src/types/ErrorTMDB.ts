export interface ErrorTMDB {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface FetchErrorTMDB {
  status: number;
  data: ErrorTMDB;
}
