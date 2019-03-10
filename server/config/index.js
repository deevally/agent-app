import  dotenv from 'dotenv';

dotenv.config();

const config = {
 DB_URL_DEV: process.env.DB_URL_DEV,
 OWNER: process.env.OWNER,
 OWNERPASSWORD: process.env.OWNERPASSWORD,
 JWT_SECRET: process.env.JWT_SECRET,
 DB_URL_TEST: process.env.DB_URL_TEST,
 DB_URL_PROD: process.env.DB_URL_PROD,
 OWNERNUMBER: process.env.OWNERNUMBER
};

export default config;
