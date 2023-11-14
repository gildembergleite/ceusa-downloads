'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { MenuIcon } from 'lucide-react'
import ListItem from './ListItem'
import ListTitle from './ListTitle'

export function MobileMenu () {
  return (
    <NavigationMenu className='z-20'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='absolute ml-2 -top-[18px]'>
            <MenuIcon size={24}/>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='flex justify-start items-center w-[100vw] bg-zinc-100'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListTitle title='a ceusa' />
              <ListItem href="/">Quem somos?</ListItem>
              <ListItem href="/">Design e Inovação</ListItem>
              <ListItem href="/">Premiações</ListItem>
              <ListItem href="/">Política e privacidade</ListItem>

              <ListTitle title='inspiração' />
              <ListItem href="/">Ambientes</ListItem>
              <ListItem href="/">Simular</ListItem>

              <ListTitle title='informações técnicas' />
              <ListItem href="/">Catálogo</ListItem>
              <ListItem href="/">Downloads</ListItem>
              <ListItem href="/">Central de Ajuda</ListItem>

              <ListTitle title='contato' />
              <ListItem href="/">Fale Conosco</ListItem>
              <ListItem href="/">Trabalhe Conosco</ListItem>

              <p className='text-zinc-500'>PT | EN | ES</p>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
