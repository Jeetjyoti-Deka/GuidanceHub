import GoogleAuth from "@/components/GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const LoginPage = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
        <GoogleAuth />
      </GoogleOAuthProvider>
    </div>
  );
};
export default LoginPage;
