import { Box } from "./component/Context/Box"
import { ThemecontextProvider } from "./component/Context/Themecontext"
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
  </div>
  )
}

export default App
