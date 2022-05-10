import getPokemonOptions, { getPokemon, getPokemonName } from "@/helpers/getPokemonOptions";

describe("getPokemonOptions.js", () => {
	test("Debe de regresar un arreglo de números", () => {
		const pokemon = getPokemon();
		expect(pokemon.length).toBe(650);
		expect(pokemon[0]).toBe(1);
	});

	test("Debe de retornar un arreglo de 4 elementos con nombres de pokémon (getPokemonName)", async () => {
		const pokemon = await getPokemonName([1, 2, 3, 4]);
		expect(pokemon).toStrictEqual([
			{ name: "bulbasaur", id: 1 },
			{ name: "ivysaur", id: 2 },
			{ name: "venusaur", id: 3 },
			{ name: "charmander", id: 4 },
		]);
	});

	test("Debe de retornar un arreglo mezclado (getPokemonOptions)", async () => {
		const pokemon = await getPokemonOptions();
		expect(pokemon.length).toBe(4);
		expect(pokemon).toEqual([
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
		]);
	});
});
