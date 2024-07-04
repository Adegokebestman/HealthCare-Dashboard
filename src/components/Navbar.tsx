"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-white rounded-full px-6 md:py-2">
      <div className="flex justify-between items-center">
        <div>
          {/* logo */}
          <Image className="md:w-[210px] w-40 h-10 md:h-[48px]" src="/TestLogo.svg" width={210} height={48} alt="Tech Care Logo" />
        </div>

        <div className="hidden lg:flex justify-between items-center gap-10 text-sm font-bold text-deepdark">
          {/* middle menu */}
          <Link href="/" className={isActive("/dashboard") ? "bg-green  text-deepdark rounded-full px-4 py-2 flex justify-center items-center gap-2" : "flex justify-center items-center gap-2"}>
            <Image src="/home_icon.svg" width={15.51} height={17} alt="home icon" />
            <p>Overview</p>
          </Link>

          <Link href="/patients" className={isActive("/") ? "bg-green  text-deepdark rounded-full px-4 py-2 flex justify-center items-center gap-2" : "flex justify-center gap-2"}>
            <Image src="/group.svg" width={23.73} height={17} alt="group icon" />
            <p>Patients</p>
          </Link>

          <Link href="/schedule" className={isActive("/schedule") ? "bg-green  text-deepdark rounded-full px-4 py-2 flex justify-center items-center gap-2" : "flex justify-center gap-2"}>
            <Image src="/calender.svg" width={15.12} height={17} alt="calender icon" />
            <p>Schedule</p>
          </Link>

          <Link href="/messages" className={isActive("/messages") ? "bg-green  text-deepdark rounded-full px-4 py-2 flex justify-center items-center gap-2" : "flex justify-center gap-2"}>
            <Image src="/chat.svg" width={18.69} height={17} alt="chat icon" />
            <p>Message</p>
          </Link>

          <Link href="/transactions" className={isActive("/transactions") ? "bg-green  text-deepdark rounded-full px-4 py-2 flex justify-center items-center gap-2" : "flex justify-center gap-2"}>
            <Image src="/credit_card.svg" width={21.53} height={17} alt="credit card icon" />
            <p>Transactions</p>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-4">
          {/* profile */}
          <div className="hidden md:flex gap-2 text-sm text-deepdark">
            <Image src="/seniorWoman.png" height={44} width={44} alt="Profile picture" />
            <span className="block">
              <p className="font-bold">Dr.Jose Simmons</p>
              <p>General Practitioner</p>
            </span>
          </div>
          <Image src="/settings.svg" width={19} height={20} alt="settings icon" className="hidden lg:block" />
          <Image src="/more_vert.svg" width={3} height={18} alt="more icon" className="hidden lg:block" />

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image src="/icons8-menu.svg" width={24} height={24} alt="menu icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute right-6 z-20 mt-4 bg-white rounded-lg shadow-lg">
          <Link href="/" onClick={toggleMenu} className={isActive("/home") ? "block px-4 py-2 bg-green text-deepdark rounded-full" : "block px-4 py-2"}>
            Overview
          </Link>
          <Link href="/patients" onClick={toggleMenu} className={isActive("/") ? "block px-4 py-2 bg-green text-deepdark rounded-full" : "block px-4 py-2"}>
            Patients
          </Link>
          <Link href="/schedule" onClick={toggleMenu} className={isActive("/schedule") ? "block px-4 py-2 bg-green text-deepdark rounded-full" : "block px-4 py-2"}>
            Schedule
          </Link>
          <Link href="/messages" onClick={toggleMenu} className={isActive("/messages") ? "block px-4 py-2 bg-green text-deepdark rounded-full" : "block px-4 py-2"}>
            Message
          </Link>
          <Link href="/transactions" onClick={toggleMenu} className={isActive("/transactions") ? "block px-4 py-2 bg-green text-deepdark rounded-full" : "block px-4 py-2"}>
            Transactions
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
