<template>
	<h1>¿Quién es ese Pokémon?</h1>

	<pokemon-picture :pokemonId="8" :showPokemon="true" />

	<pokemon-options />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

export default {
	name: "PokemonPage",
	components: {
		PokemonPicture,
		PokemonOptions,
	},
};
</script>
