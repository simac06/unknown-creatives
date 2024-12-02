import { FaPersonWalking, FaArrowRightToBracket } from "react-icons/fa6";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavHeader() {
  return (
    <Navbar
      maxWidth="2xl"
      className="bg-transparent absolute top-0"
      isBlurred="false"
    >
      <NavbarBrand>
        <p className="font-bold text-xl text-inherit">acme</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link
            className="text-white flex justify-center items-center gap-1 text-tiny font-sans font-[600] tracking-wider"
            href="#"
          >
            <span className="">SIGN IN</span>
            <FaPersonWalking className=" " />
            <FaArrowRightToBracket className=" " />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
