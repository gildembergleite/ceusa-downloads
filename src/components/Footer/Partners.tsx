import PartnersItem from './PartnersItem'

export default function Partners () {
  return (
    <div className='flex flex-col justify-center items-center w-full py-8'>
      <PartnersItem primary src='/partners/logo_dexco.png' />
      <div className='flex flex-col justify-center items-center w-full pt-6 space-y-2'>
        <PartnersItem src='/partners/logo_deca.png' />
        <PartnersItem src='/partners/logo_portinari.png' />
        <PartnersItem src='/partners/logo_duratex.png' />
        <PartnersItem src='/partners/logo_hydra.png' />
        <PartnersItem src='/partners/logo_castelatto.png' />
        <PartnersItem src='/partners/logo_ceusa.png' />
        <PartnersItem src='/partners/logo_durafloor.png' />
      </div>
    </div>
  )
}
