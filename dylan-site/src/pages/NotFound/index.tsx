import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Blog() {
  return (
    <div className='w-full h-[100dvh] bg-black'>
      <div className='m-5 absolute text-white z-20'>
        <Link href="/">
          <p className='text-white small-caps'>&#60; back </p>
        </Link>
      </div>
      <div className='text-white h-full relative mx-5'>
        <div className=' absolute top-[50%] translate-y-[-50%] border-y-2 border-gray-600 w-full p-5 sm:max-w-sm '>
          <Typewriter
                options={{
                  strings: ['Under Development', 'Check Back Soon'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 80,
                }}
              />
        </div>
      </div>
    </div>
  )
}
