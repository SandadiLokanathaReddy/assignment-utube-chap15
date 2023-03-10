import React from "react";
import Cell from "./Cell.js";

const Row = (props) => {
	const { item } = props;
	return (
		<tr>
			{Object.entries(item).map(([key, value]) => {
				return <Cell key={key} cellData={JSON.stringify(value)} />;
			})}
		</tr>
	);
};

export default Row;
