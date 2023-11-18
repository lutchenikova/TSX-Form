import { useState } from "react";
import { Button } from "./Button";
import { Input, InputProps } from "./Input";
import { UserInfo } from "./UserInfo";

export type FormId = "addPerson" | "addUser";

type FormProps = {
	formFields: InputProps[];
	formId: FormId;
};

export const Form = ({ formFields, formId }: FormProps) => {
	const [fomSubmited, setFormSubmited] = useState(false);

	return (
		<>
			{!fomSubmited && (
				<form className="container" id={formId}>
					{formFields.map((field, index) => (
						<Input
							isAutoFocus={field.isAutoFocus}
							isDisabled={field.isDisabled}
							isHidden={field.isHidden}
							isRequired={field.isRequired}
							key={index}
							label={field.label}
							type={field.type}
						/>
					))}
					<Button form={formId} onSubmit={onSubmit} />
				</form>
			)}
			<UserInfo shouldRenderInfo={fomSubmited} />
		</>
	);

	function onSubmit() {
		setFormSubmited(true);
	}
};
