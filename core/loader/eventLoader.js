const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('roleCreate', reqEvent('roleCreate'));
  client.on('channelCreate', (channel) => reqEvent('channelCreate')(channel,client));
  client.on('channelUpdate', reqEvent('channelUpdate'));
  client.on('guildCreate', (guild) => reqEvent('guildCreate')(guild,client));
};
