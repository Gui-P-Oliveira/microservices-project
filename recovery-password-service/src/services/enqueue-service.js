const RabbitMQ = require('../config/rabbitmq')

class EnqueueService {
  static async enqueue(user) {
    const msg = {
      from: 'Equipe LeGui <support.@leguimail.com>',
      to: user.email,
      subject: 'Solicitação de Troca de Senha',
      text: `Olá ${user.name}. \nFoi solicitado um pedido para troca de sua senha.\n Se você não reconhece esse pedido, ignore essa mensagem, mas se foi você que solicitou então clique no link abaixo para confirmar o pedido de troca.\n https://localhost:3003/change-password`
    }

    return RabbitMQ.sendMessage(JSON.stringify(msg))
  }
}

module.exports = EnqueueService
