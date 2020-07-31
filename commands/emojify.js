const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

 module.exports.run = async (client, message, args) => { //eslint-disable-line no-unused-var.run = async (client, message, args, level) => { //eslint-disable-line no-unused-vars.run = async (client, message, args, level) => { //eslint-disable-line no-unused-vars
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
      return;
    }
    message.channel.send(
      args.join(' ')
       .split('')
       .map(c => mapping[c] || c)
       .join('')
    )
}
 
module.exports.help = {
  name: "emojify",
}