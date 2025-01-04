import { useEffect, useState } from 'react';
import {messages} from './store/data'

export default function App() { 
  const [step, setStep] = useState(1)
  const [isOpen , setIsOpen] = useState( true)

  function incrementStep(){
    step < 3 && setStep(s => s + 1);
  }

  function decrementStep(){
    step > 1 && setStep(step - 1);
  }


  return (
    <>
      <button  className='close' onClick={() => setIsOpen(is => !is)}>x</button>
      { isOpen &&
        <div className="steps">
            <div className="numbers">
                <div className={step>=1 ? 'active' : ''}>1</div>
                <div className={step>=2 ? 'active' : ''}>2</div>
                <div className={step>=3 ? 'active' : ''}>3</div>
            </div>

            <p className="message">Step {step}: {messages[step-1]}</p>

            <p className="buttons">
                <button className="active" onClick={decrementStep}>
                    Previous
                </button>
                <button className="active" onClick={incrementStep}>
                    Next
                </button>
            </p>
        </div>
      }
    </>
  );
}