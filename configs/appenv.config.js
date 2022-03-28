require('dotenv').config()

exports.dbconfig={
    dburl: process.env.DB_URL   
}

exports.twilioconfig={
    twilioAccountSid:process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken:process.env.TWILIO_AUTH_TOKEN,
    twilioMsgServSid:process.env.TWILIO_MSG_SVC_SID
}

exports.authconfig={
    apiTokenSecret: process.env.API_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    tokenLife: process.env.API_TOKEN_LIFE,
    refreshTokenLife: process.env.REFRESH_TOKEN_LIFE
}
