import React from "react";
import ListItem from "./ListItem.js";

const List = (props) => {
	const { items } = props;
	return (
		<ul>
			{items.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default List;
