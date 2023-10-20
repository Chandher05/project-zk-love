import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { profileIntrests } from '../../../constants';

export default function PickPassion() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-[80%] max-w-sm bg-slate-100 flex items-center justify-center relative'>
        <div className='flex flex-col gap-y-8'>
          <div>
            <h2 className='text-2xl leading-7 text-black'>Passion</h2>
            <p className='text-base text-lightGray leading-5 mb-4'>
              Pick a passion to find your tribe
            </p>
          </div>
          <div className='flex flex-wrap gap-4'>
            {profileIntrests.map((_intrest) => {
              const [active, setActive] = useState(false);
              const handleClick = () => {
                setActive(!active);
              };
              return (
                <Badge
                  variant='outline'
                  key={_intrest}
                  className={`cursor-pointer ${active ? 'bg-slate-700 text-slate-100' : ''}`}
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {_intrest}
                </Badge>
              );
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
              <Button type='submit' variant='outline' className='rounded-full'>
                Add
              </Button>
            </div>
          </div>
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2' onClick={() => {}}>
            <Button variant={'default'} className='w-full m-0'>
              All set
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
