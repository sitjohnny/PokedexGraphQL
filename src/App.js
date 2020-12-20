import React from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import PokemonContainer from "./containers/PokemonContainer";

const client = new ApolloClient({
	uri: "https://graphql-pokemon2.vercel.app/",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<main>
				<PokemonContainer />
			</main>
		</ApolloProvider>
	);
}

export default App;
