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
    name: "HOME",
    href: "/",
    icon: null,
    dropdownItems: null,
  }
]

export default navigation;