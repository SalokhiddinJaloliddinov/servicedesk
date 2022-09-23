export type LoginDto = {
  login: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  contactid: number;
  id: number;
  login: string;
  status: string;
};

export type CreateTicketDto = {
  title: string;
  description: string;
  caller_id: number;
};
