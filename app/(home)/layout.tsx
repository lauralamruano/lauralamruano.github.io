import React, { Suspense } from 'react'

import AppBar from '@/components/appbar'

const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Suspense>
        <div className='flex flex-col items-start justify-start min-h-screen'>
            <div className='flex flex-col items-start mr-auto ml-auto gap-y-5'>
                <AppBar/>
                {children}                
            </div>
        </div>
    </Suspense>

  )
}

export default HomeLayout