import "./MainMenu.scss"
import Heading from '../../components/Heading/Heading'
import SubHeading from "../../components/SubHeading/SubHeading"
import MainBtn from "../../components/MainBtn/MainBtn"
import { useNavigate } from "react-router-dom"

const MainMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="main-menu">
        <Heading text="Dante Alighieri - Il Quiz" />
        <SubHeading text="Scegli il livello di difficoltà" />
        <div className="difficulty-btns">
          <MainBtn text="Facile" bgColor="brown" onClick={() => navigate("/facile")} />
          <MainBtn text="Media" bgColor="yellow" onClick={() => navigate("/media")} />
          <MainBtn text="Difficile" bgColor="red" onClick={() => navigate("/difficile")} />
        </div>
    </div>
  )
}

export default MainMenu