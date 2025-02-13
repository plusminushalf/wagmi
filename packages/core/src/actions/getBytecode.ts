import {
  type GetBytecodeErrorType as viem_GetBytecodeErrorType,
  type GetBytecodeParameters as viem_GetBytecodeParameters,
  type GetBytecodeReturnType as viem_GetBytecodeReturnType,
  getBytecode as viem_getBytecode,
} from 'viem/actions'

import { type Config } from '../createConfig.js'
import { type ChainIdParameter } from '../types/properties.js'
import { type Evaluate } from '../types/utils.js'

export type GetBytecodeParameters<config extends Config = Config> = Evaluate<
  viem_GetBytecodeParameters & ChainIdParameter<config>
>

export type GetBytecodeReturnType = viem_GetBytecodeReturnType

export type GetBytecodeErrorType = viem_GetBytecodeErrorType

/** https://wagmi.sh/core/api/actions/getBytecode */
export async function getBytecode<config extends Config>(
  config: config,
  parameters: GetBytecodeParameters<config>,
): Promise<GetBytecodeReturnType> {
  const { chainId, ...rest } = parameters
  const client = config.getClient({ chainId })
  return viem_getBytecode(client, rest)
}
