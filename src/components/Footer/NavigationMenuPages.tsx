import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NavigationMenuPages () {
  return (
    <div className='border-t border-t-zinc-100'>
      <ul className='p-8 space-y-4'>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Produtos</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Simular</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Inspiração</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Onde encontrar</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Lançamentos 2023</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Match Colors</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>DEXperience</p>
            <ArrowRight size={24} />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex w-full justify-between text-zinc-100 items-center'>
            <p className='font-bold'>Trabalhe conosco</p>
            <ArrowRight size={24} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
