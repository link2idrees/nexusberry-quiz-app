// import pakImg from './logo.svg';
import './App.css';
import './Custom.css';


function App() {
  return (
    <div id='body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>

          </div>
          <div className='col-md-6'>
            <h1 className='text-center mt-3 text-white'>Quizz App</h1>
            <div className='card bg-secondary'>
              <div className='card-header text-white'>
                <div>
                    <div style={{float:'left'}}>Q. What is the capital of Saudi Arabia?</div>
                    <div style={{float:'right'}}>1/10</div>
                </div> 
              </div>
              <div className='card-body'>
                <div class="d-flex flex-column">
                  <div class="p-2"><span className='text-white'>1.</span> <button className='btn btn-outline-warning'>Lahore</button></div>
                  <div class="p-2"><span className='text-white'>2.</span> <button className='btn btn-outline-warning'>Ryaz</button></div>
                  <div class="p-2"><span className='text-white'>3.</span> <button className='btn btn-outline-warning'>Karachi</button></div>
                  <div class="p-2"><span className='text-white'>4.</span> <button className='btn btn-outline-warning'>Jeddah</button></div>
                </div>
              </div>
              <div className='card-body'>
                  <div className='d-flex flex-row'>
                    <button className='btn btn-warning p-2 mx-2'>Skip</button>
                    <button className='btn btn-success'>Save & Move To Next</button>
                  </div>
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
