import { React, useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../../../components/ui/button';
import { getImage } from '../../../../utils';

export default function Verified(props) {
  const { name, age, sex } = props;
  return (
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto flex justify-center items-center w-full  max-w-sm h-[600px] text-center'>
        <div className=''>
          <img
            src={getImage('verified_green.svg')}
            alt='verified'
            className='rounded-full justify-center w-2/3 mx-auto'
          />
          <h3 className='text-black text-2xl font-bold'>Congratulations</h3>
          <p className='text-base text-black'>You're verified!</p>
          <p>{name ?? 'John Wick'}</p>
          <div className='flex items-center justify-center gap-x-5'>
            <p>{`Age ${age ?? '30'}`}</p>
            <div className='w-[1px] h-[14px] bg-black'></div>
            <p>{sex ?? 'male'}</p>
          </div>
          <div className='self-center mx-auto w-36'>
            <Button variant={'default'}>Continue</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
