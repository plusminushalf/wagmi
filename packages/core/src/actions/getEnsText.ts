import {
  type GetEnsTextErrorType as viem_GetEnsTextErrorType,
  type GetEnsTextParameters as viem_GetEnsTextParameters,
  type GetEnsTextReturnType as viem_GetEnsTextReturnType,
  getEnsText as viem_getEnsText,
} from 'viem/actions'

import { type Config } from '../createConfig.js'
import { type ChainIdParameter } from '../types/properties.js'
import { type Evaluate } from '../types/utils.js'
import { getAction } from '../utils/getAction.js'

export type GetEnsTextParameters<config extends Config = Config> = Evaluate<
  viem_GetEnsTextParameters & ChainIdParameter<config>
>

export type GetEnsTextReturnType = viem_GetEnsTextReturnType

export type GetEnsTextErrorType = viem_GetEnsTextErrorType

/** https://wagmi.sh/core/api/actions/getEnsText */
export function getEnsText<config extends Config>(
  config: config,
  parameters: GetEnsTextParameters<config>,
): Promise<GetEnsTextReturnType> {
  const { chainId, ...rest } = parameters
  const client = config.getClient({ chainId })
  return getAction(client, viem_getEnsText, 'getEnsText')(rest)
}
