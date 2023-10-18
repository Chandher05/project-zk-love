import React from 'react';
import { getImage } from '../../../../utils';
import { Button } from '../../../../components/ui/button';
import { useState, useEffect } from 'react';
import {
  oauthClientId,
  polygonTestnet,
  productName,
  web3AuthClientId,
  web3AuthLoginType,
  web3AuthVerifier,
} from '../../../../constants';

export default function Login() {
  return (
    <section className='h-screen flex items-center'>
      <div className='container mx-auto w-full h-[80%] py-24 max-w-sm login-bg'>
        <div className='flex flex-col items-center'>
          <img
            src={getImage('logo_with_text.png')}
            alt='safe-date-logo'
            className='w-32 mb-24'
          ></img>
          <Button
            variant={'secondary'}
            // onClick={() => {
            //   signIn();
            // }}
          >
            Continue with Google
          </Button>
          <h3 className='text-white/50 text-center'>Login</h3>
        </div>
      </div>
    </section>
  );
}
