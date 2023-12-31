import Link from 'next/link'
import FooterList from './FooterList'
import FooterListItem from './FooterListItem'
import { ArrowRight } from 'lucide-react'

export default function FooterListContainer () {
  return (
    <div className='lg:flex lg:space-x-16 lg:ml-16'>
      <div>
        <FooterList title='Atendimento ao Consumidor (SAC)'>
          <FooterListItem
            title='Pessoa física e jurídica'
            description='SAC: 0800 011 7073'
          />
          <FooterListItem
            title='Email'
            description='atendimento.sac@dex.co'
          />
          <FooterListItem
            title='Horário de atendimento'
            description='De segunda à sexta-feira das 08h00 às 17h00'
          />
        </FooterList>
        <FooterList title='Fale com a Área Comercial'>
          <FooterListItem
            title='Seja Revendedor'
            description='sejarevendedor@dex.co'
          />
          <FooterListItem
            title='Seja Representante'
            description='sejarepresentante@dex.co'
          />
        </FooterList>
      </div>
      <FooterList title='Galeria São Paulo'>
        <FooterListItem
          title='Endereço'
          description='Av. Brasil, 607 | Jardim América São Paulo | SP - Brasil | CEP 01431-000'
        />
        <FooterListItem
          title='Contatos'
          description='Telefone: (11) 93007-7775'
          descriptionTwo='E-mail: galeria@dex.co'
        />
        <FooterListItem
          title='Horário de atendimento'
          description='De segunda à sexta-feira das 10h00 a 19h00'
        />
        <FooterListItem
          title=''
          description=''
        />
      </FooterList>
      <div>
        <FooterList title='Showroom Criciúma e Escritório Coorporativo'>
          <FooterListItem
            title='Endereço'
            description='Rod. BR 101, 2585 - km 392 | Vila Sao Domingos Criciúma | SC - Brasil | CEP 88812-600'
          />
          <FooterListItem
            title='Contatos'
            description='Telefone: (48) 3431-6170'
            descriptionTwo='WhatsApp: (48) 9955-1028'
            descriptionThree='E-mail: showroomcriciuma@dex.co'
          />
          <FooterListItem
            title='Horário de atendimento'
            description='De Segunda à Quinta das 08h00 às 12h00 e das 13h00 às 18h00'
          />
        </FooterList>
        <div className='space-y-4 py-12'>
          <Link href='/' className='flex items-center text-zinc-100 text-xl'>
            Onde comprar
            <ArrowRight size={24} />
          </Link>
          <Link href='/' className='flex items-center text-zinc-100 text-xl'>
            Dúvidas frequentes
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
