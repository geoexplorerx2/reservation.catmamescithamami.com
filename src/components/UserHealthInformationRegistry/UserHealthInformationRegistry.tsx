import React, { useState, useEffect } from 'react';
import { ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';

interface Question {
  title: string,
  subtitle: string,
  options: ToggleOptionType[],
  needsExplanation?: boolean,
  id: string
}



interface AnswerWithExplanation extends ToggleOptionType {
  explanation?: string 
}

interface Answer {
  question: Question,
  answer: AnswerWithExplanation ,
  id: string
}

const UserHealthInformation = () => {

  const [answers, setAnswers] = useState<Answer[]>([])


  const handleChange = (question: Question, option: ToggleOptionType, explanation?: string) => {

    let answersCopy = [...answers]
    const target = answersCopy.find((answer) => answer.id === question.id)
    // if target exists update the value of it otherwise add it to the answers array
    if(target){
      answersCopy.map( answer => {
        if(answer.id === target.id){
          answer.answer = option;
          // answer.answer.explanation = explanation
          
        }
      }
      )
    } else {
      answersCopy = [...answersCopy, { question: question, answer: option, id: question.id }]
    }

    setAnswers(answersCopy)
    
  }


const handleTextInputChange = (question: Question, explanation?: string ) => {
  let answersCopy = [...answers]
  const target = answersCopy.find((answer) => answer.id === question.id)
  // if target exists update the value of it otherwise add it to the answers array
  if(target){
    answersCopy.map( answer => {
      if(answer.id === target.id){
        answer.answer.explanation = explanation;
        
      }
    }
    )
  } else {
    answersCopy = [...answersCopy, { question: question, answer: {
      label: 'Yes / Evet',
      value: 'yes',
      id: '1',
      explanation: explanation
    ,}, id: question.id }]
  }

  setAnswers(answersCopy)
}

useEffect(() => {

  console.log('here is the answers', answers)

}, [answers])


return (
  <div className='w-full flex flex-col px-9 pt-5'>
    {
      sampleQuestions.map(question => {
        const { title, subtitle, options, id, needsExplanation } = question
        const shouldTextInputBeVisible = answers.find((answer) => answer.id === question.id)?.answer.value === 'yes'
        return (
          <div className='mb-5'>
            <div className='flex items-center justify-between ' key={id}>
              <div className='flex flex-col'>
                <span className='text-base font-semibold'>
                  {title}
                </span>
                <span className='text-xs text-normal'>
                  {subtitle}
                </span>
              </div>
              <Toggle options={options} outerWrapperClassNames='max-w-[120px] md:max-w-[240px]' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' onChange={(option) => handleChange(question, option)} defaultSelected='right' />
            </div>
              {
                needsExplanation && shouldTextInputBeVisible && (
                    <input type='text' placeholder='Why and When' name='explanation' className='w-full rounded-[10px] h-[60px] mt-5' onChange={(e) => handleTextInputChange(question, e.currentTarget?.value)}/>
                )
              }
          </div>
        )
      })
    }
  </div>
)
};



const sampleQuestions: Question[] = [
  {
    title: 'Heart Proplems',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '1'
  },
  {
    title: 'High - Low Blood Pressure',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '2'
  },
  {
    title: 'Varicose Veins',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '3'
  },
  {
    title: 'Asthma',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '4'
  },
  {
    title: 'Vertebral Proplems',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '5'
  },
  {
    title: 'Other Joint Problems',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '6'
  },
  {
    title: 'Fractures',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Skin Allergies',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Lodine Allergy',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Hyperthyroidism',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Diabetes',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Epilepsy',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Are you pregnant ?',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Do you have back problems ?',
    subtitle: '',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    id: '7'
  },
  {
    title: 'Have you ever tested positive for covid-19 ?',
    subtitle: 'If yes, please provide the date.',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    needsExplanation: true,
    id: '8'
  },
  {
    title: 'Have you been surgically operated on ?',
    subtitle: 'If yes, please explain the type of the surgery and the date.',
    options: [
      {
        label: 'Yes / Evet',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No / Hayır',
        value: 'no',
        id: '2'

      }
    ],
    needsExplanation: true,
    id: '9'
  },
]


export default UserHealthInformation;
