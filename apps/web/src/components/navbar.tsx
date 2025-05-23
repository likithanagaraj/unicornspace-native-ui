"use client";

import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar1 = () => {
  // const { theme } = useTheme();

  // const logoSrc =
  //   theme === "dark"
  //     ? "/logos/logo-white-256x256.png"
  //     : "/logos/logo-black-256x256.png";

  return (
    <header className="py-4 flex justify-between px-5 md:px-16 items-center z-10 bg-background">
      <div>
        <Link
          href={"/"}
          className="text-xl md:text-xl font-semibold flex items-center text-foreground"
        >
          {/* <Image
            src={logoSrc}
            height={46}
            width={46}
            alt="UnicornSpace logo"
            className="hidden md:block"
          />{" "} */}
          <span className="bg-primary text-foreground"></span>
          <span className="bg-primary text-white rounded-sm">
            A
          </span>
          ppykit Native UI
        </Link>
      </div>
      <nav className="text-foreground/70 text-sm xl:flex gap-4 hidden">
        <Link
          href={"/components"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Components
        </Link>
        <Link
          href="/resources"
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Resource
        </Link>
        <Link
          href={"/blog"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Blog
        </Link>
        {/* <Link
          href={"/course"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Course
        </Link> */}
      </nav>
      <div className="lg:flex hidden gap-4">
        <Link href={"#"}>
          <Button variant={"default"}>Get started now</Button>
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet key={"left"}>
          <SheetTrigger>
            {/* <GiHamburgerMenu size={32} className="text-foreground" /> */} menu
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-foreground">UnicornSpace</SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[85vh]">
                <nav className="text-foreground/70 flex flex-col space-y-4 mt-10">
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Features
                  </Link>
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Pricing
                  </Link>
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Roadmap
                  </Link>
                </nav>
                <div className="flex gap-4 justify-center">
                  <Button variant={"outline"}>Login</Button>
                  <Button>Get started</Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar1;
