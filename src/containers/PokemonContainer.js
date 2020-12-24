import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/getPokemon";
import { Pokemon } from "../components/Pokemon";

export default function PokemonContainer() {
	const { data, loading } = useQuery(GET_POKEMONS, {
		variables: { first: 151 },
	});

	return (
		<div className="container">
			{!loading &&
				data.pokemons.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemon={pokemon} />
				))}
		</div>
	);
}
