"use client"
import BottomNavBar from "@/components/BottomNavBar";
import Footer from "@/components/Footer";
import { ClerkLoaded, ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/spinner";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName= usePathname()
  return (
    <div className="h-screen overflow-hidden">
      <nav className="shadow-2xl h-[7.5%] flex justify-between">
        <div key="logo" className="flex items-center ml-2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Pixie Logo" width={50} height={50} />
            <h1 className="text-2xl font-semibold text-secondaryColor">Pixie</h1>
          </Link>
        </div>
        <div key="DropDownMobile" className="items-center mr-4 flex scale-125">
          <ClerkLoading>
            <Spinner size="sm" color="secondary"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
                <UserButton/>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </nav>
      <div className="h-[85%]">{children}</div>
      <div className="shadow-2xl h-[7.5%] flex items-center justify-center">
        {pathName==="/pixie"?(
          <Footer/>
        ):(
          <BottomNavBar />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
