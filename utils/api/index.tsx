import axios from "axios";
import { LoginDto, ResponseLogin } from "./types";

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
};
