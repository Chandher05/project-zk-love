import { React, useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../../../components/ui/button';

export default function Verify() {
  const [url, setUrl] = useState('https://blocktheory.com/');
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);
  const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    backgroundOptions: {
      color: '#ffffff',
    },
    dotsOptions: {
      color: '#010101',
      type: 'rounded',
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 20,
    },
  });
  return (
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto flex justify-center items-center w-full h-full max-w-sm'>
        <div className=''>
          <h3 className='text-2xl mb-2'>Are You Human?</h3>
          <p className='text-base text-lightGray leading-6'>
            We want to know its really you. Verify yourself by scanning the QR code or tapping on
            the CTA.
          </p>
          <div ref={ref} className='mx-auto w-[200px] mt-4 mb-2'></div>
          <p className='text-center text-lightGray text-base'>Scan the QR code</p>
          <div className='self-center mx-auto w-36'>
            <Button variant={'default'}>Tap to verify</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
