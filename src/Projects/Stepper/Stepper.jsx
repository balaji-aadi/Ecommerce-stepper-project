import React, { useEffect, useRef, useState } from 'react'
import CHECKOUT_STEPS from './steps'
import './stepper.css'

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const stepperLen = CHECKOUT_STEPS.length
  const stepRef = useRef([])
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0
  })


  const ActiveComponent = CHECKOUT_STEPS[currentStep - 1]?.Component

  function handleNext() {
    setCurrentStep((prevStep) => {
      if (prevStep === stepperLen) {
        setIsComplete(true)
        return prevStep
      }
      else {
        return prevStep + 1
      }
    })
  }

  function calculateProgressBarWidth() {
    return ((currentStep - 1) / (stepperLen - 1)) * 100;
  }

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepperLen - 1].offsetWidth / 2,
    })
  }, [stepRef])


  return (
    <>
      <div className='stepper'>
        {CHECKOUT_STEPS.map((step, index) => (
          <div key={step.name} ref={el => { stepRef.current[index] = el }} className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`}>
            {
              currentStep > index + 1 || isComplete ?
                <span className='step-number'>&#10003;</span> :
                <span className='step-number'> {index + 1} </span>
            }
            <span className='step-name'>{step.name}</span>
          </div>
        ))}

        <div className='progress-bar' style={{ width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`, marginLeft: margins.marginLeft, marginRight: margins.marginRight }}>
          <div className='progress' style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>

      </div>
      <ActiveComponent />

      {!isComplete && <button className='btn' onClick={handleNext}>{currentStep === stepperLen ? "Finish" : "Next"} </button>}
    </>
  )
}

export default Stepper
