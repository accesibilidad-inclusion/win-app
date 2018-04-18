// Datos del Cuestionario
export const getQuestionnaire = (state) => () => {
  return state.questionnaire.find(questionnaire => parseInt(questionnaire.id) === parseInt(state.route.params.questionnaire_id))
}

export const getQuestion = (state, getters) => () => {
  return getters
    .getQuestionnaire()
    .questions
    .find(question => parseInt(question.id) === parseInt(state.route.params.question_id))
}

export const getQuestionIndex = (state, getters) => () => {
  const questions = getters.getQuestionnaire().questions
  const question = getters.getQuestion()
  return questions.indexOf(question)
}

export const getQuestionOptions = (state, getters) => () => {
  return getters.getQuestion().options
}

export const getQuestionTypeOptions = (state, getters) => () => {
  return getters.getQuestionOptions().filter(item => item.type === state.route.params.question_type)
}

export const getQuestionTypeOptionSelected = (state, getters) => () => {
  const option = getters.getQuestionTypeOptions().find(option => state.options[option.id] === true)
  if (typeof option === 'object') {
    return option.id
  }
  return false
}

export const wereOptionsQuestionAnswered = (state, getters) => () => {
  return getters.getQuestionOptions().filter(item => state.options[item.id] === true).length > 0
}

// Ayudas
export const needsAids = (state, getters) => () => {
  const option = getters.getQuestionOptions().find(option => state.options[option.id] === true)
  return typeof option === 'object' && parseInt(option.value) === 4
}

export const getAidsOptions = (state) => () => {
  return state.aidsOptions
}

export const getSpecificationsOptions = (state) => () => {
  return state.specificationsOptions
}

export const needsSpecification = (state, getters) => () => {
  return getters.getQuestion().needs_specification
}

// Valores guardados en objetos independientes
export const getValueQuestion = (state) => () => {
  return state.questions[state.route.params.question_id]
}

export const getSelectedOption = (state) => (optionId) => {
  return state.options[optionId]
}

export const getValueAids = (state) => () => {
  return state.aids[state.route.params.question_id]
}

export const getValueSpecification = (state) => () => {
  return state.specification[state.route.params.question_id]
}

export const getQuestionActive = (state) => () => {
  return state.questionActive
}

// Control de término de preguntas, etapas y cuestionario
export const isQuestionComplete = (state, getters) => () => {
  const foo = typeof getters.getValueQuestion() === 'boolean' &&
    getters.wereOptionsQuestionAnswered() &&
    ((getters.needsAids() && getters.getValueAids().length > 0) || getters.needsAids() === false) &&
    ((getters.needsSpecification() && getters.getValueSpecification() !== '') || getters.needsSpecification() === false)
  return foo
}

export const isQuestionnaireComplete = (state, getters) => () => {
  const questions = getters.getQuestionnaire().questions
  return parseInt(questions[questions.length - 1].id) === parseInt(state.route.params.question_id) && getters.isQuestionComplete()
}

export const isAllComplete = (state) => () => {
  // Las preguntas se guardan inicialmente como 'string'. Si no existe ninguna distinta de 'boolean',
  // quiere decir que todas las preguntas fueron contestadas
  if (Object.values(state.questions).filter(question => typeof question !== 'boolean').length > 0) {
    return false
  }
  // Si la cantidad de opciones marcadas como true es igual a la cantidad de preguntas
  // quire decir que todas las opciones fueron contestadas
  if (Object.values(state.options).filter(option => option === true).length < state.questions.length) {
    return false
  }
  return true
}

// Helpers para construir algunas rutas
export const existNextQuestion = (state, getters) => () => {
  return typeof getters.getQuestionnaire().questions[getters.getQuestionIndex() + 1] !== 'undefined'
}

export const nextQuestionId = (state, getters) => () => {
  return getters.getQuestionnaire().questions[getters.getQuestionIndex() + 1].id
}

export const nextQuestionnaireId = (state, getters) => () => {
  const questionnaire = getters.getQuestionnaire()
  return state.questionnaire[state.questionnaire.indexOf(questionnaire) + 1].id
}

// Backgrounds
export const getQuestionBackground = (state) => () => {
  return state.backgrounds[state.route.params.question_id]
}
