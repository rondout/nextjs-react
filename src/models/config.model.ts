export const NO_BASE_LAYOUT_PATHS = ["/users", "/login"];

export const STORAGE_THEME_COLOR_KEY = "themeColor";

export const STORAGE_TOKEN_KEY = "token";

export enum RespCode {
  SUCCESS = 200,
  FAILED = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  NO_ACCESS = 403,
  SYSTEM_ERROR = 500,
}

export interface BaseResponse<T = any> {
  data: T;
  success: boolean;
  code: RespCode;
}

export const THEME_COLORS = [
  "#3F51B5",
  "#0082c3",
  "#3eaf7c",
  "#1869ff",
  "#eb2f96",
  "#000000",
];
