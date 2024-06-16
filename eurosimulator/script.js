var teams = []
var winners = []  

async function fetchTeams() {
  const response = await fetch("teamstats.json")
  const data = await response.json()
  teams = data

  for (let i = 0; i < 1000; i++) {
    teamnumbers = [1, 2, 3, 4, 5, 6]
    match1 = []
    match2 = []
    match3 = []

    while (teamnumbers.length > 0) {
      var randomIndex = Math.floor(Math.random() * teamnumbers.length)
      var randomNumber = teamnumbers[randomIndex]
      teamnumbers.splice(randomIndex, 1)
      if (match1.length < 2) {
        match1.push(randomNumber)
      } else if (match2.length < 2) {
        match2.push(randomNumber)
      } else {
        match3.push(randomNumber)
      }
    }
    resultmatch1 = domatch(teams[match1[0] - 1], teams[match1[1] - 1])
    resultmatch2 = domatch(teams[match2[0] - 1], teams[match2[1] - 1])
    resultmatch3 = domatch(teams[match3[0] - 1], teams[match3[1] - 1])
    resultmatch4 = domatch(resultmatch1, resultmatch2)
    winner = domatch(resultmatch3, resultmatch4)

    if (winners[winner.team]) {
      winners[winner.team]++;
    } else {
      winners[winner.team] = 1;
    }
  }
}

fetchTeams().then(() => {
  console.log(winners);

  let winnersArray = Object.entries(winners);

  winnersArray.sort((a, b) => b[1] - a[1]);

  let winnersString = '';
  for (let i = 0; i < winnersArray.length; i++) {
    winnersString += `<p>${winnersArray[i][0]}: ${winnersArray[i][1]}</p>`;
  }

  $("#data").html(winnersString);
});


function domatch(a, b) {
  var ATK_WEIGHT = 0.65
  var MED_WEIGHT = 0.65
  var DEF_WEIGHT = 0.65

  var aScore = a.ATK * ATK_WEIGHT + a.MED * MED_WEIGHT + a.DEF * DEF_WEIGHT
  var bScore = b.ATK * ATK_WEIGHT + b.MED * MED_WEIGHT + b.DEF * DEF_WEIGHT

  var RANDOM_FACTOR = 0.25
  aScore += aScore * Math.random() * RANDOM_FACTOR
  bScore += bScore * Math.random() * RANDOM_FACTOR

  var winner
  if (aScore > bScore) {
    winner = a
  } else {
    winner = b
  }

  return winner
}
