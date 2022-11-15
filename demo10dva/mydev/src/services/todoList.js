export const getTodosAsync = () => new Promise((r) => {
  setTimeout(() => {
    r('成')
  }, 1000)
});