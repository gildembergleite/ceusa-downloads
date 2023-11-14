import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FooterListContainer from './FooterListContainer'
import NavigationMenuPages from './NavigationMenuPages'
import SocialMedia from './SocialMedia'
import Partners from './Partners'
import MobileFooter from './MobileFooter'

export default function Footer () {
  return (
    <footer className='w-full bg-zinc-600'>
      <div className='flex flex-col w-full justify-start py-8 pl-8 pr-24'>
        <h2 className='text-zinc-100 text-3xl'>Fale com a Ceusa</h2>
        <FooterListContainer />
        <div className='space-y-4 py-12'>
          <Link href='/' className='flex items-center text-zinc-100 text-xl'>
            Onde comprar
            <ArrowRight size={24} />
          </Link>
          <Link href='/' className='flex items-center text-zinc-100 text-xl'>
            Dúvidas frequentes
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
      <NavigationMenuPages />
      <SocialMedia />
      <Partners />
      <MobileFooter />
    </footer>
  )
}
