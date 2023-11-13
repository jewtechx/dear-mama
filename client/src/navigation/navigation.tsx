import { ArrowDown3, Location } from "iconsax-react";
import { ReactNode } from "react";
import { BiLogoLinkedin, BiPhoneCall, BiSolidDownArrow } from "react-icons/bi";

interface items {
  name: string;
  href: string;
  icon: ReactNode | JSX.Element;
  dropdownItems: any;
}

const navigation: items[] = [
  {
    name: "Home",
    href: "/",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "Drugs",
    href: "/drugs",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "Enhancements",
    href: "/enhancements",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "Tips",
    href: "/tips",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "About",
    href: "/about",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: null,
    dropdownItems: null,
  },
]

export default navigation;