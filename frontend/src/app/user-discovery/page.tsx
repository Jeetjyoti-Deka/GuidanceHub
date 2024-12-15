import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const UserDiscoveryPage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }

  return <div>UserDiscoveryPage</div>;
};
export default UserDiscoveryPage;
