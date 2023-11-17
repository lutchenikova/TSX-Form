import { ChangeEvent, useState } from "react";

export type InputType = "checkbox" | "date" | "email" | "tel" | "text";

export type InputProps = {
	isAutoFocus?: boolean;
	isDisabled?: boolean;
	isHidden?: boolean;
	isRequired?: boolean;
	label: string;
	type: InputType;
};

export const Input = ({
	isAutoFocus = false,
	isDisabled = false,
	isHidden = false,
	isRequired = false,
	label,
	type,
}: InputProps) => {
	const [hasError, setHasError] = useState(false);

	const formattedLabel = label.toLowerCase();
	const isDateType = type === "date";

	return (
		<div className="grid">
			<div id={`input.${formattedLabel}`}>
				{!isHidden && (
					<span>
						{label}
						{isRequired && <span className="labelMark">*</span>}
					</span>
				)}
			</div>

			<div className="gridInput">
				<input
					aria-labelledby={`input.${formattedLabel}`}
					autoFocus={isAutoFocus}
					className={hasError ? "error" : undefined}
					disabled={isDisabled}
					hidden={isHidden}
					id={`${type}.${formattedLabel}`}
					max={isDateType ? formatDate() : undefined}
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
		const inputType = event?.target.type;

		const validate: { [key: string]: (value: string) => void } = {
			email: validateEmailInput,
			tel: validatePhoneInput,
			text: validateTextInput,
		};

		const validateField = validate[inputType];
		if (validateField) {
			return validateField(inputValue);
		}
	}

	function validateTextInput(value: string) {
		value.length > 2 ? setHasError(true) : setHasError(false);
	}

	function validateEmailInput(value: string) {
		const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

		!emailRegex.test(value) ? setHasError(true) : setHasError(false);
	}

	function validatePhoneInput(value: string) {
		const numberRegex = /[0-9]/i;

		numberRegex.test(value) || !value ? setHasError(false) : setHasError(true);
	}

	function formatDate() {
		return new Date().toISOString().split("T")[0];
	}
};
