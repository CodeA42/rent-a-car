import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { authType } from '../authentication/types/authentication.types'

export function ApiAddVehicle() {
  return applyDecorators(
    ApiCreatedResponse({ description: 'Vehicle created successfully' }),
    ApiForbiddenResponse({
      description: 'Insuficcient permissions',
    }),
    ApiBearerAuth(authType.accessToken),
  )
}

export function ApiGetVehicle() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Complicated explenation that no one will ever read',
    }),
    ApiForbiddenResponse({
      description:
        'There is actually no such return im jus messin wich ya m man',
    }),
    ApiBearerAuth(authType.accessToken),
  )
}

export function ApiUpdateVehicle() {
  return applyDecorators(
    ApiOkResponse({ description: 'Vehicle updated successfully' }),
    ApiForbiddenResponse({ description: 'Insuficcient permissions' }),
    ApiBearerAuth(authType.accessToken),
  )
}

export function ApiDeleteVehicle() {
  return applyDecorators(
    ApiOkResponse({ description: 'Vehicle deleted successfully' }),
    ApiForbiddenResponse({
      description: 'Insuficcient permissions',
    }),
    ApiBearerAuth(authType.accessToken),
  )
}
