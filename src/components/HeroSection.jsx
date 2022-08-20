import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-36">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Shivakumar D
				</h1>
				<p className="text-md md:text-xl max-w-md mb-4 text-gray-600 pt-3 dark:text-gray-300">
					Designer, Frontend Developer & Mechanical Engineer. I design and code
					beautifully simple things, and I love what I do.{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border mt-5 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a>
				<a
					href="src/data/ShivakumarD.pdf"
					className="inline-block  hover:text-white px-8 py-3 border ml-2 mt-5 text-indigo-500  dark:text-gray-300  border-indigo-600 text-base font-medium rounded-md  bg-{#33333303} hover:bg-indigo-700 text-white md:text-md "
				>
					Resume ↓
				</a>
				<ul className="text-indigo-500 flex justify-center gap-4 mt-6 text-2xl ">
					<li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 hover:text-white   ">
						<a
							href="https://github.com/shivakumard17"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub />
						</a>
					</li>
					<li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 hover:text-white  ">
						<a
							href="https://www.linkedin.com/in/shivakumard17/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin />
						</a>
					</li>
					<li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 hover:text-white  ">
						<a
							href="https://www.instagram.com/draco_code/"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HeroSection;
