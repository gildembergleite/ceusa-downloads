import { cn } from '@/lib/utils/ui'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'

const ListItem = forwardRef<
React.ElementRef<'a'>,
React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md leading-none no-underline outline-none hover:underline my-4 mx-2',
            className
          )}
          {...props}
        >
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default ListItem
