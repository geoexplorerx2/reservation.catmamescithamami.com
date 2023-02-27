import React, { useState, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { toTranslationFormat } from '../../helpers';
import { ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';

interface Question {
  title: string,
  subtitle: string,
  options: ToggleOptionType[],
  needsExplanation?: boolean,
  explanationId?: string
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

interface UserHealthInformationProps {
  handleToggleChange?: any;
};

const UserHealthInformation: FC<UserHealthInformationProps> = ({handleToggleChange}) => {

  const [answers, setAnswers] = useState<Answer[]>([])
  const { t } = useTranslation()

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
    
    handleToggleChange(option.value ,question.id)
    
  };


const handleTextInputChange = (question: Question, explanation?: string ) => {
  // let answersCopy = [...answers]
  // const target = answersCopy.find((answer) => answer.id === question.id)
  // // if target exists update the value of it otherwise add it to the answers array
  // if(target){
  //   answersCopy.map( answer => {
  //     if(answer.id === target.id){
  //       answer.answer.explanation = explanation;
        
  //     }
  //   }
  //   )
  // } else {
  //   answersCopy = [...answersCopy, { question: question, answer: {
  //     label: 'Yes',
  //     value: 'yes',
  //     id: '1',
  //     explanation: explanation
  //   ,}, id: question.id }]
  // }

  // setAnswers(answersCopy)

  handleToggleChange(explanation, question.explanationId)


};

useEffect(() => {
  console.log('here is the answers', answers);
}, [answers])


return (
  <div className='w-full flex flex-col px-9 pt-5 h-[calc(100%_-_250px)] overflow-y-scroll'>
    {
      sampleQuestions.map(question => {
        const { title, subtitle, options, id, needsExplanation } = question
        const shouldTextInputBeVisible = answers.find((answer) => answer.id === question.id)?.answer.value === 'yes'
        return (
          <div className='mb-5'>
            <div className='flex items-center justify-between ' key={id}>
              <div className='flex flex-col'>
                <span className='text-base font-semibold'>
                  {t(toTranslationFormat(title))}
                </span>
                <span className='text-xs text-normal'>
                  {t(toTranslationFormat(subtitle))}
                </span>
              </div>
              <Toggle 
                options={options} 
                outerWrapperClassNames='max-w-[120px] md:max-w-[240px]' 
                labelClassNames='text-xs font-semibold' 
                optionWrapperClassNames='px-5' 
                onChange={(option) => handleChange(question, option)} 
                defaultSelected='right' 
              />
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
    title: 'Heart Problems',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'heart_problems'
  },
  {
    title: 'High - Low Blood Pressure',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'blood_pressure'
  },
  {
    title: 'Varicose Veins',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'varicose_veins'
  },
  {
    title: 'Asthma',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'asthma'
  },
  {
    title: 'Vertebral Problems',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'vertebral_problem'
  },
  {
    title: 'Other Joint Problems',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'joint_problems'
  },
  {
    title: 'Fractures',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'fractures'
  },
  {
    title: 'Skin Allergies',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'skin_allergies'
  },
  {
    title: 'Lodine Allergy',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'lodine_allergies'
  },
  {
    title: 'Hyperthyroidism',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'hyperthyroidism'
  },
  {
    title: 'Diabetes',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'diabetes'
  },
  {
    title: 'Epilepsy',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'epilepsy'
  },
  {
    title: 'Are you pregnant ?',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'pregnant'
  },
  {
    title: 'Do you have back problems ?',
    subtitle: '',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    id: 'back_problems'
  },
  {
    title: 'Have you ever tested positive for covid-19 ?',
    subtitle: 'If yes, please provide the date.',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    needsExplanation: true,
    id: 'covid',
    explanationId: 'covid_note'
  },
  {
    title: 'Have you been surgically operated on ?',
    subtitle: 'If yes, please explain the type of the surgery and the date.',
    options: [
      {
        label: 'Yes',
        value: 'yes',
        id: '1'
      },
      {
        label: 'No',
        value: 'no',
        id: '2'

      }
    ],
    needsExplanation: true,
    id: 'surgery',
    explanationId: 'surgery_note'
  },
]


export default UserHealthInformation;
