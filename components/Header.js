import Link from 'next/link';
import Image from 'next/image';
import profilePic from '/public/profile-pic.png';
import { useRouter } from 'next/router';

export default function Header({ scrollToFooter }) {
  const router = useRouter();
  
  const isActive = (path) => router.pathname === path ? 'text-black' : 'text-slate-500';

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-11">
      <Link href="/" className="flex items-center font-bold text-2xl md:text-3xl tracking-tight mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
        <Image 
          src={profilePic} 
          alt="Profile Picture" 
          width={45} 
          height={45} 
          className="rounded-full transform transition-transform duration-500 hover:scale-110 hover:rotate-360" 
        />
        &nbsp; ferguevara.com
      </Link>
      <nav className="flex flex-col md:flex-row items-center">
        <ul className="list-none flex flex-row md:flex-row gap-4 md:gap-6 items-center text-lg md:text-xl">
          <li>
            <Link href="/" className={`${isActive('/')} font-medium hover:text-blue-500 transition-colors px-3 md:px-5`}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${isActive('/about')} font-medium hover:text-blue-500 transition-colors px-3 md:px-5`}>
              About
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1nK0_p5DynozsbV30CLHsgCYASQLnDJcf0ATi-zH4q6g/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-medium hover:text-blue-500 transition-colors px-3 md:px-5">
              Resume
            </Link>
          </li>
        </ul>
        <button
          onClick={scrollToFooter}
          className="mt-4 md:mt-0 ml-0 md:ml-5 px-6 py-2 bg-black text-white rounded-full font-normal hover:bg-blue-500 transition-colors text-lg md:text-xl"
        >
          Let&apos;s Connect
        </button>
      </nav>
    </header>
  );
}

