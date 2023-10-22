import React from 'react';
import { getImage } from '../../../utils';
import { Button } from '../../../components/ui/button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ItsAMatch() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { name, addr, profile } = state;

  const startChat = () => {
    console.log('test');
    navigate(`/chat/${addr}`);
  };

  const navigateBack = () => {
    navigate(`/swipe`);
  };

  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm login-bg flex items-center justify-center px-0'>
        <div className='text-center'>
          <h1 className='text-white text-[48px] leading-[56px]'>It's a match</h1>
          <p className='text-base text-[#f2f2f2] mb-6'>You and {name} liked each other</p>
          <div className='flex justify-center items-center mb-16'>
            <img src={profile} alt='match 1' className='h-20 rounded-full' />
            <img src={getImage('match_1.png')} alt='match 2' className='-ml-6 h-20 rounded-full' />
          </div>
          <div className='flex flex-col gap-y-4'>
            <a href='/chat'>
              <Button variant='white' className='w-full' onClick={startChat}>
                Start Conversation
              </Button>
            </a>
            <Button variant='secondary' onClick={navigateBack}>
              Keep Swiping
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
