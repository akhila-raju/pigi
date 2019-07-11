pragma solidity ^0.5.0;

contract EmptyContract {
  address public authenticationAddress;
  address public commitmentChain;
  mapping(address => address) public depositContracts;
}

contract TestContract {
  mapping(address => address) public depositContracts;
  mapping (bytes32 => uint256) public exitRedeemableAfter;

  function doDeploy() public {
   new EmptyContract();
  }
}