import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const CompanyRelatedInformation = () => {
  const [ isChecked, setIsChecked ] = useState<boolean>(false)
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    if(isModalOpen){
      setIsModalOpen(false)
    }
  }

  return (
    <div className='container font-poppins'>
      <p className='font-bold py-6'>English</p>
      <p className='mb-4 text-sm'>
        So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's like the props in a furniture store—filler text makes it look like someone is home. The same Wordpress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like.
      </p>
      <p className='mb-4  text-sm'>  
        Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to keep everyone focused.
      </p>
      <p className='mb-4  text-sm'>
        One word of caution: make sure your client knows that lorem ipsum is filler text. You don't want them wondering why you filled their website with a foreign language, and you certainly don't want anyone prematurely publishing it.
      </p>

      <p className='font-bold py-6'>Türkçe</p>
      <p className='mb-4  text-sm'>
        So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's like the props in a furniture store—filler text makes it look like someone is home. The same Wordpress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like.
      </p>
      <p className='mb-4  text-sm'>
        Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to keep everyone focused.
      </p>
      <p className='mb-4  text-sm'>  
        One word of caution: make sure your client knows that lorem ipsum is filler text. You don't want them wondering why you filled their website with a foreign language, and you certainly don't want anyone prematurely publishing it.
      </p>
      <div className='w-full border border-orange-400'>
          <label>
            <input id="termsOfService" type='checkbox' className='mr-4 rounded-full' checked={isChecked} onChange={handleChange}/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis sint quia minus facilis itaque? Molestias placeat, eligendi consequuntur ut laborum voluptatum aliquam quam debitis. Eveniet nostrum fugit inventore nisi. 
          </label>
          <Modal show={isModalOpen} OnCloseModal={closeModal} children={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tempora molestiae vitae eaque voluptates aspernatur reprehenderit obcaecati doloremque? Doloremque, maxime.</p>} />
      </div>
    </div>
  )
}

export default CompanyRelatedInformation;