import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export default function TranslateMenu () {
  return (
    <div className='hidden xl:flex'>
      <Button
        size='icon'
        variant='ghost'
        className='text-zinc-500 hover:text-zinc-600'
      >
        PT
      </Button>
      <Separator
        orientation='vertical'
        className='bg-zinc-500'
      />
      <Button
        size='icon'
        variant='ghost'
        className='text-zinc-500 hover:text-zinc-600'
      >
        EN
      </Button>
      <Separator
        orientation='vertical'
        className='bg-zinc-500'
      />
      <Button
        size='icon'
        variant='ghost'
        className='text-zinc-500 hover:text-zinc-600'
      >
        ES
      </Button>
    </div>
  )
}
