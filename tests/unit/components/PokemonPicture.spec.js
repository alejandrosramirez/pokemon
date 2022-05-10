import { shallowMount } from "@vue/test-utils";

import PokemonPicture from "@/components/PokemonPicture.vue";

describe("PokemonPicture.vue", () => {
	test("Debe de hacer match con el snapshot", () => {
		const wrapper = shallowMount(PokemonPicture);
		expect(wrapper.html()).toMatchSnapshot();
	});

	test("Debe de mostrar la imagen oculta y el pokémon 100", () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: false,
			},
		});

		const [image1, image2] = wrapper.findAll("img");

		expect(image1.exists()).toBeTruthy();
		expect(image2).toBeUndefined();
		expect
	});

	test("Debe de mostrar la imagen del pokémon si showPokemon:true", () => {});
});
