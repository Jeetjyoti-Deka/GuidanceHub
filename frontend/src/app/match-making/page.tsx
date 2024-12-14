import { hasToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const MatchMakingPage = async () => {
  if (!(await hasToken())) {
    redirect("/login");
  }
  return <div>MatchMakingPage</div>;
};
export default MatchMakingPage;
