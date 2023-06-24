import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
    return { hello: 'World'}
})

Route.get('/posts', 'PostsController.index');
Route.post('/posts', 'PostsController.store');
