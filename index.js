const getUser = async () => {
  try {
    const res = await fetch('https://tik.tok')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser()
