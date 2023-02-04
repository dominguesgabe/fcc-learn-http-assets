async function run() {
  try {
    const leaderboard = await fetchLeaderBoard()
    console.log(leaderboard)
  } catch {
    console.log('Our servers are down, but we will be up and running soon')
  }
}
run()

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch('https://fantasyquest.servers')
  return response.json()
}
