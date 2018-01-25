const express = require("express");

const router = express.Router();

const CLIENT_ID = 406171464333656064;
const CLIENT_SECRET = "myqmbpC5JVB0CSjfbxnWVp9z_MR91ZD5";
const redirect = encodeURIComponent('https://github.com/FHGDev/JSHulkbot/blob/gh-pages/api/discord/callback')

router.get('/login', (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`)
})

module.exports = router;
