export const Question = ({ index, question }) => {
	return (
		<>
			<h3>
				<span>{index}: </span>
				<span dangerouslySetInnerHTML={{ __html: question }}></span>
			</h3>
		</>
	);
};
