require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTA5MjI0ODk0OTM5OTc1MjgxNg.G94Ljq.-gbz3-znUZlvlmtoYAUq_VzxuFG28j5nJqlyp4", 
    clientID: process.env.CLIENT_ID || "1092108135818350592", 
    prefix: process.env.PREFIX || "+", 
    ownerID: process.env.OWNERID || "992472529413349400", 
    mongourl: process.env.MONGO_URI || "mongodb+srv://DjBadam:Anishek@cluster0.ucadt.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.COlOR || ("f54c4c"), 
    logs: process.env.LOGS || "1107078266214420512", 

  webhook: {
    Cmd: {
      url: 'https://discord.com/api/webhooks/1202989768137515028/kAn1VFgN4TtMHMCmXk7VMjgRboMcXOp261yrsdfqpqusj8PUTmYWtwrROMe1N6jRyXEy',
    },
    Errors: {
      url: 'https://discord.com/api/webhooks/1202989768137515028/kAn1VFgN4TtMHMCmXk7VMjgRboMcXOp261yrsdfqpqusj8PUTmYWtwrROMe1N6jRyXEy',
    },
    Loggin: {
      url: 'https://discord.com/api/webhooks/1202989768137515028/kAn1VFgN4TtMHMCmXk7VMjgRboMcXOp261yrsdfqpqusj8PUTmYWtwrROMe1N6jRyXEy',
    },
  },
  
 links: {
        support: process.env.SUPPORT || 'https://dsc.gg/SoundX', 
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1023571747133468703&permissions=8&scope=applications.commands%20bot' 
  },
    nodes: [
      {
      host: process.env.NODE_HOST || "lava.link",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "lava",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        },
      {
      host: process.env.NODE_HOST || "lava.link",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "lava",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
}
  ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
