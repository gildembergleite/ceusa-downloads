import { type ReactNode } from 'react'

interface FooterListProps {
  title: string
  children: ReactNode
}

export default function FooterList ({ title, children }: FooterListProps) {
  return (
    <div>
      <h5 className="text-primary font-bold text-lg py-4">{title}</h5>
      <ul className='space-y-4'>
        { children }
      </ul>
    </div>
  )
}
