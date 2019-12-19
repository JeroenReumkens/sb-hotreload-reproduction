import { addDecorator, configure } from "@storybook/react";
import { CustomProvider } from "../src/test/context";
import React from "react";

addDecorator(storyFn => (
	<CustomProvider>
		<div style={{ background: "red" }}>{storyFn()}</div>
	</CustomProvider>
));

// configure([require.context("../src", true, /\.stories\.mdx$/)], module);
