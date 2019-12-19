import React, { useState } from "react";
export const GiveMeStringContext = React.createContext(null);

export const CustomProvider = ({ children }) => {
	const [value, setValue] = useState("initial value");

	return (
		<GiveMeStringContext.Provider value={{ value, setValue }}>
			{children}
		</GiveMeStringContext.Provider>
	);
};
