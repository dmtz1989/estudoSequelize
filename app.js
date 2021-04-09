/* const promiseComArg = (argumento) => new Promise((resolve, reject) => {
    if(argumento > 1000) {
        setTimeout(() => {
            resolve("o argumento é válido");
        }, argumento);
    }else {
        reject("o argumento é inválido")}
       /* resolve("o argumento é válido");
        }
        else {
            reject("o argumento é inválido");
        }*/
  /*  }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    });
    //promiseComArg(4000);
    const comAwait = async () => {
        console.log(await promiseComArg(1000).catch(function(error){console.log(error)}))
    }
    comAwait();*/

    const sequelize = require('sequelize');
    const config = require('./config/config');
    const conexaoDB = new sequelize(config);

    conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
    .then((data) => {
        console.log(data);
        conexaoDB.close();
    })
    .catch((error) => {
        console.log(error);
    });