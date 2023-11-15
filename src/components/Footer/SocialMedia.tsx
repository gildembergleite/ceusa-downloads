import Image from 'next/image'
import Link from 'next/link'

export default function SocialMedia () {
  return (
    <div className='flex w-full justify-evenly py-8 lg:py-0 lg:justify-normal lg:gap-4 lg:w-auto'>
      <Link href='/'>
        <Image width={36} height={36} src='/social-media/pinterest.svg' alt='' />
      </Link>
      <Link href='/'>
        <Image width={36} height={36} src='/social-media/instagram.svg' alt='' />
      </Link>
      <Link href='/'>
        <Image width={36} height={36} src='/social-media/facebook.svg' alt='' />
      </Link>
      <Link href='/'>
        <Image width={36} height={36} src='/social-media/youtube.svg' alt='' />
      </Link>
    </div>
  )
}
