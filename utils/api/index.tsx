import axios from "axios";
import { CreateTicketDto, LoginDto, ResponseLogin } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:7777",
});

export const UserApi = {
  async login(dto: LoginDto): Promise<ResponseLogin> {
    const { data } = await instance.post<LoginDto, { data: ResponseLogin }>(
      "/auth",
      dto
    );
    return data;
  },
  async getProfile(token: string): Promise<ResponseLogin> {
    const { data } = await instance.get<ResponseLogin>("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async createTicket(dto: CreateTicketDto) {
    const { data } = await instance.post("/user-request", dto, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImxvZ2luIjoiYWRtaW4iLCJmcmllbmRseW5hbWUiOiJhZG1pbiBhZG1pbmlzdHJhdG9yIiwicGVyc29uX2lkIjoxLCJpYXQiOjE2NjM5MzY5MzMsImV4cCI6MTY2NDgwMDkzM30.THv9yWlShCEIl2risC5loKDPrDS96NEaXqDEqiIU1uw",
      },
    });
    return data;
  },
};
