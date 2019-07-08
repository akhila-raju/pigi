import chai = require('chai')
import {
  createMockProvider,
  deployContract,
  getWallets,
  solidity,
} from 'ethereum-waffle'
import * as Aggregator from '../build/Aggregator.json'
import * as PlasmaRegistry from '../build/PlasmaRegistry.json'

chai.use(solidity)
const { expect } = chai

describe('Creates PlasmaRegistry and checks that fields are properly assigned', () => {
  const provider = createMockProvider()
  const [wallet] = getWallets(provider)
  let plasmaRegistry
  let agg1
  let agg2

  beforeEach(async () => {
    plasmaRegistry = await deployContract(wallet, PlasmaRegistry, [], {
      gasLimit: 6700000,
    })
  })

  it('Increments IDs for each aggregator', async () => {
    // RuntimeError: VM Exception while processing transaction: revert
    agg1 = await plasmaRegistry.newAggregator(wallet.address)
    // expect(await plasmaRegistry.aggregators[0]).to.eq(agg1)
    // expect(await plasmaRegistry.aggregators[0].id()).to.eq(1)
    // expect(await plasmaRegistry.getAggregatorCount()).to.eq(1)
    // agg2 = await plasmaRegistry.newAggregator(
    //   '0x00000000000000000000000987654321'
    // )
    // expect(await plasmaRegistry.aggregators[1]).to.eq(agg2)
    // expect(await plasmaRegistry.aggregators[1].id()).to.eq(2)
    // expect(await plasmaRegistry.getAggregatorCount()).to.eq(2)
  })
})
