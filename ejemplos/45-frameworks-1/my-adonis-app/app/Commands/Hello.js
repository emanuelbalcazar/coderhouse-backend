'use strict'

const { Command } = require('@adonisjs/ace')

class Hello extends Command {
  static get signature() {
    return 'hello'
  }

  static get description() {
    return 'saludar'
  }

  async handle(args, options) {
    this.error('No deberias usar este comando')
  }
}

module.exports = Hello
