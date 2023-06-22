import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

//Route.get('/', 'HomeController.index')
//Route.get('/sobre', 'HomeController.sobre')

Route.get('/', async () => {
    /** DELETA TODOS OS USUÁRIOS */
    let users= await User.all();    
        users.map((user) => {
            user.delete();
        })
    return 'Usuários deletados com sucesso!';
    
    /** NÃO RECOMENDADA */
    // await User.query().where('id', '>', 1).delete();

    /** DELETE UM USUÁRIO */
    // let user= await User.find(1);
    // if(user) {
    //     user.delete();
    // }
    // return 'Usuário deletado com sucesso!';

})