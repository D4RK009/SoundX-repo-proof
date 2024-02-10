const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, StringSelectMenuBuilder} = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Help with all commands, or one specific command.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
 execute: async (message, args, client, prefix) => {

  const embed = new EmbedBuilder()
.setAuthor({name:`| SoundX Help Menu `,
      iconURL: message.author.displayAvatarURL()})     
 .setDescription (`
 *SoundX is a Discord music bot that allows you to easily play music in your Discord server. It supports a wide range of music sources.*\n
 **Utility [8]**\n\`help, invite, ping, support\`
 
**Filters [10]**\n\`clearfilter, 8d, bassboost, bass, distort, equalizer, nighcore, pitch, speed, vaporwave\`

**Musics [21]**\n\`247, autoplay, clearqueue, join, leave, loop, lyrics, nowplaying, pause, play, queue, remove, resume, same, search, seek, shuffle, skip, skipto, stop, volume,\`

**Settings [6]**\n\`prefix, setchannel, fix, setprefix\``)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#f54c4c")
    .setTimestamp()
    .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
   const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
        new ButtonBuilder()
          .setLabel("Support server")
          .setStyle(ButtonStyle.Link)
  .setURL(`${client.config.links.support}`));
   message.channel.send({embeds: [embed], components: [row]})
      }
}