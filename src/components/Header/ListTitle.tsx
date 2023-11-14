import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { Separator } from '@/components/ui/separator'

interface ListTitleProps {
  title: string
}

export default function ListTitle ({ title }: ListTitleProps) {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <>
          <p className="mb-2 mt-4 text-lg font-bold text-primary">
            {title.toUpperCase()}
          </p>
          <Separator className='bg-primary' />
        </>
      </NavigationMenuLink>
    </li>
  )
}
