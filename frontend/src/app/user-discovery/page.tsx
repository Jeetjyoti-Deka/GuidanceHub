import UserDiscoverySection from "@/components/UserDiscoverySection";
import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const UserDiscoveryPage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }

  return (
    <div>
      <UserDiscoverySection />
    </div>
  );
};
export default UserDiscoveryPage;
