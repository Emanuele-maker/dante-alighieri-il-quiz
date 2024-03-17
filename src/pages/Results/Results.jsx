import Heading from "../../components/Heading/Heading"
import { useLocation, useNavigate } from "react-router-dom"
import "./Results.scss"
import AnswerLabel from "../../components/AnswerLabel/AnswerLabel"
import SubHeading from "../../components/SubHeading/SubHeading"
import BackBtn from "../../components/BackBtn/BackBtn"

const Results = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const answeredQuestions = location.state.answeredQuestions

    return (
        <div className="results-page">
            <BackBtn onClick={() => navigate("/")} />
            <Heading text="I tuoi risultati" />
            <SubHeading text={`Risposte corrette: ${answeredQuestions.filter(answeredQuest => answeredQuest.selected.id === answeredQuest.obj.rightAns).length}/${answeredQuestions.length}`} />
            <div className="ans-container">
                {
                    answeredQuestions.map((answeredQuest, questIndex) => (
                        <AnswerLabel key={questIndex} ans={answeredQuest.selected.text} quest={answeredQuest.obj.quest} rightAns={answeredQuest.obj.answers.find(a => a.id === answeredQuest.obj.rightAns)?.text} questIndex={questIndex} />
                    ))
                }
            </div>
        </div>
    )
}

export default Results