"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "./ui/button";
import { googleResponse } from "@/lib/server-utils";

const GoogleAuth = () => {
  const googleLogin = useGoogleLogin({
    onError: googleResponse,
    onSuccess: googleResponse,
    flow: "auth-code",
  });
  return (
    <div>
      <Button onClick={googleLogin}>Login with Google</Button>
    </div>
  );
};
export default GoogleAuth;
