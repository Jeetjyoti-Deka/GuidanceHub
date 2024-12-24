import GoogleAuth from "@/components/GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 w-[800px] h-[500px] rounded-lg shadow-2xl">
        <div className="bg-gradient-to-b from-primary/40 to-white rounded-l-lg flex flex-col items-center justify-center gap-y-3">
          <Image
            src={"/login.svg"}
            alt="login"
            width={100}
            height={100}
            className="w-[300px] object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-y-2 text-black/75">
            <h1 className="font-semibold text-center">
              Unlock your journey with personalized guidance
            </h1>
            <p className="text-center">Sign up to connect, learn, and grow!</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3 relative">
          <div>GuidanceHub</div>
          <h3 className="text-2xl font-semibold">Welcome!</h3>
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
            <GoogleAuth />
          </GoogleOAuthProvider>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <p className="text-sm">
              Already a user ?{" "}
              <Link
                className="text-blue-500 underline underline-offset-2"
                href={"/login"}
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
