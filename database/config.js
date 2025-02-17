const mongoose = require('mongoose');

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useCreateIndex: true
        });

        console.log('DB Online')
    }catch(error){
        console.log(error);
        throw  new error('Error al realizar la conexión');
    }    
}

module.exports ={
    dbConnection
}