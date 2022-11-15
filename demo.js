let b = 60 * 10
const a = setInterval(() => {
  console.log(Math.floor(b / 60), '分', b % 60, '秒');
  if (b === 0) {
    clearInterval(a)
  }
  b--
  if (b % 20 === 0) {
    console.clear()
  }
}, 1000)