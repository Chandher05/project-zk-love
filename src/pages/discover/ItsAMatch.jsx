import React from 'react';
import { getImage } from '../../../utils';
import { Button } from '../../../components/ui/button';

export default function ItsAMatch() {
  const name = 'Chandher';

  const startChat = () => {
    console.log('test');
  };
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm login-bg flex items-center justify-center px-0'>
        <div className='text-center'>
          <h1 className='text-white text-[48px] leading-[56px]'>It's a match</h1>
          <p className='text-base text-[#f2f2f2] mb-6'>You and {name} liked each other</p>
          <div className='flex justify-center items-center mb-16'>
            <img src={getImage('match_1.png')} alt='match 1' />
            <img src={getImage('match_2.png')} alt='match 2' className='-ml-6' />
          </div>
          <div className='flex flex-col gap-y-4'>
            <a href='/chat'>
              <Button variant='white' className='w-full' onClick={startChat}>
                Start Conversation
              </Button>
            </a>
            <Button variant='secondary'>Keep Swiping</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
