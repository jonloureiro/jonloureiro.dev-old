export const state = () => ({
  from: null,
  to: null
})

export const mutations = {
  updatePreviousRoute(state, { from, to }) {
    state.from = from
    state.to = to
  }
}

export const actions = {}

export const getters = {
  route: state => state.route
}
