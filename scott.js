'use strict'

module.exports = {
  name(nickname=null) {
    const scott = ['Scott', nickname, 'Domes']
    return scott.filter(Boolean).join(' ')
  }, 

  favouriteTeam: "New England Patriots",
  bestQuotes: "Mackenzie sucks",

}