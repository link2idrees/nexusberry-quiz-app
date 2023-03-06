// import pakImg from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Custom.css';


function App() {
  let questions = [
    {
      id : 1,
      statement: 'What is capital of Pakistan?',
      options: [
        "Karachi","Lahore","Islamabad","DG Khan"
      ],
      answer: 'Islamabad'
    },
    {
      id : 2,
      statement: 'Which organ pumps the blood in human body?',
      options: [
        "Lungs","Eyes","Stomach","Heart"
      ],
      answer: 'Heart'
    },
    {
      id : 3,
      statement: 'Pakistan won the ODI world cup in?',
      options: [
        "1947","1992","2009","2020"
      ],
      answer: '1992'
    },
    {
      id : 4,
      statement: 'Which spellings are correct?',
      options: [
        "Plaer","Plaor","Playaer","Player"
      ],
      answer: 'Player'
    },
    {
      id : 5,
      statement: 'Lahore is located in?',
      options: [
        "Punjab","Sindh","KP","GB"
      ],
      answer: 'Punjab'
    }
  ];

  let [qno, setQno] = useState(1);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [current_question, setCurrent_question] = useState(0);
  
  const handleClick = (q,optIndex)=>{
    let selectedOption = questions[q].options[optIndex];
    let answer = questions[q].answer;
    
    if(answer === selectedOption){
      setScore(score+1);
    }
    changeQuestion(); 
  }
  const changeQuestion = ()=>{
    if(qno+1 < questions.length){
      setQno(qno+1);
      setCurrent_question(current_question+1);
    }else if(qno+1 === questions.length){
      setQno(qno+1);
      setCurrent_question(current_question+1);
    }else{
      setShowResult(true);
    }
  }
  
  return (
    <div id='body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>

          </div>
          <div className='col-md-6'>
            <div style={{display:[showResult === true ? 'none':'block']}}>
            <h1 className='text-center mt-3 text-white'>Quizz App</h1>
            <div className='card bg-secondary'>
              <div className='card-header text-white'>
                <div>
                    <div style={{float:'left'}}>Q. {questions[current_question].statement}</div>
                    <div style={{float:'right'}}>{qno}/{questions.length}</div>
                </div> 
              </div>
              <div className='card-body'>
                <div className="d-flex flex-column">
                  {questions[current_question].options.map((opt,index) =>{
                    return(
                      <div className="p-2" key={index}><span className='text-white'>{index+1}.</span> <button className='btn btn-outline-warning' data-toggle="button" onClick={()=>handleClick(current_question,index)}>{opt}</button></div>
                    );
                  })}
                  
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='col-md-3'>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-md-3'>
            
          </div>
          <div className='col-md-6'>
            <div className='card bg-success text-white text-center' style={{display:[showResult === true && score >= 3 ? 'block':'none']}}>
                  <div className='card-header'>
                    Congratulations!
                  </div>
                  <div className='card-body'>
                    You have got {score} out of 5 marks. 🏆
                  </div>
            </div>
            <div className='card bg-danger text-white text-center' style={{display:[showResult === true && score < 3 ? 'block':'none']}}>
                  <div className='card-header'>
                    Failed!
                  </div>
                  <div className='card-body'>
                    You have got {score} out of 5 marks. 😟
                  </div>
            </div>
          </div>
          <div className='col-md-3'>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
