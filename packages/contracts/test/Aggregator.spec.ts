// import chai = require('chai')
// import {
//   createMockProvider,
//   deployContract,
//   getWallets,
//   solidity,
// } from 'ethereum-waffle'
// import * as Aggregator from '../build/Aggregator.json'
// import * as BasicTokenMock from '../build/BasicTokenMock.json'

// chai.use(solidity)
// const { expect } = chai

// describe('Creates Aggregator and checks that fields are properly assigned', () => {
//   const provider = createMockProvider()
//   const [wallet] = getWallets(provider)
//   let aggregator
//   let token

//   beforeEach(async () => {
//     const authenticationAddress = await wallet.getAddress()
//     const id = 121
//     aggregator = await deployContract(
//       wallet,
//       Aggregator,
//       [authenticationAddress, id],
//       { gasLimit: 6700000 }
//     )
//     token = await deployContract(wallet, BasicTokenMock, [wallet.address, 1000])
//   })

//   it('Assigns AuthenticationAddress to Aggregator', async () => {
//     expect(await aggregator.authenticationAddress()).to.eq(
//       await wallet.getAddress()
//     )
//   })

//   it('Creates commitment chain', async () => {
//     expect(await aggregator.commitmentChain()).to.exist
//   })

//   it('Creates deposit contract', async () => {
//     // RuntimeError: VM Exception while processing transaction: revert
//     await aggregator.addDepositContract(token.address, wallet.address)
//     expect(await aggregator.depositContracts[0]).to.eq(token)
//   })

//   it('Assigns ID to Aggregator', async () => {
//     expect(await aggregator.id()).to.eq(121)
//   })

//   it('Assigns and deletes IP in Metadata', async () => {
//     const addr = '0x00000000000000000000000987654321'
//     await aggregator.setMetadata(addr, 'heyo')
//     expect(await aggregator.metadata(addr)).to.eq('heyo')
//     await aggregator.deleteMetadata(addr)
//     expect(await aggregator.metadata(addr)).to.eq('')
//   })
// })
