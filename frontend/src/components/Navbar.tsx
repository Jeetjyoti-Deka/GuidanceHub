import ComponentMarginWrapper from "./ComponentMarginWrapper";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <ComponentMarginWrapper>
      <nav className="flex items-center justify-between">
        <div>GuidanceHub</div>
        <div className="flex items-center gap-x-10">
          <NavLinks />
        </div>
        <div>
          <Button variant={"primary"} size={"primary"}>
            Sign Up
          </Button>
        </div>
      </nav>
    </ComponentMarginWrapper>
  );
};
export default Navbar;
