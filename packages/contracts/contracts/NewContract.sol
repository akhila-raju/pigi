pragma solidity ^0.5.0;

import { EmptyContract } from "./EmptyContract.sol";

contract NewContract {
  address public authenticationAddress;
  address public commitmentChain;
  mapping(address => address) public depositContracts;
  mapping (bytes32 => uint256)  exitRedeemableAfter;

  uint public id;
  // mapping(string => string) public metadata;

  constructor() public {
  }

  function doDeploy() public {
   new EmptyContract();
  }
}