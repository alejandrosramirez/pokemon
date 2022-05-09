<template>
	<div class="pokemon-picture-container">
		<img :src="pokemonImg" class="hidden-pokemon" alt="pokemon">

		<img v-if="showPokemon" :src="pokemonImg" class="fade-in" alt="pokemon">
	</div>
</template>

<script>
export default {
	props: {
		pokemonId: {
			type: Number,
			required: true,
		},
		showPokemon: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	name: "PokemonPicture",
	computed: {
		pokemonImg() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
		},
	},
};
</script>

<style scoped>
.pokemon-picture-container {
    height: 200px;
	display: flex;
	align-content: center;
	justify-content: center;
}

img {
	height: 200px;
	position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}
</style>
