import { Message } from 'discord.js'
import Client from '../classes/Client'
import pm2 from 'pm2'
import Query from '../classes/Query'

export default (client: Client, msg: Message, query: Query) =>
  pm2.restart(query.args[0], (err, data) => msg.channel.send(`\`\`\`json\n${JSON.stringify(err?.message || data, null, 2)}\`\`\``))

export const aliases = ['list']
