import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        return <div>
            <div class="QuizQuestion">
                console.log(quizData["quiz_questions"][0].instruction.text); 
            </div>            
        </div>;
    }
}

export default Quiz