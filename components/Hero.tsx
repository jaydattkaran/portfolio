"use client";

import GLOBE from "vanta/src/vanta.globe";
import Link from "next/link";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Hero() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x6b21a8,
					backgroundColor: 0x020617,
				})
			);
		}
	}, [vantaEffect]);
	return (
		<div
			className='bg-slate-950 main min-h-screen w-full flex flex-col justify-center items-start text-gray-200'
			ref={vantaRef}>
			<div className=' mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32'>
				<h1 className='tracking-wider font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
					Jaydatt Karan
				</h1>
				<h2 className='tracking-wider text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 font-semilight'>
					Developer | Web3
				</h2>
				<div className='flex space-x-6 my-4'>
					<Link
						href='https://github.com/jaydattkaran'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaGithub />
						</p>
					</Link>
					<Link
						href='https://twitter.com/jaydattkaran'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<BsTwitterX />
						</p>
					</Link>
					<Link
						href='https://www.linkedin.com/in/jaydattkaran/'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaLinkedinIn />
						</p>
					</Link>
				</div>
				{/* <a
					href='https://docs.google.com/document/d/1kN-1wNq0qTJXNOi0086lPSJnhOho4Zw1r8WB-mGpIo4/edit?usp=sharing'
					target='_blank' //
					download='Vanshika_Rana_Resume.pdf'>
					<button className='tracking-wider border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900'>
						Download Resume
					</button>
				</a> */}
			</div>
		</div>
	);
}
