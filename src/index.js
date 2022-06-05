//token are not given in config. env  any Token take and then start this

const TelegramBot = require('node-telegram-bot-api');
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})

const token = process.env.TOKEN
const bot = new TelegramBot(token, {polling: true});

let count = 0
bot.on('message', (msg) => {
    try{


    const chatId = msg.chat.id;
    let c = count++
    console.log(c)
    console.log(msg)

    //console.log(plusOne())
   
    if(c ==0){
        bot.sendMessage(chatId,'https://youtu.be/yqgm9hkJ1FE')
    }
    else if(c == 1){
        bot.sendMessage(chatId,'how are you')
    }
    else if(c == 2){
        bot.sendMessage(chatId,'what is your first name')
    }
    else if(c == 3){
        bot.sendMessage(chatId,'what is your last name')
                                    
    }
    else if(c == 4){
        let e = msg.text
        bot.sendMessage(chatId,`hello ${e}`)
        count = 0
    }
    else{ count = 0 }
    

   /* ----------It is for any text coming from telegram----------------------
   if(msg.text.toLocaleLowerCase() == "sad"){
        bot.sendMessage(chatId,"why you sad")
    }
    else{bot.sendMessage(chatId,"yor feeling")}
    */
}
    catch(err){
        console.log(err.message)
    }});
    

