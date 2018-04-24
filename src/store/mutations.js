// Guardar preguntas y estructura de datos de respuesta
export const saveSurvey = (state, response) => {
  // Sólo se guardan datos si el hash guardado es distintp al hash de la respuesta
  if (state.hash === response.hash) {
    return
  }

  // Hash y Survey
  state.hash = response.hash
  state.survey_id = response.id

  function shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  // Las respuestas del cuestionario se guardar en objetos planos id: valor
  // Preguntas:        { question_id: '' }  luego, true o false
  // Opciones:         { option_id: false } cada opción tiene su id
  // Ayudas:           { question_id: [] }
  // Especificaciones: { question_id: [] }
  let questions = {}
  let options = {}
  let aids = {}
  let specifications = {}
  let responseTime = {}

  // Backgrounds aleatorios de preguntas
  let backgrounds = {}
  const classes = shuffle(['bg-alt1', 'bg-alt2', 'bg-alt3', 'bg-alt4'])
  let i = 0

  for (const qnn of response.questionnaire) {
    for (const q of qnn.questions) {
      questions[q.id] = ''
      options[q.id] = ''
      aids[q.id] = []
      specifications[q.id] = []
      responseTime[q.id] = 0

      // background
      if (i === classes.length) i = 0
      backgrounds[q.id] = classes[i]

      i++
    }
  }

  // Se guardan los objetos que contendrán las respuestas
  state.questions = questions
  state.options = options
  state.aids = aids
  state.responseTime = responseTime

  state.specifications = specifications
  state.questionActive = ''

  // Luego, se guarda la referencia del cuestionario completo,
  // junto con los arrays de ayudas y especificaciones
  state.questionnaire = response.questionnaire
  state.aidsOptions = response.aids
  state.specificationsOptions = response.specifications

  // Por último, se guardan las clases
  state.backgrounds = backgrounds
}

// User
// Mutación de datos de state.user en onboarding

export const disability = (state, payload) => {
  state.user.disability = payload
}

export const disabilityTypes = (state, payload) => {
  state.user.disability_types = payload
}

// export const disabilityAdd = (state, payload) => {
//   state.user.disability_types.push(payload)
// }
// export const disabilityRemove = (state, payload) => {
//   const index = state.user.disability_types.indexOf(payload)
//   if (index !== -1) {
//     state.user.disability_types.splice(index, 1)
//   }
// }

export const consent = (state, payload) => {
  state.user.consent = payload
  state.user.consent_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
}

export const userId = (state, payload) => {
  state.user.id = payload
}

export const personalId = (state, payload) => {
  state.user.personal_id = payload
}

export const givenName = (state, payload) => {
  state.user.given_name = payload
}
export const familyName = (state, payload) => {
  state.user.family_name = payload
}

export const dayBirth = (state, payload) => {
  state.user.dayBirth = payload
}
export const monthBirth = (state, payload) => {
  state.user.monthBirth = payload
}
export const yearBirth = (state, payload) => {
  state.user.yearBirth = payload
}
export const birthday = (state, payload) => {
  state.user.birthday = payload
}

export const sex = (state, payload) => {
  state.user.sex = payload
}

export const works = (state, payload) => {
  state.user.works = payload
}

export const worksAt = (state, payload) => {
  state.user.works_at = payload
}

export const studies = (state, payload) => {
  state.user.studies = payload
}

export const studiesAt = (state, payload) => {
  state.user.studies_at = payload
}

// Cuestionario
// Mutación de datos de preguntas: respuestas iniciales, opciones, ayudas y especificaciones

export const questionActive = (state, payload) => {
  state.questionActive = payload
}

export const question = (state, question) => {
  state.questions[state.route.params.question_id] = question.value
}

export const option = (state, payload) => {
  state.options[state.route.params.question_id] = payload.value
}

export const aids = (state, payload) => {
  if (Array.isArray(payload.value) === false) {
    state.aids[state.route.params.question_id] = []
  }
  state.aids[state.route.params.question_id] = payload.value
}

export const specifications = (state, payload) => {
  if (Array.isArray(payload.value) === false) {
    state.specifications[state.route.params.question_id] = []
  }
  state.specifications[state.route.params.question_id] = payload.value
}

export const responseTime = (state, payload) => {
  if (typeof payload.questionId !== 'undefined' && typeof payload.startTime !== 'undefined') {
    const time = state.responseTime[payload.questionId] + Math.round((performance.now() - payload.startTime) / 1000)
    state.responseTime[payload.questionId] = time
  }
}

// Resultados

export const results = (state, response) => {
  if (state.results.length > 0) {
    return
  }
  state.results = response.dimensions
}
