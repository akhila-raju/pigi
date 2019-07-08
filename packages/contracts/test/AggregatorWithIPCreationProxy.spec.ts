// import chai = require('chai')
// import {
//   createMockProvider,
//   deployContract,
//   getWallets,
//   solidity,
// } from 'ethereum-waffle'
// import * as AggregatorWithIPCreationProxy from '../build/AggregatorWithIPCreationProxy.json'
// import * as PlasmaRegistry from '../build/PlasmaRegistry.json'

// chai.use(solidity)
// const { expect } = chai

// describe('Create AggregatorWithIPCreationProxy with new PlasmaRegistry', () => {
//   const provider = createMockProvider()
//   const [wallet] = getWallets(provider)
//   let aggregatorWithIPCreationProxy
//   let plasmaRegistry

//   beforeEach(async () => {
//     // don't change this value from 6700000 and 5000000
//     plasmaRegistry = await deployContract(wallet, PlasmaRegistry, [], {
//       gasLimit: 6700000,
//     })
//     // .then((pr) =>
//     //   deployContract(wallet, AggregatorWithIPCreationProxy, [pr.address, wallet.address, 'het'], {
//     //     gasLimit: 5000000,
//     //   })
//     aggregatorWithIPCreationProxy = deployContract(
//       wallet,
//       AggregatorWithIPCreationProxy,
//       [plasmaRegistry.address, wallet.address, wallet.address],
//       {
//         gasLimit: 5000000,
//       }
//     )
//   })

//   it('Creates aggregator and assigns to Plasma Registry', async () => {
//     // returning 0 not 1
//     expect(plasmaRegistry.aggregators.length).to.eq(1)

//     // TypeError: Cannot read property 'metadata' of undefined
//     expect(plasmaRegistry.aggregators[0].metadata.ip()).to.eq(
//       await wallet.getAddress()
//     )

//     // AssertionError: expected {} to equal 0
//     expect(aggregatorWithIPCreationProxy).to.eq(0)
//   })

//   // it('Deletes AggregatorWithIPCreationProxy contract', async () => {
//   //   // TXRejectedError: the tx doesn't have the correct nonce. account has nonce of: 2 tx has nonce of: 1
//   //   expect(aggregatorWithIPCreationProxy).to.eq(0)
//   // })
// })

// describe('Create AggregatorWithIPCreationProxy with existing PlasmaRegistry', () => {
//   const provider = createMockProvider()
//   const [wallet] = getWallets(provider)
//   let aggregatorWithIPCreationProxy
//   let plasmaRegistry

//   beforeEach(async () => {
//     // don't change this value from 6700000 and 5000000
//     plasmaRegistry = await deployContract(wallet, PlasmaRegistry, [], {
//       gasLimit: 6700000,
//     })
//     // .then((pr) =>
//     //   deployContract(wallet, AggregatorWithIPCreationProxy, [pr.address, wallet.address, 'het'], {
//     //     gasLimit: 5000000,
//     //   })
//     plasmaRegistry.newAggregator(wallet.address)
//     aggregatorWithIPCreationProxy = deployContract(
//       wallet,
//       AggregatorWithIPCreationProxy,
//       [plasmaRegistry.address, wallet.address, wallet.address],
//       {
//         gasLimit: 5000000,
//       }
//     )
//   })

//   it('Creates aggregator and assigns to Plasma Registry', async () => {
//     // TXRejectedError: the tx doesn't have the correct nonce. account has nonce of: 2 tx has nonce of: 1
//     expect(await plasmaRegistry.getAggregatorCount()).to.eq(1)
//     expect(await plasmaRegistry.aggregators[0].authenticationAddress()).to.eq(
//       wallet.address
//     )
//     expect(await plasmaRegistry.getAggregatorCount()).to.eq(2)
//     expect(await plasmaRegistry.aggregators[1].authenticationAddress()).to.eq(
//       wallet.address
//     )
//   })

//   // it('Deletes AggregatorWithIPCreationProxy contract', async () => {
//   // // expected {} to equal 0
//   //   expect(aggregatorWithIPCreationProxy).to.eq(0)
//   // })
// })
