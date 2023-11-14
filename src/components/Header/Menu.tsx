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

export default function Menu () {
  return (
    <NavigationMenu className='z-20'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='absolute lg:relative ml-2 -top-[18px] lg:top-0 gap-2'>
            <MenuIcon size={24} />
            <p className='hidden xl:flex text-zinc-500 text-lg'>Menu</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='flex justify-start items-center lg:justify-center w-full min-w-[100vw] bg-zinc-100'>
            <ul className="grid gap-3 p-4 lg:grid-cols-4 lg:gap-20">
              <div>
                <ListTitle title='a ceusa' />
                <ListItem href="/">Produtos</ListItem>
                <ListItem href="/">Quem somos?</ListItem>
                <ListItem href="/">Design e Inovação</ListItem>
                <ListItem href="/">Premiações</ListItem>
                <ListItem href="/">Política e privacidade</ListItem>
              </div>

              <div>
                <ListTitle title='inspiração' />
                <ListItem href="/">Ambientes</ListItem>
                <ListItem href="/">Simular</ListItem>
              </div>

              <div>
                <ListTitle title='informações técnicas' />
                <ListItem href="/">Catálogo</ListItem>
                <ListItem href="/">Downloads</ListItem>
                <ListItem href="/">Central de Ajuda</ListItem>
              </div>

              <div>
                <ListTitle title='contato' />
                <ListItem href="/">Fale Conosco</ListItem>
                <ListItem href="/">Trabalhe Conosco</ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
