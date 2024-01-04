import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Question } from "./components/Question";
import { Answers } from "./components/Answers";

function App() {
	const [questionArr, setQuestionArr] = useState([]);
	const [numCorrect, setNumCorrect] = useState(0);

	useEffect(() => {
		axios
			.get("https://opentdb.com/api.php?amount=10&category=9&type=boolean")
			.then((data) => setQuestionArr(data.data.results))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			{questionArr.map((obj, index) => (
				<>
					<Question key={index} index={index + 1} question={obj.question} />
					<Answers
						key={index}
						numCorrect={numCorrect}
						setNumCorrect={setNumCorrect}
						correct={obj.correct_answer}
						incorrect={obj.incorrect_answers}
					/>
				</>
			))}
			<h1>You have {numCorrect} questions correct.</h1>
		</>
	);
}

export default App;
