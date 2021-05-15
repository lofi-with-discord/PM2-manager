import { Message } from 'discord.js'
import Client from '../classes/Client'
import pm2 from 'pm2'

export default (client: Client, msg: Message) =>
  pm2.list((_, data) => msg.channel.send(`\`\`\`json\n${JSON.stringify(data, null, 2)}\`\`\``))

export const aliases = ['list']
