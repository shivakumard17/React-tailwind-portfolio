import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Shivakumar D
			</a>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				Shivakumar.d17@outlook.com
			</a>

			<ul className="text-white flex justify-center gap-4 mt-4 mb-2 text-2xl ">
				<li className=" hover:text-indigo-500  ">
					<a
						href="https://github.com/shivakumard17"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>
				</li>
				<li className="hover:text-indigo-500 ">
					<a
						href="https://www.linkedin.com/in/shivakumard17/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
				<li className=" hover:text-indigo-500 ">
					<a
						href="https://www.instagram.com/draco_code/"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram />
					</a>
				</li>
			</ul>
			<p className="text-xs mt-2 text-gray-500">
				© Shiv.D Creative {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
}

export default Footer;
