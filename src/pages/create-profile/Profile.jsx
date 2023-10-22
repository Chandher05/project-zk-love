import { useState } from 'react';
import { Footer } from '../chat/ChatOverview';
import { getImage } from '../../../utils';
import { Button } from '../../../components/ui/button';
import { readMyProfile } from '../../configs/tableland-config';

export default function Profile() {
  // await web3auth.logout();
  // const id = localStorage.getItem('addr');
  const id = '0xdbd71c0b92caa92e37b2bcc43019f38947a2b0e6';
  const profile = readMyProfile({ id });
  console.log('Check profile', id);
  // get from tableland for the address

  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm relative bg-slate-100 px-0'>
        <div className='profile-bg w-full h-full'>
          <div className='w-full h-[30%] text-center'>
            <p className='text-white text-lg pt-8'>Profile</p>
          </div>
          <div className='w-full h-[70%] bg-white rounded-t-lg'>
            <AgeNameComp name={profile.name} age={profile.age} sex={profile.sex} />
            <div className='flex flex-col items-center justify-center mt-6 gap-y-1'>
              {/* <img src={getImage('upload_icon.svg')} alt='' className='w-14 h-14' />
              <p className='text-black/30 text-sm mb-10'>Add photos</p> */}
              <div className='flex flex-col gap-y-2 w-full items-center justify-center mt-12'>
                <Button variant='secondary'>Your Profile is verified</Button>
                <Button variant='ghost' className='text-primary-700 text-base'>
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <img
            src={profile.profile}
            alt='profile image'
            className='absolute w-[40%] top-[18%] left-1/2 -translate-x-1/2 rounded-full border-[10px] border-[#F29305]'
          />
          <div className='absolute bottom-0 w-full left-0 container'>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

//
//
//Age and Name Component
export const AgeNameComp = (props) => {
  const { name, age, sex } = props;
  return (
    <div className='flex flex-col items-center justify-center pt-24'>
      <div className='flex gap-x-2 items-center'>
        <p>{name ?? 'John Wick'}</p>
        <a href='/verified'>
          <img src={getImage('edit_icon.svg')} alt='edit' className='w-4' />
        </a>
      </div>
      <div className='flex items-center justify-center gap-x-5'>
        <p>{`Age ${age ?? '30'}`}</p>
        <div className='w-[1px] h-[14px] bg-black'></div>
        <p>{sex ?? 'Male'}</p>
      </div>
    </div>
  );
};
