/*
    BOT DE TELEGRAM EJ : 5 INLINE KEYBOARD O TECLADO EN LINEA.
    (UTILIZAREMOS LOS ACTIONS PARA RESPONDER AL CALLBACK DATA)
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
  ctx.reply(`Hola ${ctx.chat.username} , ¿Como estas?`); // enviamos el mensaje.

  await ctx.sendChatAction("typing"); // Typing con await

  await ctx.reply("Por favor , selecciona una de estas opciones !", {
    reply_markup: {
      // creamos un reply markup
      inline_keyboard: [
        // creamos un inline keyboard
        // dentro del inline keyboard creamos las teclas / opciones.
        [
          {
            text: "Opcion numero 1",
            callback_data: "opcion1",
          },
        ],
        [
          {
            text: "Opcion numero 2",
            callback_data: "opcion2",
          },
        ],
        [
          {
            text: "Opcion numero 3",
            callback_data: "opcion3",
          },
        ],

        [
          {
            text: "Opcion numero 4",
            callback_data: "opcion4",
          },
          {
            text: "Opcion numero 5",
            callback_data: "opcion5",
          },
        ],
        [
            {
                text: "Opcion 6",
                url: "https://github.com/E-K-dev/Telegraf-JS"
            }
        ],
      ], // termina el inline keyboard
    }, // termina el reply markup
  }); //enviamos el mensaje
});

bot.action("opcion1", async (ctx) => {
  // opcion 1
  ctx.deleteMessage(); // eliminamos el mensaje.
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply("Has escogido la opcion 1!!");
});

bot.action("opcion2", async (ctx) => {
  // opcion 2
  ctx.deleteMessage(); // eliminamos el mensaje.
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply("Has escogido la opcion 2!!");
});

bot.action("opcion3", async (ctx) => {
  // opcion 3
  ctx.deleteMessage(); // eliminamos el mensaje.
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply("Has escogido la opcion 3!!");
});

bot.action("opcion4", async (ctx) => {
  // opcion 4
  ctx.deleteMessage(); // eliminamos el mensaje.
  await ctx.sendChatAction("typing"); // Typing con await
  ctx.reply("Has escogido la opcion 4!!");
});


bot.action("opcion5", async (ctx) => {
    // opcion 5
    ctx.deleteMessage(); // eliminamos el mensaje.
    await ctx.sendChatAction("typing"); // Typing con await
    ctx.reply("Has escogido la opcion 5!!");
  });

let run = () => {
  // funcion para correr el bot
  console.clear();
  bot.launch(); // lanzamos el bot
  console.log("Bot iniciado !");
};

run(); //corremos el bot
