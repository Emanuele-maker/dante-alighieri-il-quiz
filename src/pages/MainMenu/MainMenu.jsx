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
        <SubHeading text="Scegli il ltipo di quiz" />
        <div className="difficulty-btns">
          <MainBtn text="Inferno" bgColor="red" onClick={() => navigate("/inferno")} />
          <MainBtn text="Purgatorio" bgColor="brown" onClick={() => navigate("/purgatorio")} />
          <MainBtn text="Paradiso" bgColor="cyan" onClick={() => navigate("/paradiso")} />
          <MainBtn text="Vita e opere" bgColor="green" onClick={() => navigate("/vita")} />
        </div>
    </div>
  )
}

export default MainMenu