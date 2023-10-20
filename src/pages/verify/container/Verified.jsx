import { React, useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../../../components/ui/button';
import { getImage } from '../../../../utils';
import { useNavigate } from 'react-router-dom';

export default function Verified(props) {
  const { name, age, sex } = props;
  const navigate = useNavigate();
  return (
    <section className='h-screen bg-slate-100'>
      <div className='relative container mx-auto flex justify-center items-center w-full  max-w-sm h-[80%] text-center'>
        <div className=''>
          <img
            src={getImage('verified_nft.svg')}
            alt='verified'
            className='rounded-full justify-center w-1/2 mx-auto'
          />
          <h3 className='text-black text-2xl font-bold'>Congratulations</h3>
          <p className='text-base text-black mb-6'>You're verified!</p>
          <div className='px-2 flex flex-col gap-y-4'>
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
          </div>
          <div
            className='absolute bottom-2 left-1/2 -translate-x-1/2'
            onClick={() => navigate('/create')}
          >
            <Button variant={'default'}>Continue</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
