const Mongo = require("./mongo")

class Battles extends Mongo {
  constructor(collection) {
    super(collection);
    super.setContext({doc_id: 'battle_number'})
  }

  async getAll(options) {
    try {
      await super.connect()
      let data = await super.find(options)
      await super.disconnect()
      return data
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

module.exports = new Battles('battles')