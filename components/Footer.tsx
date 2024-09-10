// Footer.tsx

import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white p-4 w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center">
          <span className="font-bold text-lg tracking-wider text-purple-500">
            Jaydatt Karan
          </span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="ml-2 md:ml-4" /> &nbsp;
          <a href="mailto:karanjaydatt03@gmail.com">
            <span className="inline-block tracking-wider">
              {" "}
              karanjaydatt03@gmail.com
            </span>
          </a>
        </div>
        <div className="flex space-x-8">
          <Link href="https://github.com/jaydattkaran" target="_blank" passHref>
            <p rel="noopener noreferrer">
              <FaGithub />
            </p>
          </Link>
          <Link
            href="https://twitter.com/jaydattkaran"
            target="_blank"
            passHref
          >
            <p rel="noopener noreferrer">
              <BsTwitterX />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jaydattkaran/"
            target="_blank"
            passHref
          >
            <p rel="noopener noreferrer">
              <FaLinkedinIn />
            </p>
          </Link>
        </div>

		<a href="mailto:karanjaydatt03@gmail.com">
		<Link
            href="https://bento.me/jaydatt"
            target="_blank"
            passHref
          >
            <p rel="noopener noreferrer" className="flex gap-1 items-center">
			Socials<FaLink/> 
            </p>
          </Link>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
