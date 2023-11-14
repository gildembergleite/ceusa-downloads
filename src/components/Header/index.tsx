import Menu from './Menu'
import NavigationHeaderPages from './NavigationHeaderPages'
import TranslateMenu from './TranslateMenu'

export default function Header () {
  return (
    <header className='flex w-full justify-center bg-zinc-100'>
      <div className='relative flex w-full justify-center items-center py-4 px-2 lg:px-8 gap-6'>
        <Menu />
        <NavigationHeaderPages />
        <TranslateMenu />
      </div>
    </header>
  )
}
