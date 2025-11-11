"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import resources from "@/resources";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-2 z-50 flex items-center justify-between p-2 m-2 border-1 border-gray-600 backdrop-blur-2xl text-white shadow-2xl bg-[rgba(0,0,0,0.5)]">
      {/* Logo */}
      <Link href="/" className="text-xl font-light">
        <Image
          className="inline-block"
          src={resources.bettingMan.src}
          alt={resources.bettingMan.alt}
          width={50}
          height={50}
        />
        <span className="px-2">Ajab Betting</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 justify-center items-center">
        <Link
          href="https://github.com/Ajab-Betting"
          className="hover:text-blue-300"
        >
          Github
        </Link>
        <Button className="bg-secondary text-primary hover:bg-blue-300">
          Sign In
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription className="flex flex-col">
                <Link
                  href="https://github.com/Ajab-Betting"
                  className="hover:text-blue-300 p-4"
                >
                  Github
                </Link>
                <Button className="bg-secondary text-primary hover:bg-blue-300">
                  Sign In
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
