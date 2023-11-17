import { FormId } from "./Form";

type ButtonProps = {
	form: FormId;
	isDisabled?: boolean;
	onSubmit?: () => void;
};

export const Button = ({ form, isDisabled, onSubmit }: ButtonProps) => {
	return (
		<div className="gridButton">
			<button disabled={isDisabled} form={form} type="button" onSubmit={onSubmit}>
				Submit
			</button>
		</div>
	);
};
