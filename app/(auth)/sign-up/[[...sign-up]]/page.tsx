import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='w-full mt-16 flex justify-center items-center'>
      <SignUp />
    </div>)
}

export default SignUpPage;