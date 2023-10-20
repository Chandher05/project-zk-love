import { React, useRef, useEffect, useState } from 'react';
import { getImage } from '../../../../utils';
import { Button } from '../../../../components/ui/button';

export default function NotVerified(props) {
  const { ageNotVerified = true } = props;
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm bg-slate-100 flex items-center justify-center relative px-0'>
        <div className='text-center'>
          <h2 className='text-2xl leading-9'>Oops,</h2>
          <p className='text-base mb-16'>your verification didn't go through!</p>
          <img
            src={getImage(`${ageNotVerified ? 'age_not_verified.png' : 'id_not_verified.png'}`)}
            alt='not verified'
            className='w-2/3 mx-auto mb-8'
          />
          <Button className='mb-7'>Re-verify</Button>
          <div className='w-3/4 mx-auto mb-3'>
            {ageNotVerified ? (
              <p className='text-base font-medium'>
                It looks like you're not quite old enough yet.
              </p>
            ) : (
              <p className='text-base font-medium'>
                It seems like the ID you provided doesn't match our records.
              </p>
            )}
          </div>
          <div className='w-3/4 mx-auto'>
            {ageNotVerified ? (
              <p className='text-sm text-lightGray'>
                We know it's a bummer, but we have to follow the rules. Don't worry though, you'll
                be able to join us in no time!
              </p>
            ) : (
              <p className='text-sm text-lightGray'>
                Could you please double-check and make sure you've uploaded the correct ID?
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
