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
    <section className='h-screen bg-slate-100'>
      <div className='container mx-auto flex justify-center items-center w-full h-full py-24 max-w-sm'>
        <div className='flex flex-col gap-y-6'>
          <div>
            <h2 className='text-2xl leading-7 text-black'>Photos & videos</h2>
            <p className='text-base text-lightGray leading-5 mb-4'>
              Tell a story with your best photos
            </p>
          </div>
          <div>
            <Label htmlFor='upload-picture'>Upload Picture</Label>
            <div className='flex gap-x-2 items-center'>
              <Input
                type='file'
                placeholder='upload a picture'
                onChange={handleChange}
                id='upload-picture'
              />
            </div>
          </div>
          <img src={file} />
          <Button onClick={() => {}} className='w-full max-w-[160px] mx-auto h-auto my-0'>
            Start matching
          </Button>
          <Button variant='outline' className={'w-[160px] mx-auto h-auto'} onClick={() => {}}>
            Skip
          </Button>
        </div>
      </div>
    </section>
  );
}
