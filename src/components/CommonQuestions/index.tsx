import Link from 'next/link'

export default function CommonQuestions () {
  return (
    <section className='flex w-full justify-center items-center p-6 bg-zinc-100'>
      <div className='flex flex-col w-full py-6'>
        <div className='flex w-full h-auto aspect-video bg-[url(/images/catalog.jpg)] bg-center bg-cover'></div>
        <h3 className='uppercase text-zinc-500 text-xl py-4'>Perguntas Frequentes</h3>
        <p className="text-zinc-500">
          Disponibilizamos diversas informações que podem ser úteis sobre nossos
          produtos, processos de assentamento e manutenção. Confira.
        </p>
        <div className='w-auto py-8'>
          <Link
            href='/downloads/logo-ceusa_6.zip'
            className='w-min items-center rounded-none border-2 border-primary text-zinc-600 hover:text-primary hover:bg-transparent font-normal px-4 py-3'
            download
          >
          Ir para nosso FAQ
          </Link>
        </div>
      </div>
    </section>
  )
}
