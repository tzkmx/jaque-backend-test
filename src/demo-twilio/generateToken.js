const twilio = require('twilio')

const AccessToken = twilio.jwt.AccessToken
const ChatGrant = AccessToken.ChatGrant

function tokenGenerator (identity) {
  console.log({ identity })
  const appName = 'TwilioChat'
  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID
  })

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    {
      identity,
      ttl: 7200
    }
  )

  token.addGrant(chatGrant)

  return token
}
module.exports = {
  generateToken: tokenGenerator
}
