console.log("HENLO :))")

const Discord = require('discord.js')
const weather = require('weather-js')

const client = new Discord.Client()
client.login('Nzc2MTgxMzYxMTM1ODQ1NDM2.X6xJOQ.5hWd8cqUnEzKYn0_iiEemCpcDuM')
client.on('ready',readyDiscord)
function readyDiscord(){
  console.log('💖')
}

//////////////////////////////////////////
//
/*
toADD:
1. Select a random member of the squad
2. Add a member to the squad
3. Tale all the photos from the conversation, get them to a folder (local?)
4. List all the music reproduced by Groovy:
  4.1. Today
  4.2. This week
  4.3. This Month
  4.4. This year

5.
*/


/*
Currently working and useful:
- 'Barba mata': will select a random online member
- 'Squad members online': will list all online members
- 'Squad members offlne': will list all offline members
- 'Barba mis mensajes'
*/
//
/////////////////////////////////////////
var generalId = '769290387927597058'
var lbda = "769290387927597056"

client.on('message',handleMessage)
function handleMessage(msg){

  if (msg.channel.id == generalId && msg.content == 'Who is daddy'){
    msg.reply('Pacheco 💖')
  }

  if (msg.channel.id == generalId && msg.content == 'Barba help'){
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Guía de uso del bot Barba')
    embed.addField('¿Qué es Barba?','Barba es un bot hecho por @aleky29#0989 el 12/11/2020, sin propósito concreto')
    embed.addField('FUNCIONES:','A Continuación se listan las funciones, como llamarlas y para que sirven')
    embed.addField('Squad members online (o offline):',' Lista los miembros humanos y online (o offline) del servidor')
    embed.addField('Barba stats','Número de miembros online y offline')
    embed.addField('Barba mata','Elige un miembro online al azar')
    embed.addField('Barba mis mensajes','Te devuelve tus últimos cien mensajes del chat (DONT)')
    embed.addField('Barba clima en (ciudad)','Obtiene el estado metorológico de la ciudad especificada')

    msg.channel.send(embed)
  }

  if (msg.channel.id == generalId && msg.content == 'Squad members online'){

    guild = client.guilds.cache.get(lbda)
    membermanager = guild.members
    membermanager.fetch()
    Col = membermanager.cache
    onlines = Col.filter(member => member.presence.status === 'online')
    onlinesnobots = onlines.filter(member => member.user.bot === false)
    //onlinesnobots.each(member => msg.reply(member.user.username))
    var onlineNames = [];
    onlinesnobots.each(member => onlineNames.push(member.user.username))
    const Embed = new Discord.MessageEmbed();
    Embed.setTitle(`Online members`)
    Embed.addField("📲📲📲📲📲📲", onlineNames)
    msg.channel.send(Embed)
  }
  if (msg.channel.id == generalId && msg.content == 'Squad members offline'){

    guild = client.guilds.cache.get(lbda)
    membermanager = guild.members
    membermanager.fetch()
    Col = membermanager.cache
    offlines = Col.filter(member => member.presence.status === 'offline')
    offlinesnobots = offlines.filter(member => member.user.bot === false)
    //offlinesnobots.each(member => msg.reply(member.user.username))
    var offlineNames = [];
    offlinesnobots.each(member => offlineNames.push(member.user.username))
    const Embed = new Discord.MessageEmbed();
    Embed.setTitle(`Offline members`)
    Embed.addField("📴📴📴📴📴📴", offlineNames)
    msg.channel.send(Embed)
  }

  if (msg.channel.id == generalId && msg.content == 'Barba stats'){
    // Get the Guild and store it under the variable "list"
    const list = client.guilds.cache.get(lbda);

    const Embed = new Discord.MessageEmbed();
    Embed.setTitle(`Server Stats`)
    // Using Collection.filter() to separate the online members from the offline members.
    Embed.addField("Online Members", msg.guild.members.cache.filter(member => member.presence.status !=    "offline").size);
    Embed.addField("Offline Members", msg.guild.members.cache.filter(member => member.presence.status == "offline").size);
    let onmembers = msg.guild.members.cache.filter(member => member.presence.status != "offline")
    let offmembers = msg.guild.members.cache.filter(member => member.presence.status == "offline")

    msg.channel.send(Embed)

  }
  if (msg.channel.id == generalId && msg.content == 'Barba mata'){

    guild = client.guilds.cache.get(lbda)
    membermanager = guild.members
    membermanager.fetch()
    Col = membermanager.cache
    onlines = Col.filter(member => member.presence.status === 'online')
    onlinesnobots = onlines.filter(member => member.user.bot === false)
    //onlinesnobots.each(member => msg.reply(member.user.username))
    victimaKey = onlinesnobots.randomKey()
    msg.reply('MUAJAJAJAJAJAJ. Adiós '+onlinesnobots.get(victimaKey).user.username)


  }
  if (msg.channel.id == generalId && msg.content == 'Barba mis mensajes'){
  //userMessages(lbda,msg.author.id)
  guildID = lbda
  userID = msg.author.id


  client.guilds.cache.get(guildID).channels.cache.forEach(ch => {
      if (ch.type === 'text'){
          ch.messages.fetch({
              limit: 100
          }).then(messages => {
              const msgs = messages.filter(m => m.author.id === userID)
              msgs.forEach(m => {
                  msg.reply(`${m.content} - ${m.channel.name}`)
              })
          })
    } else {
          return;
      }
  })
  }
    if (msg.channel.id == generalId && msg.content.startsWith("Barba clima en")){
      let words = msg.content.split(" ")
      place = words[3]
    weather.find({search: place, degreeType: 'C'},function(err,result){
      if(err) console.log(err);


      // console.log(JSON.stringify(result,null,2));
      // msg.reply("INFUNCTION")
      let snow = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️"
      let sun = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️"
      let cloudy = "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️"
      try{
        let embed = new Discord.MessageEmbed()
        embed.setTitle(`Weather - ${result[0].location.name}`)
        embed.setColor("#ff2050")
        if(result[0].current.skytext == "Sunny"){
          embed.setDescription(sun)
        }
        else if(result[0].current.skytext == "Cloudy"){
          embed.setDescription(cloudy)
        }
        else{
          embed.setDescription("Que tengas un buen día :)")
        }
        embed.addField("Temperature", `${result[0].current.temperature} Celsius`, true)
        embed.addField("Sky Text", result[0].current.skytext, true)
        embed.addField("Humidity", result[0].current.humidity, true)
        embed.addField("Wind Speed", result[0].current.windspeed, true)
        embed.addField("Observation Time", result[0].current.observationtime, true)
        embed.addField("Wind Display", result[0].current.winddisplay, true)
        msg.channel.send(embed)
      }catch(err){
        msg.reply("Unable to get data of given location")
      }

    })
  }

  if (msg.channel.id == generalId && msg.content == 'Barba texto ejemplo'){
    let words = msg.content.split(" ")
    msg.reply(words[2])
  }

}
