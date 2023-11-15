import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NavigationMenuPages () {
  return (
    <div className='flex w-full flex-1 border-t border-t-zinc-100 lg:border-none'>
      <ul className='p-8 space-y-4 lg:flex lg:p-0 lg:space-y-0 lg:space-x-4 md:text-sm'>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Produtos</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Simular</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Inspiração</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Onde encontrar</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Lançamentos 2023</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Match Colors</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>DEXperience</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Trabalhe conosco</p>
            <ArrowRight className='lg:hidden' size={24} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
