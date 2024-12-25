import Container from "@/components/Container";
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
      <Container>
        <UserDiscoverySection />
      </Container>
    </div>
  );
};
export default UserDiscoveryPage;
