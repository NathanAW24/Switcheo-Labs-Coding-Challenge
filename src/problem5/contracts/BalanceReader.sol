pragma solidity ^0.8.0;

import "./IERC20.sol";

contract BalanceReader {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(
        address wallet,
        address[] calldata tokenAddresses
    ) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](
            tokenAddresses.length
        );
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            IERC20 token = IERC20(tokenAddresses[i]);
            uint256 balance = token.balanceOf(wallet);
            balances[i] = TokenBalance(tokenAddresses[i], balance);
        }
        return balances;
    }
}
