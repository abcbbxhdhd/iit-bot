import telebot
import os

bot = telebot.TeleBot(os.environ.get("BOT_KEY"))

bot.send_message(os.environ.get("CHAT_ID"), "Я БУВ РОЗГОРНУТИЙ")
