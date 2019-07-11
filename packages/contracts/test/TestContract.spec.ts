import chai = require('chai')
import {
  createMockProvider,
  deployContract,
  getWallets,
  solidity,
} from 'ethereum-waffle'
import * as TestContract from '../build/TestContract.json'


chai.use(solidity)
const { expect } = chai

describe.only('Creates EmptyContract and checks that fields are properly assigned', () => {
  const provider = createMockProvider()
  const [wallet] = getWallets(provider)
  let newContract

  it('it deploys ', async () => {
    newContract = await deployContract(wallet, TestContract, [], {
      gasLimit: 6700000,
    })
    await newContract.doDeploy();
  })
})