import { useParams, useNavigate } from "react-router-dom"
import Heading from "../../components/Heading/Heading"
import "./Question.scss"
import SubHeading from "../../components/SubHeading/SubHeading"
import hellQuestions from "../../db/inferno.json"
import purgatorioQuestions from "../../db/purgatorio.json"
import paradiseQuestions from "../../db/paradiso.json"
import lifeQuestions from "../../db/life.json"
import MainBtn from "../../components/MainBtn/MainBtn"
import { useEffect, useState } from "react"
import NextBtn from "../../components/NextBtn/NextBtn"
import BackBtn from "../../components/BackBtn/BackBtn"

const Question = () => {
  const navigate = useNavigate()
  const { level } = useParams()

  const [seconds, setSeconds] = useState(0)
  const [question, setQuestion] = useState()
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [questionState, setQuestionState] = useState("answering") // "answering" || "answered"
  const [answersButtonsColors, setAnswersButtonsColors] = useState()

  const maxAnswerTime = 20

  const addAnsweredQuestion = (ans, right, expiredTime = false, selected) => {
    const answersState = [...answeredQuestions]
    if (!answersState.includes(ans)) answersState.push({
      obj: ans,
      selected,
      right,
      expiredTime
    })
    setAnsweredQuestions(answersState)
  }

  const modifyAnswerButtonsColors = (id, color) => {
    const currentStates = [...answersButtonsColors]
    currentStates.find(ans => ans.id === id).color = color
    setAnswersButtonsColors(currentStates)
  }

  const changeQuestion = () => {
    const questions = level === "inferno" ? hellQuestions.filter(quest => !answeredQuestions.find(ans => ans.obj === quest)) : level === "purgatorio" ? purgatorioQuestions.filter(quest => !answeredQuestions.find(ans => ans.obj === quest)) : level === "paradiso" ? paradiseQuestions.filter(quest => !answeredQuestions.find(ans => ans.obj === quest)) : level === "vita" ? lifeQuestions.filter(quest => !answeredQuestions.find(ans => ans.obj === quest)) : undefined
    setQuestion(questions[Math.floor(Math.random() * questions.length)])
  }

  const resetButtonsColors = (color = "brown") => setAnswersButtonsColors([
    {
      id: "A",
      color
    },
    {
      id: "B",
      color
    },
    {
      id: "C",
      color
    },
    {
      id: "D",
      color
    }
  ])

  useEffect(() => {
    changeQuestion()
    resetButtonsColors()
  }, [])

  useEffect(() => {
    if (answeredQuestions.length === 10) navigate("/risultati", {
      state: {
        answeredQuestions
      }
    })
    if (questionState === "answering") resetButtonsColors()
    const interval = setInterval(() => {
      if (questionState === "answering") {
        if (maxAnswerTime - seconds === 0) {
          setQuestionState("answered")
          resetButtonsColors("red")
          addAnsweredQuestion(question, false, true)
        } else setSeconds(prevSeconds => prevSeconds + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [questionState, seconds, answeredQuestions])

  if (!question) return

  return (
    <div className="question-page">
        <BackBtn onClick={() => {
          navigate("/")
        }} />
        <Heading text={`Quiz: ${level}`} />
        <SubHeading text={question.quest} />
        <div className="grid-container">
          <div className="answers-container">
            {
              question.answers.map((ans, ansIndex) => {
                return (
                  <MainBtn bgColor={answersButtonsColors.find(state => state.id === ans.id).color} key={ansIndex} isAns={true} isRightAns={ans.id === question.rightAns} onClick={() => {
                    if (questionState !== "answering") return
                    addAnsweredQuestion(question, ans.id === question.rightAns, false, ans)
                    modifyAnswerButtonsColors(ans.id, ans.id === question.rightAns ? "green" : "red")
                    modifyAnswerButtonsColors(question.rightAns, "green")
                    setQuestionState("answered")
                  }} text={`${ans.id}. ${ans.text}`} />
                )
              })
            }
          </div>
        </div>
        {
          questionState === "answered" && <NextBtn text="Successiva" onCLick={() => {
            changeQuestion()
            setQuestionState("answering")
            setSeconds(0)
          }} />
        }
        <SubHeading text={`Tempo rimasto: ${maxAnswerTime - seconds}s`} />
        <SubHeading text={`Domande: ${answeredQuestions.length}/10`} />
    </div>
  )
}

export default Question