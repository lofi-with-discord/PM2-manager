import { Message } from 'discord.js'
import Client from '../classes/Client'
import pm2 from 'pm2'

export default (client: Client, msg: Message) =>
  pm2.restart('LofiGirl', (_, proc) => msg.channel.send(`\`\`\`json\n${JSON.stringify(proc, null, 2)}\`\`\``))

export const aliases = ['list']
