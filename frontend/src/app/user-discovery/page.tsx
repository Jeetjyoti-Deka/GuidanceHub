import { hasToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const UserDiscoveryPage = async () => {
  if (!(await hasToken())) {
    redirect("/login");
  }

  return <div>UserDiscoveryPage</div>;
};
export default UserDiscoveryPage;
