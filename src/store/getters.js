// Datos del Cuestionario
export const getQuestionnaire = (state) => () => {
  return state.questionnaire.find(questionnaire => parseInt(questionnaire.id) === parseInt(state.route.params.questionnaire_id))
}

export const getQuestionnaireQuestion = (state, getters) => () => {
  return getters
    .getQuestionnaire()
    .questions
    .find(question => parseInt(question.id) === parseInt(state.route.params.question_id))
}

export const getRelatedOptions = (state, getters) => () => {
  return getters
    .getQuestionnaireQuestion()
    .options.filter(item => item.type === state.route.params.question_type)
}

export const getRelatedOptionsValue = (state, getters) => () => {
  const option = getters.getRelatedOptions().find(option => state.options[option.id] === true)
  if (typeof option === 'object') {
    return option.id
  }
  return false
}

export const needsAssistantes = (state, getters) => () => {
  const option = getters.getRelatedOptions().find(option => state.options[option.id] === true)
  return state.route.params.question_type === 'yes' && typeof option === 'object' && parseInt(option.order) === 3
}

export const needsSpecification = (state, getters) => () => {
  return getters.getQuestionnaireQuestion().needs_specification
}

// Valores guardados en objetos independientes
export const getValueQuestion = (state) => () => {
  return state.questions[state.route.params.question_id]
}

export const getValueOption = (state) => (optionId) => {
  return state.options[optionId]
}
