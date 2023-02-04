async function getUsers(url, apiKey) {
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-KEY': apiKey
    }
  })

  return await res.json()
}

// Don't touch below this line //actually I did it because in normal Node await without async is not allowed 

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

logUsers(getUsers(url, generatedKey))

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

async function logUsers(users) {
  users = await users;
  for (const user of users) {
    console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}
