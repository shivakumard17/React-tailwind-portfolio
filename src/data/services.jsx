import React from 'react';
// import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	// {
	// 	title: 'Web Design',
	// 	icon: <MdWeb className="w-full h-full" />,
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
	// },
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'I value simple content structure, clean design patterns, and thoughtful interactions.',
		tools: 'Figma',
	},
	{
		title: 'Frontend Developer',
		icon: <VscCode className="w-full h-full" />,
		description:
			'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
		tools: ['HTML,', 'CSS,', 'JavaScript,', 'React Js'],
	},
];
