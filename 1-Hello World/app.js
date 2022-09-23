/*
    BOT DE TELEGRAM EJ : 1 MENSAJE DE HOLA MUNDO !
*/

const { Telegraf } = require("telegraf"); // requerimos el framework.

let token = () => {
  const mytoken = "5566709209:AAFzqbWSJQz0Obn4tG2QSfhOlO_dSKWhgxI"; // [EDITAR TOKEN]
  if (mytoken) {
    // si el token esta bien lo retornamos
    return mytoken;
  } else {
    // de lo contrario no
    console.clear();
    console.log(`Ingresa un token valido !`);
    process.exit(); // cerramos la app
  }
};

const bot = new Telegraf(token()); // Creamos la el objecto pasandole el token.

bot.start(async (ctx) => {
  let user = [`${ctx.chat.username}`]; // obtenemos el usuario
  ctx.reply(`Hola ${user} , bienvenido al bot !`); // enviamos el mensaje
});

let run = () => {
  // funcion para correr el bot
  console.clear();
  bot.launch(); // lanzamos el bot
  console.log("Bot iniciado !");
};

run(); //corremos el bot
