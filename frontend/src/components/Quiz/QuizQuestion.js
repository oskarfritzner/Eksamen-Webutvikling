/*
     QuizQuestion Component
    Renders a single quiz question with its multiple choice answers.
    
    Props:
    - currentQuestion: The current question object being displayed.
    - currentQuestionIndex: The index of the current question in the quiz.
    - handleAnswerSelect: A function to handle the selection of an answer.
    
    The component displays the question and maps over its answers to create
    interactive buttons for each. Clicking an answer button triggers the 
    handleAnswerSelect function.
 */

const QuizQuestion = ({ currentQuestion, currentQuestionIndex, handleAnswerSelect }) => {
    return (
        <div className="text-center mt-32">
            <p className="mb-2">Question {currentQuestionIndex + 1} of {currentQuestion.length}</p>
            <p className="font-semibold mb-4">{currentQuestion.query}</p>
            <div className="flex flex-col items-center">
                {currentQuestion.answers.map((answer, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswerSelect(answer)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 my-1 rounded w-full"
                    >
                        {['A', 'B', 'C', 'D'][index]}. {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
