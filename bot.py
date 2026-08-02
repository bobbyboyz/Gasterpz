import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes, CallbackQueryHandler

MINI_APP_URL = "https://bobbyboyz.github.io/Gasterpz/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    keyboard = [
        [
            InlineKeyboardButton(
                "🚀 APRI MINI APP",
                web_app=WebAppInfo(url=MINI_APP_URL)
            )
        ],
        [
            InlineKeyboardButton(
                "ℹ️ INFORMAZIONI",
                callback_data="info"
            )
        ]
    ]

    await update.message.reply_photo(
        photo="https://bobbyboyz.github.io/Gasterpz/logo.png",
        caption=(
            "🔥 Benvenuto su GasTerpz\n\n"
            "Apri la nostra Mini App qui sotto 👇"
        ),
        reply_markup=InlineKeyboardMarkup(keyboard)
    )


async def info(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    await query.message.reply_text(
        "ℹ️ GasTerpz\n\n"
        "La nostra piattaforma digitale."
    )


TOKEN = os.getenv("BOT_TOKEN")

app = Application.builder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))
app.add_handler(CallbackQueryHandler(info, pattern="info"))

app.run_polling()
