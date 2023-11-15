import { FormId } from "./Form";

type ButtonProps = {
	form: FormId;
	isDisabled?: boolean;
};

export const Button = ({ form, isDisabled }: ButtonProps) => {
	return (
		<div className="gridButton">
			<button disabled={isDisabled} form={form} type="button">
				Submit
			</button>
		</div>
	);
};
