import React, { useContext } from "react";
import { GiveMeStringContext } from "./context";

export const FancyComponent = () => {
	const context = useContext(GiveMeStringContext);
	return <div>Context value: {JSON.stringify(context.value)}</div>;
};
