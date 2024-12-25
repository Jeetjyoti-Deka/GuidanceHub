import MatchedMentorsSection from "@/components/MatchedMentorsSection";
import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const MatchMakingPage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }
  return (
    <div>
      <MatchedMentorsSection />
    </div>
  );
};
export default MatchMakingPage;
