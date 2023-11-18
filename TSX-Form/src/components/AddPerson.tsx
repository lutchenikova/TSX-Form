import { Form } from "./Form";
import { formFields } from "../pseudoDataBase/data";

export const AddPerson = () => {
	return <Form formId="addPerson" formFields={formFields} />;
};
