"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xl group-hover:bg-gray-800 transition-colors">
            G
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:inline-block">
            Giangpt Blog
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Actions (Optional - Search/Mobile Menu) */}
        <div className="flex items-center gap-4">
          <button className="h-9 px-4 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 transition-colors md:flex hidden">
            Tham gia
          </button>

          {/* Mobile toggle could go here */}
          <div className="md:hidden">
            {/* Simple Mobile Icon Placeholder */}
            <button className="p-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
