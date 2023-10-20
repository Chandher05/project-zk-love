import { React, useRef, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getImage } from '../../../utils/index';
const dummyMsgData = [
  {
    id: 1,
    image: 'profile_image_1.png',
    name: 'Effie Robinson',
    lastMsg: 'Hey, How are you',
    time: '14:23',
  },
  {
    id: 2,
    image: 'profile_image_1.png',
    name: 'Rachel',
    lastMsg: 'Hey',
    time: '12:34',
  },
  {
    id: 3,
    image: 'profile_image_1.png',
    name: 'Zoey',
    lastMsg: 'Hi',
    time: 'yesterday',
  },
];

export default function ChatOverview() {
  const [showThread, setShowThread] = useState(false);
  const [msgId, setMsgId] = useState(null);
  console.log(msgId, 'msg');
  console.log(showThread, 'showThread');
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='relative container mx-auto w-full h-full max-w-sm bg-slate-100 px-0'>
        <div className='w-full h-14 bg-white flex justify-center items-center'>
          <p className='text-2xl leading-7 mt-2'>Chat</p>
        </div>
        {dummyMsgData.map((_thread) => {
          return (
            <ChatThreads
              id={_thread.id}
              image={_thread.image}
              name={_thread.name}
              lastMsg={_thread.lastMsg}
              time={_thread.time}
              setShowThread={setShowThread}
              setMsgId={setMsgId}
            />
          );
        })}
        <div className='absolute bottom-0 left-0 w-full'>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export const ChatThreads = (props) => {
  const { image, name, lastMsg, time, setMsgId, id, setShowThread } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    setMsgId(id);
    setShowThread(true);
    navigate(`/chat/${id}`);
  };
  return (
    <div
      className='w-full h-12 border-b border-slate-300 flex items-center justify-between px-2 py-1'
      onClick={handleClick}
    >
      <div className='flex gap-2 items-center'>
        <img src={getImage(image)} alt='profile_img' className='w-7 h-7 rounded-full' />
        <div className='flex flex-col'>
          <p className='text-base text-black font-medium'>{name}</p>
          <p className='text-xs text-lightGray leading-3'>{lastMsg}</p>
        </div>
      </div>
      <div>
        <p className='text-lightGray text-xs'>{time}</p>
      </div>
    </div>
  );
};

export const Footer = () => {
  const location = useLocation();
  console.log(location.pathname, 'params');
  return (
    <div className='flex justify-between py-2 px-3 bg-white'>
      <a href='/profile'>
        <img
          src={getImage(
            `${
              location.pathname == '/profile'
                ? 'account_circle_active.svg'
                : 'footer_account_icon.svg'
            }`,
          )}
          alt=''
        />
      </a>
      <a>
        <img src={getImage('footer_search_icon.svg')} alt='' />
      </a>
      <a href='/chat'>
        <img
          src={getImage(
            `${
              location.pathname == '/chat' ? 'footer_chat_icon_active.svg' : 'footer_chat_icon.svg'
            }`,
          )}
          alt=''
        />
      </a>
    </div>
  );
};
