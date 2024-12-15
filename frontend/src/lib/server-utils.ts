"use server";

import { cookies } from "next/headers";
import { AuthResponse } from "./types";
import { redirect } from "next/navigation";
import axios from "axios";

export async function getToken() {
  const cookieStore = await cookies();
  const jwtToken = cookieStore.get("jwt-token");

  return jwtToken?.value;
}

export async function googleResponse(authResult: AuthResponse) {
  let isLogin;
  try {
    if (authResult && "code" in authResult) {
      const res = await axios.get(
        `http://localhost:3001/auth/google?code=${authResult.code}`
      );
      const token = res.data.token;
      const cookieStore = await cookies();
      cookieStore.set("jwt-token", token);
      isLogin = res.data.isLogin;
    }
  } catch (error) {
    console.log("Error while requesting google code", error);
    // TODO: toast notification that something went wrong during login
    redirect("/");
  }
  if (isLogin) {
    redirect("/user-discovery");
  } else {
    redirect("/profile");
  }
}
