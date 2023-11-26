/*
    QuizResult Component
    Displays the result of the quiz to the user.
    
    Props:
    - username: The name of the user who took the quiz.
    - score: The total score achieved by the user in the quiz.
    
    The component shows a thank you message to the user along with their
    quiz score out of 10.
 */

const QuizResult = ({ username, score }) => {
  return (
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">
        Thank you for participating, {username}! You got {score}/10 points.
      </p>
    </div>
  );
};

export default QuizResult;
