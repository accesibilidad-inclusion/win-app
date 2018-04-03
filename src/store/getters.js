// Get Question
export const getQuestionById = (state) => (id) => {
  console.log(id)
  return state.questions.find(question => question.id == id)
}
