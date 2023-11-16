import { Button } from "./Button";
import { Input, InputProps } from "./Input";

export type FormId = "addPerson" | "addUser";

type FormProps = {
	formId: FormId;
};

export const Form = ({ formId }: FormProps) => {
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
					isRequired={field.isRequired}
					key={index}
					label={field.label}
					type={field.type}
				/>
			))}
			<Button form={formId} />
		</form>
	);
};
