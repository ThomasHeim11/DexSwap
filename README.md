# DexSwap

A Uniswap V3 clone built from scratch for educational purposes. Part of free and open-source [Uniswap V3 Development Book](https://uniswapv3book.com) by Ivan Kuznetsov. 

![Front-end application screenshot](/screenshot.png)

## How to Run
1. Ensure you have [Foundry](https://github.com/foundry-rs/foundry) installed.
1. Run Anvil:
    ```shell
    $ anvil
    ```
1. Set environment variables and deploy contracts:
    ```shell
    $ source .envrc
    $ make deploy
    ```
1. Start the UI:
    ```shell
    $ cd ui && yarn start
    ```
1. In Metamask, import this private key and connect to `localhost:8545`:
    ```
    0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
    ```
1. Enjoy!

[![Thomas HeimLinkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thomas-heim11/)
