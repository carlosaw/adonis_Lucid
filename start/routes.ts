import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

//Route.get('/', 'HomeController.index')
//Route.get('/sobre', 'HomeController.sobre')

Route.get('/', async () => {
    
    const user = new User();

    user.name = "Carlos2";
    user.password = "123456";
    user.age = 59;
    await user.save();

    return {
        objeto: user,
        persistido: user.$isPersisted
    }
    //return user;


})