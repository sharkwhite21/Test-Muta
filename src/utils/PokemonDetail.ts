

export async function getPokemonDetails(pokemon: { name: string; url: string }) {
  try {
    const response = await fetch(pokemon.url);
    if (!response.ok) {
      throw new Error(`Error fetching details for ${pokemon.name}`);
    }
    const details = await response.json();
    return {
      id: details.id,
      name: details.name,
      image: details.sprites.other['official-artwork'].front_default,
      types: details.types.map((typeInfo: any) => typeInfo.type.name),
      abilities: details.abilities.map((abilityInfo: any) => abilityInfo.ability.name),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
