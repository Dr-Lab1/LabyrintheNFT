# Kit de démarrage Truffle-Tailwind-React Web3
Développez rapidement votre application décentralisée avec ce kit de démarrage gratuit !

Suivez les étapes ci-dessous pour télécharger, installer et exécuter ce projet.

## Dépendances
Installez ces prérequis
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache-CLI: https://docs.nethereum.com/en/latest/ethereum-and-clients/ganache-cli/
- Tailwind CSS: https://tailwindcss.com/


## Etape 1. Clôner le prototype de devéllopement du projet chez <a href="https://github.com/Daltonic/">Daltonic</a> project
`git clone https://github.com/Daltonic/tailwind_truffle_starter_kit <PROJECT NAME>`

## Step 2. Install dependencies
```sh
$ cd <PROJECT NAME>
$ yarn install # or npm install
```
## Step 3. Start Ganache-CLI
Open the terminal and run the command below.
```sh
$ ganache-cli
```

## Step 4. Compile & Deploy Smart Contract
`$ truffle migrate --reset`
Migrate your smart contract each time your restart ganache.

## Step 5. Run the Front End Application
`$ yarn start`
Visit this URL in your browser: http://localhost:3000

