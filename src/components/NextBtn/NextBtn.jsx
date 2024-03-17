import "./NextBtn.scss"
import { IoIosArrowForward } from "react-icons/io"

const NextBtn = ({ onCLick, text }) => {
  return (
    <button className="next-btn" onClick={() => onCLick()}>
        <IoIosArrowForward size="4vw" />
        { text }
    </button>
  )
}

export default NextBtn