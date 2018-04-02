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
