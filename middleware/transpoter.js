const { google } = require('googleapis');
const nodemailer = require('nodemailer');


const CLIENT_ID = '923612224867-ffjv11pl51r36gl3bdn9fiphq9nh28mp.apps.googleusercontent.com'
const CLIENT_SECRET = "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"
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

const lol = async() => {
    const accessToken = await oAuth2Client.getAccessToken()
    return accessToken
}


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'oAuth2',
        user: 'ekwunoc@gmail.com',
        client: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        accessToken: lol
    },
});

module.exports = transporter;
