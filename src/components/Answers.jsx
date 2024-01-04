import { useState, useEffect } from "react";

export const Answers = ({ numCorrect, setNumCorrect, correct, incorrect }) => {
	const [shuffledAnswers, setShuffledAnswers] = useState([]);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	// const [isCorrect, setIsCorrect] = useState(null);

	useEffect(() => {
		const allAnswers = [...incorrect, correct];
		setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
	}, []);

	const handleAnswerClick = (answer) => {
		setSelectedAnswer(answer);
		if (answer === correct) {
			setNumCorrect(numCorrect + 1);
		}
		// setIsCorrect(answer === correct);
	};

	return (
		<>
			{shuffledAnswers.map((answer, index) => (
				<li key={index}>
					<button onClick={() => handleAnswerClick(answer)}>{answer}</button>
				</li>
			))}
			{selectedAnswer !== null &&
				(selectedAnswer === correct ? <h3>Yay. Correct!</h3> : <h3>Unlucky. Incorrect.</h3>)}
		</>
	);
};
