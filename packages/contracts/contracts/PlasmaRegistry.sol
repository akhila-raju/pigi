pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

/* External Imports */
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/* Internal Imports */
import { Aggregator } from "./Aggregator.sol";

contract PlasmaRegistry {
  address[] public aggregators;

  // Deploy a new aggregator
  // function newAggregator(address _authenticationAddress) public returns(EmptyContract new_Aggregator) {
  //   // uint id = getAggregatorCount() + 1;
  //   // Aggregator a = new Aggregator(_authenticationAddress, 1);
  //   EmptyContract a = new EmptyContract(_authenticationAddress, 1);
  //   require(false == true, "false != true");
  //   // aggregators.push(_authenticationAddress);
  //   return a;
  // }

  // Get length of list of aggregators
  function getAggregatorCount() public returns(uint aggregatorCount) {
    return aggregators.length;
  }
}