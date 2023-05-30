import React from 'react'
import '../css/Windom.css'
import { Link, useNavigate } from 'react-router-dom';


const MainWindom = () => {
    const navigate = useNavigate()
    function lesson1() {
        navigate('/lesson1')
    }
    function Regist() {
        navigate('/signup')
    }

    return (
        <div className="block-flex">
            <div className="bacground_img"></div>
            <div className="second-flex">
                <div>
                    <h3 align="center"> Обучению языку жестов </h3>
                </div>
                <div className="lesson1">
                    <div>
                        <button className="button19" onClick={lesson1}>Приветсвие</button>
                    </div>
                    <div>
                        <button className="button19" onClick={lesson1}>Вопросы</button>
                    </div>
                    <div>
                        <button className="button19" onClick={lesson1}>Ответы</button>
                    </div>
                    <div>
                        <button className="button19" onClick={lesson1}>Вопросы2</button>
                    </div>
                    <div>
                        <button className="button19" onClick={lesson1}>Ответы</button>
                    </div>
                </div>
            </div>
            <div className="bacground_img"></div>
        </div>
    )
}

export default MainWindom