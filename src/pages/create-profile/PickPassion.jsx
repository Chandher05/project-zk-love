import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { profileIntrests } from '../../../constants';

export default function PickPassion({ setProfile }) {
  const [selected, setSelected] = useState([]);

  const addPassion = (value) => {
    setSelected((prev) => [...prev, value]);
  };

  const removePassion = (value) => {
    setSelected((prev) => prev.filter((val) => val != value));
  };

  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm bg-slate-100 flex justify-center relative px-0'>
        <div className='flex flex-col gap-y-8 mt-24 px-2'>
          <div>
            <h2 className='text-2xl leading-7 text-black'>Passion</h2>
            <p className='text-base text-lightGray leading-5'>Pick a passion to find your tribe</p>
          </div>
          <div className='flex flex-wrap gap-x-2 gap-y-3'>
            <div className='flex flex-wrap gap-4'>
              {profileIntrests.map((interest) => {
                return <BadgeButton interest={interest} add={addPassion} remove={removePassion} />;
              })}
            </div>
            <div>
              <h3 className='text-base text-lightGray leading-5 mb-3'>Add custom tag</h3>
              <div className='flex gap-x-2 items-center'>
                <Input
                  type='text'
                  placeholder='Enter a custom tag'
                  className='rounded-full placeholder:pl-4 px-4'
                />
                <Button type='submit' variant='outline' className='rounded-full text-primary-100'>
                  Add
                </Button>
              </div>
            </div>
            <Button variant={'default'} className='absolute bottom-8 left-1/2 -translate-x-1/2'>
              All set
            </Button>
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2' onClick={() => {}}>
              <Button
                variant={'default'}
                className='w-full m-0'
                onClick={() => setProfile({ passions: selected })}
              >
                All set
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeButton({ interest, add, remove }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Badge
      variant='outline'
      key={interest}
      className={`cursor-pointer ${active ? 'bg-slate-700 text-slate-100' : ''}`}
      onClick={() => {
        if (active) {
          remove(interest);
        } else {
          add(interest);
        }
        setActive((prev) => !prev);
      }}
    >
      {interest}
    </Badge>
  );
}
