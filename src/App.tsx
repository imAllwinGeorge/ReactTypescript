import { Box } from "./component/Context/Box"
import { ThemecontextProvider } from "./component/Context/Themecontext"
import { User } from "./component/Context/UserContext/User"
import { UserContextProvider } from "./component/Context/UserContext/UserContext"
import { List } from "./component/Generics/List"
import { Counter } from "./component/Reducer/Counter"
import { IsLogged } from "./component/States/IsLogged"
import { UserLogin } from "./component/States/UserLogin"
import { Styling } from "./component/StyleProps.tsx/Styling"
import { ChildrenComponent } from "./component/Tutorial/ChildrenComponent"
import { Change } from "./component/Tutorial/Event/Change"
import { Click } from "./component/Tutorial/Event/Click"
import Header from "./component/Tutorial/Header"
import { Tutorials } from "./component/Tutorial/Tutorials"


function App() {
const nameList = [ 
  {
    first: "bruce",
    last: "wayn"
  },
  {
    first: "iron",
    last: "man"
  },
  {
    first: "spider",
    last: "man"
  }
]

  return (
  <div>
    <Tutorials names={nameList} />
    <Header>placeHolder Component</Header>
    <ChildrenComponent>
      <Header>ohhh yeahhh.....</Header>
    </ChildrenComponent>
    <Click handleClick={(event) => console.log("Button Clicked",event)}/>
      <Change value = "" handleChange={(event)=>console.log(event)}/>
        <Styling styles={{border:'1px solid black',padding: '1rem',backgroundColor: 'red'}}/>
        <IsLogged />
        <UserLogin />
        <Counter />

    <ThemecontextProvider>
      <Box />
    </ThemecontextProvider>

    <UserContextProvider>
      <User />
    </UserContextProvider>

    <List items ={[1,2,3]} onClick={(item) => console.log(item)}/>
    <List items = {["spiderman", "wonder women", "super man"]} onClick={(item) => console.log(item)} />
    <List items = {[ 
      {
        id: 1,
        first: "Bruce",
        last: "Wayne"
      },
      {
        id:2,
        first: "Clark",
        last: "Kent"
      },
      {
        id:3,
        first: "princess",
        last: "Diana"
      }
    ]} onClick={(item)=> console.log(item)}/>
  </div>
  )
}

export default App
