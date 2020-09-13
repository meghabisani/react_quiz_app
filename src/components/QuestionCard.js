//import statement
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ButtonWrapper } from './QuestionCard_Styles';

//Quiz Component which extends the functionality of Component
class QuestionCard extends Component {
    render() {
        //Get the value from Quiz using props
        const {questionNr, totalQuestions, question, options, callback} = this.props;
        return (
                <div>
                    {/*Styled Component*/}
                    <Wrapper>
                        <p className="number">
                            Question: {questionNr} / {totalQuestions}
                        </p>
                        <p dangerouslySetInnerHTML={{__html: question}} />
                        <div>
                            {/*Iterate over all options of question*/}
                            {options.map(option => (
                                //Styled Component
                                <ButtonWrapper key={option}>
                                    <button value={option} onClick={callback}>
                                        <span  dangerouslySetInnerHTML={{ __html: option }}/>
                                    </button>
                                </ButtonWrapper>
                            ))}
                        </div>
                    </Wrapper>
                </div>
        );
    };
}

//Type Checking of props
QuestionCard.propTypes = {
    questionNr: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired
}

//export QuestionCard
export default QuestionCard;
