import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { profileIntrests } from '../../../constants';
import { getImage } from '../../../utils';
import { Footer } from '../chat/ChatOverview';
import { TablelandInit, readFromTable } from '../../configs/tableland-config';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ProfileSwipe(props) {
  const [showProfile, setShowProfile] = useState(true);
  const [profiles, setProfiles] = useState([]);

  const [noProfile, setNoProfile] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [match, setMatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    TablelandInit();

    async function read() {
      const results = await readFromTable();
      setProfiles(results.filter((profile) => profile.gender != 'Male'));
    }
    read();
  }, []);
  console.log(showProfile, 'show profile');

  const setProfileIndex = (index, match) => {
    // write into match

    if (index + 1 >= profiles.length) {
      setNoProfile(true);
    }

    if (index + 1 < profiles?.length) {
      setSelectedIndex(index + 1);
    }

    if (match) {
      navigate('/match', {
        state: {
          name: profiles[index].name,
          addr: profiles[index].addr,
          profile: profiles[index].profile,
        },
      });
      // return <Navigate to='/match'></Navigate>;
    }
  };
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='relative container mx-auto w-full h-full max-w-sm bg-slate-100 px-0'>
        <div className='w-full h-14 bg-white flex justify-center items-center'>
          <p className='text-2xl leading-7 mt-2'>Discover</p>
        </div>
        {noProfile && (
          <div>
            <NoProfileToShow></NoProfileToShow>
          </div>
        )}
        {showProfile && !noProfile ? (
          <div className='flex'>
            <SwipeProfileCard
              key={selectedIndex}
              setShowProfile={setShowProfile}
              profileData={profiles}
              index={selectedIndex}
              setProfileIndex={setProfileIndex}
            />
          </div>
        ) : (
          !noProfile && (
            <ProfileCard setShowProfile={setShowProfile} profile={profiles[selectedIndex]} />
          )
        )}
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export const Header = () => {
  return (
    <div className='w-full flex items-center justify-between mb-5 py-5 px-2'>
      <a href='/home'>
        <img src={getImage('chevron_left.svg')} alt='go back' />
      </a>
      <h1 className='text-2xl text-black leading-7'>Discover</h1>
      <img src={getImage('menu_icon.svg')} alt='more' />
    </div>
  );
};

export const SwipeProfileCard = (props) => {
  const { setShowProfile, profileData, setProfileIndex, index } = props;
  console.log({ profileData });

  const matchAndSwipe = () => {
    // MATCH
    setProfileIndex(index, true);
  };
  const rejectAndSwipe = () => {
    // MATCH
    setProfileIndex(index, false);
  };
  return (
    <div className='w-3/4 flex flex-col space-between h-[80vh]  justify-center  mx-auto transition-all duration-500 ease-in-out'>
      <div
        onClick={() => {
          setShowProfile(false);
        }}
        className='h-[80%] flex items-center justify-center'
      >
        <img
          src={profileData[index]?.profile}
          alt='profile image'
          className='w-full mb-4 cursor-pointer'
        />
      </div>
      <div className='bg-black/10 rounded-lg px-2 py-2 flex items-center justify-between h-fit'>
        <div className='flex items-center gap-x-1'>
          <p className='text-base'>{profileData[index]?.name}</p>
          <Separator orientation='vertical' className='bg-lightGray h-[16px]' />
          <p className='text-lightGray text-base'>Age {profileData[index]?.age}</p>
        </div>

        <div className='p-1 bg-[#219653] rounded-lg flex items-center justify-center text-slate-100 text-sm'>
          Verified
        </div>
      </div>

      <div className='bg-black/10 rounded-lg px-2 py-2 mt-5 flex items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <p className='text-base'>{profileData[index]?.bio}</p>
        </div>
      </div>

      <div className='flex items-center justify-between p-2 my-3'>
        <button
          className='rounded-full bg-white flex justify-between items-center p-4'
          onClick={rejectAndSwipe}
        >
          <img src={getImage('cross_red.svg')} alt='cross' className='w-14 h-14' />
          {/* DONT MATCH BUT MOVE TO NEXT PROFILE  */}
        </button>
        <button
          className='rounded-full bg-primary-700 flex justify-between items-center p-4'
          onClick={matchAndSwipe}
        >
          {/* MATCH TO NEXT PROFILE  */}
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
      <img src={profile?.profile} alt='profile' className='w-full h-[35%] object-cover mb-4' />
      <div className='flex flex-col gap-y-6 px-3'>
        <div>
          <p className='text-base font-semibold leading-4'>{profile.name}</p>
          <p className='text-base text-lightGray'>{`Age: ${profile.age}`}</p>
        </div>
        {/* <div>
          <p className='text-base font-semibold leading-4'>{'Place'}</p>
          <p className='text-base text-lightGray'>{profile.place}</p>
        </div> */}
        <div>
          <p className='text-base font-semibold leading-4'>About</p>
          <p className='text-base text-lightGray'>{profile.bio}</p>
        </div>
        <div>
          <p className='text-base font-semibold leading-4 mb-2'>Passions</p>
          <div className='flex gap-2 flex-wrap'>
            {profile?.passions?.map((_intrest) => {
              return (
                <Badge variant='outline' key={_intrest} className={`px-4 py-2`}>
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

function NoProfileToShow() {
  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-lg font-bold h-screen'>No more profiles left</h1>
    </div>
  );
}
