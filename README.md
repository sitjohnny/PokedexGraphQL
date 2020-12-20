# Pokedex GraphQL

<p align="center" width="100%">
    <img width="50%" src="./public/readmelogo.png">
</p>

This is a simple page that allows users to view information about pokemons. It features a pokemon's name, stats, their image, and their special attack moves.

## Technologies Used

This site primarily uses React. It also uses Apollo GraphQL to fetch data from the pokemon API. Styling is done with CSS.

## Getting Started

### Executing the program

```@node
cd PokedexGraphQL
npm i
npm start
```

#### Executing the program using Docker

1. Build the project using this command: `docker build -t pokedexgraphql .`
2. Run the project with this command: `docker run -p 3000:3000 -d pokedexgraphql`
3. Enter `localhost:3000` into your browser
