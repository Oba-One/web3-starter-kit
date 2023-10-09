import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useContractEvent,
} from 'wagmi'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BasePaymaster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basePaymasterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CALLDATA_SIZE_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'FORWARDER_HUB_OVERHEAD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PAYMASTER_ACCEPTANCE_BUDGET',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'POST_RELAYED_CALL_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PRE_RELAYED_CALL_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasAndDataLimits',
    outputs: [
      {
        name: 'limits',
        internalType: 'struct IPaymaster.GasAndDataLimits',
        type: 'tuple',
        components: [
          {
            name: 'acceptanceBudget',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'postRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'calldataSizeLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRelayHub',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'context', internalType: 'bytes', type: 'bytes' },
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'gasUseWithoutPost', internalType: 'uint256', type: 'uint256' },
      {
        name: 'relayData',
        internalType: 'struct GsnTypes.RelayData',
        type: 'tuple',
        components: [
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'transactionCalldataGasUsed',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'relayWorker', internalType: 'address', type: 'address' },
          { name: 'paymaster', internalType: 'address', type: 'address' },
          { name: 'forwarder', internalType: 'address', type: 'address' },
          { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
          { name: 'clientId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'postRelayedCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'relayRequest',
        internalType: 'struct GsnTypes.RelayRequest',
        type: 'tuple',
        components: [
          {
            name: 'request',
            internalType: 'struct IForwarder.ForwardRequest',
            type: 'tuple',
            components: [
              { name: 'from', internalType: 'address', type: 'address' },
              { name: 'to', internalType: 'address', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'gas', internalType: 'uint256', type: 'uint256' },
              { name: 'nonce', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              {
                name: 'validUntilTime',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'relayData',
            internalType: 'struct GsnTypes.RelayData',
            type: 'tuple',
            components: [
              {
                name: 'maxFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'maxPriorityFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'transactionCalldataGasUsed',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'relayWorker', internalType: 'address', type: 'address' },
              { name: 'paymaster', internalType: 'address', type: 'address' },
              { name: 'forwarder', internalType: 'address', type: 'address' },
              { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
              { name: 'clientId', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'approvalData', internalType: 'bytes', type: 'bytes' },
      { name: 'maxPossibleGas', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'preRelayedCall',
    outputs: [
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'hub', internalType: 'contract IRelayHub', type: 'address' },
    ],
    name: 'setRelayHub',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'setTrustedForwarder',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionPaymaster',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address payable', type: 'address' },
    ],
    name: 'withdrawRelayHubDepositTo',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseScriptABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContextUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const contextUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165UpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967UpgradeUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UpgradeUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC2771Recipient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc2771RecipientABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GsnEip712Library
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gsnEip712LibraryABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'EIP712DOMAIN_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'GENERIC_PARAMS',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAYDATA_TYPE',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAYDATA_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAY_REQUEST_NAME',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAY_REQUEST_SUFFIX',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAY_REQUEST_TYPE',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELAY_REQUEST_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControlUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeaconUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconUpgradeableABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEAS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ieasABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'schema',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'Attested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'schema',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'Revoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'revoker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'data', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'timestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
    ],
    name: 'RevokedOffchain',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'data', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'timestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
    ],
    name: 'Timestamped',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct AttestationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData',
            type: 'tuple',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'delegatedRequest',
        internalType: 'struct DelegatedAttestationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData',
            type: 'tuple',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signature',
            internalType: 'struct EIP712Signature',
            type: 'tuple',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'attester', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'attestByDelegation',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'uid', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getAttestation',
    outputs: [
      {
        name: '',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'revoker', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getRevokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSchemaRegistry',
    outputs: [
      { name: '', internalType: 'contract ISchemaRegistry', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'uid', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isAttestationValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'multiRequests',
        internalType: 'struct MultiAttestationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'multiDelegatedRequests',
        internalType: 'struct MultiDelegatedAttestationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signatures',
            internalType: 'struct EIP712Signature[]',
            type: 'tuple[]',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'attester', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'multiAttestByDelegation',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'multiRequests',
        internalType: 'struct MultiRevocationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'multiRevoke',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'multiDelegatedRequests',
        internalType: 'struct MultiDelegatedRevocationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signatures',
            internalType: 'struct EIP712Signature[]',
            type: 'tuple[]',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'revoker', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'multiRevokeByDelegation',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'multiRevokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'multiTimestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct RevocationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData',
            type: 'tuple',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'revoke',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'delegatedRequest',
        internalType: 'struct DelegatedRevocationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData',
            type: 'tuple',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signature',
            internalType: 'struct EIP712Signature',
            type: 'tuple',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'revoker', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'revokeByDelegation',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'revokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'timestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1271
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1271ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165UpgradeableABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822ProxiableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableUpgradeableABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC2771Recipient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc2771RecipientABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6551Account
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6551AccountABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'context', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSigner',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'state',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6551Executable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6551ExecutableABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6551RegistryABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'salt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'uint256', type: 'uint256' },
      { name: 'initData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721GeneralMint
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721GeneralMintABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintAmountToOneRecipient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipients', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'mintOneToMultipleRecipients',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'mintOneToOneRecipient',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipients', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintSameAmountToMultipleRecipients',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintSpecificTokenToOneRecipient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'mintSpecificTokensToOneRecipient',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iForwarderABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'domainSeparator',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'domainValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DomainRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'typeHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'typeStr',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RequestTypeRegistered',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'forwardRequest',
        internalType: 'struct IForwarder.ForwardRequest',
        type: 'tuple',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'gas', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'validUntilTime', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'domainSeparator', internalType: 'bytes32', type: 'bytes32' },
      { name: 'requestTypeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'suffixData', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'execute',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'ret', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'from', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
    name: 'registerDomainSeparator',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'typeName', internalType: 'string', type: 'string' },
      { name: 'typeSuffix', internalType: 'string', type: 'string' },
    ],
    name: 'registerRequestType',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'forwardRequest',
        internalType: 'struct IForwarder.ForwardRequest',
        type: 'tuple',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'gas', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'validUntilTime', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'domainSeparator', internalType: 'bytes32', type: 'bytes32' },
      { name: 'requestTypeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'suffixData', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verify',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPaymaster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPaymasterABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasAndDataLimits',
    outputs: [
      {
        name: 'limits',
        internalType: 'struct IPaymaster.GasAndDataLimits',
        type: 'tuple',
        components: [
          {
            name: 'acceptanceBudget',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'postRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'calldataSizeLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRelayHub',
    outputs: [{ name: 'relayHub', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [
      { name: 'trustedForwarder', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'context', internalType: 'bytes', type: 'bytes' },
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'gasUseWithoutPost', internalType: 'uint256', type: 'uint256' },
      {
        name: 'relayData',
        internalType: 'struct GsnTypes.RelayData',
        type: 'tuple',
        components: [
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'transactionCalldataGasUsed',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'relayWorker', internalType: 'address', type: 'address' },
          { name: 'paymaster', internalType: 'address', type: 'address' },
          { name: 'forwarder', internalType: 'address', type: 'address' },
          { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
          { name: 'clientId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'postRelayedCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'relayRequest',
        internalType: 'struct GsnTypes.RelayRequest',
        type: 'tuple',
        components: [
          {
            name: 'request',
            internalType: 'struct IForwarder.ForwardRequest',
            type: 'tuple',
            components: [
              { name: 'from', internalType: 'address', type: 'address' },
              { name: 'to', internalType: 'address', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'gas', internalType: 'uint256', type: 'uint256' },
              { name: 'nonce', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              {
                name: 'validUntilTime',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'relayData',
            internalType: 'struct GsnTypes.RelayData',
            type: 'tuple',
            components: [
              {
                name: 'maxFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'maxPriorityFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'transactionCalldataGasUsed',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'relayWorker', internalType: 'address', type: 'address' },
              { name: 'paymaster', internalType: 'address', type: 'address' },
              { name: 'forwarder', internalType: 'address', type: 'address' },
              { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
              { name: 'clientId', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'approvalData', internalType: 'bytes', type: 'bytes' },
      { name: 'maxPossibleGas', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'preRelayedCall',
    outputs: [
      { name: 'context', internalType: 'bytes', type: 'bytes' },
      { name: 'rejectOnRecipientRevert', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionPaymaster',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRelayHub
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iRelayHubABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AbandonedRelayManagerBalanceEscheated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'paymaster',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'deprecationTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'HubDeprecated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'config',
        internalType: 'struct IRelayHub.RelayHubConfig',
        type: 'tuple',
        components: [
          { name: 'maxWorkerCount', internalType: 'uint256', type: 'uint256' },
          { name: 'gasReserve', internalType: 'uint256', type: 'uint256' },
          { name: 'postOverhead', internalType: 'uint256', type: 'uint256' },
          { name: 'gasOverhead', internalType: 'uint256', type: 'uint256' },
          {
            name: 'minimumUnstakeDelay',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'devAddress', internalType: 'address', type: 'address' },
          { name: 'devFee', internalType: 'uint8', type: 'uint8' },
          { name: 'baseRelayFee', internalType: 'uint80', type: 'uint80' },
          { name: 'pctRelayFee', internalType: 'uint16', type: 'uint16' },
        ],
        indexed: false,
      },
    ],
    name: 'RelayHubConfigured',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newRelayWorkers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'workersCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RelayWorkersAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'minimumStake',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakingTokenDataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'paymaster',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'relayRequestID',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'relayWorker',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'innerGasUsed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'reason', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'TransactionRejectedByPaymaster',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'relayWorker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'relayRequestID',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'paymaster',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'status',
        internalType: 'enum IRelayHub.RelayCallStatus',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'charge',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransactionRelayed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'status',
        internalType: 'enum IRelayHub.RelayCallStatus',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'returnValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'TransactionResult',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'dest', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawn',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newRelayWorkers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'addRelayWorkers',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'aggregateGasleft',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'gasUsed', internalType: 'uint256', type: 'uint256' },
      {
        name: 'relayData',
        internalType: 'struct GsnTypes.RelayData',
        type: 'tuple',
        components: [
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'transactionCalldataGasUsed',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'relayWorker', internalType: 'address', type: 'address' },
          { name: 'paymaster', internalType: 'address', type: 'address' },
          { name: 'forwarder', internalType: 'address', type: 'address' },
          { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
          { name: 'clientId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'calculateCharge',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'charge', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateDevCharge',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'depositFor',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_deprecationTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deprecateHub',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'escheatAbandonedRelayBalance',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBatchGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfiguration',
    outputs: [
      {
        name: 'config',
        internalType: 'struct IRelayHub.RelayHubConfig',
        type: 'tuple',
        components: [
          { name: 'maxWorkerCount', internalType: 'uint256', type: 'uint256' },
          { name: 'gasReserve', internalType: 'uint256', type: 'uint256' },
          { name: 'postOverhead', internalType: 'uint256', type: 'uint256' },
          { name: 'gasOverhead', internalType: 'uint256', type: 'uint256' },
          {
            name: 'minimumUnstakeDelay',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'devAddress', internalType: 'address', type: 'address' },
          { name: 'devFee', internalType: 'uint8', type: 'uint8' },
          { name: 'baseRelayFee', internalType: 'uint80', type: 'uint80' },
          { name: 'pctRelayFee', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCreationBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDeprecationTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'getMinimumStakePerToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPenalizer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRelayRegistrar',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getStakeManager',
    outputs: [
      { name: '', internalType: 'contract IStakeManager', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'getWorkerCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'worker', internalType: 'address', type: 'address' }],
    name: 'getWorkerManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isDeprecated',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'isRelayEscheatable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'onRelayServerRegistered',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayWorker', internalType: 'address', type: 'address' },
      { name: 'beneficiary', internalType: 'address payable', type: 'address' },
    ],
    name: 'penalize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'domainSeparatorName', internalType: 'string', type: 'string' },
      { name: 'maxAcceptanceBudget', internalType: 'uint256', type: 'uint256' },
      {
        name: 'relayRequest',
        internalType: 'struct GsnTypes.RelayRequest',
        type: 'tuple',
        components: [
          {
            name: 'request',
            internalType: 'struct IForwarder.ForwardRequest',
            type: 'tuple',
            components: [
              { name: 'from', internalType: 'address', type: 'address' },
              { name: 'to', internalType: 'address', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'gas', internalType: 'uint256', type: 'uint256' },
              { name: 'nonce', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              {
                name: 'validUntilTime',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'relayData',
            internalType: 'struct GsnTypes.RelayData',
            type: 'tuple',
            components: [
              {
                name: 'maxFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'maxPriorityFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'transactionCalldataGasUsed',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'relayWorker', internalType: 'address', type: 'address' },
              { name: 'paymaster', internalType: 'address', type: 'address' },
              { name: 'forwarder', internalType: 'address', type: 'address' },
              { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
              { name: 'clientId', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'approvalData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relayCall',
    outputs: [
      { name: 'paymasterAccepted', internalType: 'bool', type: 'bool' },
      { name: 'charge', internalType: 'uint256', type: 'uint256' },
      {
        name: 'status',
        internalType: 'enum IRelayHub.RelayCallStatus',
        type: 'uint8',
      },
      { name: 'returnValue', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_config',
        internalType: 'struct IRelayHub.RelayHubConfig',
        type: 'tuple',
        components: [
          { name: 'maxWorkerCount', internalType: 'uint256', type: 'uint256' },
          { name: 'gasReserve', internalType: 'uint256', type: 'uint256' },
          { name: 'postOverhead', internalType: 'uint256', type: 'uint256' },
          { name: 'gasOverhead', internalType: 'uint256', type: 'uint256' },
          {
            name: 'minimumUnstakeDelay',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'devAddress', internalType: 'address', type: 'address' },
          { name: 'devFee', internalType: 'uint8', type: 'uint8' },
          { name: 'baseRelayFee', internalType: 'uint80', type: 'uint80' },
          { name: 'pctRelayFee', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    name: 'setConfiguration',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20[]', type: 'address[]' },
      { name: 'minimumStake', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'setMinimumStakes',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'verifyRelayManagerStaked',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionHub',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'dest', internalType: 'address payable', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'dest', internalType: 'address payable[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'withdrawMultiple',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISchemaRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSchemaRegistryABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'registerer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Registered',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'uid', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getSchema',
    outputs: [
      {
        name: '',
        internalType: 'struct SchemaRecord',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'resolver',
            internalType: 'contract ISchemaResolver',
            type: 'address',
          },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'schema', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'schema', internalType: 'string', type: 'string' },
      {
        name: 'resolver',
        internalType: 'contract ISchemaResolver',
        type: 'address',
      },
      { name: 'revocable', internalType: 'bool', type: 'bool' },
    ],
    name: 'register',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISchemaResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSchemaResolverABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'isPayable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiRevoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'revoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IStakeManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStakeManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AbandonedRelayManagerStakeEscheated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burnAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BurnAddressSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'devAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DevAddressSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'relayHub',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'HubAuthorized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'relayHub',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'removalTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'HubUnauthorized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'abandonedTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RelayServerAbandoned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'keepaliveTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RelayServerKeepalive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'stake',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'unstakeDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'beneficiary',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakePenalized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'withdrawTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeUnlocked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeWithdrawn',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'relayHub', internalType: 'address', type: 'address' }],
    name: 'authorizeHubByManager',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
      { name: 'relayHub', internalType: 'address', type: 'address' },
    ],
    name: 'authorizeHubByOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'escheatAbandonedRelayStake',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAbandonedRelayServerConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakeManager.AbandonedRelayServerConfig',
        type: 'tuple',
        components: [
          { name: 'devAddress', internalType: 'address', type: 'address' },
          {
            name: 'abandonmentDelay',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'escheatmentDelay',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBurnAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCreationBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMaxUnstakeDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'getStakeInfo',
    outputs: [
      {
        name: 'stakeInfo',
        internalType: 'struct IStakeManager.StakeInfo',
        type: 'tuple',
        components: [
          { name: 'stake', internalType: 'uint256', type: 'uint256' },
          { name: 'unstakeDelay', internalType: 'uint256', type: 'uint256' },
          { name: 'withdrawTime', internalType: 'uint256', type: 'uint256' },
          { name: 'abandonedTime', internalType: 'uint256', type: 'uint256' },
          { name: 'keepaliveTime', internalType: 'uint256', type: 'uint256' },
          { name: 'token', internalType: 'contract IERC20', type: 'address' },
          { name: 'owner', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'isSenderAuthorizedHub', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'isRelayEscheatable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'markRelayAbandoned',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
      { name: 'beneficiary', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'penalizeRelayManager',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_burnAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setBurnAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_burnAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setDevAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'setRelayManagerOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'relayManager', internalType: 'address', type: 'address' },
      { name: 'unstakeDelay', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'stakeForRelayManager',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'relayHub', internalType: 'address', type: 'address' }],
    name: 'unauthorizeHubByManager',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
      { name: 'relayHub', internalType: 'address', type: 'address' },
    ],
    name: 'unauthorizeHubByOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'unlockStake',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'updateRelayKeepaliveTime',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionSM',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'relayManager', internalType: 'address', type: 'address' },
    ],
    name: 'withdrawStake',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockTicket
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockTicketABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_duration', internalType: 'uint256', type: 'uint256' }],
    name: 'setDuration',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_startTime', internalType: 'uint256', type: 'uint256' }],
    name: 'setStartTime',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pausableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PausableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pausableUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SchemaResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const schemaResolverABI = [
  { type: 'error', inputs: [], name: 'AccessDenied' },
  { type: 'error', inputs: [], name: 'InsufficientValue' },
  { type: 'error', inputs: [], name: 'InvalidEAS' },
  { type: 'error', inputs: [], name: 'NotPayable' },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'isPayable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiRevoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'revoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Semver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const semverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'major', internalType: 'uint256', type: 'uint256' },
      { name: 'minor', internalType: 'uint256', type: 'uint256' },
      { name: 'patch', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Synth
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const synthABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_nftOwnershipToMint', internalType: 'bool', type: 'bool' },
      {
        name: '_synthAccountImplementation',
        internalType: 'address',
        type: 'address',
      },
      { name: '_art', internalType: 'address', type: 'address' },
      { name: '_organizer', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_metadata', internalType: 'string', type: 'string' },
      { name: '_nftWhitelist', internalType: 'address[]', type: 'address[]' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'art', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ArtWhitelistAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'art', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ArtWhitelistRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftOwnershipToMint',
        internalType: 'bool',
        type: 'bool',
        indexed: true,
      },
    ],
    name: 'NFTOwnershipToMintSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'nft', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'NFTWhitelistAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'nft', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'NFTWhitelistRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'synth',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'synthAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'synthId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SynthMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'wave', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'WaveAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'wave', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'WaveRemoved',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_art', internalType: 'address', type: 'address' }],
    name: 'addToArtWhitelist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_nft', internalType: 'address', type: 'address' }],
    name: 'addToNFTWhitelist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_wave', internalType: 'address', type: 'address' }],
    name: 'addWave',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'artWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_nftOwned', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_art', internalType: 'address', type: 'address' }],
    name: 'removeFromArtWhitelist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_nft', internalType: 'address', type: 'address' }],
    name: 'removeFromNFTWhitelist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'wave', internalType: 'address', type: 'address' }],
    name: 'removeWave',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'setMetadataURI',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_bool', internalType: 'bool', type: 'bool' }],
    name: 'setNFTOwnershipToMint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'waveExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SynthAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const synthAccountABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'art', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'orderId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'palette',
        internalType: 'enum SynthAccount.PaletteEnum',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PalettePurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'art', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'orderId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'style',
        internalType: 'enum SynthAccount.StyleEnum',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PrintPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'enum SynthAccount.PaletteEnum',
        type: 'uint8',
      },
    ],
    name: 'artPalettePurchased',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'artStylesRemaining',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'execute',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_printAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_organizer', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSigner',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_art', internalType: 'address', type: 'address' },
      {
        name: '_palette',
        internalType: 'enum SynthAccount.PaletteEnum',
        type: 'uint8',
      },
    ],
    name: 'purchasePalette',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_order',
        internalType: 'struct SynthAccount.Order',
        type: 'tuple',
        components: [
          { name: 'quantity', internalType: 'uint8', type: 'uint8' },
          {
            name: 'style',
            internalType: 'enum SynthAccount.StyleEnum',
            type: 'uint8',
          },
          { name: 'art', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'purchasePrint',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'purchasesRemaining',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'state',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SynthRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const synthRegistryABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftOwnershipNeeded',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'synth',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'organizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'metadata',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SynthCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_nftOwnershipToMint', internalType: 'bool', type: 'bool' },
      { name: '_art', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_metadata', internalType: 'string', type: 'string' },
      { name: '_nftWhitelist', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'createSynth',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_synthAccountImplementationt',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'synthAccountImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'synthExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
]

/**
 *
 */
export const synthRegistryAddress = {
  85431: '0x935D99dC0f48f28794f13d4135d5Fe22A19ccE4c',
}

/**
 *
 */
export const synthRegistryConfig = {
  address: synthRegistryAddress,
  abi: synthRegistryABI,
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uupsUpgradeableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wave
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const waveABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_maxAmount', internalType: 'uint16', type: 'uint16' },
      { name: '_startTime', internalType: 'uint256', type: 'uint256' },
      { name: '_duration', internalType: 'uint256', type: 'uint256' },
      { name: '_artist', internalType: 'address', type: 'address' },
      { name: '_creative', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_resolver', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_data', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'duration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'DurationUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'startTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'StartTimeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'wave', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'waveId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'WaveMinted',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'artist',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'creative',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'data',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'duration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_attendee', internalType: 'address', type: 'address' },
      { name: '_synthAccount', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_duration', internalType: 'uint256', type: 'uint256' }],
    name: 'setDuration',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_startTime', internalType: 'uint256', type: 'uint256' }],
    name: 'setStartTime',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'startTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WaveRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const waveRegistryABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'startTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'duration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'wave', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creative',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'data', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'WaveCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_maxAmount', internalType: 'uint16', type: 'uint16' },
      { name: '_startTime', internalType: 'uint256', type: 'uint256' },
      { name: '_duration', internalType: 'uint256', type: 'uint256' },
      { name: '_artist', internalType: 'address', type: 'address' },
      { name: '_creative', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_data', internalType: 'string', type: 'string' },
    ],
    name: 'createWave',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_resolverAddress', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'waveExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'waveResolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
]

/**
 *
 */
export const waveRegistryAddress = {
  85431: '0xd82e2a831315882D9a13B5780e2BDC4e64976AD5',
}

/**
 *
 */
export const waveRegistryConfig = {
  address: waveRegistryAddress,
  abi: waveRegistryABI,
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WaveResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const waveResolverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'easAddrs', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'AccessDenied' },
  { type: 'error', inputs: [], name: 'InsufficientValue' },
  { type: 'error', inputs: [], name: 'InvalidEAS' },
  { type: 'error', inputs: [], name: 'NotPayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_attester', internalType: 'address', type: 'address' }],
    name: 'addAttester',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'attesters',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'isPayable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiRevoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_attester', internalType: 'address', type: 'address' }],
    name: 'removeAttester',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'revoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WavesPaymaster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wavesPaymasterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CALLDATA_SIZE_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'FORWARDER_HUB_OVERHEAD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PAYMASTER_ACCEPTANCE_BUDGET',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'POST_RELAYED_CALL_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PRE_RELAYED_CALL_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasAndDataLimits',
    outputs: [
      {
        name: 'limits',
        internalType: 'struct IPaymaster.GasAndDataLimits',
        type: 'tuple',
        components: [
          {
            name: 'acceptanceBudget',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'postRelayedCallGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'calldataSizeLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRelayHub',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTrustedForwarder',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'methodWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'context', internalType: 'bytes', type: 'bytes' },
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'gasUseWithoutPost', internalType: 'uint256', type: 'uint256' },
      {
        name: 'relayData',
        internalType: 'struct GsnTypes.RelayData',
        type: 'tuple',
        components: [
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'transactionCalldataGasUsed',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'relayWorker', internalType: 'address', type: 'address' },
          { name: 'paymaster', internalType: 'address', type: 'address' },
          { name: 'forwarder', internalType: 'address', type: 'address' },
          { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
          { name: 'clientId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'postRelayedCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'relayRequest',
        internalType: 'struct GsnTypes.RelayRequest',
        type: 'tuple',
        components: [
          {
            name: 'request',
            internalType: 'struct IForwarder.ForwardRequest',
            type: 'tuple',
            components: [
              { name: 'from', internalType: 'address', type: 'address' },
              { name: 'to', internalType: 'address', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'gas', internalType: 'uint256', type: 'uint256' },
              { name: 'nonce', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              {
                name: 'validUntilTime',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'relayData',
            internalType: 'struct GsnTypes.RelayData',
            type: 'tuple',
            components: [
              {
                name: 'maxFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'maxPriorityFeePerGas',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'transactionCalldataGasUsed',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'relayWorker', internalType: 'address', type: 'address' },
              { name: 'paymaster', internalType: 'address', type: 'address' },
              { name: 'forwarder', internalType: 'address', type: 'address' },
              { name: 'paymasterData', internalType: 'bytes', type: 'bytes' },
              { name: 'clientId', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'approvalData', internalType: 'bytes', type: 'bytes' },
      { name: 'maxPossibleGas', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'preRelayedCall',
    outputs: [
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'senderWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_useSenderWhitelist', internalType: 'bool', type: 'bool' },
      { name: '_useTargetWhitelist', internalType: 'bool', type: 'bool' },
      { name: '_useMethodWhitelist', internalType: 'bool', type: 'bool' },
      {
        name: '_useRejectOnRecipientRevert',
        internalType: 'bool',
        type: 'bool',
      },
    ],
    name: 'setConfiguration',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'hub', internalType: 'contract IRelayHub', type: 'address' },
    ],
    name: 'setRelayHub',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'setTrustedForwarder',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'targetWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'useMethodWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'useRejectOnRecipientRevert',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'useSenderWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'useTargetWhitelist',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionPaymaster',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'method', internalType: 'bytes4', type: 'bytes4' },
      { name: 'isAllowed', internalType: 'bool', type: 'bool' },
    ],
    name: 'whitelistMethod',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'isAllowed', internalType: 'bool', type: 'bool' },
    ],
    name: 'whitelistSender',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'isAllowed', internalType: 'bool', type: 'bool' },
    ],
    name: 'whitelistTarget',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address payable', type: 'address' },
    ],
    name: 'withdrawRelayHubDepositTo',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accessControlABI}__.
 */
export function useAccessControlRead(config = {}) {
  return useContractRead({ abi: accessControlABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlABI}__.
 */
export function useAccessControlWrite(config = {}) {
  return useContractWrite({ abi: accessControlABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"grantRole"`.
 */
export function useAccessControlGrantRole(config = {}) {
  return useContractWrite({
    abi: accessControlABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useAccessControlRenounceRole(config = {}) {
  return useContractWrite({
    abi: accessControlABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useAccessControlRevokeRole(config = {}) {
  return useContractWrite({
    abi: accessControlABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlABI}__.
 */
export function usePrepareAccessControlWrite(config = {}) {
  return usePrepareContractWrite({ abi: accessControlABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareAccessControlGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareAccessControlRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareAccessControlRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlABI}__.
 */
export function useAccessControlEvent(config = {}) {
  return useContractEvent({ abi: accessControlABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useAccessControlRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useAccessControlRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useAccessControlRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accessControlUpgradeableABI}__.
 */
export function useAccessControlUpgradeableRead(config = {}) {
  return useContractRead({ abi: accessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__.
 */
export function useAccessControlUpgradeableWrite(config = {}) {
  return useContractWrite({ abi: accessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"grantRole"`.
 */
export function useAccessControlUpgradeableGrantRole(config = {}) {
  return useContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useAccessControlUpgradeableRenounceRole(config = {}) {
  return useContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useAccessControlUpgradeableRevokeRole(config = {}) {
  return useContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__.
 */
export function usePrepareAccessControlUpgradeableWrite(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlUpgradeableABI,
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareAccessControlUpgradeableGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareAccessControlUpgradeableRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareAccessControlUpgradeableRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: accessControlUpgradeableABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlUpgradeableABI}__.
 */
export function useAccessControlUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: accessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useAccessControlUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useAccessControlUpgradeableRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlUpgradeableABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useAccessControlUpgradeableRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlUpgradeableABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accessControlUpgradeableABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useAccessControlUpgradeableRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: accessControlUpgradeableABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link basePaymasterABI}__.
 */
export function useBasePaymasterRead(config = {}) {
  return useContractRead({ abi: basePaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__.
 */
export function useBasePaymasterWrite(config = {}) {
  return useContractWrite({ abi: basePaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function useBasePaymasterPostRelayedCall(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function useBasePaymasterPreRelayedCall(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useBasePaymasterRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"setRelayHub"`.
 */
export function useBasePaymasterSetRelayHub(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'setRelayHub',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"setTrustedForwarder"`.
 */
export function useBasePaymasterSetTrustedForwarder(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'setTrustedForwarder',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useBasePaymasterTransferOwnership(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"withdrawRelayHubDepositTo"`.
 */
export function useBasePaymasterWithdrawRelayHubDepositTo(config = {}) {
  return useContractWrite({
    abi: basePaymasterABI,
    functionName: 'withdrawRelayHubDepositTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__.
 */
export function usePrepareBasePaymasterWrite(config = {}) {
  return usePrepareContractWrite({ abi: basePaymasterABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function usePrepareBasePaymasterPostRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function usePrepareBasePaymasterPreRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareBasePaymasterRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"setRelayHub"`.
 */
export function usePrepareBasePaymasterSetRelayHub(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'setRelayHub',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"setTrustedForwarder"`.
 */
export function usePrepareBasePaymasterSetTrustedForwarder(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'setTrustedForwarder',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareBasePaymasterTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link basePaymasterABI}__ and `functionName` set to `"withdrawRelayHubDepositTo"`.
 */
export function usePrepareBasePaymasterWithdrawRelayHubDepositTo(config = {}) {
  return usePrepareContractWrite({
    abi: basePaymasterABI,
    functionName: 'withdrawRelayHubDepositTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link basePaymasterABI}__.
 */
export function useBasePaymasterEvent(config = {}) {
  return useContractEvent({ abi: basePaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link basePaymasterABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useBasePaymasterOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: basePaymasterABI,
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseScriptABI}__.
 */
export function useBaseScriptRead(config = {}) {
  return useContractRead({ abi: baseScriptABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseScriptABI}__.
 */
export function useBaseScriptWrite(config = {}) {
  return useContractWrite({ abi: baseScriptABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseScriptABI}__ and `functionName` set to `"run"`.
 */
export function useBaseScriptRun(config = {}) {
  return useContractWrite({
    abi: baseScriptABI,
    functionName: 'run',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseScriptABI}__ and `functionName` set to `"setUp"`.
 */
export function useBaseScriptSetUp(config = {}) {
  return useContractWrite({
    abi: baseScriptABI,
    functionName: 'setUp',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseScriptABI}__.
 */
export function usePrepareBaseScriptWrite(config = {}) {
  return usePrepareContractWrite({ abi: baseScriptABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseScriptABI}__ and `functionName` set to `"run"`.
 */
export function usePrepareBaseScriptRun(config = {}) {
  return usePrepareContractWrite({
    abi: baseScriptABI,
    functionName: 'run',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseScriptABI}__ and `functionName` set to `"setUp"`.
 */
export function usePrepareBaseScriptSetUp(config = {}) {
  return usePrepareContractWrite({
    abi: baseScriptABI,
    functionName: 'setUp',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link contextUpgradeableABI}__.
 */
export function useContextUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: contextUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link contextUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useContextUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: contextUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterRead(config = {}) {
  return useContractRead({ abi: counterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterWrite(config = {}) {
  return useContractWrite({ abi: counterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function useCounterIncrement(config = {}) {
  return useContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function useCounterSetNumber(config = {}) {
  return useContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function usePrepareCounterWrite(config = {}) {
  return usePrepareContractWrite({ abi: counterABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function usePrepareCounterIncrement(config = {}) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function usePrepareCounterSetNumber(config = {}) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterEvent(config = {}) {
  return useContractEvent({ abi: counterABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Transfer"`.
 */
export function useCounterTransferEvent(config = {}) {
  return useContractEvent({ abi: counterABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read(config = {}) {
  return useContractRead({ abi: erc165ABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165UpgradeableABI}__.
 */
export function useErc165UpgradeableRead(config = {}) {
  return useContractRead({ abi: erc165UpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc165UpgradeableABI}__.
 */
export function useErc165UpgradeableEvent(config = {}) {
  return useContractEvent({ abi: erc165UpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc165UpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useErc165UpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: erc165UpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeUpgradeableABI}__.
 */
export function useErc1967UpgradeUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: erc1967UpgradeUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeUpgradeableABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useErc1967UpgradeUpgradeableAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: erc1967UpgradeUpgradeableABI,
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeUpgradeableABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useErc1967UpgradeUpgradeableBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: erc1967UpgradeUpgradeableABI,
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useErc1967UpgradeUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: erc1967UpgradeUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UpgradeUpgradeableABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useErc1967UpgradeUpgradeableUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: erc1967UpgradeUpgradeableABI,
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc2771RecipientABI}__.
 */
export function useErc2771RecipientRead(config = {}) {
  return useContractRead({ abi: erc2771RecipientABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read(config = {}) {
  return useContractRead({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write(config = {}) {
  return useContractWrite({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve(config = {}) {
  return useContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom(config = {}) {
  return useContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write(config = {}) {
  return usePrepareContractWrite({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(config = {}) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event(config = {}) {
  return useContractEvent({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(config = {}) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Approval', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(config = {}) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link gsnEip712LibraryABI}__.
 */
export function useGsnEip712LibraryRead(config = {}) {
  return useContractRead({ abi: gsnEip712LibraryABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iAccessControlABI}__.
 */
export function useIAccessControlRead(config = {}) {
  return useContractRead({ abi: iAccessControlABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlABI}__.
 */
export function useIAccessControlWrite(config = {}) {
  return useContractWrite({ abi: iAccessControlABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"grantRole"`.
 */
export function useIAccessControlGrantRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useIAccessControlRenounceRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useIAccessControlRevokeRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlABI}__.
 */
export function usePrepareIAccessControlWrite(config = {}) {
  return usePrepareContractWrite({ abi: iAccessControlABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareIAccessControlGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareIAccessControlRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareIAccessControlRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlABI}__.
 */
export function useIAccessControlEvent(config = {}) {
  return useContractEvent({ abi: iAccessControlABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useIAccessControlRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useIAccessControlRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useIAccessControlRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__.
 */
export function useIAccessControlUpgradeableRead(config = {}) {
  return useContractRead({ abi: iAccessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__.
 */
export function useIAccessControlUpgradeableWrite(config = {}) {
  return useContractWrite({ abi: iAccessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"grantRole"`.
 */
export function useIAccessControlUpgradeableGrantRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useIAccessControlUpgradeableRenounceRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useIAccessControlUpgradeableRevokeRole(config = {}) {
  return useContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__.
 */
export function usePrepareIAccessControlUpgradeableWrite(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlUpgradeableABI,
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareIAccessControlUpgradeableGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareIAccessControlUpgradeableRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareIAccessControlUpgradeableRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: iAccessControlUpgradeableABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__.
 */
export function useIAccessControlUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: iAccessControlUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useIAccessControlUpgradeableRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlUpgradeableABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useIAccessControlUpgradeableRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlUpgradeableABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iAccessControlUpgradeableABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useIAccessControlUpgradeableRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: iAccessControlUpgradeableABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iBeaconUpgradeableABI}__.
 */
export function useIBeaconUpgradeableRead(config = {}) {
  return useContractRead({ abi: iBeaconUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ieasABI}__.
 */
export function useIeasRead(config = {}) {
  return useContractRead({ abi: ieasABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__.
 */
export function useIeasWrite(config = {}) {
  return useContractWrite({ abi: ieasABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"attest"`.
 */
export function useIeasAttest(config = {}) {
  return useContractWrite({ abi: ieasABI, functionName: 'attest', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"attestByDelegation"`.
 */
export function useIeasAttestByDelegation(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'attestByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiAttest"`.
 */
export function useIeasMultiAttest(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiAttestByDelegation"`.
 */
export function useIeasMultiAttestByDelegation(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiAttestByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function useIeasMultiRevoke(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevokeByDelegation"`.
 */
export function useIeasMultiRevokeByDelegation(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiRevokeByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevokeOffchain"`.
 */
export function useIeasMultiRevokeOffchain(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiRevokeOffchain',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiTimestamp"`.
 */
export function useIeasMultiTimestamp(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'multiTimestamp',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revoke"`.
 */
export function useIeasRevoke(config = {}) {
  return useContractWrite({ abi: ieasABI, functionName: 'revoke', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revokeByDelegation"`.
 */
export function useIeasRevokeByDelegation(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'revokeByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revokeOffchain"`.
 */
export function useIeasRevokeOffchain(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'revokeOffchain',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"timestamp"`.
 */
export function useIeasTimestamp(config = {}) {
  return useContractWrite({
    abi: ieasABI,
    functionName: 'timestamp',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__.
 */
export function usePrepareIeasWrite(config = {}) {
  return usePrepareContractWrite({ abi: ieasABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"attest"`.
 */
export function usePrepareIeasAttest(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"attestByDelegation"`.
 */
export function usePrepareIeasAttestByDelegation(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'attestByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiAttest"`.
 */
export function usePrepareIeasMultiAttest(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiAttestByDelegation"`.
 */
export function usePrepareIeasMultiAttestByDelegation(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiAttestByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function usePrepareIeasMultiRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevokeByDelegation"`.
 */
export function usePrepareIeasMultiRevokeByDelegation(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiRevokeByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiRevokeOffchain"`.
 */
export function usePrepareIeasMultiRevokeOffchain(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiRevokeOffchain',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"multiTimestamp"`.
 */
export function usePrepareIeasMultiTimestamp(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'multiTimestamp',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revoke"`.
 */
export function usePrepareIeasRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revokeByDelegation"`.
 */
export function usePrepareIeasRevokeByDelegation(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'revokeByDelegation',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"revokeOffchain"`.
 */
export function usePrepareIeasRevokeOffchain(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'revokeOffchain',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ieasABI}__ and `functionName` set to `"timestamp"`.
 */
export function usePrepareIeasTimestamp(config = {}) {
  return usePrepareContractWrite({
    abi: ieasABI,
    functionName: 'timestamp',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ieasABI}__.
 */
export function useIeasEvent(config = {}) {
  return useContractEvent({ abi: ieasABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ieasABI}__ and `eventName` set to `"Attested"`.
 */
export function useIeasAttestedEvent(config = {}) {
  return useContractEvent({ abi: ieasABI, eventName: 'Attested', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ieasABI}__ and `eventName` set to `"Revoked"`.
 */
export function useIeasRevokedEvent(config = {}) {
  return useContractEvent({ abi: ieasABI, eventName: 'Revoked', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ieasABI}__ and `eventName` set to `"RevokedOffchain"`.
 */
export function useIeasRevokedOffchainEvent(config = {}) {
  return useContractEvent({
    abi: ieasABI,
    eventName: 'RevokedOffchain',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ieasABI}__ and `eventName` set to `"Timestamped"`.
 */
export function useIeasTimestampedEvent(config = {}) {
  return useContractEvent({ abi: ieasABI, eventName: 'Timestamped', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1271ABI}__.
 */
export function useIerc1271Read(config = {}) {
  return useContractRead({ abi: ierc1271ABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read(config = {}) {
  return useContractRead({ abi: ierc165ABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165UpgradeableABI}__.
 */
export function useIerc165UpgradeableRead(config = {}) {
  return useContractRead({ abi: ierc165UpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1822ProxiableUpgradeableABI}__.
 */
export function useIerc1822ProxiableUpgradeableRead(config = {}) {
  return useContractRead({ abi: ierc1822ProxiableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Read(config = {}) {
  return useContractRead({ abi: ierc20ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Write(config = {}) {
  return useContractWrite({ abi: ierc20ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20Approve(config = {}) {
  return useContractWrite({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20Transfer(config = {}) {
  return useContractWrite({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20TransferFrom(config = {}) {
  return useContractWrite({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function usePrepareIerc20Write(config = {}) {
  return usePrepareContractWrite({ abi: ierc20ABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20Approve(config = {}) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20Transfer(config = {}) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20TransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Event(config = {}) {
  return useContractEvent({ abi: ierc20ABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20ApprovalEvent(config = {}) {
  return useContractEvent({ abi: ierc20ABI, eventName: 'Approval', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20TransferEvent(config = {}) {
  return useContractEvent({ abi: ierc20ABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc2771RecipientABI}__.
 */
export function useIerc2771RecipientRead(config = {}) {
  return useContractRead({ abi: ierc2771RecipientABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551AccountABI}__.
 */
export function useIerc6551AccountRead(config = {}) {
  return useContractRead({ abi: ierc6551AccountABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551ExecutableABI}__.
 */
export function useIerc6551ExecutableWrite(config = {}) {
  return useContractWrite({ abi: ierc6551ExecutableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551ExecutableABI}__ and `functionName` set to `"execute"`.
 */
export function useIerc6551ExecutableExecute(config = {}) {
  return useContractWrite({
    abi: ierc6551ExecutableABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551ExecutableABI}__.
 */
export function usePrepareIerc6551ExecutableWrite(config = {}) {
  return usePrepareContractWrite({ abi: ierc6551ExecutableABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551ExecutableABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareIerc6551ExecutableExecute(config = {}) {
  return usePrepareContractWrite({
    abi: ierc6551ExecutableABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryRead(config = {}) {
  return useContractRead({ abi: ierc6551RegistryABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryWrite(config = {}) {
  return useContractWrite({ abi: ierc6551RegistryABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function useIerc6551RegistryCreateAccount(config = {}) {
  return useContractWrite({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function usePrepareIerc6551RegistryWrite(config = {}) {
  return usePrepareContractWrite({ abi: ierc6551RegistryABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function usePrepareIerc6551RegistryCreateAccount(config = {}) {
  return usePrepareContractWrite({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryEvent(config = {}) {
  return useContractEvent({ abi: ierc6551RegistryABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `eventName` set to `"AccountCreated"`.
 */
export function useIerc6551RegistryAccountCreatedEvent(config = {}) {
  return useContractEvent({
    abi: ierc6551RegistryABI,
    eventName: 'AccountCreated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Read(config = {}) {
  return useContractRead({ abi: ierc721ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Write(config = {}) {
  return useContractWrite({ abi: ierc721ABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721Approve(config = {}) {
  return useContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721SafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721SetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721TransferFrom(config = {}) {
  return useContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function usePrepareIerc721Write(config = {}) {
  return usePrepareContractWrite({ abi: ierc721ABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721Approve(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721SafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721SetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721TransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Event(config = {}) {
  return useContractEvent({ abi: ierc721ABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721ApprovalEvent(config = {}) {
  return useContractEvent({ abi: ierc721ABI, eventName: 'Approval', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721ApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721TransferEvent(config = {}) {
  return useContractEvent({ abi: ierc721ABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__.
 */
export function useIerc721GeneralMintWrite(config = {}) {
  return useContractWrite({ abi: ierc721GeneralMintABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintAmountToOneRecipient"`.
 */
export function useIerc721GeneralMintMintAmountToOneRecipient(config = {}) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintAmountToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintOneToMultipleRecipients"`.
 */
export function useIerc721GeneralMintMintOneToMultipleRecipients(config = {}) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintOneToMultipleRecipients',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintOneToOneRecipient"`.
 */
export function useIerc721GeneralMintMintOneToOneRecipient(config = {}) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintOneToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSameAmountToMultipleRecipients"`.
 */
export function useIerc721GeneralMintMintSameAmountToMultipleRecipients(
  config = {},
) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSameAmountToMultipleRecipients',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSpecificTokenToOneRecipient"`.
 */
export function useIerc721GeneralMintMintSpecificTokenToOneRecipient(
  config = {},
) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSpecificTokenToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSpecificTokensToOneRecipient"`.
 */
export function useIerc721GeneralMintMintSpecificTokensToOneRecipient(
  config = {},
) {
  return useContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSpecificTokensToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__.
 */
export function usePrepareIerc721GeneralMintWrite(config = {}) {
  return usePrepareContractWrite({ abi: ierc721GeneralMintABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintAmountToOneRecipient"`.
 */
export function usePrepareIerc721GeneralMintMintAmountToOneRecipient(
  config = {},
) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintAmountToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintOneToMultipleRecipients"`.
 */
export function usePrepareIerc721GeneralMintMintOneToMultipleRecipients(
  config = {},
) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintOneToMultipleRecipients',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintOneToOneRecipient"`.
 */
export function usePrepareIerc721GeneralMintMintOneToOneRecipient(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintOneToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSameAmountToMultipleRecipients"`.
 */
export function usePrepareIerc721GeneralMintMintSameAmountToMultipleRecipients(
  config = {},
) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSameAmountToMultipleRecipients',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSpecificTokenToOneRecipient"`.
 */
export function usePrepareIerc721GeneralMintMintSpecificTokenToOneRecipient(
  config = {},
) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSpecificTokenToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721GeneralMintABI}__ and `functionName` set to `"mintSpecificTokensToOneRecipient"`.
 */
export function usePrepareIerc721GeneralMintMintSpecificTokensToOneRecipient(
  config = {},
) {
  return usePrepareContractWrite({
    abi: ierc721GeneralMintABI,
    functionName: 'mintSpecificTokensToOneRecipient',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataRead(config = {}) {
  return useContractRead({ abi: ierc721MetadataABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataWrite(config = {}) {
  return useContractWrite({ abi: ierc721MetadataABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721MetadataApprove(config = {}) {
  return useContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721MetadataSafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721MetadataSetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721MetadataTransferFrom(config = {}) {
  return useContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function usePrepareIerc721MetadataWrite(config = {}) {
  return usePrepareContractWrite({ abi: ierc721MetadataABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721MetadataApprove(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721MetadataSafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721MetadataSetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721MetadataTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataEvent(config = {}) {
  return useContractEvent({ abi: ierc721MetadataABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721MetadataApprovalEvent(config = {}) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Approval',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721MetadataApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721MetadataTransferEvent(config = {}) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Transfer',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function useIerc721ReceiverWrite(config = {}) {
  return useContractWrite({ abi: ierc721ReceiverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721ReceiverOnErc721Received(config = {}) {
  return useContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function usePrepareIerc721ReceiverWrite(config = {}) {
  return usePrepareContractWrite({ abi: ierc721ReceiverABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721ReceiverOnErc721Received(config = {}) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iForwarderABI}__.
 */
export function useIForwarderRead(config = {}) {
  return useContractRead({ abi: iForwarderABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iForwarderABI}__.
 */
export function useIForwarderWrite(config = {}) {
  return useContractWrite({ abi: iForwarderABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"execute"`.
 */
export function useIForwarderExecute(config = {}) {
  return useContractWrite({
    abi: iForwarderABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"registerDomainSeparator"`.
 */
export function useIForwarderRegisterDomainSeparator(config = {}) {
  return useContractWrite({
    abi: iForwarderABI,
    functionName: 'registerDomainSeparator',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"registerRequestType"`.
 */
export function useIForwarderRegisterRequestType(config = {}) {
  return useContractWrite({
    abi: iForwarderABI,
    functionName: 'registerRequestType',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iForwarderABI}__.
 */
export function usePrepareIForwarderWrite(config = {}) {
  return usePrepareContractWrite({ abi: iForwarderABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareIForwarderExecute(config = {}) {
  return usePrepareContractWrite({
    abi: iForwarderABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"registerDomainSeparator"`.
 */
export function usePrepareIForwarderRegisterDomainSeparator(config = {}) {
  return usePrepareContractWrite({
    abi: iForwarderABI,
    functionName: 'registerDomainSeparator',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iForwarderABI}__ and `functionName` set to `"registerRequestType"`.
 */
export function usePrepareIForwarderRegisterRequestType(config = {}) {
  return usePrepareContractWrite({
    abi: iForwarderABI,
    functionName: 'registerRequestType',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iForwarderABI}__.
 */
export function useIForwarderEvent(config = {}) {
  return useContractEvent({ abi: iForwarderABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iForwarderABI}__ and `eventName` set to `"DomainRegistered"`.
 */
export function useIForwarderDomainRegisteredEvent(config = {}) {
  return useContractEvent({
    abi: iForwarderABI,
    eventName: 'DomainRegistered',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iForwarderABI}__ and `eventName` set to `"RequestTypeRegistered"`.
 */
export function useIForwarderRequestTypeRegisteredEvent(config = {}) {
  return useContractEvent({
    abi: iForwarderABI,
    eventName: 'RequestTypeRegistered',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPaymasterABI}__.
 */
export function useIPaymasterRead(config = {}) {
  return useContractRead({ abi: iPaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPaymasterABI}__.
 */
export function useIPaymasterWrite(config = {}) {
  return useContractWrite({ abi: iPaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function useIPaymasterPostRelayedCall(config = {}) {
  return useContractWrite({
    abi: iPaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function useIPaymasterPreRelayedCall(config = {}) {
  return useContractWrite({
    abi: iPaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPaymasterABI}__.
 */
export function usePrepareIPaymasterWrite(config = {}) {
  return usePrepareContractWrite({ abi: iPaymasterABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function usePrepareIPaymasterPostRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: iPaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function usePrepareIPaymasterPreRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: iPaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iRelayHubABI}__.
 */
export function useIRelayHubRead(config = {}) {
  return useContractRead({ abi: iRelayHubABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__.
 */
export function useIRelayHubWrite(config = {}) {
  return useContractWrite({ abi: iRelayHubABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"addRelayWorkers"`.
 */
export function useIRelayHubAddRelayWorkers(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'addRelayWorkers',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"depositFor"`.
 */
export function useIRelayHubDepositFor(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'depositFor',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"deprecateHub"`.
 */
export function useIRelayHubDeprecateHub(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'deprecateHub',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"escheatAbandonedRelayBalance"`.
 */
export function useIRelayHubEscheatAbandonedRelayBalance(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'escheatAbandonedRelayBalance',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"onRelayServerRegistered"`.
 */
export function useIRelayHubOnRelayServerRegistered(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'onRelayServerRegistered',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"penalize"`.
 */
export function useIRelayHubPenalize(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'penalize',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"relayCall"`.
 */
export function useIRelayHubRelayCall(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'relayCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"setConfiguration"`.
 */
export function useIRelayHubSetConfiguration(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'setConfiguration',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"setMinimumStakes"`.
 */
export function useIRelayHubSetMinimumStakes(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'setMinimumStakes',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"withdraw"`.
 */
export function useIRelayHubWithdraw(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'withdraw',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"withdrawMultiple"`.
 */
export function useIRelayHubWithdrawMultiple(config = {}) {
  return useContractWrite({
    abi: iRelayHubABI,
    functionName: 'withdrawMultiple',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__.
 */
export function usePrepareIRelayHubWrite(config = {}) {
  return usePrepareContractWrite({ abi: iRelayHubABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"addRelayWorkers"`.
 */
export function usePrepareIRelayHubAddRelayWorkers(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'addRelayWorkers',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"depositFor"`.
 */
export function usePrepareIRelayHubDepositFor(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'depositFor',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"deprecateHub"`.
 */
export function usePrepareIRelayHubDeprecateHub(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'deprecateHub',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"escheatAbandonedRelayBalance"`.
 */
export function usePrepareIRelayHubEscheatAbandonedRelayBalance(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'escheatAbandonedRelayBalance',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"onRelayServerRegistered"`.
 */
export function usePrepareIRelayHubOnRelayServerRegistered(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'onRelayServerRegistered',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"penalize"`.
 */
export function usePrepareIRelayHubPenalize(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'penalize',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"relayCall"`.
 */
export function usePrepareIRelayHubRelayCall(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'relayCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"setConfiguration"`.
 */
export function usePrepareIRelayHubSetConfiguration(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'setConfiguration',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"setMinimumStakes"`.
 */
export function usePrepareIRelayHubSetMinimumStakes(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'setMinimumStakes',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePrepareIRelayHubWithdraw(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'withdraw',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iRelayHubABI}__ and `functionName` set to `"withdrawMultiple"`.
 */
export function usePrepareIRelayHubWithdrawMultiple(config = {}) {
  return usePrepareContractWrite({
    abi: iRelayHubABI,
    functionName: 'withdrawMultiple',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__.
 */
export function useIRelayHubEvent(config = {}) {
  return useContractEvent({ abi: iRelayHubABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"AbandonedRelayManagerBalanceEscheated"`.
 */
export function useIRelayHubAbandonedRelayManagerBalanceEscheatedEvent(
  config = {},
) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'AbandonedRelayManagerBalanceEscheated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"Deposited"`.
 */
export function useIRelayHubDepositedEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'Deposited',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"HubDeprecated"`.
 */
export function useIRelayHubHubDeprecatedEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'HubDeprecated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"RelayHubConfigured"`.
 */
export function useIRelayHubRelayHubConfiguredEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'RelayHubConfigured',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"RelayWorkersAdded"`.
 */
export function useIRelayHubRelayWorkersAddedEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'RelayWorkersAdded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"StakingTokenDataChanged"`.
 */
export function useIRelayHubStakingTokenDataChangedEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'StakingTokenDataChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"TransactionRejectedByPaymaster"`.
 */
export function useIRelayHubTransactionRejectedByPaymasterEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'TransactionRejectedByPaymaster',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"TransactionRelayed"`.
 */
export function useIRelayHubTransactionRelayedEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'TransactionRelayed',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"TransactionResult"`.
 */
export function useIRelayHubTransactionResultEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'TransactionResult',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iRelayHubABI}__ and `eventName` set to `"Withdrawn"`.
 */
export function useIRelayHubWithdrawnEvent(config = {}) {
  return useContractEvent({
    abi: iRelayHubABI,
    eventName: 'Withdrawn',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSchemaRegistryABI}__.
 */
export function useISchemaRegistryRead(config = {}) {
  return useContractRead({ abi: iSchemaRegistryABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaRegistryABI}__.
 */
export function useISchemaRegistryWrite(config = {}) {
  return useContractWrite({ abi: iSchemaRegistryABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaRegistryABI}__ and `functionName` set to `"register"`.
 */
export function useISchemaRegistryRegister(config = {}) {
  return useContractWrite({
    abi: iSchemaRegistryABI,
    functionName: 'register',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaRegistryABI}__.
 */
export function usePrepareISchemaRegistryWrite(config = {}) {
  return usePrepareContractWrite({ abi: iSchemaRegistryABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaRegistryABI}__ and `functionName` set to `"register"`.
 */
export function usePrepareISchemaRegistryRegister(config = {}) {
  return usePrepareContractWrite({
    abi: iSchemaRegistryABI,
    functionName: 'register',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iSchemaRegistryABI}__.
 */
export function useISchemaRegistryEvent(config = {}) {
  return useContractEvent({ abi: iSchemaRegistryABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iSchemaRegistryABI}__ and `eventName` set to `"Registered"`.
 */
export function useISchemaRegistryRegisteredEvent(config = {}) {
  return useContractEvent({
    abi: iSchemaRegistryABI,
    eventName: 'Registered',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSchemaResolverABI}__.
 */
export function useISchemaResolverRead(config = {}) {
  return useContractRead({ abi: iSchemaResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__.
 */
export function useISchemaResolverWrite(config = {}) {
  return useContractWrite({ abi: iSchemaResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"attest"`.
 */
export function useISchemaResolverAttest(config = {}) {
  return useContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function useISchemaResolverMultiAttest(config = {}) {
  return useContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function useISchemaResolverMultiRevoke(config = {}) {
  return useContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function useISchemaResolverRevoke(config = {}) {
  return useContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__.
 */
export function usePrepareISchemaResolverWrite(config = {}) {
  return usePrepareContractWrite({ abi: iSchemaResolverABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"attest"`.
 */
export function usePrepareISchemaResolverAttest(config = {}) {
  return usePrepareContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function usePrepareISchemaResolverMultiAttest(config = {}) {
  return usePrepareContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function usePrepareISchemaResolverMultiRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSchemaResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function usePrepareISchemaResolverRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: iSchemaResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iStakeManagerABI}__.
 */
export function useIStakeManagerRead(config = {}) {
  return useContractRead({ abi: iStakeManagerABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__.
 */
export function useIStakeManagerWrite(config = {}) {
  return useContractWrite({ abi: iStakeManagerABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"authorizeHubByManager"`.
 */
export function useIStakeManagerAuthorizeHubByManager(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'authorizeHubByManager',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"authorizeHubByOwner"`.
 */
export function useIStakeManagerAuthorizeHubByOwner(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'authorizeHubByOwner',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"escheatAbandonedRelayStake"`.
 */
export function useIStakeManagerEscheatAbandonedRelayStake(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'escheatAbandonedRelayStake',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"markRelayAbandoned"`.
 */
export function useIStakeManagerMarkRelayAbandoned(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'markRelayAbandoned',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"penalizeRelayManager"`.
 */
export function useIStakeManagerPenalizeRelayManager(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'penalizeRelayManager',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setBurnAddress"`.
 */
export function useIStakeManagerSetBurnAddress(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setBurnAddress',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setDevAddress"`.
 */
export function useIStakeManagerSetDevAddress(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setDevAddress',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setRelayManagerOwner"`.
 */
export function useIStakeManagerSetRelayManagerOwner(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setRelayManagerOwner',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"stakeForRelayManager"`.
 */
export function useIStakeManagerStakeForRelayManager(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'stakeForRelayManager',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unauthorizeHubByManager"`.
 */
export function useIStakeManagerUnauthorizeHubByManager(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unauthorizeHubByManager',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unauthorizeHubByOwner"`.
 */
export function useIStakeManagerUnauthorizeHubByOwner(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unauthorizeHubByOwner',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unlockStake"`.
 */
export function useIStakeManagerUnlockStake(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unlockStake',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"updateRelayKeepaliveTime"`.
 */
export function useIStakeManagerUpdateRelayKeepaliveTime(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'updateRelayKeepaliveTime',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"withdrawStake"`.
 */
export function useIStakeManagerWithdrawStake(config = {}) {
  return useContractWrite({
    abi: iStakeManagerABI,
    functionName: 'withdrawStake',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__.
 */
export function usePrepareIStakeManagerWrite(config = {}) {
  return usePrepareContractWrite({ abi: iStakeManagerABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"authorizeHubByManager"`.
 */
export function usePrepareIStakeManagerAuthorizeHubByManager(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'authorizeHubByManager',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"authorizeHubByOwner"`.
 */
export function usePrepareIStakeManagerAuthorizeHubByOwner(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'authorizeHubByOwner',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"escheatAbandonedRelayStake"`.
 */
export function usePrepareIStakeManagerEscheatAbandonedRelayStake(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'escheatAbandonedRelayStake',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"markRelayAbandoned"`.
 */
export function usePrepareIStakeManagerMarkRelayAbandoned(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'markRelayAbandoned',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"penalizeRelayManager"`.
 */
export function usePrepareIStakeManagerPenalizeRelayManager(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'penalizeRelayManager',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setBurnAddress"`.
 */
export function usePrepareIStakeManagerSetBurnAddress(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setBurnAddress',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setDevAddress"`.
 */
export function usePrepareIStakeManagerSetDevAddress(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setDevAddress',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"setRelayManagerOwner"`.
 */
export function usePrepareIStakeManagerSetRelayManagerOwner(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'setRelayManagerOwner',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"stakeForRelayManager"`.
 */
export function usePrepareIStakeManagerStakeForRelayManager(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'stakeForRelayManager',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unauthorizeHubByManager"`.
 */
export function usePrepareIStakeManagerUnauthorizeHubByManager(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unauthorizeHubByManager',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unauthorizeHubByOwner"`.
 */
export function usePrepareIStakeManagerUnauthorizeHubByOwner(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unauthorizeHubByOwner',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"unlockStake"`.
 */
export function usePrepareIStakeManagerUnlockStake(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'unlockStake',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"updateRelayKeepaliveTime"`.
 */
export function usePrepareIStakeManagerUpdateRelayKeepaliveTime(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'updateRelayKeepaliveTime',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iStakeManagerABI}__ and `functionName` set to `"withdrawStake"`.
 */
export function usePrepareIStakeManagerWithdrawStake(config = {}) {
  return usePrepareContractWrite({
    abi: iStakeManagerABI,
    functionName: 'withdrawStake',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__.
 */
export function useIStakeManagerEvent(config = {}) {
  return useContractEvent({ abi: iStakeManagerABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"AbandonedRelayManagerStakeEscheated"`.
 */
export function useIStakeManagerAbandonedRelayManagerStakeEscheatedEvent(
  config = {},
) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'AbandonedRelayManagerStakeEscheated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"BurnAddressSet"`.
 */
export function useIStakeManagerBurnAddressSetEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'BurnAddressSet',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"DevAddressSet"`.
 */
export function useIStakeManagerDevAddressSetEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'DevAddressSet',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"HubAuthorized"`.
 */
export function useIStakeManagerHubAuthorizedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'HubAuthorized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"HubUnauthorized"`.
 */
export function useIStakeManagerHubUnauthorizedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'HubUnauthorized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"OwnerSet"`.
 */
export function useIStakeManagerOwnerSetEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'OwnerSet',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"RelayServerAbandoned"`.
 */
export function useIStakeManagerRelayServerAbandonedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'RelayServerAbandoned',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"RelayServerKeepalive"`.
 */
export function useIStakeManagerRelayServerKeepaliveEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'RelayServerKeepalive',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"StakeAdded"`.
 */
export function useIStakeManagerStakeAddedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'StakeAdded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"StakePenalized"`.
 */
export function useIStakeManagerStakePenalizedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'StakePenalized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"StakeUnlocked"`.
 */
export function useIStakeManagerStakeUnlockedEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'StakeUnlocked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iStakeManagerABI}__ and `eventName` set to `"StakeWithdrawn"`.
 */
export function useIStakeManagerStakeWithdrawnEvent(config = {}) {
  return useContractEvent({
    abi: iStakeManagerABI,
    eventName: 'StakeWithdrawn',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link initializableABI}__.
 */
export function useInitializableEvent(config = {}) {
  return useContractEvent({ abi: initializableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link initializableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useInitializableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: initializableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockTicketABI}__.
 */
export function useMockTicketRead(config = {}) {
  return useContractRead({ abi: mockTicketABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__.
 */
export function useMockTicketWrite(config = {}) {
  return useContractWrite({ abi: mockTicketABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"approve"`.
 */
export function useMockTicketApprove(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"grantRole"`.
 */
export function useMockTicketGrantRole(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"mint"`.
 */
export function useMockTicketMint(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'mint',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"pause"`.
 */
export function useMockTicketPause(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useMockTicketRenounceRole(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useMockTicketRevokeRole(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useMockTicketSafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useMockTicketSetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setDuration"`.
 */
export function useMockTicketSetDuration(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'setDuration',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setStartTime"`.
 */
export function useMockTicketSetStartTime(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'setStartTime',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockTicketTransferFrom(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"unpause"`.
 */
export function useMockTicketUnpause(config = {}) {
  return useContractWrite({
    abi: mockTicketABI,
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__.
 */
export function usePrepareMockTicketWrite(config = {}) {
  return usePrepareContractWrite({ abi: mockTicketABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockTicketApprove(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareMockTicketGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareMockTicketMint(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'mint',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"pause"`.
 */
export function usePrepareMockTicketPause(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareMockTicketRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareMockTicketRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareMockTicketSafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareMockTicketSetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setDuration"`.
 */
export function usePrepareMockTicketSetDuration(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'setDuration',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"setStartTime"`.
 */
export function usePrepareMockTicketSetStartTime(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'setStartTime',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockTicketTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockTicketABI}__ and `functionName` set to `"unpause"`.
 */
export function usePrepareMockTicketUnpause(config = {}) {
  return usePrepareContractWrite({
    abi: mockTicketABI,
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__.
 */
export function useMockTicketEvent(config = {}) {
  return useContractEvent({ abi: mockTicketABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockTicketApprovalEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'Approval',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useMockTicketApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"Paused"`.
 */
export function useMockTicketPausedEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'Paused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useMockTicketRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useMockTicketRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useMockTicketRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockTicketTransferEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'Transfer',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockTicketABI}__ and `eventName` set to `"Unpaused"`.
 */
export function useMockTicketUnpausedEvent(config = {}) {
  return useContractEvent({
    abi: mockTicketABI,
    eventName: 'Unpaused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead(config = {}) {
  return useContractRead({ abi: ownableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite(config = {}) {
  return useContractWrite({ abi: ownableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership(config = {}) {
  return useContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite(config = {}) {
  return usePrepareContractWrite({ abi: ownableABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent(config = {}) {
  return useContractEvent({ abi: ownableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableUpgradeableABI}__.
 */
export function useOwnableUpgradeableRead(config = {}) {
  return useContractRead({ abi: ownableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__.
 */
export function useOwnableUpgradeableWrite(config = {}) {
  return useContractWrite({ abi: ownableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableUpgradeableRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: ownableUpgradeableABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableUpgradeableTransferOwnership(config = {}) {
  return useContractWrite({
    abi: ownableUpgradeableABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__.
 */
export function usePrepareOwnableUpgradeableWrite(config = {}) {
  return usePrepareContractWrite({ abi: ownableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableUpgradeableRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: ownableUpgradeableABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableUpgradeableTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: ownableUpgradeableABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableUpgradeableABI}__.
 */
export function useOwnableUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: ownableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useOwnableUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: ownableUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableUpgradeableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableUpgradeableOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: ownableUpgradeableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link pausableABI}__.
 */
export function usePausableRead(config = {}) {
  return useContractRead({ abi: pausableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableABI}__.
 */
export function usePausableEvent(config = {}) {
  return useContractEvent({ abi: pausableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableABI}__ and `eventName` set to `"Paused"`.
 */
export function usePausablePausedEvent(config = {}) {
  return useContractEvent({ abi: pausableABI, eventName: 'Paused', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableABI}__ and `eventName` set to `"Unpaused"`.
 */
export function usePausableUnpausedEvent(config = {}) {
  return useContractEvent({
    abi: pausableABI,
    eventName: 'Unpaused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link pausableUpgradeableABI}__.
 */
export function usePausableUpgradeableRead(config = {}) {
  return useContractRead({ abi: pausableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableUpgradeableABI}__.
 */
export function usePausableUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: pausableUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function usePausableUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: pausableUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableUpgradeableABI}__ and `eventName` set to `"Paused"`.
 */
export function usePausableUpgradeablePausedEvent(config = {}) {
  return useContractEvent({
    abi: pausableUpgradeableABI,
    eventName: 'Paused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link pausableUpgradeableABI}__ and `eventName` set to `"Unpaused"`.
 */
export function usePausableUpgradeableUnpausedEvent(config = {}) {
  return useContractEvent({
    abi: pausableUpgradeableABI,
    eventName: 'Unpaused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link schemaResolverABI}__.
 */
export function useSchemaResolverRead(config = {}) {
  return useContractRead({ abi: schemaResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link schemaResolverABI}__.
 */
export function useSchemaResolverWrite(config = {}) {
  return useContractWrite({ abi: schemaResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"attest"`.
 */
export function useSchemaResolverAttest(config = {}) {
  return useContractWrite({
    abi: schemaResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function useSchemaResolverMultiAttest(config = {}) {
  return useContractWrite({
    abi: schemaResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function useSchemaResolverMultiRevoke(config = {}) {
  return useContractWrite({
    abi: schemaResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function useSchemaResolverRevoke(config = {}) {
  return useContractWrite({
    abi: schemaResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link schemaResolverABI}__.
 */
export function usePrepareSchemaResolverWrite(config = {}) {
  return usePrepareContractWrite({ abi: schemaResolverABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"attest"`.
 */
export function usePrepareSchemaResolverAttest(config = {}) {
  return usePrepareContractWrite({
    abi: schemaResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function usePrepareSchemaResolverMultiAttest(config = {}) {
  return usePrepareContractWrite({
    abi: schemaResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function usePrepareSchemaResolverMultiRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: schemaResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link schemaResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function usePrepareSchemaResolverRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: schemaResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__.
 */
export function useSemverRead(config = {}) {
  return useContractRead({ abi: semverABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link synthABI}__.
 */
export function useSynthRead(config = {}) {
  return useContractRead({ abi: synthABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__.
 */
export function useSynthWrite(config = {}) {
  return useContractWrite({ abi: synthABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addToArtWhitelist"`.
 */
export function useSynthAddToArtWhitelist(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'addToArtWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addToNFTWhitelist"`.
 */
export function useSynthAddToNftWhitelist(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'addToNFTWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addWave"`.
 */
export function useSynthAddWave(config = {}) {
  return useContractWrite({ abi: synthABI, functionName: 'addWave', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"approve"`.
 */
export function useSynthApprove(config = {}) {
  return useContractWrite({ abi: synthABI, functionName: 'approve', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"grantRole"`.
 */
export function useSynthGrantRole(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"mint"`.
 */
export function useSynthMint(config = {}) {
  return useContractWrite({ abi: synthABI, functionName: 'mint', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"pause"`.
 */
export function useSynthPause(config = {}) {
  return useContractWrite({ abi: synthABI, functionName: 'pause', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeFromArtWhitelist"`.
 */
export function useSynthRemoveFromArtWhitelist(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'removeFromArtWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeFromNFTWhitelist"`.
 */
export function useSynthRemoveFromNftWhitelist(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'removeFromNFTWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeWave"`.
 */
export function useSynthRemoveWave(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'removeWave',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useSynthRenounceRole(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useSynthRevokeRole(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useSynthSafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useSynthSetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setMetadataURI"`.
 */
export function useSynthSetMetadataUri(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'setMetadataURI',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setNFTOwnershipToMint"`.
 */
export function useSynthSetNftOwnershipToMint(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'setNFTOwnershipToMint',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useSynthTransferFrom(config = {}) {
  return useContractWrite({
    abi: synthABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"unpause"`.
 */
export function useSynthUnpause(config = {}) {
  return useContractWrite({ abi: synthABI, functionName: 'unpause', ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__.
 */
export function usePrepareSynthWrite(config = {}) {
  return usePrepareContractWrite({ abi: synthABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addToArtWhitelist"`.
 */
export function usePrepareSynthAddToArtWhitelist(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'addToArtWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addToNFTWhitelist"`.
 */
export function usePrepareSynthAddToNftWhitelist(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'addToNFTWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"addWave"`.
 */
export function usePrepareSynthAddWave(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'addWave',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareSynthApprove(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareSynthGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareSynthMint(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'mint',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"pause"`.
 */
export function usePrepareSynthPause(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeFromArtWhitelist"`.
 */
export function usePrepareSynthRemoveFromArtWhitelist(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'removeFromArtWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeFromNFTWhitelist"`.
 */
export function usePrepareSynthRemoveFromNftWhitelist(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'removeFromNFTWhitelist',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"removeWave"`.
 */
export function usePrepareSynthRemoveWave(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'removeWave',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareSynthRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareSynthRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareSynthSafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareSynthSetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setMetadataURI"`.
 */
export function usePrepareSynthSetMetadataUri(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'setMetadataURI',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"setNFTOwnershipToMint"`.
 */
export function usePrepareSynthSetNftOwnershipToMint(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'setNFTOwnershipToMint',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareSynthTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthABI}__ and `functionName` set to `"unpause"`.
 */
export function usePrepareSynthUnpause(config = {}) {
  return usePrepareContractWrite({
    abi: synthABI,
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__.
 */
export function useSynthEvent(config = {}) {
  return useContractEvent({ abi: synthABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"Approval"`.
 */
export function useSynthApprovalEvent(config = {}) {
  return useContractEvent({ abi: synthABI, eventName: 'Approval', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useSynthApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"ArtWhitelistAdded"`.
 */
export function useSynthArtWhitelistAddedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'ArtWhitelistAdded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"ArtWhitelistRemoved"`.
 */
export function useSynthArtWhitelistRemovedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'ArtWhitelistRemoved',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"NFTOwnershipToMintSet"`.
 */
export function useSynthNftOwnershipToMintSetEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'NFTOwnershipToMintSet',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"NFTWhitelistAdded"`.
 */
export function useSynthNftWhitelistAddedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'NFTWhitelistAdded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"NFTWhitelistRemoved"`.
 */
export function useSynthNftWhitelistRemovedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'NFTWhitelistRemoved',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"Paused"`.
 */
export function useSynthPausedEvent(config = {}) {
  return useContractEvent({ abi: synthABI, eventName: 'Paused', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useSynthRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useSynthRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useSynthRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"SynthMinted"`.
 */
export function useSynthSynthMintedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'SynthMinted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"Transfer"`.
 */
export function useSynthTransferEvent(config = {}) {
  return useContractEvent({ abi: synthABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"Unpaused"`.
 */
export function useSynthUnpausedEvent(config = {}) {
  return useContractEvent({ abi: synthABI, eventName: 'Unpaused', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"WaveAdded"`.
 */
export function useSynthWaveAddedEvent(config = {}) {
  return useContractEvent({ abi: synthABI, eventName: 'WaveAdded', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthABI}__ and `eventName` set to `"WaveRemoved"`.
 */
export function useSynthWaveRemovedEvent(config = {}) {
  return useContractEvent({
    abi: synthABI,
    eventName: 'WaveRemoved',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link synthAccountABI}__.
 */
export function useSynthAccountRead(config = {}) {
  return useContractRead({ abi: synthAccountABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__.
 */
export function useSynthAccountWrite(config = {}) {
  return useContractWrite({ abi: synthAccountABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"execute"`.
 */
export function useSynthAccountExecute(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"grantRole"`.
 */
export function useSynthAccountGrantRole(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"initialize"`.
 */
export function useSynthAccountInitialize(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"purchasePalette"`.
 */
export function useSynthAccountPurchasePalette(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'purchasePalette',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"purchasePrint"`.
 */
export function useSynthAccountPurchasePrint(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'purchasePrint',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useSynthAccountRenounceRole(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useSynthAccountRevokeRole(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function useSynthAccountUpgradeTo(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useSynthAccountUpgradeToAndCall(config = {}) {
  return useContractWrite({
    abi: synthAccountABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__.
 */
export function usePrepareSynthAccountWrite(config = {}) {
  return usePrepareContractWrite({ abi: synthAccountABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareSynthAccountExecute(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'execute',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareSynthAccountGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareSynthAccountInitialize(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"purchasePalette"`.
 */
export function usePrepareSynthAccountPurchasePalette(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'purchasePalette',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"purchasePrint"`.
 */
export function usePrepareSynthAccountPurchasePrint(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'purchasePrint',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareSynthAccountRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareSynthAccountRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function usePrepareSynthAccountUpgradeTo(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthAccountABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareSynthAccountUpgradeToAndCall(config = {}) {
  return usePrepareContractWrite({
    abi: synthAccountABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__.
 */
export function useSynthAccountEvent(config = {}) {
  return useContractEvent({ abi: synthAccountABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useSynthAccountAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useSynthAccountBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"Initialized"`.
 */
export function useSynthAccountInitializedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"PalettePurchased"`.
 */
export function useSynthAccountPalettePurchasedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'PalettePurchased',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"PrintPurchased"`.
 */
export function useSynthAccountPrintPurchasedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'PrintPurchased',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useSynthAccountRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useSynthAccountRoleGrantedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'RoleGranted',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useSynthAccountRoleRevokedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'RoleRevoked',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthAccountABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useSynthAccountUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: synthAccountABI,
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link synthRegistryABI}__.
 *
 *
 */
export function useSynthRegistryRead(config = {}) {
  return useContractRead({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__.
 *
 *
 */
export function useSynthRegistryWrite(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"createSynth"`.
 *
 *
 */
export function useSynthRegistryCreateSynth(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'createSynth',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"initialize"`.
 *
 *
 */
export function useSynthRegistryInitialize(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"pause"`.
 *
 *
 */
export function useSynthRegistryPause(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 *
 */
export function useSynthRegistryRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 *
 *
 */
export function useSynthRegistryTransferOwnership(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"unpause"`.
 *
 *
 */
export function useSynthRegistryUnpause(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"upgradeTo"`.
 *
 *
 */
export function useSynthRegistryUpgradeTo(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 *
 */
export function useSynthRegistryUpgradeToAndCall(config = {}) {
  return useContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__.
 *
 *
 */
export function usePrepareSynthRegistryWrite(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"createSynth"`.
 *
 *
 */
export function usePrepareSynthRegistryCreateSynth(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'createSynth',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"initialize"`.
 *
 *
 */
export function usePrepareSynthRegistryInitialize(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"pause"`.
 *
 *
 */
export function usePrepareSynthRegistryPause(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 *
 */
export function usePrepareSynthRegistryRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 *
 *
 */
export function usePrepareSynthRegistryTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"unpause"`.
 *
 *
 */
export function usePrepareSynthRegistryUnpause(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"upgradeTo"`.
 *
 *
 */
export function usePrepareSynthRegistryUpgradeTo(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link synthRegistryABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 *
 */
export function usePrepareSynthRegistryUpgradeToAndCall(config = {}) {
  return usePrepareContractWrite({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__.
 *
 *
 */
export function useSynthRegistryEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"AdminChanged"`.
 *
 *
 */
export function useSynthRegistryAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 *
 */
export function useSynthRegistryBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"Initialized"`.
 *
 *
 */
export function useSynthRegistryInitializedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 *
 */
export function useSynthRegistryOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"Paused"`.
 *
 *
 */
export function useSynthRegistryPausedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'Paused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"SynthCreated"`.
 *
 *
 */
export function useSynthRegistrySynthCreatedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'SynthCreated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"Unpaused"`.
 *
 *
 */
export function useSynthRegistryUnpausedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'Unpaused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link synthRegistryABI}__ and `eventName` set to `"Upgraded"`.
 *
 *
 */
export function useSynthRegistryUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: synthRegistryABI,
    address: synthRegistryAddress[85431],
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableRead(config = {}) {
  return useContractRead({ abi: uupsUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableWrite(config = {}) {
  return useContractWrite({ abi: uupsUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function useUupsUpgradeableUpgradeTo(config = {}) {
  return useContractWrite({
    abi: uupsUpgradeableABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useUupsUpgradeableUpgradeToAndCall(config = {}) {
  return useContractWrite({
    abi: uupsUpgradeableABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function usePrepareUupsUpgradeableWrite(config = {}) {
  return usePrepareContractWrite({ abi: uupsUpgradeableABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function usePrepareUupsUpgradeableUpgradeTo(config = {}) {
  return usePrepareContractWrite({
    abi: uupsUpgradeableABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareUupsUpgradeableUpgradeToAndCall(config = {}) {
  return usePrepareContractWrite({
    abi: uupsUpgradeableABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableEvent(config = {}) {
  return useContractEvent({ abi: uupsUpgradeableABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useUupsUpgradeableAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useUupsUpgradeableBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useUupsUpgradeableInitializedEvent(config = {}) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useUupsUpgradeableUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link waveABI}__.
 */
export function useWaveRead(config = {}) {
  return useContractRead({ abi: waveABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__.
 */
export function useWaveWrite(config = {}) {
  return useContractWrite({ abi: waveABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"approve"`.
 */
export function useWaveApprove(config = {}) {
  return useContractWrite({ abi: waveABI, functionName: 'approve', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"grantRole"`.
 */
export function useWaveGrantRole(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"mint"`.
 */
export function useWaveMint(config = {}) {
  return useContractWrite({ abi: waveABI, functionName: 'mint', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"pause"`.
 */
export function useWavePause(config = {}) {
  return useContractWrite({ abi: waveABI, functionName: 'pause', ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useWaveRenounceRole(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useWaveRevokeRole(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useWaveSafeTransferFrom(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useWaveSetApprovalForAll(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setDuration"`.
 */
export function useWaveSetDuration(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'setDuration',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setStartTime"`.
 */
export function useWaveSetStartTime(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'setStartTime',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useWaveTransferFrom(config = {}) {
  return useContractWrite({
    abi: waveABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"unpause"`.
 */
export function useWaveUnpause(config = {}) {
  return useContractWrite({ abi: waveABI, functionName: 'unpause', ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__.
 */
export function usePrepareWaveWrite(config = {}) {
  return usePrepareContractWrite({ abi: waveABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareWaveApprove(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'approve',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareWaveGrantRole(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'grantRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareWaveMint(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'mint',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"pause"`.
 */
export function usePrepareWavePause(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareWaveRenounceRole(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'renounceRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareWaveRevokeRole(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'revokeRole',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareWaveSafeTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'safeTransferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareWaveSetApprovalForAll(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'setApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setDuration"`.
 */
export function usePrepareWaveSetDuration(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'setDuration',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"setStartTime"`.
 */
export function usePrepareWaveSetStartTime(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'setStartTime',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareWaveTransferFrom(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'transferFrom',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveABI}__ and `functionName` set to `"unpause"`.
 */
export function usePrepareWaveUnpause(config = {}) {
  return usePrepareContractWrite({
    abi: waveABI,
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__.
 */
export function useWaveEvent(config = {}) {
  return useContractEvent({ abi: waveABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"Approval"`.
 */
export function useWaveApprovalEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'Approval', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useWaveApprovalForAllEvent(config = {}) {
  return useContractEvent({
    abi: waveABI,
    eventName: 'ApprovalForAll',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"DurationUpdated"`.
 */
export function useWaveDurationUpdatedEvent(config = {}) {
  return useContractEvent({
    abi: waveABI,
    eventName: 'DurationUpdated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"Paused"`.
 */
export function useWavePausedEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'Paused', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useWaveRoleAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: waveABI,
    eventName: 'RoleAdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useWaveRoleGrantedEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'RoleGranted', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useWaveRoleRevokedEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'RoleRevoked', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"StartTimeUpdated"`.
 */
export function useWaveStartTimeUpdatedEvent(config = {}) {
  return useContractEvent({
    abi: waveABI,
    eventName: 'StartTimeUpdated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"Transfer"`.
 */
export function useWaveTransferEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'Transfer', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"Unpaused"`.
 */
export function useWaveUnpausedEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'Unpaused', ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveABI}__ and `eventName` set to `"WaveMinted"`.
 */
export function useWaveWaveMintedEvent(config = {}) {
  return useContractEvent({ abi: waveABI, eventName: 'WaveMinted', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link waveRegistryABI}__.
 *
 *
 */
export function useWaveRegistryRead(config = {}) {
  return useContractRead({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__.
 *
 *
 */
export function useWaveRegistryWrite(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"createWave"`.
 *
 *
 */
export function useWaveRegistryCreateWave(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'createWave',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"initialize"`.
 *
 *
 */
export function useWaveRegistryInitialize(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"pause"`.
 *
 *
 */
export function useWaveRegistryPause(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 *
 */
export function useWaveRegistryRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 *
 *
 */
export function useWaveRegistryTransferOwnership(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"unpause"`.
 *
 *
 */
export function useWaveRegistryUnpause(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"upgradeTo"`.
 *
 *
 */
export function useWaveRegistryUpgradeTo(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 *
 */
export function useWaveRegistryUpgradeToAndCall(config = {}) {
  return useContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__.
 *
 *
 */
export function usePrepareWaveRegistryWrite(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"createWave"`.
 *
 *
 */
export function usePrepareWaveRegistryCreateWave(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'createWave',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"initialize"`.
 *
 *
 */
export function usePrepareWaveRegistryInitialize(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"pause"`.
 *
 *
 */
export function usePrepareWaveRegistryPause(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'pause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 *
 */
export function usePrepareWaveRegistryRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 *
 *
 */
export function usePrepareWaveRegistryTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"unpause"`.
 *
 *
 */
export function usePrepareWaveRegistryUnpause(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'unpause',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"upgradeTo"`.
 *
 *
 */
export function usePrepareWaveRegistryUpgradeTo(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveRegistryABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 *
 */
export function usePrepareWaveRegistryUpgradeToAndCall(config = {}) {
  return usePrepareContractWrite({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__.
 *
 *
 */
export function useWaveRegistryEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"AdminChanged"`.
 *
 *
 */
export function useWaveRegistryAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 *
 */
export function useWaveRegistryBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"Initialized"`.
 *
 *
 */
export function useWaveRegistryInitializedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 *
 */
export function useWaveRegistryOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"Paused"`.
 *
 *
 */
export function useWaveRegistryPausedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'Paused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"Unpaused"`.
 *
 *
 */
export function useWaveRegistryUnpausedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'Unpaused',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"Upgraded"`.
 *
 *
 */
export function useWaveRegistryUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveRegistryABI}__ and `eventName` set to `"WaveCreated"`.
 *
 *
 */
export function useWaveRegistryWaveCreatedEvent(config = {}) {
  return useContractEvent({
    abi: waveRegistryABI,
    address: waveRegistryAddress[85431],
    eventName: 'WaveCreated',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link waveResolverABI}__.
 */
export function useWaveResolverRead(config = {}) {
  return useContractRead({ abi: waveResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__.
 */
export function useWaveResolverWrite(config = {}) {
  return useContractWrite({ abi: waveResolverABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"addAttester"`.
 */
export function useWaveResolverAddAttester(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'addAttester',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"attest"`.
 */
export function useWaveResolverAttest(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"initialize"`.
 */
export function useWaveResolverInitialize(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function useWaveResolverMultiAttest(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function useWaveResolverMultiRevoke(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"removeAttester"`.
 */
export function useWaveResolverRemoveAttester(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'removeAttester',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useWaveResolverRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function useWaveResolverRevoke(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useWaveResolverTransferOwnership(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function useWaveResolverUpgradeTo(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useWaveResolverUpgradeToAndCall(config = {}) {
  return useContractWrite({
    abi: waveResolverABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__.
 */
export function usePrepareWaveResolverWrite(config = {}) {
  return usePrepareContractWrite({ abi: waveResolverABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"addAttester"`.
 */
export function usePrepareWaveResolverAddAttester(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'addAttester',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"attest"`.
 */
export function usePrepareWaveResolverAttest(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'attest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareWaveResolverInitialize(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'initialize',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"multiAttest"`.
 */
export function usePrepareWaveResolverMultiAttest(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'multiAttest',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"multiRevoke"`.
 */
export function usePrepareWaveResolverMultiRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'multiRevoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"removeAttester"`.
 */
export function usePrepareWaveResolverRemoveAttester(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'removeAttester',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareWaveResolverRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"revoke"`.
 */
export function usePrepareWaveResolverRevoke(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'revoke',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareWaveResolverTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function usePrepareWaveResolverUpgradeTo(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'upgradeTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link waveResolverABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareWaveResolverUpgradeToAndCall(config = {}) {
  return usePrepareContractWrite({
    abi: waveResolverABI,
    functionName: 'upgradeToAndCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__.
 */
export function useWaveResolverEvent(config = {}) {
  return useContractEvent({ abi: waveResolverABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useWaveResolverAdminChangedEvent(config = {}) {
  return useContractEvent({
    abi: waveResolverABI,
    eventName: 'AdminChanged',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useWaveResolverBeaconUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: waveResolverABI,
    eventName: 'BeaconUpgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__ and `eventName` set to `"Initialized"`.
 */
export function useWaveResolverInitializedEvent(config = {}) {
  return useContractEvent({
    abi: waveResolverABI,
    eventName: 'Initialized',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useWaveResolverOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: waveResolverABI,
    eventName: 'OwnershipTransferred',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link waveResolverABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useWaveResolverUpgradedEvent(config = {}) {
  return useContractEvent({
    abi: waveResolverABI,
    eventName: 'Upgraded',
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wavesPaymasterABI}__.
 */
export function useWavesPaymasterRead(config = {}) {
  return useContractRead({ abi: wavesPaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__.
 */
export function useWavesPaymasterWrite(config = {}) {
  return useContractWrite({ abi: wavesPaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function useWavesPaymasterPostRelayedCall(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function useWavesPaymasterPreRelayedCall(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useWavesPaymasterRenounceOwnership(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setConfiguration"`.
 */
export function useWavesPaymasterSetConfiguration(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setConfiguration',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setRelayHub"`.
 */
export function useWavesPaymasterSetRelayHub(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setRelayHub',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setTrustedForwarder"`.
 */
export function useWavesPaymasterSetTrustedForwarder(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setTrustedForwarder',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useWavesPaymasterTransferOwnership(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistMethod"`.
 */
export function useWavesPaymasterWhitelistMethod(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistMethod',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistSender"`.
 */
export function useWavesPaymasterWhitelistSender(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistSender',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistTarget"`.
 */
export function useWavesPaymasterWhitelistTarget(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistTarget',
    ...config,
  })
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"withdrawRelayHubDepositTo"`.
 */
export function useWavesPaymasterWithdrawRelayHubDepositTo(config = {}) {
  return useContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'withdrawRelayHubDepositTo',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__.
 */
export function usePrepareWavesPaymasterWrite(config = {}) {
  return usePrepareContractWrite({ abi: wavesPaymasterABI, ...config })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"postRelayedCall"`.
 */
export function usePrepareWavesPaymasterPostRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'postRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"preRelayedCall"`.
 */
export function usePrepareWavesPaymasterPreRelayedCall(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'preRelayedCall',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareWavesPaymasterRenounceOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'renounceOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setConfiguration"`.
 */
export function usePrepareWavesPaymasterSetConfiguration(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setConfiguration',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setRelayHub"`.
 */
export function usePrepareWavesPaymasterSetRelayHub(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setRelayHub',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"setTrustedForwarder"`.
 */
export function usePrepareWavesPaymasterSetTrustedForwarder(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'setTrustedForwarder',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareWavesPaymasterTransferOwnership(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'transferOwnership',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistMethod"`.
 */
export function usePrepareWavesPaymasterWhitelistMethod(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistMethod',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistSender"`.
 */
export function usePrepareWavesPaymasterWhitelistSender(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistSender',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"whitelistTarget"`.
 */
export function usePrepareWavesPaymasterWhitelistTarget(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'whitelistTarget',
    ...config,
  })
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wavesPaymasterABI}__ and `functionName` set to `"withdrawRelayHubDepositTo"`.
 */
export function usePrepareWavesPaymasterWithdrawRelayHubDepositTo(config = {}) {
  return usePrepareContractWrite({
    abi: wavesPaymasterABI,
    functionName: 'withdrawRelayHubDepositTo',
    ...config,
  })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wavesPaymasterABI}__.
 */
export function useWavesPaymasterEvent(config = {}) {
  return useContractEvent({ abi: wavesPaymasterABI, ...config })
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wavesPaymasterABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useWavesPaymasterOwnershipTransferredEvent(config = {}) {
  return useContractEvent({
    abi: wavesPaymasterABI,
    eventName: 'OwnershipTransferred',
    ...config,
  })
}
