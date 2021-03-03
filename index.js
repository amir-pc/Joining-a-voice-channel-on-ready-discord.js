client.on('ready', () => {
  let channel = client.channels.get('Voice ID');
  channel.join()
});
