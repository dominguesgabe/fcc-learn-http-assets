function printURLParts(urlString) {
  const urlObj = new URL(urlString)
  console.log(`
    protocol: ${urlObj.protocol}
    username: ${urlObj.username}
    password: ${urlObj.password}
    hostname: ${urlObj.hostname}
    port: ${urlObj.port}
    pathname: ${urlObj.pathname}
    search: ${urlObj.search}
    hash: ${urlObj.hash}
  `)
}

// don't touch below this line

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
printURLParts(fantasyQuestURL)
