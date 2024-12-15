import { CodeResponse } from "@react-oauth/google";

export type AuthResponse =
  | Omit<CodeResponse, "error" | "error_description" | "error_uri">
  | Pick<CodeResponse, "error" | "error_description" | "error_uri">
  | undefined;

export type Skill = {
  id: number;
  user_id: number;
  name: string;
};
