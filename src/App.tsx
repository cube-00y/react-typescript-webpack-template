import { Global } from "@emotion/react";
import React from "react";
import reset from "@/styles/reset";

export default function App() {
	return (
		<div>
			<Global styles={reset} />
			<p>Hello React</p>
		</div>
	);
}
