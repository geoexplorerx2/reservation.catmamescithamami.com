import React, { FC, useRef } from 'react'
import ReactSignatureCanvas from 'react-signature-canvas'
import SignatureCanvas from 'react-signature-canvas'

interface SignatureInputType {
    onChange?: (e: any, inputType: string) => void
}

const SignatureInput: FC<SignatureInputType> = ({onChange}) => {
    const canvasRef = useRef<ReactSignatureCanvas>(null)
     
    const handleSignatureEnd = (e?: any) => {
        console.log('this is the end e : ', e)
        onChange && onChange(canvasRef.current?.toDataURL(), 'signature')
        
    }

    const clearCanvas = () => {
        console.log("canvas ref: ", canvasRef)
        canvasRef.current?.clear()
        handleSignatureEnd()
        onChange && onChange('', 'signature')
        
    }
    const handleCanvasSubmit = () => {
        console.log('canvas submitted: ', canvasRef.current?.toDataURL())
    }




  return (
    <>
    <SignatureCanvas penColor='black'
          canvasProps={{ className: 'sigCanvas w-full border border-orange-400 h-full h-60' }}
          onEnd={handleSignatureEnd}
          ref={canvasRef}
          />
          <button type='button' onClick={clearCanvas}>clear Canvas</button>
          <button type='button' className='border broder-orange-400 p-4' onClick={handleCanvasSubmit}>submit</button>
    </>
  )
}

export default SignatureInput