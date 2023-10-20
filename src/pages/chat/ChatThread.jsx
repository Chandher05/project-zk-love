import { useParams } from 'react-router-dom';
import { getImage } from '../../../utils';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
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

const dummyMsgs = [
  { add: '1234', msg: 'Hey hey' },
  { add: '12', msg: 'Hey there' },
  { add: '1234', msg: 'Hey' },
  { add: '12', msg: 'Hey' },
  { add: '1234', msg: 'Hey' },
  { add: '12', msg: 'Hey' },
  { add: '1234', msg: 'Hey' },
  { add: '12', msg: 'Hey' },
  { add: '1234', msg: 'Hey' },
  { add: '12', msg: 'Hey' },
  { add: '1234', msg: 'Hey' },
  { add: '12', msg: 'Hey' },
];

export const ChatThread = (props) => {
  const [array, setArray] = useState(dummyMsgs);
  const { id } = useParams();
  const thread = dummyMsgData.filter((msg) => msg.id == id)[0];
  console.log(id, 'id from thread');
  console.log(thread, 'thread thread thread');
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(containerRef, 'cont');
    }
  }, [containerRef, array]);
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='relative container mx-auto w-full h-full max-w-sm bg-slate-100 px-0'>
        <ChatHeader image={thread.image} name={thread.name} />
        <div className='flex flex-col h-[calc(90%-60px)] overflow-y-scroll px-1'>
          {array.map((_msg) => {
            return <Message message={_msg.msg} id={_msg.add} />;
          })}
          <div className='w-full h-[1px] bg-transparent' ref={containerRef}></div>
        </div>
        <div className='container absolute bottom-0 left-0 w-full py-4'>
          <ChatInput setArray={setArray} array={array} />
        </div>
      </div>
    </section>
  );
};
console.log(dummyMsgs);
//
//
//CHAT HEADER
export const ChatHeader = (props) => {
  const { image, name } = props;
  return (
    <div className='w-full h-14 bg-white flex justify-start items-center px-4 gap-x-4'>
      <div>
        <a href='/chat'>
          <img src={getImage('chevron_left.svg')} alt='back' />
        </a>
      </div>
      <div className='flex gap-2 items-center'>
        <img src={getImage(image)} alt='profile_img' className='w-8 h-8 rounded-full' />
        <div className='flex flex-col'>
          <p className='text-base text-black font-medium'>{name}</p>
          <p className='text-xs text-lightGray leading-3'>{'online'}</p>
        </div>
      </div>
    </div>
  );
};

//
//
//CHAT INPUT
export const ChatInput = (props) => {
  const { setArray, array } = props;
  const [input, setInput] = useState('');
  const addToArray = () => {
    setArray([...array, { id: '12', msg: input }]);
    setInput('');
  };
  console.log(array, 'array');
  return (
    <div className='w-full h-12 flex justify-between items-center rounded-lg gap-x-2'>
      <input
        type='text'
        placeholder='start typing'
        className='placeholder:pl-4 bg-white w-full h-full px-4 border-black rounded-l-full rounded-r-full'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <img
        src={getImage('chevron_left.svg')}
        alt='back'
        className='rotate-180'
        onClick={addToArray}
      />
    </div>
  );
};

export const Message = (props) => {
  const { message, id } = props;
  console.log(id, 'id');
  return (
    <div className={`chat ${id == '12' ? 'chat-start' : 'chat-end'}`}>
      <div
        className={`chat-bubble ${
          id == '12' ? 'bg-slate-300 text-black' : 'bg-primary-100 text-white'
        } `}
      >
        {message}
      </div>
    </div>
  );
};
