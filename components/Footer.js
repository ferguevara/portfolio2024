"use client";

import Link from 'next/link';
import { Calendar, MessageCircle } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-20 text-white rounded-[60px_60px_0px_0px]">
      <div className="container mx-auto text-center">
        <h2 className="font-bold mb-6 text-6xl">Let&apos;s Connect</h2>
        <p className="mb-10 px-4 text-center mx-auto max-w-xl text-2xl font-light">Want to create something extraordinary together or simply say hello? I'd love to connect with you!</p>
        <div className="flex flex-col md:flex-row justify-center gap-2 mb-14">
          <Link href="https://calendly.com/ferguevara/letsmeet?month=2024-03" target="_blank" rel="noopener noreferrer" passHref>
            <div className="bg-[#18181B] min-w-72 border border-[rgba(255,255,255,0.12)] text-center p-6 m-3 rounded-lg cursor-pointer hover:bg-gradient-to-t from-slate-900 to-slate-700 transition flex flex-col items-center">
              <Image src="/images/Schedule.png" alt="schedule a meeting" width={85} height={85} className="mb-4" />
              <p className="text-lg font-medium">Schedule a Meeting</p>
            </div>
          </Link>
          <Link href="https://tally.so/r/w2NjPg" target="_blank" rel="noopener noreferrer" passHref>     
              <div className="bg-[#18181B] min-w-72 border border-[rgba(255,255,255,0.12)] text-center p-6 m-3 rounded-lg cursor-pointer hover:bg-gradient-to-t from-slate-900 to-slate-700 transition flex flex-col items-center">
                <Image src="/images/Message.png" alt="send a message" width={85} height={85} className="mb-4" />
              <p className="text-lg font-medium">Send an Message</p>
            </div>        
          </Link>
        </div>
        <div className="mb-10">
          <p className="text-lg tracking-wider text-gray-400 mb-4">Social</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://dribbble.com/ferguevara" className="hover:text-blue-500">Dribbble</Link>
            <Link href="https://www.behance.net/fernandoguevara" className="hover:text-blue-500">Behance</Link>
            <Link href="https://www.instagram.com/fernandoguevar4/" className="hover:text-blue-500">Instagram</Link>
            <Link href="https://www.linkedin.com/in/fer-guevara/" className="hover:text-blue-500">LinkedIn</Link>
            <Link href="https://x.com/ferguevarai" className="hover:text-blue-500">TwitterX</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="mt-6 text-sm border border-white px-4 py-2 rounded-full hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
