import React, { Suspense } from 'react';
import Image from 'next/image';

import AppBar from '@/components/appbar';

import backgroundImage from '@/assets/images/background-image.svg'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className='relative flex flex-col items-start lg:items-center justify-start min-h-screen w-full'>
        <Image src={backgroundImage} alt='Background image' className='hidden lg:block absolute right-12 bottom-12 w-80 z-0' />
        <div className='flex flex-col lg:flex-row items-start mr-auto ml-auto gap-y-5 max-w-4xl w-full z-10'>
          <AppBar />
          {children}
        </div>
      </div>
    </Suspense>

  )
}

export default HomeLayout