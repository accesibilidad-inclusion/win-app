// Get Question from script
export const getScriptQuestionById = (state) => (id) => {
  return state.script.find(question => parseInt(question.id) === parseInt(id))
}

export const getQuestionValueById = (state) => (id) => {
  return state.questions[id]
}
