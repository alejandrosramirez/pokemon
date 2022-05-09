const getPokemon = () => {
	const pokemonArray = Array.from(Array(650));

	return pokemonArray.map((_, index) => index + 1);
};

const getPokemonName = ([a, b, c, d] = []) => {
	console.log(a, b, c, d);
};

const getPokemonOptions = () => {
	const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);

	getPokemonName(mixedPokemon.splice(0, 4));
};

export default getPokemonOptions;
