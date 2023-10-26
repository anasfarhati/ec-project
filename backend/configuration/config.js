const mongoose = require('mongoose');
const connectdatabase = async()=>{
    try {
        await mongoose.connect('mongodb+srv://anasfarhati84:QpV3Bj1G2kfXcAh2@cluster0.wmonvlc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
        console.log('db connected')

    }catch(erreur){
        console.log('db is not connected',erreur)

    }
};
module.exports=connectdatabase