import DownloadListItem from './DownloadListItem'

export default function DownloadSection () {
  return (
    <section className="flex flex-col w-full justify-center">
      <div className="flex flex-col w-full justify-center items-center bg-zinc-100 py-8">
        <div className='flex flex-col justify-center items-center w-full max-w-7xl'>
          <h3 className="text-zinc-500 text-2xl font-medium px-6 py-8 lg:text-3xl lg:py-16">
          FAÇA O <span className='font-bold'>DOWNLOAD</span> DOS NOSSOS MATERIAIS INSTITUCIONAIS.
          </h3>
          <div className='flex flex-col lg:flex-row w-full justify-center items-center gap-3'>
            <div className='relative flex w-72 h-20 justify-center items-center bg-[url(/images/folders.webp)] bg-center bg-cover before:w-full before:h-full before:bg-black before:bg-opacity-40 hover:scale-105 transition-all duration-500 uppercase lg:w-[30vw] lg:h-36' >
              <p className='absolute text-zinc-100 text-xl font-bold'>Folders</p>
            </div>
            <div className='relative flex w-80 h-20 justify-center items-center bg-[url(/images/catalog.jpg)] bg-center bg-cover before:w-full before:h-full before:bg-black before:bg-opacity-40 lg:w-[30vw] lg:h-40' >
              <p className='absolute text-zinc-100 text-xl font-bold uppercase'>Catálogos</p>
            </div>
            <div className='relative flex w-72 h-20 justify-center items-center bg-[url(/images/manual.jpeg)] bg-center bg-cover before:w-full before:h-full before:bg-black before:bg-opacity-40 hover:scale-105 transition-all duration-500 uppercase lg:w-[30vw] lg:h-36' >
              <p className='absolute text-zinc-100 text-xl font-bold'>Manuais</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full p-8 lg:bg-zinc-100'>
        <h3 className='text-zinc-500 pb-8'>Faça o download dos catálogos Ceusa.</h3>
        <div className='w-full lg:max-w-5xl space-y-5'>
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
          <DownloadListItem />
        </div>
      </div>
    </section>
  )
}
