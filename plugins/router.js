export default ({ app }, inject) => {
  app.router.beforeEach((to, from, next) => {
    app.store.commit('route/updatePreviousRoute', { from, to })
    next()
  })
}
