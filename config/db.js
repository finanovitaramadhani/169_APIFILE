const db = require('../models');

async function connectDatabase(){
    try{
        await db.sequelize.authenticate();
        console.log('Database connected successfully');

        await db.sequelize.sync();
        console.log('Database syncronized');

    }
    catch (err) {
    console.error('Database connecteion failed:', err.message);
    process.exit(1);
    }
}

module.exports = connectDatabase;