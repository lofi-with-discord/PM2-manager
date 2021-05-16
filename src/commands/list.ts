import { EmbedField, Message } from 'discord.js'
import Client from '../classes/Client'
import pm2 from 'pm2'

export default (client: Client, msg: Message) =>
  pm2.list((err, proc) => msg.channel.send(null, {
    embed: {
      color: err?.message ? 0xff0000 : 0x00ff00,
      title: err?.message ? 'Error' : 'Result',
      ...proc
        ? {
            fields: proc.reduce((prev, curr) => [...prev, ({
              name: `${curr.pm2_env?.status === 'online' ? '🟢' : '🔴'} ${curr.name}`,
              value: `status: \`${curr.pm2_env?.status}\`\npid: \`${curr.pid}\`\ncpu: \`${curr.monit?.cpu}\`\nmem: \`${curr.monit?.memory}\``,
              inline: true
            } as EmbedField)], [] as EmbedField[])
          }
        : {},
      ...err?.message
        ? { description: `\`\`\`${err.message}\`\`\`` }
        : (proc.length < 1
            ? { description: 'empty' }
            : {})
    }
  }))

export const aliases = ['list']
