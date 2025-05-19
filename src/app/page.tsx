"use client";

import Image from "next/image";
import Link from "next/link";
import PersonalInfoSidebar from "./(home)/PersonalInfoSidebar";
import BlogPost from "./(home)/BlogPosts";
import { Technologies } from "./(home)/Technologies";
import Experience from "./(home)/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <div className="flex flex-col w-full min-h-screen max-w-[80em] py-10">
        <div className="w-full flex gap-[5em]">
          <PersonalInfoSidebar />
          <div className="w-full h-[10em]">
            <BlogPost />
            <Technologies />
            <Experience />
          </div>
        </div>

      </div>
    </div>
  );
}
