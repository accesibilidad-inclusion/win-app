// Datos del Cuestionario
export const getQuestionnaire = (state) => () => {
  return state.questionnaire.find(questionnaire => parseInt(questionnaire.id) === parseInt(state.route.params.questionnaire_id))
}

export const getQuestion = (state, getters) => (questionId = state.route.params.question_id) => {
  for (let questionnaire of state.questionnaire) {
    let question = questionnaire
      .questions
      .find(question => parseInt(question.id) === parseInt(questionId))
    if (typeof question === 'object') {
      return question
    }
  }
  return undefined
}

export const getQuestionIndex = (state, getters) => () => {
  const questions = getters.getQuestionnaire().questions
  const question = getters.getQuestion()
  return questions.indexOf(question)
}

export const getQuestionOptions = (state, getters) => () => {
  return getters.getQuestion().options
}

export const getQuestionTypeOptions = (state, getters) => (type = state.route.params.question_type) => {
  return getters.getQuestionOptions().filter(item => item.type === type)
}

// Ayudas
export const needsAids = (state, getters) => (questionId = state.route.params.question_id) => {
  return parseInt(state.options[questionId]) === 4
}

export const getAidsOptions = (state) => () => {
  return state.aidsOptions
}

export const getSpecificationsOptions = (state) => () => {
  return state.specificationsOptions
}

export const needsSpecification = (state, getters) => (questionId = state.route.params.question_id) => {
  const question = getters.getQuestion(questionId)
  if (
    typeof question !== 'undefined' &&
    question.needs_specification &&
    getters.getQuestionTypeOptions('yes').filter(option => parseInt(option.value) === parseInt(getters.getValueOptions())).length > 0
  ) {
    return true
  }
  return false
}

// Valores guardados en objetos independientes
export const getValueQuestion = (state) => (questionId = state.route.params.question_id) => {
  return state.questions[questionId]
}

export const getValueOptions = (state) => (questionId = state.route.params.question_id) => {
  return state.options[questionId]
}

export const getValueOptionsMatchId = (state, getters) => (questionId = state.route.params.question_id) => {
  const question = getters.getQuestion(questionId)
  if (typeof question !== 'undefined') {
    const option = question
      .options
      .find(option => parseInt(option.value) === parseInt(getters.getValueOptions(questionId)))
    if (typeof option === 'object') {
      return option.id
    }
  }
  return ''
}

export const getValueAids = (state) => (questionId = state.route.params.question_id) => {
  return state.aids[questionId]
}

export const getValueSpecifications = (state) => (questionId = state.route.params.question_id) => {
  return state.specifications[questionId]
}

export const getResponseTime = (state) => (questionId = state.route.params.question_id) => {
  return state.responseTime[questionId]
}

export const getQuestionActive = (state) => () => {
  return state.questionActive
}

// Consolidado de respuestas de pregunta
export const getQuestionAnswers = (state, getters) => (questionId) => {
  // Objeto de datos solicitado en el endpoint /answers
  // https://admin.apoyos.win/docs.html#answers_post
  const answers = {
    survey_id: state.survey_id,
    hash: state.hash,
    subject_id: state.user.id,
    question_id: parseInt(questionId),
    option_id: getters.getValueOptionsMatchId(questionId),
    aids: getters.getValueAids(questionId),
    specification: getters.getValueSpecifications(questionId),
    response_time: getters.getResponseTime(questionId)
  }
  return answers
}

// Control de término de preguntas, etapas y cuestionario
export const isQuestionComplete = (state, getters) => (questionId = state.route.params.question_id) => {
  const foo = typeof getters.getValueQuestion(questionId) === 'boolean' &&
    getters.getValueOptions(questionId) !== '' &&
    ((getters.needsAids(questionId) && getters.getValueAids(questionId).length > 0) || getters.needsAids(questionId) === false) &&
    ((getters.needsSpecification(questionId) && getters.getValueSpecifications(questionId).length > 0) || getters.needsSpecification(questionId) === false)
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
  if (Object.values(state.options).filter(option => option === '').length > 0) {
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

// Resultados
export const getResult = (state) => () => {
  return state.results.find(result => parseInt(result.id) === parseInt(state.route.params.dimension_id))
}

export const nextResultId = (state, getters) => () => {
  const result = getters.getResult()
  const index = state.results.indexOf(result)
  return state.results[index + 1].id
}

export const wereResultsReviewed = (state, getters) => () => {
  const result = getters.getResult()
  const index = state.results.indexOf(result)
  return typeof state.results[index + 1] === 'undefined'
}
