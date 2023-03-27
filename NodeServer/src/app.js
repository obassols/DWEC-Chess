const app = require('express')();
const http = require('http').Server(app);
const uuid = require("uuid")

const io = require("socket.io")(http, {
  cors: {
    origin: '*',
  }
});

const teams = {};
const games = {};

http.listen(4444, () => {
  console.log('Listening on port 4444');
});

io.on('connection', socket => {
  let previousId;

  console.log(`Socket ${socket.id} has connected`);

  socket.on("addTeam", team => {
    console.log("addTeam");
    teams[team.name] = team;
    console.log(teams);
    if (Object.keys(teams).length == 2) {
      const game = {
        id: uuid.v4(),
        playing: false,
        boards: [
          {
            id: 0,
            players: [
              {
                name: teams[Object.keys(teams)[0]].players[0].name,
                color: "White",
                connected: null,
              },
              {
                name: teams[Object.keys(teams)[1]].players[0].name,
                color: "Black",
                connected: null,
              }
            ],
            turn: "White",
          },
          {
            id: 1,
            players: [
              {
                name: teams[Object.keys(teams)[0]].players[1].name,
                color: "Black",
                connected: null,
              },
              {
                name: teams[Object.keys(teams)[1]].players[1].name,
                color: "White",
                connected: null,
              }
            ],
            turn: "White",
          }
        ]
      };
      games[game.id] = game;
    }
  });

  socket.on("play", playerID => {
    const game = Object.values(games).find(game => game.playing === false);
    let player;
    if (!game.boards[0].players[0].connected) player = game.boards[0].players[0];
    else if (!game.boards[0].players[1].connected) player = game.boards[0].players[1];
    else if (!game.boards[1].players[0].connected) player = game.boards[1].players[0];
    else if (!game.boards[1].players[1].connected) {
      player = game.boards[1].players[1];
      game.playing = true;
      socket.to(game.id).emit("game", game);
    }
    player.connected = playerID;
    safeJoin(game.id);
    socket.emit("game", game);
    socket.emit("player", player);
  });

  socket.on("move", move => {
    /* move = {
      gameId: move.gameId,
      boardId: move.boardId,
      playerId: move.playerId,
      from: move.from,
      to: move.to,
    }; */
    const game = games[move.gameId];
    const board = game.boards.find(board => board.id === move.boardId);
    const player = board.players.find(player => player.connected === move.player);
    if (player.color === board.turn && move.from.piece.color === player.color) {
      board.turn = board.turn === "White" ? "Black" : "White";
      socket.to(game.id).emit("move", move);
    }
  });

  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
    previousId = currentId;
  };
});