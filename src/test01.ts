const TelegramBot = require('node-telegram-bot-api');
const token = '7788362039:AAFQga5lRzUZnxWuXveTo6KC589sjMfC28Q'; // Replace with your actual bot token
const chatId = '6592532126'; // Replace with the chat ID of the user

const bot = new TelegramBot(token, { polling: true });

bot.sendMessage(chatId, 'Hello, this is a message from your bot!');





(async () => {
    const TelegramBot = require('node-telegram-bot-api');
    const token = '7788362039:AAFQga5lRzUZnxWuXveTo6KC589sjMfC28Q'; // Replace with your actual bot token
    const chatId = '6592532126'; // Replace with the chat ID of the user

    const bot = new TelegramBot(token, { polling: true });
    // bot.sendMessage(chatId, tokenName);
    const response = await fetch('https://mainnet.helius-rpc.com/?api-key=a211723c-fa94-4c50-b067-4d6d7eab836c', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": "text",
            "method": "getAsset",
            "params": { id: tokenMint}
        }),
    });
    const data = await response.json();
    console.log(`name = ${data.result.content.metadata.name}`);
    console.log(`symbol = ${data.result.content.metadata.symbol}`);
    console.log("👽 GMGN: https://gmgn.ai/sol/token/" + tokenMint);
    bot.sendMessage(chatId, 
        `name = ${data.result.content.metadata.name}
        symbol = ${data.result.content.metadata.symbol}
        👽 GMGN: https://gmgn.ai/sol/token/${tokenMint}`);
})();