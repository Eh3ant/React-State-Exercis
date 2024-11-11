import React, { useState } from 'react'
import './EightBall.css'

const EightBall = ({ answers }) => {

    console.log("Answers prop:", answers);
    const [color, setColor] = useState('black')
    const [msg, setMsg] = useState('Think of a Question')

    const handleClick = () => {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        console.log("Selected answer:", randomAnswer);
        setColor(randomAnswer.color)
        setMsg(randomAnswer.msg)
    };

    const reset = () => {
        setColor('black');
        setMsg('Think of a Question');
    };

    return (
        <div className="EightBall-container">
            <div
                className='EightBall'
                onClick={handleClick}
                style={{ backgroundColor: color }}
            >
                <p className='EightBall-msg'>{msg}</p>
            </div>
            <button onClick={reset} className="EightBall-reset">
                Reset
            </button>
        </div>
    );
};



export default EightBall;