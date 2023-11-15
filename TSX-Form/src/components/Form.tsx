import { Button } from "./Button";
import { Input } from "./Input";

export type FormId = "addPerson" | "addUser";

type FormProps = {
	formId: FormId;
};

export const Form = ({ formId }: FormProps) => {
	return (
		<form id={formId}>
			<Input isAutoFocus={true} isDisabled={false} isHidden={false} isRequired={false} label="Name" type={"text"} />
			<Button form={formId} />
		</form>
	);
};
