import Image from "next/image";
import React, { memo } from "react";
import ActiveUsers from "./users/ActiveUsers";
import { NavbarProps } from "@/types/type";

const Navbar = ({ activeElement }: NavbarProps) => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="logo" width={58} height={20} />
      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  // props 비교 후 변경시 렌더링
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
