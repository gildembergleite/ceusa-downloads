import { Tourney as Font } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import book from 'public/images/book.svg'
import Link from 'next/link'

const font = Font({ subsets: ['latin'], weight: ['100'] })

export default function Hero () {
  const heroTitle = 'IDENTIDADE'
  const arrayTitle = heroTitle.split('')

  return (
    <section className="flex flex-col justify-center items-center w-full bg-zinc-100">
      <div className={`${font.className} w-full text-9xl text-primary-foreground font-thin h-[calc(50vh)] bg-primary p-8`}>
        {arrayTitle.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <div className='flex flex-col w-full px justify-center items-center -mt-48 px-4 gap-6 z-50'>
        <Image width={280} src={book} alt='Manual da marca' />
        <p className='text-zinc-500 text-sm'>
          Disponibilizamos para download o logo e manual da marca, que possui todas as especificações
          técnicas das cores e tipologias utilizadas. Desta forma, preservamos as propriedades
          gráficas, facilitando a correta propagação, percepção e identidade da marca Ceusa.
        </p>
        <Link
          href='/downloads/logo-ceusa_6.zip'
          className='flex items-center  gap-2 rounded-none border-2 border-primary text-zinc-600 hover:text-primary hover:bg-transparent font-normal p-4'
          download
        >
          Downloads
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
