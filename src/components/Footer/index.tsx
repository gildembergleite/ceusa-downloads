import FooterListContainer from './FooterListContainer'
import NavigationMenuPages from './NavigationMenuPages'
import SocialMedia from './SocialMedia'
import Partners from './Partners'
import MobileFooter from './MobileFooter'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='flex justify-center w-full bg-zinc-600'>
      <div className='w-full max-w-7xl'>
        <div className='flex flex-col w-full justify-start py-8 pl-8 pr-24 lg:flex-row'>
          <h2 className='text-zinc-100 text-3xl lg:pt-4'>
          Fale com a Ceusa
          </h2>
          <FooterListContainer />
        </div>
        <div className='w-full lg:flex lg:pt-4 lg:px-6 lg:border-t lg:items-center lg:border-t-zinc-100 justify-between'>
          <NavigationMenuPages />
          <SocialMedia />
        </div>
        <Partners />
        <MobileFooter />
        <div className='hidden lg:flex w-full justify-center items-center text-center text-xs text-zinc-100 pt-10 pb-20'>
          <Link href='/'>
            Política de Privacidade
          </Link>
          <span> | </span>
          <Link href='/'>
            Preferências de Cookie
          </Link>
        </div>
      </div>
    </footer>
  )
}
