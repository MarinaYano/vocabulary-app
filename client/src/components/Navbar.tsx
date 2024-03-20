import { Link } from "react-router-dom"

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <>
      <Menubar className="w-fit mb-10 mx-auto">
        <MenubarMenu>
          <MenubarTrigger>
            <Link to='/'>Logo</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to='/flashcard'>Flash Card</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to='/save'>Save</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to='/signup'>Sign Up</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
    </>
  )
}

export default Navbar