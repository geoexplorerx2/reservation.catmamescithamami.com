import React from 'react';
import { ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';

interface SampleQuestion {
  title: string,
  subtitle: string,
  options: ToggleOptionType[],
  id: string
}


const sampleQuestions: SampleQuestion[] = [
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
]


const UserHealthInformation = () => {
  
  return (
    <div className='w-full flex flex-col px-9 border-2 border-orange-400 pt-5'>
        {
          sampleQuestions.map(question => {
            const {title, subtitle, options,id} = question
            return(
              <div className='flex items-center justify-between mb-5 border-2 border-pink-500 ' key={id}>
                <div className='flex flex-col'>
                  <span className='text-base font-semibold'>
                    {title}
                  </span>
                  <span className='text-xs text-normal'>
                    {subtitle}
                  </span>
                </div>
                <Toggle options={options} outerWrapperClassNames='max-w-[240px]' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5'/>
              </div>
            )
          })
        }
    </div>
  )
};

export default UserHealthInformation;