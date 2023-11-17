import { useState } from "react";
import { Button } from "./Button";
import { Input, InputProps } from "./Input";

export type FormId = "addPerson" | "addUser";

type FormProps = {
	formId: FormId;
};

export const Form = ({ formId }: FormProps) => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const formFields: InputProps[] = [
		{
			isAutoFocus: true,
			label: "First Name",
			type: "text",
		},
		{
			label: "Last Name",
			type: "text",
		},
		{
			label: "Email",
			type: "email",
		},
		{
			label: "Phone",
			type: "tel",
		},
		{
			isHidden: false,
			label: "Date of Birth",
			type: "date",
		},
	];

	return (
		<form id={formId}>
			{formFields.map((field, index) => (
				<Input
					isAutoFocus={field.isAutoFocus}
					isDisabled={field.isDisabled}
					isHidden={field.isHidden}
					isRequired={field.isRequired}
					key={index}
					label={field.label}
					onInputValid={onEnableButton}
					type={field.type}
				/>
			))}
			<Button form={formId} isDisabled={isButtonDisabled} />
		</form>
	);

	function onEnableButton() {
		setIsButtonDisabled(false);
	}
};
