const { Telegraf, Markup } = require('telegraf');

// Bot Token from Environment Variable
const bot = new Telegraf(process.env.8565321498:AAFI17mSc5-Ls4XOE7Z-5xgL7376WyJGAmM);

// Channel link
const CHANNEL_LINK = 'https://t.me/finorixproai';

// Rules
const RULES = {
  English: `📌 Trading Rules:\n1. Select pair, then upload image...\n2. ...`,
  বাংলা: `📌 ট্রেডিং রুলস:\n১. পেয়ার সিলেক্ট, তারপর ইমেজ আপলোড...\n২. ...`,
  हिन्दी: `📌 ट्रेडिंग रूल्स:\n१. पेयर चुनें, फिर इमेज अपलोड...\n२. ...`
};

// /start command
bot.start((ctx) => {
  ctx.reply(
    `Welcome! Please join our Telegram channel first.`,
    Markup.inlineKeyboard([
      Markup.button.url('Join Telegram ✅', CHANNEL_LINK),
      Markup.button.callback('Confirm ✅', 'confirm_join')
    ])
  );
});

bot.action('confirm_join', async (ctx) => {
  await ctx.answerCbQuery();
  ctx.editMessageText(
    'Select your language:',
    Markup.inlineKeyboard([
      Markup.button.callback('English', 'lang_English'),
      Markup.button.callback('বাংলা', 'lang_বাংলা'),
      Markup.button.callback('हिन्दी', 'lang_हिन्दी')
    ])
  );
});

bot.action(/lang_(.+)/, async (ctx) => {
  const lang = ctx.match[1];
  await ctx.answerCbQuery();
  ctx.editMessageText(
    RULES[lang],
    Markup.inlineKeyboard([
      Markup.button.callback('Confirm ✅', 'final_confirm')
    ])
  );
});

bot.action('final_confirm', async (ctx) => {
  await ctx.answerCbQuery();
  ctx.editMessageText(
    'All set! Open Finorix Pro AI:',
    Markup.inlineKeyboard([
      Markup.button.url('Finorix Pro AI', 'https://courageous-bubblegum-a6fe2e.netlify.app/')
    ])
  );
});

// Launch bot
bot.launch();
console.log('Bot is running...');
