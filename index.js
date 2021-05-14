const team = {
    _players:[
  //Populate the empty playes array with three actual players.    
      {
        firstName: 'Virat',
        lastName: 'Kohli',
        age: 27
      },
      {
        firstName: 'Sachin',
        lastName: 'Tendulkar',
        age: 38 
      },
      {
        firstName: 'Rahul',
        lastName: 'Dravid',
        age: 41
      }
    ],
    _games:[
  //Populate the empty games array with three actual games.    
      {
    opponent: 'John Wick',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'England',
    teamPoints: 57,
    opponentPoints: 61
  },
  {
    opponent: 'Bangladesh',
    teamPoints: 24,
    opponentPoints: 30
  }
  ],
  
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  set players(playerInput){
    this._players = playerInput;
  },
  set games(gamesInput){
    this._games = gamesInput;
  },
  //Method that adds a player object to Player array
  addPlayer(firstName,lastName,age){
  const newPlayer ={
    firstName: firstName,
    latName: lastName,
    age: age
  };
  this._players.push(newPlayer);
  },
  //Method that adds a game object to games array
  addGame(opponent,teamPoints,opponentPoints){
    const newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(newGame);
  } 
  };
  
  // Adding three players
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76); 
  //Print out the team players
  console.log(team.players);
  
  //Invoking addGames Method on three games and print out the teams updated games array
  team.addGame('ICC Cup', 100, 98);
  team.addGame('Chmpns Trophy', 35, 62);
  team.addGame('T20 Trophy', 87, 91);
  //Print out the teams updated games array
  console.log(team.games);