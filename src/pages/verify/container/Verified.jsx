import { React, useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../../../components/ui/button';
import { getImage } from '../../../../utils';
import { useNavigate } from 'react-router-dom';

export default function Verified(props) {
  const navigate = useNavigate();
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm bg-slate-100 flex items-center justify-center relative'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={getImage('verified_nft.svg')}
            alt='verified'
            className='rounded-full justify-center w-1/2 mx-auto'
          />
          <h3 className='text-black text-2xl font-bold'>Congratulations</h3>
          <p className='text-base text-black mb-5'>You're verified!</p>
          <div className='px-2 flex flex-col gap-y-4 mb-4'>
            <input
              type='text'
              placeholder='Name'
              className='input w-full rounded-r-full rounded-l-full h-10 border-slate-200'
            />
            <div className='flex gap-4 justify-between'>
              <input
                type='text'
                placeholder='Age'
                className='input w-[45%] rounded-r-full rounded-l-full h-10 border-slate-200'
              />{' '}
              <input
                type='text'
                placeholder='Gender'
                className='input w-[45%] rounded-r-full rounded-l-full h-10 border-slate-200'
              />
            </div>
            <textarea
              type='text'
              placeholder={`Hey there! Make your profile more interesting \n by adding a few lines about yourself.\n Hobbies, interests, books, movies, or TV shows.`}
              className='textarea w-full rounded-xl h-28 border-slate-200 placeholder:text-sm'
            />
          </div>
          {/* <div
            className='absolute bottom-8 left-1/2 -translate-x-1/2'
            onClick={() => navigate('/create')}
          >
            <Button variant={'default'} className='w-full'>
              Continue
            </Button>
          </div> */}
          <Button variant={'default'} className='absolute bottom-8 left-1/2 -translate-x-1/2'>
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
