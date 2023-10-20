import { React, useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../../../components/ui/button';
import { SismoConnectButton } from '@sismo-core/sismo-connect-react';
import { CONFIG, AUTHS, CLAIMS, SIGNATURE_REQUEST } from '../../../configs/sismo-config';

import Verified from './Verified';

export default function Verify() {
  const [url, setUrl] = useState('https://blocktheory.com/');
  const ref = useRef(null);
  const [sismoConnectVerifiedResult, setSismoConnectVerifiedResult] = useState();
  const [sismoConnectResponse, setSismoConnectResponse] = useState();
  const [pageState, setPageState] = useState('init');
  const [error, setError] = useState('');

  // useEffect(() => {
  //   qrCode.append(ref.current);
  // }, []);

  // useEffect(() => {
  //   qrCode.update({
  //     data: url,
  //   });
  // }, [url]);
  // const qrCode = new QRCodeStyling({
  //   width: 200,
  //   height: 200,
  //   backgroundOptions: {
  //     color: '#ffffff',
  //   },
  //   dotsOptions: {
  //     color: '#010101',
  //     type: 'rounded',
  //   },
  //   imageOptions: {
  //     crossOrigin: 'anonymous',
  //     margin: 20,
  //   },
  // });
  if (pageState == 'verified') {
    return <Verified></Verified>;
  }

  return (
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto flex justify-center items-center w-full h-[600px] max-w-sm'>
        <div className=''>
          <h3 className='text-2xl m-2 text-center'>Hey! Need you to verify your credentials. ?</h3>
          <p className='text-base text-center text-lightGray leading-6'>
            We want to know its really you. Verify yourself by clicking the button below
          </p>
          {/* <div ref={ref} className='mx-auto w-[200px] mt-4 mb-2'></div>
          <p className='text-center text-lightGray text-base'>Scan the QR code</p> */}
          <div className='self-center mx-auto my-10 text-center'>
            {/* <Button variant={'default'}>Tap to verify</Button> */}
            <SismoConnectButton
              config={CONFIG}
              // Auths = Data Source Ownership Requests. (e.g Wallets, Github, Twitter, Github)
              auths={AUTHS}
              // Claims = prove group membership of a Data Source in a specific Data Group.
              // (e.g ENS DAO Voter, Minter of specific NFT, etc.)
              // Data Groups = [{[dataSource1]: value1}, {[dataSource1]: value1}, .. {[dataSource]: value}]
              // Existing Data Groups and how to create one: https://factory.sismo.io/groups-explorer
              claims={CLAIMS}
              // Signature = user can sign a message embedded in their zk proof
              signature={SIGNATURE_REQUEST}
              text='Prove With Sismo'
              // Triggered when received Sismo Connect response from user data vault
              onResponse={async (response) => {
                setSismoConnectResponse(response);
                setPageState('verifying');
                const verifiedResult = await fetch('http://localhost:3000/api/verify', {
                  method: 'POST',
                  body: JSON.stringify(response),
                });
                const data = await verifiedResult.json();
                if (verifiedResult.ok) {
                  console.log('verified');
                  setSismoConnectVerifiedResult(data);
                  setPageState('verified');
                  confirm('Proofs are verified! Create your profile');
                } else {
                  setPageState('error');
                  setError(data);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
