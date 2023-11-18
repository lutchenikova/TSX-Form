import { InputProps } from "../components/Input";

export const formFields: InputProps[] = [
	{
		isAutoFocus: true,
		label: "Name",
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
