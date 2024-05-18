import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 top-0 left-0 w-full border-b">
      <MaxWidthWrapper>
        <div className="flex h-14 justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Movie Quest
          </Link>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
