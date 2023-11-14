import Image from 'next/image'
import logo from 'public/images/logo.svg'

import { MobileMenu } from './MobileMenu'

export default function Header () {
  return (
    <header className='w-full bg-zinc-100'>
      <div className='relative flex w-full justify-center items-center py-4 px-2'>
        <MobileMenu />
        <div className='flex w-full justify-center items-center'>
          <Image width={160} src={logo} alt='CEUSA' />
        </div>
      </div>
    </header>
  )
}
