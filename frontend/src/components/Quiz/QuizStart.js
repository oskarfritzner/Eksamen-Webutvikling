/*
    QuizStart Component
    Renders the start screen for the quiz, including a field for the user to enter their name and a button to begin the quiz.

    Props:
    - username: The current value of the username input field.
    - setUsername: Function to update the username state in the parent component.
    - startQuiz: Function to trigger the start of the quiz.

    This component displays an input field for the user to enter their game name (username)
    and a button to start the quiz. When the user types in the input field, the setUsername 
    function is called to update the state in the parent component. The startQuiz function 
    is called when the user clicks the 'Play' button to begin the quiz.
 */

const QuizStart = ({ username, setUsername, startQuiz }) => {
    return (
        <div className="flex flex-col items-center mt-48">
            <input 
                type="text" 
                placeholder="Enter your game name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="border border-gray-300 rounded p-2 mb-4 text-black"
            />
            <button onClick={startQuiz} className="bg-f1-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Play
            </button>
        </div>
    );
};

export default QuizStart;
