<template>
	<div class="pokemon-options-container">
		<ul>
			<li
				v-for="poke in pokemon"
				:key="poke.id"
				@click="$emit('selectedPokemon', poke.id)"
			>
				{{ poke.name.toUpperCase() }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		pokemon: {
			type: Array,
			required: true,
		},
	},
	name: "PokemonOptions",
};
</script>

<style scoped>
.pokemon-options-container {
	display: flex;
	align-content: center;
	justify-content: center;
}

ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 350px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>
