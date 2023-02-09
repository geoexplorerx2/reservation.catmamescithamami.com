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


const sampleQuestions: Question[] = [
  {
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
    title: 'Heart Proplems',
    subtitle: 'Kalp Problemleri',
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
]

interface Answer {
  question: Question,
  answer: ToggleOptionType,
  id: string
}

const UserHealthInformation = () => {

  const [answers, setAnswers] = useState<Answer[]>([])
  const handleChange = (question: Question, option: ToggleOptionType) => {

    let answersCopy = [...answers]
    const target = answersCopy.find((answer) => answer.id === question.id)
    // if target exists update the value of it otherwise add it to the answers array
    if(target){
      answersCopy.map( answer => {
        if(answer.id === target.id){
          answer.answer = option
          
        }
      }
      )
    } else {
      answersCopy = [...answersCopy, { question: question, answer: option, id: question.id }]
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
        const { title, subtitle, options, id } = question
        return (
          <div className='flex items-center justify-between mb-5 ' key={id}>
            <div className='flex flex-col'>
              <span className='text-base font-semibold'>
                {title}
              </span>
              <span className='text-xs text-normal'>
                {subtitle}
              </span>
            </div>
            <Toggle options={options} outerWrapperClassNames='max-w-[240px]' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' onChange={(option) => handleChange(question, option)} defaultSelected='right' />
            
          </div>
        )
      })
    }
  </div>
)
};

export default UserHealthInformation;
