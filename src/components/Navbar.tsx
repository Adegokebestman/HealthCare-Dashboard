// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-white rounded-full px-6 py-2'>
      <div className='flex justify-between items-center'>
        <div>
          {/* Logo */}
          <Image src='/TestLogo.svg' width={210} height={48} alt='Tech Care Logo' />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <Image src='/menu.svg' width={24} height={24} alt='Menu' />
          </button>
        </div>

        {/* Main Menu */}
        <div className={`md:flex justify-between gap-10 text-sm font-bold text-deepdark ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link href=''>
            <div className='flex justify-center gap-2'>
              <Image src='/home_icon.svg' width={15.51} height={17} alt='home icon' />
              <p>Overview</p>
            </div>
          </Link>

          <Link href=''>
            <div className='flex justify-center gap-2'>
              <Image src='/group.svg' width={23.73} height={17} alt='patients icon' />
              <p>Patients</p>
            </div>
          </Link>

          <Link href=''>
            <div className='flex justify-center gap-2'>
              <Image src='/calender.svg' width={15.12} height={17} alt='schedule icon' />
              <p>Schedule</p>
            </div>
          </Link>

          <Link href=''>
            <div className='flex justify-center gap-2'>
              <Image src='/chat.svg' width={18.69} height={17} alt='message icon' />
              <p>Message</p>
            </div>
          </Link>

          <Link href=''>
            <div className='flex justify-center gap-2'>
              <Image src='/credit_card.svg' width={21.53} height={17} alt='transactions icon' />
              <p>Transactions</p>
            </div>
          </Link>
        </div>

        <div className='flex justify-between items-center gap-4'>
          {/* Profile */}
          <div className='flex gap-2 text-sm text-deepdark'>
            <Image src='/seniorWoman.png' height={44} width={44} alt='Profile picture' className='rounded-full' />
            <div>
              <p className='font-bold'>Dr. Jose Simmons</p>
              <p>General Practitioner</p>
            </div>
          </div>
          <Image src='/settings.svg' width={19} height={20} alt='settings icon' />
          <Image src='/more_vert.svg' width={3} height={18} alt='more icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
