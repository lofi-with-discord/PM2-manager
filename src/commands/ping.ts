import { Message } from 'discord.js'
import Client from '../classes/Client'

export default (client: Client, msg: Message) =>
  msg.channel.send(`> ${client.ws.ping}ms`)

export const aliases = ['ping']
