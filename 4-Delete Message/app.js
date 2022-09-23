/*
    BOT DE TELEGRAM EJ : 4 ELIMINAR MENSAJE.

    (DELETE MESSAGE)
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

/delete - Elimina este mensaje.`); // enviamos el mensaje
});



bot.command("delete", async (ctx) => {
  // creamos el comando delete
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.deleteMessage(); // eliminamos el mensaje !
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply(
    "Mensaje eliminado exitosamente , para reiniciar el bot, ejecute /start"
  );
});

let run = () => {
  // funcion para correr el bot
  console.clear();
  bot.launch(); // lanzamos el bot
  console.log("Bot iniciado !");
};

run(); //corremos el bot
