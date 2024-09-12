"use client";
import React from "react";

const POW = () => {
	return (
		<section className='py-10 w-full lg:h-[92vh] lg:bg-cover sm:bg-right sm:py-16 lg:py-16 lg:px-10 z-40 relative mx- lg:mx-0'
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,10, 10, 1), rgba(0,0,0, 0.175) 85%), url('/images/about-img.jpg')`,
          }}
		>
			<div className='container mx-auto'>
				<h2 className='mb-6 font-bold text-white lg:text-8xl text-5xl'>
					ABOUT ME
				</h2>
				<div>
                    <p className="text-white mt-2 font-bold lg:text-3xl text-xl opacity-70">A brief intro, who am i?</p>
                    <p className="mt-6 lg:w-[60%] w-[100%]  text-white lg:text-2xl text-normal font-semibold lg:leading-9 lg:tracking-wide">I specialize in creating refined, intuitive, and minimalist designs tailored to empower small businesses in the digital space, driving impactful and lasting impressions. My approach to development is holistic, consistently honing my expertise in Web Development and Web3 technologies to deliver innovative, future-focused solutions.
                        I bring a comprehensive approach to development, focused on advancing
                        my skills in Web Development and Web3 technologies.😎
                        <br /> <br />
                        Outside of development and design, I maintain a strong focus on fitness and well-being through regular gym sessions, balancing personal health with my passion for staying engaged with the latest technological trends and industry innovations. <a href="#">Instagram 📸</a>
                    </p>
                </div>
			</div>
		</section>
	);
};

export default POW;
