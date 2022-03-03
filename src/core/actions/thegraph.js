// util/thegraph.js
import Axios from '../utils/Axios'
Axios.axios()

const nowMakerList = [
  // ETH
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 5,
    c2ID: 77,
    c1Name: 'rinkeby',
    c2Name: 'optimism(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.0045,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 22,
    c2ID: 77,
    c1Name: 'arbitrum(test)',
    c2Name: 'optimism(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 77,
    c2ID: 33,
    c1Name: 'optimism(test)',
    c2Name: 'zksync(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.0045,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 77,
    c2ID: 66,
    c1Name: 'optimism(test)',
    c2Name: 'polygon(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },

  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 5,
    c2ID: 33,
    c1Name: 'rinkeby',
    c2Name: 'zksync(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.0045,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 5,
    c2ID: 22,
    c1Name: 'rinkeby',
    c2Name: 'arbitrum(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.00135,
    c2TradingFee: 0.0045,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 22,
    c2ID: 33,
    c1Name: 'arbitrum(test)',
    c2Name: 'zksync(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 5,
    c2ID: 66,
    c1Name: 'rinkeby',
    c2Name: 'polygon(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 22,
    c2ID: 66,
    c1Name: 'arbitrum(test)',
    c2Name: 'polygon(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 33,
    c2ID: 66,
    c1Name: 'zksync(test)',
    c2Name: 'polygon(test)',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 44,
    c2ID: 5,
    c1Name: 'starknet(test)',
    c2Name: 'rinkeby',
    t1Address:
      '0x2dd93e385742984bf2fc887cd5d8b5ec6917d80af09cf7a00a63710ad51ba53',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 44,
    c2ID: 22,
    c1Name: 'starknet(test)',
    c2Name: 'arbitrum(test)',
    t1Address:
      '0x2dd93e385742984bf2fc887cd5d8b5ec6917d80af09cf7a00a63710ad51ba53',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 44,
    c2ID: 33,
    c1Name: 'starknet(test)',
    c2Name: 'zksync(test)',
    t1Address:
      '0x2dd93e385742984bf2fc887cd5d8b5ec6917d80af09cf7a00a63710ad51ba53',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 44,
    c2ID: 77,
    c1Name: 'starknet(test)',
    c2Name: 'optimism(test)',
    t1Address:
      '0x2dd93e385742984bf2fc887cd5d8b5ec6917d80af09cf7a00a63710ad51ba53',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
    c1ID: 44,
    c2ID: 66,
    c1Name: 'starknet(test)',
    c2Name: 'polygon(test)',
    t1Address:
      '0x2dd93e385742984bf2fc887cd5d8b5ec6917d80af09cf7a00a63710ad51ba53',
    t2Address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 0.2,
    c2MinPrice: 0.005,
    c2MaxPrice: 0.2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.00135,
    c1GasFee: 2,
    c2GasFee: 2,
    c1AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1636019587,
        endTime: 99999999999999,
      },
    ],
  },
]

export default {
  getMakerInfo: function (req, next) {
    return new Promise((resolve, reject) => {
      var res = {}
      res.code = 0
      res.data = nowMakerList
      if (next) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
  getAllMakerList: function (req, next) {
    return new Promise((resolve, reject) => {
      var res = {}
      res.code = 0
      res.data = [
        {
          makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
          c1ID: 5,
          c2ID: 22,
          c1Name: 'rinkeby',
          c2Name: 'arbitrum(test)',
          t1Address: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
          t2Address: '0x6079Dd4565cb1852D6c4190DB7af6C8A69f73Eae',
          tName: 'USDC',
          c1MinPrice: 0.1,
          c1MaxPrice: 1000,
          c2MinPrice: 0.1,
          c2MaxPrice: 1000,
          precision: 6,
          c1AvalibleDeposit: 1000,
          c2AvalibleDeposit: 1000,
          c1TradingFee: 1,
          c2TradingFee: 1,
          c1GasFee: 3,
          c2GasFee: 3,
          c1AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019587,
            },
          ],
          c2AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019587,
            },
          ],
        },
        {
          makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
          c1ID: 5,
          c2ID: 33,
          c1Name: 'rinkeby',
          c2Name: 'zksync(test)',
          t1Address: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
          t2Address: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
          tName: 'USDC',
          c1MinPrice: 0.1,
          c1MaxPrice: 1000,
          c2MinPrice: 0.1,
          c2MaxPrice: 1000,
          precision: 6,
          c1AvalibleDeposit: 1000,
          c2AvalibleDeposit: 1000,
          c1TradingFee: 1,
          c2TradingFee: 1,
          c1GasFee: 3,
          c2GasFee: 3,
          c1AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019587,
            },
          ],
          c2AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019587,
            },
          ],
        },
        {
          makerAddress: '0x0043d60e87c5dd08C86C3123340705a1556C4719',
          c1ID: 22,
          c2ID: 33,
          c1Name: 'arbitrum(test)',
          c2Name: 'zksync(test)',
          t1Address: '0x6079Dd4565cb1852D6c4190DB7af6C8A69f73Eae',
          t2Address: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
          tName: 'USDC',
          c1MinPrice: 0.1,
          c1MaxPrice: 1000,
          c2MinPrice: 1,
          c2MaxPrice: 1000,
          precision: 6,
          c1AvalibleDeposit: 1000,
          c2AvalibleDeposit: 1000,
          c1TradingFee: 1,
          c2TradingFee: 2,
          c1GasFee: 3,
          c2GasFee: 4,
          c1AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019586,
            },
          ],
          c2AvalibleTimes: [
            {
              startTime: 0,
              endTime: 1636019586,
            },
          ],
        },
      ]

      // push now makerList
      res.data = res.data.concat(nowMakerList)

      if (next) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
}
