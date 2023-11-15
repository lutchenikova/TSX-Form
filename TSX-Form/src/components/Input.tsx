import { ChangeEvent, useState } from "react";

type InputType = "checkbox" | "date" | "email" | "tel" | "text";

type InputProps = {
	isAutoFocus?: boolean;
	isDisabled?: boolean;
	isHidden?: boolean;
	isRequired?: boolean;
	label: string;
	type: InputType;
};

export const Input = ({ isAutoFocus, isDisabled, isHidden, isRequired, label, type }: InputProps) => {
	const formattedLabel = label.toLowerCase();
	const [hasError, setHasError] = useState(false);

	return (
		<div className="grid">
			<div id={`input.${formattedLabel}`}>
				{!isHidden && (
					<span>
						{label}
						{isRequired || (hasError && <span className="labelMark">*</span>)}
					</span>
				)}
			</div>

			<div className="gridInput">
				<input
					aria-labelledby={`input.${formattedLabel}`}
					autoFocus={isAutoFocus}
					className={hasError ? "error" : "input"}
					disabled={isDisabled}
					hidden={isHidden}
					id={`${type}.${formattedLabel}`}
					name={`user.${formattedLabel}`}
					onChange={onChange}
					placeholder={`Insert the ${formattedLabel}`}
					required={isRequired}
					type={type}
				/>
			</div>

			<div>{hasError && <span className="error">{`Insert a valid ${formattedLabel}`}</span>}</div>
		</div>
	);

	function onChange(event: ChangeEvent<HTMLInputElement>) {
		const inputValue = event?.target.value;
		// const inputType = event?.target.type;

		validateTextInput(inputValue);
	}

	function validateTextInput(value: string) {
		if (value.length > 2) {
			setHasError(true);
		} else {
			setHasError(false);
		}
	}
};
