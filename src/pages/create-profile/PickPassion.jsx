import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { profileIntrests } from '../../../constants';

export default function PickPassion() {
  return (
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto flex justify-center items-center w-full h-full py-24 max-w-sm'>
        <div className='flex flex-col gap-y-6'>
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
              <Input type='text' placeholder='Enter a custom tag' />
              <Button type='submit' variant='outline'>
                Add
              </Button>
            </div>
          </div>
          <Button onClick={() => {}} className='w-full max-w-[120px] mx-auto'>
            All set
          </Button>
        </div>
      </div>
    </section>
  );
}
