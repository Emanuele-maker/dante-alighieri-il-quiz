import "./AnswerLabel.scss"

const AnswerLabel = ({ quest, ans, rightAns, questIndex }) => {
  return (
    <div className="answer-label">
        <h4>{ `${ questIndex + 1 }. ${quest}` }</h4>
        <div>
          { ans !== rightAns && <h5 className="wrong-ans">{ ans }</h5> }
          <h5 className="right-ans">{ rightAns }</h5>
        </div>
    </div>
  )
}

export default AnswerLabel