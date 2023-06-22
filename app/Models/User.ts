import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
   // CRIAR UMA FUNÇÃO QUE VERIFICA SE ESTÁ BUSCANDO UM PRODUTO.
   // SE ESTIVER, EXECUTA A FUNÇÃO GRAVAR_OS_DADOS_NA_TABELA_VIEWS_PRODUTO()
   
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public age: number

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
