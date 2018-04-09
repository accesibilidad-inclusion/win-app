// Datos del Cuestionario
export const getQuestionnaireName = (state, getters, rootState) => (questionnaireIndex) => {
  return state.questionnaire[questionnaireIndex].name
}

export const getQuestionnaireDescription = (state, getters, routeState) => (questionnaireIndex) => {
  return state.questionnaire[questionnaireIndex].description
}

// Get Question from Questionnaire
export const getQuestionnaireQuestion = (state) => (questionId) => {
  let result = null
  for (const qnn of state.questionnaire) {
    if (qnn.questions.find(question => parseInt(question.id) === parseInt(questionId))) {
      result = qnn.questions.find(question => parseInt(question.id) === parseInt(questionId))
    }
  }
  return result
}

export const getQuestionValue = (state) => (questionId) => {
  return state.questions[questionId]
}

export const getOptionValue = (state) => (optionId) => {
  return state.options[optionId]
}

export const getRelatedOptions = (state) => (questionId, questionType) => {
  let relatedQuestions = null
  for (let i = 0; i < state.questionnaire.length; i++) {
    const questions = state.questionnaire[i].questions.find(question => question.id === questionId)
    if (typeof questions === 'object') {
      relatedQuestions = questions
    }
  }
  if (relatedQuestions !== null) {
    return relatedQuestions.options.filter(item => item.type === questionType)
  }
  return null
}

export const getRelatedOptionsValue = (state, getters) => (questionId, questionType) => {
  const relatedOptions = getters.getRelatedOptions(questionId, questionType)
  let value = ''
  if (relatedOptions !== null) {
    for (let option of relatedOptions) {
      if (state.options[option.id] === true) {
        value = option.id
      }
    }
  }
  return value
}
