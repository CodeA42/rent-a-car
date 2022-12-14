import { DatabaseKeys } from 'src/utils/@types/app.types'
import { DataSource } from 'typeorm'
import Token from 'src/modules/authentication/entities/token.entity'

export const TokenProvider = {
  provide: DatabaseKeys.TOKEN_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Token),
  inject: [DatabaseKeys.DATA_SOURCE],
}
