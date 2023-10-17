import React from 'react';
import { getImage } from '../../../../utils';

export default function Login() {
  return (
    <section className='h-screen login-bg'>
      <div className='container mx-auto flex justify-center items-center w-full max-w-sm h-[600px]'>
        <div>
          <img
            src={getImage('logo_with_text.png')}
            alt='safe-date-logo'
            className='w-32 mb-24'
          ></img>
          <h3 className='text-white/50 text-center'>Login</h3>
        </div>
      </div>
    </section>
  );
}
