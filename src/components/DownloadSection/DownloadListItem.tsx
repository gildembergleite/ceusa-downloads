import Image from 'next/image'
import { ArrowDownToLine } from 'lucide-react'
import Link from 'next/link'

import logo from 'public/images/logo-white.svg'

export default function DownloadListItem () {
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex justify-center items-center w-12 h-12 bg-primary rounded-md'>
        <Image src={logo} alt='' />
      </div>
      <p className='flex-1 text-center text-xs text-zinc-500 font-bold px-8'>
            REVISTA LANÇAMENTOS 2023
      </p>
      <Link
        href='/downloads/revista-ceusa-2023-site_66.pdf'
        className='flex w-min h-min items-center gap-2 rounded-none border-2 border-primary text-zinc-600 hover:text-primary hover:bg-transparent font-normal py-0.5 px-2'
        download
      >
        <p className='hidden lg:flex'>Baixar agora</p>
        <ArrowDownToLine className='text-primary' size={18} />
      </Link>
    </div>
  )
}
