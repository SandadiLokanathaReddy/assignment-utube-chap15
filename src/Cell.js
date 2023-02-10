import React from "react";

const Cell = (props) => {
	const { cellData } = props;
	return <td>{cellData}</td>;
};

export default Cell;
