import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function WorkItem({ imgUrl, title, tech, workUrl, live }) {
	return (
		<a
			href={live}
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 dark:bg-slate-800  rounded-lg overflow-hidden hover:-translate-y-2 transform transition"
		>
			<img
				src={imgUrl}
				alt="work"
				className="w-full h-36  md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				<div className="flex justify-between">
					<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
						{tech.map(item => (
							<span
								key={item}
								className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
							>
								{item}
							</span>
						))}
					</p>
					<ul className="flex gap-2  items-center justify-start ">
						<li className="hover:text-indigo-600 text-xl ">
							<a href={workUrl} target="_blank" rel="noreferrer">
								<FaGithub />
							</a>
						</li>
						<li className="hover:text-indigo-600 text-xl">
							<a href={live} target="_blank" rel="noreferrer">
								<FaLink />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</a>
	);
}

export default WorkItem;
