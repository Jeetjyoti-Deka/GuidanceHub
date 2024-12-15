import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const MatchMakingPage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }
  return <div>MatchMakingPage</div>;
};
export default MatchMakingPage;
