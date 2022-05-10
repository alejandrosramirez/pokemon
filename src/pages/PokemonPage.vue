<template>
	<div v-if="!poke">
		<h1>Cargando...</h1>
	</div>

	<div v-else>
		<h1>¿Quién es ese Pokémon?</h1>

		<pokemon-picture
			:pokemon-id="poke.id"
			:show-pokemon="showPokemon"
		/>

		<pokemon-options
			:pokemon="pokemon"
			@selected-pokemon="selectedPokemon"
		/>

		<template v-if="showSelected">
			<h2>{{ message }}</h2>
			<button @click="newGame">
				Nuevo juego
			</button>
		</template>
	</div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
	name: "PokemonPage",
	components: {
		PokemonPicture,
		PokemonOptions,
	},
	data() {
		return {
			pokemon: [],
			poke: null,
			showPokemon: false,
			showSelected: false,
			message: "",
		};
	},
	methods: {
		async fetchPokemon() {
			this.pokemon = await getPokemonOptions();

			const randInt = Math.floor(Math.random() * 4);

			this.poke = this.pokemon[randInt];
		},
		selectedPokemon(pokemonId) {
			this.showSelected = true;

			if (pokemonId === this.poke.id) {
				this.message = `Es... ${this.poke.name.toUpperCase()}`;
				this.showPokemon = true;
			} else {
				this.message = `Incorrecto, el pokémon es ${this.poke.name.toUpperCase()}`;
			}
		},
		newGame() {
			this.pokemon = [];
			this.poke = null;
			this.showPokemon = false;
			this.showSelected = false;
			this.message = "";

			this.fetchPokemon();
		},
	},
	mounted() {
		this.fetchPokemon();
	}
};
</script>
