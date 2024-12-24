import Container from "./Container";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between">
        <div>GuidanceHub</div>
        <div className="sm:flex hidden items-center gap-x-5 md:gap-x-10">
          <NavLinks />
        </div>
        <div>
          <Button variant={"primary"} size={"primary"}>
            Sign Up
          </Button>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar;
