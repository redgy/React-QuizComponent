import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }

    render() {
        return <div>j
            <div class="QuizQuestion">
                Quiz
            </div>            
        </div>
    }
}

export default Quiz