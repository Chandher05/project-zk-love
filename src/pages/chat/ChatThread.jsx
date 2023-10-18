import { useParams } from 'react-router-dom';
import { getImage } from '../../../utils';
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

export const ChatThread = (props) => {
  const { id } = useParams();
  const thread = dummyMsgData.filter((msg) => msg.id == id)[0];
  console.log(id, 'id from thread');
  console.log(thread, 'thread thread thread');
  return (
    <section className='h-screen bg-slate-100 flex items-center justify-center'>
      <div className='relative container mx-auto w-full h-[80%] max-w-sm'>
        <ChatHeader image={thread.image} name={thread.name} />
        <div className='flex flex-col'>
          <div className='chat chat-start'>
            <div className='chat-bubble bg-slate-300 text-black'>
              It's over Anakin, <br />I have the high ground.
            </div>
          </div>
          <div className='chat chat-end'>
            <div className='chat-bubble bg-primary-100'>You underestimate my power!</div>
          </div>
        </div>
        <div className='container absolute bottom-0 left-0 w-full'>
          <ChatInput />
        </div>
      </div>
    </section>
  );
};
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
export const ChatInput = () => {
  return (
    <div className='w-full bg-white h-14 flex justify-between items-center'>
      <input type='text' placeholder='start typing' className='placeholder:pl-4' />
      <img src={getImage('chevron_left.svg')} alt='back' className='rotate-180' />
    </div>
  );
};
