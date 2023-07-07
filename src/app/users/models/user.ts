export interface User {
  username: string;
  email?: string;
  password: string;
}

export interface Token {
  refresh: string;
  access: string;
}
