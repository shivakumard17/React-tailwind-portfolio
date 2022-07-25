import React from 'react';
import myImg from '../images/hero.png';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					I’m a Front-End Developer located in Hyderabad,India. I enjoy creating
					things that live on the internet.My interest in web development
					started back in 2021. Here are a few technologies I’ve been working
					with recently:
				</p>
				<ul className="text-md text-indigo-600 dark:text-indigo-500 list-disc ml-4 mt-3 mb-4">
					<li>JavaScript (ES6+)</li>
					<li>React</li>
					<li>TailwindCss</li>
					<li>Html&Css</li>
				</ul>
				<a
					href="mailto:webcifar@gmail.com"
					className="text-sm md:text-md    text-white p-2 m-2 bg-indigo-600 rounded-md  hover:bg-indigo-700"
				>
					Contact Me
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-50% md:w-6/12 rounded-lg object-cover saturate-0 bg-white  rounded-full hover:saturate-100 "
			/>
		</div>
	);
}

export default About;
