import Heading from "../../components/Heading/Heading"
import { useLocation } from "react-router-dom"
import "./Results.scss"
import AnswerLabel from "../../components/AnswerLabel/AnswerLabel"

const Results = () => {
    const location = useLocation()
    const answeredQuestions = location.state.answeredQuestions

    return (
        <div className="results-page">
            <Heading text="I tuoi risultati" />
            <div className="ans-container">
                {
                    answeredQuestions.map((answeredQuest, questIndex) => (
                        <AnswerLabel ans={answeredQuest.selected.text} quest={answeredQuest.obj.quest} rightAns={answeredQuest.obj.answers.find(a => a.id === answeredQuest.obj.rightAns).text} questIndex={questIndex} />
                    ))
                }
            </div>
        </div>
    )
}

export default Results