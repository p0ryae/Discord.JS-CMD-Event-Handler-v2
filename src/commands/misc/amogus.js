const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    message.channel.send("Command Handler is working!")
}

module.exports.config = {
    name: "amogus",
    aliases: []
}