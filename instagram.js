const { Usuario, Comentario, Post, sequelize } = require('./models');
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;
const { Op } = require('sequelize');

// Usuario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Comentario.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Post.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Post.findAll({
//     where: {
//        // usuarios_id = 1
//        texto: {[Op.like]: 'oi%'}
//     }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     order: [
//         ['nome', 'ASC']
//     ]
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

// Usuario.findAll({
//     order: [
//         ['id', 'ASC']
//        ],
//        limit: 2,
//        offset:2
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))

// });


// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//        }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

// Usuario.findAll({
//    where: {
//     nome: {[Op.notLike]: '%a%'}
//    }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });
// //let i = 0;
// //do {
//     for (let i = 0; i < 6; i+=2) {
// Comentario.findAll({

//        order: [
//         ['id', 'ASC']
//        ],
//        limit: 2,
//        offset:i

// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });
// }
//i++;
//}while (i <6);
    // Usuario.create({
    //     nome: 'Natalia',
    //     email: 'nat@digitalhouse.com',
    //     senha: 'maravilhosaaaa123'
    // }, {
    //     nome: 'Demetryus',
    //     email: 'demetryus@digitalhouse.com',
    //     senha: '123456'
    // }, {
    //     nome: 'Ianna',
    //     email: 'ianna@digitalhouse.com',
    //     senha: 'admin'
    // }, {
    //     nome: 'Ronierison',
    //     email: 'ronierison@digitalhouse.com',
    //     senha: 'abcde'
    // }, {
    //     nome: 'Stefani',
    //     email: 'stefani@digitalhouse.com',
    //     senha: '01011990'
    // }, {
    //     nome: 'Amanda',
    //     email: 'amanda@digitalhouse.com',
    //     senha: '000000'
    // }, {
    //     nome: 'Heloisa',
    //     email: 'heloisa@digitalhouse.com',
    //     senha: 'xyzabc'
    // } 
    // ).then((resultado) => {
    //     console.log(resultado.toJSON());
    // });
  
    // });
    // Usuario.update({
    //     senha: 'novasenha123'
    // }, {
    //     where: {
    //         id: 8
    //     }
    // }).then((resultado) => {
    //     console.log(resultado.toJSON());
    // })
    // Usuario.destroy({
    //     where: {
    //         id: 6
    //     }
    // }).then((resultado) => {
    //     console.log(resultado.toJSON());
    // })

    // Usuario.bulkCreate([
    //     { nome: 'Amanda', email: 'amanda@digitalhouse.com' , senha: '123456'},
    //     { nome: 'Demetryus', email: 'demetryus@digitalhouse.com' , senha: 'abcde'},
    //     { nome: 'Ianna', email: 'ianna@digitalhouse.com' , senha: '010190'},
    //     { nome: 'Ronierison', email: 'ronierison@digitalhouse.com' , senha: 'admin'},
    //     { nome: 'Stefani', email: 'stefani@digitalhouse.com' , senha: '000000'},
    //     { nome: 'Heloisa', email: 'heloisa@digitalhouse.com' , senha: 'xyz123'},
    //   ],) // will return all columns for each row inserted
    //   .then((resultado) => {
    //     console.log(resultado);
    //   });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// // })

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(1, {include: ["posts"]}).then((usuario) => {
//     console.log(usuario.toJSON());
//     sequelize.close();
// })

Post.findByPk(1, {include:['comentario']}).then(
    Post => {
        console.log(Post.toJSON());
        sequelize.close();
    }
)
