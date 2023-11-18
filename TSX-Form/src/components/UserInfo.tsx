type UserInfoProps = {
	formData?: [];
	shouldRenderInfo: boolean;
};

export const UserInfo = ({ shouldRenderInfo }: UserInfoProps) => {
	return (
		<>
			{shouldRenderInfo && (
				<div className="container">
					<p>Hello World!</p>{" "}
				</div>
			)}
		</>
	);
};
