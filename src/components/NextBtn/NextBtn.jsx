import "./NextBtn.scss"
import { IoIosArrowForward } from "react-icons/io"

const NextBtn = ({ onCLick, text }) => {
  return (
    <button className="next-btn" onClick={() => onCLick()}>
        <IoIosArrowForward size="2.3vw" />
        { text }
    </button>
  )
}

export default NextBtn