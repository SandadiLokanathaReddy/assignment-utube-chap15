import React from "react";

const Button = (props) => {
	const { buttonText, reqType, setReqType } = props;
	return (
		<button
			className={buttonText === reqType ? "selected" : null}
			type="button"
			onClick={() => setReqType(buttonText)}
		>
			{buttonText}
		</button>
	);
};

export default Button;
