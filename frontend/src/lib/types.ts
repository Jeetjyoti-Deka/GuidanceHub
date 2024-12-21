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

export type MatchedMentor = User & {
  overlap_count: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  image: string | null;
  role: string | null;
};

export type ConnectionRequest = {
  id: number;
  receiver_id: number;
  sender_id: number;
  status: string;
  created_at: string;
};

export type ConnectionUser = User & {
  request_status: string;
  request_id: number;
};
