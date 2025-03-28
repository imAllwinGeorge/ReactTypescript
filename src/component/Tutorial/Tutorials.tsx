import { Name } from "../person.type"

type NameList = {
    names: Name[]
}

export const Tutorials = (props: NameList) => {
  return (
    <div>
        {props.names.map((name,index)=>(
            
                <h1 key={index}>{name.first} {name.last}</h1>
            
        ))}
    </div>
  )
}
