// Discapacidad
export const disability = (state, payload) => {
  state.user.disability = payload
}

// Tpos de Discapacidad
export const disabilityAdd = (state, payload) => {
  state.user.disabilityTypes.push(payload)
}
export const disabilityRemove = (state, payload) => {
  const index = state.user.disabilityTypes.indexOf(payload)
  if (index !== -1) {
    state.user.disabilityTypes.splice(index, 1)
  }
}

// Consentimiento
export const consent = (state, payload) => {
  state.user.consent = payload
}

// Nombre y Apellido
export const name = (state, payload) => {
  state.user.name = payload
}
export const lastname = (state, payload) => {
  state.user.lastname = payload
}

// Fecha de Nacimiento
export const dayBirth = (state, payload) => {
  state.user.dayBirth = payload
}
export const monthBirth = (state, payload) => {
  state.user.monthBirth = payload
}
export const yearBirth = (state, payload) => {
  state.user.yearBirth = payload
}

// Sex
export const sex = (state, payload) => {
  state.user.sex = payload
}

// Job
export const job = (state, payload) => {
  state.user.job = payload
}

// JobPlace
export const jobPlace = (state, payload) => {
  state.user.jobPlace = payload
}

// School
export const school = (state, payload) => {
  state.user.school = payload
}

// School Name
export const schoolName = (state, payload) => {
  state.user.schoolName = payload
}

// Questionnaire
export const questionnaire = (state, items) => {
  // Sólo se ejecuta si no existen los valores
  if (typeof state.questionnaire !== 'undefined') {
    return
  }
  const questions = {}
  const options = {}
  for (const qnn of items) {
    for (const q of qnn.questions) {
      questions[q.id] = ''
      for (const o of q.options) {
        options[o.id] = false
      }
    }
  }
  state.questionnaire = items
  state.questions = questions
  state.options = options
}

export const question = (state, question) => {
  state.questions[question.id] = question.value
}

export const option = (state, payload) => {
  state
    .questionnaire
    .find(questionnaire => parseInt(questionnaire.id) === parseInt(state.route.params.questionnaire_id))
    .questions
    .find(question => parseInt(question.id) === parseInt(state.route.params.question_id))
    .options
    .forEach(option => {
      if (parseInt(option.id) === parseInt(payload.option_id)) {
        state.options[option.id] = true
      } else {
        state.options[option.id] = false
      }
    })
}
