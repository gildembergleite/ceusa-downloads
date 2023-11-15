import Link from 'next/link'
import Image from 'next/image'

interface PartnersItemProps {
  primary?: boolean
  src: string
}

export default function PartnersItem ({ primary, src }: PartnersItemProps) {
  const width = primary ? 228 : 152
  const height = primary ? 43 : 22
  return (
    <Link href='/' className='flex justify-center'>
      <Image
        className={`w-auto h-auto object-contain 
          ${primary ? 'lg:py-8 lg:max-w-[100%] max-w-[65%]' : 'max-w-[100%]'}
        `}
        width={width}
        height={height}
        src={src}
        alt=''
      />
    </Link>
  )
}
