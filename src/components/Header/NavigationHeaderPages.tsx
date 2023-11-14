import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/logo.svg'

export default function NavigationHeaderPages () {
  return (
    <div className='flex w-full justify-center lg:justify-between items-center'>
      <ul className='hidden lg:flex gap-4 xl:text-base lg:text-sm'>
        <li>
          <Link href='/'>
            Produtos
          </Link>
        </li>
        <li>
          <Link href='/'>
            Simular
          </Link>
        </li>
        <li>
          <Link href='/'>
            Inspiração
          </Link>
        </li>
        <li>
          <Link href='/'>
            Onde encontrar
          </Link>
        </li>
      </ul>
      <Image width={160} src={logo} alt='CEUSA' />
      <ul className='hidden lg:flex gap-4 xl:text-base lg:text-sm'>
        <li>
          <Link href='/'>
            Lançamentos 2023
          </Link>
        </li>
        <li>
          <Link href='/'>
            Match Colors
          </Link>
        </li>
        <li>
          <Link href='/'>
            DEXperience
          </Link>
        </li>
      </ul>
    </div>
  )
}
