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
`git clone https://github.com/Daltonic/tailwind_truffle_starter_kit <NOM DU PROJET>`

## Etape 2. Installer les dépendances
```sh
$ cd <NOM DU PROJET>
$ yarn install # or npm install
```
## Etape 3. Demarrer Ganache-CLI
Ouvre le terminal puis exécute la commande ci-dessous.
```sh
$ ganache-cli
```

## Etape 4. Compile & Deploy Smart Contract
`$ truffle migrate --reset`
Migrate your smart contract each time your restart ganache.

## Etape 5. Run the Front End Application
`$ yarn start`
Visit this URL in your browser: http://localhost:3000

