import "./MainBtn.scss"

const MainBtn = ({ text, bgColor = "brown", onClick, isRightAns, isAns }) => {
  return (
    <button onClick={() => {
      onClick()
    }} className={`main-btn ${bgColor}-btn`}>
        { text }
    </button>
  )
}

export default MainBtn