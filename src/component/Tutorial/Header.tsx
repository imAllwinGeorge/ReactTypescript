 type HeadingProps = {
    children: string
 }
const Header = (props: HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Header