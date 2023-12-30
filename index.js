const { Client, GatewayIntentBits } = require('discord.js');
const chat = require("./ai-chat-turbot3.js")
let dathingGlobal ;

const {token} = require('./config.json')
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const dathing = ["Minecraft","Fortnite","Mindustry","Grand Theft Auto V","Paladins","Pokemon","Deceit","Team Fortress 2","ROBLOX","VALORANT","League of Legends","Amogus"]
  const qwer = Math.floor(Math.random()*dathing.length)  
  //client.user.setActivity(dathing[qwer])
  client.user.setActivity("Fortune telling")
  dathingGlobal = dathing[qwer]
});
client.on("messageCreate", (message) => {
    //if(message.auther.tag == client.user.tag) return
    const ifUserMentionedCorectly = new RegExp(`^<@844868121625886752>`);
    if(message.content.match(ifUserMentionedCorectly)){
        chat.execute(message,dathingGlobal)
    }
    if (message.content === "!n hello") {
        message.reply("Hey!")
    } 
});
client.login(token);