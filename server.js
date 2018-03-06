const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: "g/help - " + client.guilds.size + " serveurs actifs" ,type : 0}}); {}
 console.log('Ready. Krrrrrrr');
});    

client.on('message', message => {
  if (message.content === 'g/ping') {
    message.channel.send("Pong ! :ping_pong: " +new Date().getTime() - message.createdTimestamp + "ms");
  }
});

client.on('message', message => {
  if (message.content === 'g/goat') {
    message.channel.send("Je vous l'ai dis que je sais pas");
  }
});

client.on('message', message => {
  if (message.content === '<@362637377585545239>') {
    message.channel.send("Faites g/help pour recevoir de l'aide ou g/support en cas de souci");
  }
});

client.on('message', message => {
  if (message.content === 'bite') {
    message.channel.send("Ta gueule, Stévan");
  }
});

client.on('message', message => {
  if (message.content === 'g/support') {
    message.channel.send('**Voici le serveur du développeur :** __https://discord.gg/zuEVeX5__');
  }
});

client.on('message', message => {
  if (message.content === 'g/invite') {
    message.channel.send('Vous voulez m"inviter sur votre serveur? Ok, voici linvitation : https://discordapp.com/oauth2/authorize?client_id=362637377585545239&scope=bot&permissions=2146958591');
  }
 });

client.on('message', message => {
  if (message.content === 'g/test') {
    message.channel.send('Hello World!');
  }
});

client.on('message', message => {
  if (message.content === 'g/help') {
    message.channel.send("**GoatBot Beta** \nCommandes : \nPratique : `g/ping` `g/support` `g/invite` `g/test` \nFun : `g/goat` \nFaites `g/help <commande>` pour plus d'informations sur une commande \n`*GoatBot Beta by Fledrox#5616 with ƁƠƛƧƬƳ#9542*`");
  }
});

client.on('message', message => {
  if (message.content === 'g/help ping') {
    message.channel.send('Montre le temps de latence du bot');
  }
});

client.on('message', message => {
  if (message.content === 'g/help support') {
    message.channel.send('Envoie un lien vers le serveur de support');
  }
});
         
client.on('message', message => {
  if (message.content === 'g/help invite') {
    message.channel.send("Pour m'inviter sur votre serveur !");
  }
});

client.on('message', message => {
  if (message.content === 'g/help test') {
    message.channel.send('Juste un test');
  }
});
      
client.on('message', message => {
  if (message.content === 'g/help goat') {
    message.channel.send('Euhhhhhhhh');
  }
});



    client.login('MzYyNjM3Mzc3NTg1NTQ1MjM5.DXxeTg.St1ItZeBgfDdIp80jjJS-6f137g');
