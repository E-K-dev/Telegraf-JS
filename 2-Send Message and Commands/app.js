/*
    BOT DE TELEGRAM EJ : 2 ENVIAR MENSAJES Y COMANDOS.
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
  ctx.reply(
    `Elije un comando

/saludo - Envia un saludo.

/despedida - Envia una despedida.
`
  ); // enviamos el mensaje
});

bot.command("saludo", async (ctx) => {
  // creamos el comando del saludo
  ctx.reply(`Bienvenido !! <b>${ctx.chat.username}</b>`, {
    parse_mode: "html", // enviamos el mensaje como un archivo html
  });
});

bot.command("despedida", async (ctx) => {
  // creamos el comando de despedida
  ctx.reply(`Hasta luego <b>${ctx.chat.username}</b>`, {
    parse_mode: "html", // enviamos el mensaje como un archivo html
  });
});

let run = () => {
  // funcion para correr el bot
  console.clear();
  bot.launch(); // lanzamos el bot
  console.log("Bot iniciado !");
};

run(); //corremos el bot
