import React, { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ReactSignatureCanvas from 'react-signature-canvas'
import SignatureCanvas from 'react-signature-canvas'

interface SignatureInputType {
    onChange?: (e: any, inputType: string) => void
}

const SignatureInput: FC<SignatureInputType> = ({onChange}) => {
    const canvasRef = useRef<ReactSignatureCanvas>(null)
    const { t } = useTranslation();
     
    const handleSignatureEnd = (e?: any) => {
        // console.log('this is the end e : ', e)
        onChange && onChange(canvasRef.current?.toDataURL(), 'signature')
        
    }

    const clearCanvas = () => {
        // console.log("canvas ref: ", canvasRef)
        canvasRef.current?.clear()
        handleSignatureEnd()
        onChange && onChange('', 'signature')
        
    }
    const handleCanvasSubmit = () => {
        // console.log('canvas submitted: ', canvasRef.current?.toDataURL())
    }




  return (
    <>
    <h5 className='mb-3 font-semibold'>Signature:</h5>
    <SignatureCanvas penColor='black'
          canvasProps={{ className: 'sigCanvas w-full h-full h-60 rounded-lg bg-white' }}
          onEnd={handleSignatureEnd}
          ref={canvasRef}
          />
          <div className='w-full flex justify-end py-2'>
            <button type='button' onClick={clearCanvas} className={'border-2 border-gray-300 rounded-lg p-3'}>{t('CLEAR')}</button>

          </div>
          {/* <button type='button' className='border broder-orange-400 p-4' onClick={handleCanvasSubmit}>submit</button> */}
    </>
  )
}

export default SignatureInput