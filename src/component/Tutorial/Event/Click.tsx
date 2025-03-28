
type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>)=>void
}

export const Click = (props: ButtonProps) => {
  return (
    <div>
        <button onClick={props.handleClick}>Click</button>
    </div>
  )
}
