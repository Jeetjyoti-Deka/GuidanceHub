import { hasToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  if (!(await hasToken())) {
    redirect("/login");
  }
  return <div>ProfilePage</div>;
};
export default ProfilePage;
