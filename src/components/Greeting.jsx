import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './style/style.video_class.css';
import less1Vid from './video/video1.mp4'
import letterA from './img/signs/letterA.png'
import letterM from './img/signs/letterM.png'
import letterT from './img/signs/letterT.png'


const TestComponent = () => {
    const navigate = useNavigate()
    function backToMap(){
        navigate('/map');
    }
    function checkTest(){
        var btnResutl = document.getElementById('btnResutl');
        var resultFild = document.getElementById('resultFild');
        var inputFild = document.getElementsByTagName('input');
        let resultedInputs = document.querySelectorAll("input[type='radio']:checked");
        let result = 0;
        Array.prototype.map.call(resultedInputs, (el)=>{
            result += parseInt(el.dataset.value);
        });
        console.log(result);
        resultFild.innerHTML = result + ' баллов'
    }

  return (
    <div className='container-login100' >
      <h1 className="text_margin" align="center">Сәлеметсіз бе</h1>
      <div className="thumb-wrap">
      <video width="100%"  controls >
      <source src={less1Vid} type="video/mp4"/>
      
        </video>
        <a href="#test" className="border-button">skip</a>
      </div>
      <div>
       
      </div>

      <div className="test_style">
        <div>
          <h1 id="test">Тест</h1>
          <div className="question">
            <div>
              <p>Дұрыс өрнекті белгіле: М </p>
            </div>
            <div className="left20">
              <div>
                <input type="radio" value="1" name="r1" id="Answer" data-value='0' /><img src={letterA} alt="" />
                </div>
              <div>
                <input type="radio" name="r1" id="Answer" data-value='0' /><img src={letterT} alt="" />
              </div>
              <div>
                <input type="radio" name="r1" id="Answer" data-value='1' /><img src={letterM} alt="" />
              </div>
            </div>
          </div>
          <div className="question">
            <div>
              <p>Дұрыс өрнекті белгіле: Т </p>
            </div>
            <div className="left20">
              <div>
                <input type="radio" value="1" name="r2" id="Answer" data-value='0' /><img src={letterM} alt="" />
              </div>
              <div>
                <input type="radio" name="r2" id="Answer" data-value='0' /><img src={letterA} alt="" />
              </div>
              <div>
                <input type="radio" name="r2" id="Answer" data-value='1' /><img src={letterT} alt="" />
              </div>
            </div>
          </div>

          <button onClick={checkTest} className="button_rezult" id="btnResutl">Нәтижені білу</button>
          <button onClick={backToMap} style={{marginLeft: '10px'}} className="button_rezult">Басты мәзір</button>
          <div className="bottom_margin" id="resultFild"></div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
