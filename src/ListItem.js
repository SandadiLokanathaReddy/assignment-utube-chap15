import React from "react";

const ListItem = (props) => {
	const { item } = props;
	return <li>{JSON.stringify(item)}</li>;
};

export default ListItem;
