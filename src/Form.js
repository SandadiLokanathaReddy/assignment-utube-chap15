import React from "react";
import Button from "./Button.js";

const Form = (props) => {
	const { reqType, setReqType } = props;
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Button
				buttonText="users"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<Button
				buttonText="posts"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<Button
				buttonText="comments"
				reqType={reqType}
				setReqType={setReqType}
			/>
		</form>
	);
};

export default Form;
