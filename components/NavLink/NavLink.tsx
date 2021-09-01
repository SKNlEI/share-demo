import Link from 'next/link'

interface IProps {
  href: any
  as?: string
  text: string
}

const NavLink = (props: IProps) => {
  const { href, as, text } = props
  return (
    <div className="link-conainer">
      {as ? <Link href={href} as={as}>{text}</Link> : <Link href={href}>{text}</Link>}
    </div>
  )
}

export default NavLink
