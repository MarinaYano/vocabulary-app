import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <Link to='/'>Logo</Link>
        <Link to='/flashcard'>Flash Card</Link>
        <Link to='/save'>Save</Link>
        <ModeToggle />
      </div>
    </>
  )
}

export default Navbar