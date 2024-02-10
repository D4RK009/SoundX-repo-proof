const { EmbedBuilder, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Help with all commands, or one specific command.",
    owner: false,

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
 run: async (client, interaction) => {
        await interaction.deferReply({
          ephemeral: false
        });


  const embed = new EmbedBuilder()
.setAuthor({name:`| SoundX Help Menu `,
      iconURL: interaction.member.user.displayAvatarURL({dynamic: true})})
    .setDescription (`
    *SoundX is a Discord music bot that allows you to easily play music in your Discord server. It supports a wide range of music sources.*\n
     **Utility [8]**\n\`help, invite, ping, support\`

    **Filters [10]**\n\`clearfilter, 8d, bassboost, bass, distort, equalizer, nighcore, pitch, speed, vaporwave\`

    **Musics [21]**\n\`247, autoplay, clearqueue, join, leave, loop, lyrics, nowplaying, pause, play, queue, remove, resume, same, search, seek, shuffle, skip, skipto, stop, volume\`

    **Settings [6]**\n\`prefix, setchannel, fix, setprefix\``)

.setThumbnail(client.user.displayAvatarURL())
    .setColor("#f54c4c")
    .setFooter({ text: `Note: Not All Command Are In Slash!`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
       
     interaction.editReply({ embeds: [embed] })   
       }
        }