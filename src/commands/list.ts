import { Message } from 'discord.js'
import Client from '../classes/Client'
import pm2 from 'pm2'

export default (client: Client, msg: Message) =>
  pm2.list((err, proc) => msg.channel.send(`\`\`\`json\n${JSON.stringify(err?.message || proc, null, 2)}\`\`\``))

export const aliases = ['list']
