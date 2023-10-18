import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { profileIntrests } from '../../../constants';
import { getImage } from '../../../utils';

const dummyProfile = {
  profile_img: 'profile_image_1.png',
  name: 'Effie Robinson',
  age: '28',
  place: 'New York',
  about:
    "Hey there! I'm a 25-year-old travel enthusiast who's always up for an adventure. I'm looking for someone who is kind, funny, and loves to explore new places.",
  intrests: ['Sports', 'Music', 'Travel', 'Photography', 'Camping', 'Dancing', 'Gadget freak'],
};

export default function ProfileSwipe(props) {
  const [showProfile, setShowProfile] = useState(true);
  console.log(showProfile, 'show profile');
  return (
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto w-full h-full py-24 max-w-sm'>
        {showProfile ? (
          <>
            <Header />
            <SwipeProfileCard setShowProfile={setShowProfile} />
          </>
        ) : (
          <ProfileCard setShowProfile={setShowProfile} profile={dummyProfile} />
        )}
      </div>
    </section>
  );
}

export const Header = () => {
  return (
    <div className='w-full flex items-center justify-between mb-10'>
      <a href='/home'>
        <img src={getImage('chevron_left.svg')} alt='go back' />
      </a>
      <h1 className='text-2xl text-black leading-7'>Discover</h1>
      <img src={getImage('menu_icon.svg')} alt='more' />
    </div>
  );
};

export const SwipeProfileCard = (props) => {
  const { setShowProfile } = props;
  return (
    <div className='w-3/4 flex flex-col justify-center mx-auto'>
      <div
        onClick={() => {
          setShowProfile(false);
        }}
      >
        <img
          src={getImage('profile_image_1.png')}
          alt='profile image'
          className='w-full mb-4 cursor-pointer'
        />
      </div>
      <div className='bg-black/10 rounded-lg px-2 py-2 flex items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <p className='text-base'>Effie Robinson</p>
          <Separator orientation='vertical' className='bg-lightGray h-[16px]' />
          <p className='text-lightGray text-base'>Age 28</p>
        </div>
        <div className='p-1 bg-[#219653] rounded-lg flex items-center justify-center text-slate-100 text-sm'>
          Verified
        </div>
      </div>
      <div className='flex items-center justify-between p-2 mt-2'>
        <button className='rounded-full bg-white flex justify-between items-center p-4'>
          <img src={getImage('cross_red.svg')} alt='cross' className='w-14 h-14' />
        </button>
        <button className='rounded-full bg-primary-700 flex justify-between items-center p-4'>
          <img src={getImage('heart_white.svg')} alt='cross' className='w-14 h-14' />
        </button>
      </div>
    </div>
  );
};

export const ProfileCard = (props) => {
  const { setShowProfile, profile } = props;
  return (
    <div className='w-full h-full relative'>
      <img
        src={getImage(profile.profile_img)}
        alt='profile'
        className='w-full h-[35%] object-cover mb-4'
      />
      <div className='flex flex-col gap-y-3 px-2'>
        <div>
          <p className='text-base font-semibold leading-4'>{profile.name}</p>
          <p className='text-base text-lightGray'>{`Age: ${profile.age}`}</p>
        </div>
        <div>
          <p className='text-base font-semibold leading-4'>{'Place'}</p>
          <p className='text-base text-lightGray'>{profile.place}</p>
        </div>
        <div>
          <p className='text-base font-semibold leading-4'>About</p>
          <p className='text-base text-lightGray'>{profile.about}</p>
        </div>
        <div>
          <p className='text-base font-semibold leading-4 mb-2'>Intrests</p>
          <div className='flex gap-2 flex-wrap'>
            {profile.intrests.map((_intrest) => {
              return (
                <Badge variant='outline' key={_intrest} className={`cursor-pointer px-2 py-1`}>
                  {_intrest}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className='absolute left-4 top-4 p-1 bg-white/50 rounded-lg'
        onClick={() => {
          setShowProfile(true);
        }}
      >
        <img src={getImage('chevron_left.svg')} alt='go back' />
      </button>
    </div>
  );
};