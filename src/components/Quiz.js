//import statements
import React, {Component} from 'react';

import {QuizBank} from "./QuizBank";
import { GlobalStyle, Wrapper } from './Quiz_Styles';
import QuestionCard from "./QuestionCard";

//Quiz Component which extends the functionality of Component
class Quiz extends Component {
    //Declaration of states
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: true,
        score: 0,
        disabled: true,
        questions: null,
        answers: null,
        showAnswers: false
    }

    // Initialize the values and fetch the first question
    startQuiz = () => {
        this.setState({
            quizEnd: false,
            currentQuestion: 0,
            score: 0,
            showAnswers: false
        })
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: QuizBank[currentQuestion].question,
                options: QuizBank[currentQuestion].options,
                answers: QuizBank[currentQuestion].answer,
            }
        })
    }

    //Get the user selected option and enable the "Next" button
    checkAnswer = (e) => {
        this.setState({
            userAnswer: e.currentTarget.value,
            disabled: false
        })
    }

    //Functionality for "Next" and "Submit" Button
    nextQuestionHandler = () => {
        const {userAnswer, answers, score} = this.state
        //If its last question then end the quiz otherwise increment the index
        if(this.state.currentQuestion === QuizBank.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
        else {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })}

        // increment the score if answer is correct
        if (userAnswer ===  answers) {
            this.setState({
                score: score + 1
            })
        }
    }

    // update the component
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {currentQuestion} = this.state;
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: QuizBank[currentQuestion].question,
                    options: QuizBank[currentQuestion].options,
                    answers: QuizBank[currentQuestion].answer,
                }
            })
        }
    }

    render() {
        //get the value from the state
        const {questions, options, currentQuestion, quizEnd, score, showAnswers} = this.state;
        const total_questions = QuizBank.length
        return (
              <>
                  {/*Styled Components*/}
                  <GlobalStyle />
                    <Wrapper>
                        <div className="Quiz">
                            <h1>Trial Quiz</h1>

                            {/*Start the new game*/}
                            {quizEnd && !(currentQuestion === total_questions - 1) ?
                                <button className="start" onClick={this.startQuiz}>Start</button>
                            : null}

                            {/*Print the score*/}
                            {!quizEnd ? <p className="score">Score: {score}</p> : null}

                            {/*Print the Question through QuestionCard Component*/}
                            {!quizEnd &&
                                <QuestionCard
                                    questionNr={currentQuestion + 1}
                                    totalQuestions={total_questions}
                                    question={questions}
                                    options={options}
                                    callback={this.checkAnswer}
                                />
                            }

                            {/*Next Button functionality*/}
                            {!quizEnd && currentQuestion < total_questions - 1 &&
                                <button className='next' disabled={this.state.disabled}
                                        onClick={this.nextQuestionHandler}>
                                        Next
                                </button>}

                            {/*Submit Button Functionality*/}
                            {!quizEnd && currentQuestion === total_questions - 1 &&
                                <button className='submit' disabled={this.state.disabled}
                                        onClick={this.nextQuestionHandler}>
                                        Submit
                                </button>
                            }

                            {/*Show Final score and options for Start Again or Show Answers*/}
                            {quizEnd && currentQuestion === total_questions - 1 && !showAnswers ?
                                <div>
                                    <p className="final_score">Final Score: {score}/{total_questions}</p>
                                    <button className="show" onClick={() => this.setState({
                                        showAnswers: true
                                    })}>Show Answers
                                    </button>
                                    <button className="start_again" onClick={this.startQuiz}>Start Again</button>
                                </div> : null
                            }

                            {/*Show the final score, respective correct answers and button to start again the quiz*/}
                            {quizEnd && currentQuestion === total_questions - 1 && showAnswers ?
                                <div>
                                    <p className="final_score">Final Score: {score}/{total_questions}</p>
                                        <div>
                                            <p className="msg"> The correct Answers for the Questions are:</p>
                                            {QuizBank.map((item, index) => (
                                                <button key={index} className="answers" value={item.answer} disabled={true}>
                                                    <span> {item.id}.{item.question}  {item.answer} </span>
                                                </button>
                                            ))}
                                        </div>
                                    <button className="restart" onClick={this.startQuiz}>Start Again</button>
                                </div>  : null
                            }

                            {/*Show the footer*/}
                            <div className="footer">By Megha Bisani</div>
                        </div>
                    </Wrapper>
              </>
        )
    }
}

//export Quiz
export default Quiz;
