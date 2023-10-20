import { React, useRef, useEffect, useState } from 'react';
import { Badge, badgeVariants } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { profileIntrests } from '../../../constants';

export default function UploadPhoto() {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-[80%] max-w-sm bg-slate-100 flex items-center justify-center relative'>
        <div className='flex flex-col gap-y-6 items-center'>
          <div>
            <h2 className='text-2xl leading-7 text-black'>Photos & videos</h2>
            <p className='text-base text-lightGray leading-5'>Tell a story with your best photos</p>
          </div>
          <div>
            <Label htmlFor='upload-picture'>Upload Picture</Label>
            <div className='flex gap-x-2 items-center'>
              <input
                type='file'
                placeholder='upload a picture'
                onChange={handleChange}
                id='upload-picture'
                className='file-input h-10'
              />
            </div>
          </div>
          <img src={file} className='w-1/2' />
          <div
            className='absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2 flex flex-col gap-y-2'
            onClick={() => {}}
          >
            <Button onClick={() => {}} className='w-full mx-auto h-auto my-0'>
              Start matching
            </Button>
            <Button
              variant='ghost'
              className={'w-full mx-auto h-auto my-0 text-primary-700'}
              onClick={() => {}}
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
