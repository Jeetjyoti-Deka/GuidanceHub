"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "./ui/button";
import { googleResponse } from "@/lib/server-utils";
import Image from "next/image";

const GoogleAuth = () => {
  const googleLogin = useGoogleLogin({
    onError: googleResponse,
    onSuccess: googleResponse,
    flow: "auth-code",
  });
  return (
    <div>
      <Button
        onClick={googleLogin}
        className="w-[300px] py-6 border-primary border-[1px] bg-white hover:text-white rounded-lg text-[17px]"
      >
        <Image src={"/google.svg"} alt="google" width={30} height={30} />
        Login with Google
      </Button>
    </div>
  );
};
export default GoogleAuth;
