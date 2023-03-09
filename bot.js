import TelegramBot from "node-telegram-bot-api"

const token = process.env.BOT_KEY;
const bot = new TelegramBot(token, { polling: true });

const chatId = process.env.CHAT_ID;
const message = 'Я БУВ ПІДНЯТИЙ';

bot.sendMessage(chatId, message)
  .then(() => {
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });