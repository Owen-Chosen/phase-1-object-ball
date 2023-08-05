function gameObject () {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    'Slam Dunks': 1
                }, 
                'Reggie Evans': {
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    'Slam Dunks': 7
                },
                'Brook Lopez': {
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    'Slam Dunks': 15
                },
                'Mason Plumlee': {
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    'Slam Dunks': 5
                },
                'Jason Terry': {
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    'Slam Dunks': 1
                },
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    'Slam Dunks': 2
                }, 
                'Bismak Biyombo': {
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    'Slam Dunks': 10
                },
                'DeSagna Diop': {
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    'Slam Dunks': 5
                },
                'Ben Gordon': {
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    'Slam Dunks': 0
                },
                'Brendan Haywood': {
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    'Slam Dunks': 12
                }
            }
        }
    }
}


//function that takes in an argument of a player's name and returns the number of points scored for that player
//.....................................................................................................

function numPointsScored(name) {
    const game = gameObject();

    for (const team in game) {
        if (typeof (game[team]) === 'object'){
            for (about in game[team]) {
                if (typeof (game[team][about] === 'object') && about === 'players'){
                    for (const player in game[team][about]) {
                        if (player === name){
                            return game[team][about][player].Points;
                        }
                    }
                }
            }
        }
    }
    return `${name} is not a member of any team`;
  }


//function that takes in an argument of a player's name and returns the shoe size for that player
//.....................................................................................................

  function shoeSize (name) {
    const game = gameObject();

    for (const team in game) {
        if (typeof (game[team]) === 'object'){
            for (about in game[team]) {
                if (typeof (game[team][about] === 'object') && about === 'players'){
                    for (const player in game[team][about]) {
                        if (player === name){
                            return game[team][about][player].Shoe;
                        }
                    }
                }
            }
        }
    }
    return `${name} is not a member of any team`;
  }


//function that takes in an argument of the team name and returns an array of that teams colors
//.....................................................................................................

  function teamColors (teamName) {
    const game = gameObject();

    for (const team in game) {
        if (typeof (game[team]) === 'object'){
            if (game[team].teamName === teamName) {
                return game[team].colors;
            }
        }
    }
    return `${teamName} is not a team`;
  }


//function that operates on the game object to return an array of the team names
//.....................................................................................................

  function teamNames () {
    const game = gameObject();
    const arrOfTeam = [];
    for (const key in game) {
        arrOfTeam.push(game[key].teamName);
    }
    return arrOfTeam;
  }


//function that takes in an argument of a team name and returns an array of the jersey number's for that team
//.....................................................................................................

function playerNumbers (teamName) {
    const game = gameObject();
    const arrOfTeamNumbers = [];
    for (const team in game) {
        if (typeof (game[team]) === 'object'){
            if (game[team].teamName === teamName) {
                for (const prop in game[team]) {
                    if (typeof game[team][prop] === 'object' && prop === 'players') {
                        for (const player in game[team][prop]) {
                            arrOfTeamNumbers.push (game[team][prop][player].Number);
                        }
                    }
                }
            }
        }
    }
    if (arrOfTeamNumbers.length == 0 ) return `${teamName} is not a team`;
    else return arrOfTeamNumbers;
}


//function that takes in an argument of a player's name and returns a object of that player's stats
//.....................................................................................................

function playerStats (playerName) {
    const game = gameObject();
    for (const team in game) {
        if (typeof game[team] === 'object') {
            for (const props in game[team]) {
                 if (props === 'players') {
                    for (const player in game[team][props]) {
                        if (player === playerName) {
                            return game[team][props][player];
                        }
                    }
                 }
            }
        }
    }
    return `${playerName} doesn't exist in any team`;
}

// console.log (playerStats('Ben Gordon'));

//.....................................................................................................


function bigShoeRebounds () {
    const game = gameObject();
    const playerWithBiggestShoe = largestShoeSize();
    for (const team in game) {
        if (typeof (game[team]) === 'object'){
            for (about in game[team]) {
                if (typeof (game[team][about] === 'object') && about === 'players'){
                    for (const player in game[team][about]) {
                        if (player === playerWithBiggestShoe){
                            return game[team][about][player].Rebounds;
                        }
                    }
                }
            }
        }
    }
    return;
  }


function largestShoeSize () {
    const game = gameObject();
    let maxShoe = 0;
    let maxShoePlayer = "";
    for (const team in game) {
        if (typeof game[team] === 'object') {
            for (const props in game[team]) {
                if (props === 'players') {
                    for (const player in game[team][props]) {
                        if (game[team][props][player].Shoe >= maxShoe) {
                            maxShoe = game[team][props][player].Shoe;
                            maxShoePlayer = player;
                        }
                    }
                }
            }
        }
    }
    return maxShoePlayer;
}

//  const p = largestShoeSize ();
//  const r = bigShoeRebounds ();
//  console.log (`player wih the biggest shoe size is ${p} with ${r} Rebounds`);

//.....................................................................................................

function mostPointsScored () {
    const game = gameObject();
    let maxPoint = 0;
    let maxPointPlayer = "";
    for (const team in game) {
        if (typeof game[team] === 'object') {
            for (const props in game[team]) {
                if (props === 'players') {
                    for (const player in game[team][props]) {
                        if (game[team][props][player].Points > maxPoint) {
                            maxPoint = game[team][props][player].Points;
                            maxPointPlayer = player;
                        }
                    }
                }
            }
        }
    }
    return maxPointPlayer;
}

// console.log (mostPointsScored());


//.....................................................................................................


function winningTeam () {
    const game = gameObject();
    let homePoint = 0, awayPoint = 0;
    for (const team in game) {
        let totalPoint = 0;
        for (const props in game[team]) {
            if (props === 'players') {
                for (const player in game[team][props]) {
                    totalPoint+=game[team][props][player].Points;
                }
            }
        }
        if (team === 'home') homePoint = totalPoint;
        else awayPoint = totalPoint;
    }
    if (homePoint > awayPoint) return game.home.teamName;
    else return game.away.teamName
}

 //console.log (winningTeam());

 //.....................................................................................................

 function playerWithLongestName () {
    const game = gameObject();
    let maxLength = 0;
    let maxPlayerName = "";
    for (const team in game) {
        for (const props in game[team]) {
            if (props === 'players') {
                for (const player in game[team][props]) {
                    if (player.length > maxLength) {
                        maxLength = player.length;
                        maxPlayerName = player;
                    }
                }
            }
        }
    }
    return maxPlayerName;
}

//console.log (playerWithLongestName());

function doesLongNameStealATon (playerWithLongestName) {
    const game = gameObject();
    let maxSteals = 0;
    let maxStealPlayer = "";
    for (const team in game) {
        if (typeof game[team] === 'object') {
            for (const props in game[team]) {
                if (props === 'players') {
                    for (const player in game[team][props]) {
                        if (game[team][props][player].Steals > maxSteals) {
                            maxSteals = game[team][props][player].Steals;
                            maxStealPlayer = player;
                        }
                    }
                }
            }
        }
    }
    return (playerWithLongestName === playerWithLongestName);
}

//console.log (doesLongNameStealATon(playerWithLongestName()));