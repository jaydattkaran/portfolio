"use client";
import React from "react";

const POW = () => {
	return (
		<section className='py-10 w-full h-[92vh] bg-cover sm:py-16 lg:py-16 lg:px-8 z-40 relative mx-8 lg:mx-0'
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,10, 10, 1), rgba(0,0,0, 0.175) 85%), url('/images/about-img.jpg')`,
          }}
		>
			<div className='container mx-auto'>
				<h2 className='mb-6 font-bold text-white text-8xl'>
					ABOUT ME
				</h2>
				<div>
                    <p className="text-white mt-2 font-bold text-3xl opacity-70">A brief intro, who am i?</p>
                    <p className="mt-6 w-[60%] text-white text-2xl font-semibold leading-9 
                     tracking-wide">I am an independent Web developer and UI/UX designer based in india.
                        <br />
                        I specialize in crafting elevated, intuitive, and minimalistic designs
                        small businesses to help them stand out in the digital landscape with a powerfull
                        impact.😎
                        <br />
                        I bring a comprehensive approach to development, focused on advancing
                        my skills in Web Development and Web3 technologies.
                        <br /> <br />
                        When I am not developing or designing, I enjoy going to Gym to focus on
                        fitness while keeping up with the latest technologies. <a href="#">Instagram 📸</a>
                    </p>
                </div>
			</div>
		</section>
	);
};

export default POW;
