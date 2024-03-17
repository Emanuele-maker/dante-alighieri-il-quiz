import "./BackBtn.scss"
import { IoMdArrowRoundBack } from "react-icons/io"

const BackBtn = ({ onClick }) => {
  return <IoMdArrowRoundBack className="back-btn" onClick={onClick} />
}

export default BackBtn