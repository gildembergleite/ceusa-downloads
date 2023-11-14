interface FooterListItemProps {
  title: string
  description: string
  descriptionTwo?: string
  descriptionThree?: string
}

export default function FooterListItem ({ title, description, descriptionTwo, descriptionThree }: FooterListItemProps) {
  return (
    <li>
      <p className="text-zinc-100 font-bold">{title}</p>
      <p className="text-zinc-100 font-thin">{description}</p>
      {
        descriptionTwo !== '' && (
          <p className="text-zinc-100 font-thin">{descriptionTwo}</p>
        )
      }
      {
        descriptionThree !== '' && (
          <p className="text-zinc-100 font-thin">{descriptionThree}</p>
        )
      }
    </li>
  )
}
