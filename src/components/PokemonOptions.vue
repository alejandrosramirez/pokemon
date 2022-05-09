<template>
	<div class="pokemon-options-container">
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "PokemonOptions",
};
</script>

<style scoped>
.pokemon-options-container {
	height: 200px;
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
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>
