const path = require('path');
require('dotenv').config({
  path: path.resolve(
    process.cwd(),
    '.env'
  )
});

module.exports = {
  BOOKING_POC_ADDRESS: process.env.BOOKING_POC_ADDRESS || '0x028C2ed488804A80e8355590575979397403078C',
  LIF_TOKEN_ADDRESS: process.env.LIF_TOKEN_ADDRESS || '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
  WHITELIST: process.env.WHITELIST || '*',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  STARTING_BLOCK: process.env.STARTING_BLOCK || 3668521,
  MONGODB_URI: process.env.MONGODB_URI,
  MAIL_API_KEY: process.env.MAIL_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL,
  OWNER_PRIVATE_KEY: process.env.OWNER_PRIVATE_KEY,
  OWNER_ADDRESS: process.env.OWNER_ADDRESS,
  WEB3_PROVIDER: process.env.WEB3_PROVIDER,
  MASTER_KEY: process.env.MASTER_KEY,
  GIT_REV: process.env.GIT_REV,
  RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
  IS_RECAPTCHA_ON: true,
};
