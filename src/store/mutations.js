// Discapacidad
export const disability = (state, value) => {
  state.user.disability = value
}

// Tpos de Discapacidad
export const disabilityAdd = (state, value) => {
  state.user.disabilityTypes.push(value)
}
export const disabilityRemove = (state, value) => {
  const index = state.user.disabilityTypes.indexOf(value)
  if (index !== -1) {
    state.user.disabilityTypes.splice(index, 1)
  }
}

// Consentimiento
export const consent = (state, value) => {
  state.user.consent = value
}

// Nombre y Apellido
export const name = (state, value) => {
  state.user.name = value
}
export const lastname = (state, value) => {
  state.user.lastname = value
}

// Fecha de Nacimiento
export const dayBirth = (state, value) => {
  state.user.dayBirth = value
}
export const monthBirth = (state, value) => {
  state.user.monthBirth = value
}
export const yearBirth = (state, value) => {
  state.user.yearBirth = value
}

// Sex
export const sex = (state, value) => {
  state.user.sex = value
}

// Job
export const job = (state, value) => {
  state.user.job = value
}

// JobPlace
export const jobPlace = (state, value) => {
  state.user.jobPlace = value
}

// School
export const school = (state, value) => {
  state.user.school = value
}

// School Name
export const schoolName = (state, value) => {
  state.user.schoolName = value
}

// Questions
export const questions = (state, items) => {
  for (const item of items) {
    delete item.deleted_at
    delete item.created_at
    delete item.updated_at
    for (const option of item.options) {
      delete option.created_at
      delete option.updated_at
    }
  }
  state.questions = items
}
