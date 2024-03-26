import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const FlashCard = () => {
  return (
    <div className="my-20">
      <p className="my-4">Let's check your memory</p>
      <Button>
        <Link to='/signup'>Start</Link>
      </Button>
    </div>
  )
}

export default FlashCard