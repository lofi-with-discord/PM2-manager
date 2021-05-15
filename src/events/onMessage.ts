import { Team, Message } from 'discord.js'

import Client from '../classes/Client'
import Query from './../classes/Query'

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
export default async function onMessage (client: Client, msg: Message) {
  const { prefix } = client.config
  const { author, content } = msg

  const app = await client.fetchApplication()

  if (author.bot) return
  if (author.id !== (app.owner instanceof Team ? app.owner.ownerID : app.owner?.id)) return
  if (!content.startsWith(prefix)) return

  const query = new Query(prefix, content)
  const target = client.commands.find((command) => command.aliases.includes(query.cmd))

  if (!target) return
  target.default(client, msg, query)
}
