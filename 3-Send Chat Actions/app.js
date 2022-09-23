/*
    BOT DE TELEGRAM EJ : 3 ENVIAR ACCIONES DEL CHAT.

    (PARA HACER ESTO SE DEBE ADJUNTAR UN "AWAIT")
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
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply(
    `Elije un comando

/saludo - Envia un saludo.

/despedida - Envia una despedida.
`
  ); // enviamos el mensaje
});

bot.command("saludo", async (ctx) => {
  // creamos el comando del saludo
  await ctx.sendChatAction("typing"); // Typing con await

  ctx.reply(`Bienvenido !! <b>${ctx.chat.username}</b>`, {
    parse_mode: "html", // enviamos el mensaje como un archivo html
  });
});

bot.command("despedida", async (ctx) => {
  // creamos el comando de despedida
  await ctx.sendChatAction("typing"); // Typing con await

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
