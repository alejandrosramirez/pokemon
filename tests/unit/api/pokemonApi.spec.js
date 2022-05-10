import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi.js", () => {
	test("Axios debe tener una propiedad baseURL", () => {
		expect(pokemonApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
	});
});
