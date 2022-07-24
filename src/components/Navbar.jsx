import React from 'react';
import { FaReact } from 'react-icons/fa';

function Navbar() {
	return (
		<div className="flex flex-row pt-3">
			<FaReact className="text-indigo-600 text-3xl" />
			<h3 className="text-indigo-600 pl-3 text-xl font-semibold">Shiv.D</h3>
		</div>
	);
}

export default Navbar;
