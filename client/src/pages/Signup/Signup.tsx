import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex flex-col gap-6 my-0 mx-auto w-80 border border-solid border-zinc-300 rounded-lg py-8 px-5 text-left">
      <div className="text-lg font-semibold">
        <h1>Create an account</h1>
      </div>
      <form className="flex flex-col gap-4">
      <div className="flex flex-col">
          <label className="font-medium pb-2">username</label>
          <Input type="text" placeholder="Enter username ..." className="" />
        </div>
        <div className="flex flex-col">
          <label className="font-medium pb-2">password</label>
          <Input type="password" placeholder="Enter password ..." className="" />
        </div>
        <div className="mt-2 flex justify-between">
          <Button>Sign Up</Button>
          <Link to='/login'><Button variant="link">Login</Button></Link>
        </div>
      </form>
    </div>
  )
}

export default Signup