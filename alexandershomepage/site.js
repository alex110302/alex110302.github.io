//secret message for rayn
const key = `It's a secret to everybody.`
localStorage.setItem(`It's a secret to everybody.`, 'please please please buy our game.... From A5J studios when it releases at some point')

//pokemon api -- random pokemon image

const randomPokemon = document.querySelector('#randomPokemon div')

// console.log(randomPokemon)

const getRandomPokemon = async () => {
    const url =  `https://pokeapi.co/api/v2/pokemon/` + Math.floor(Math.random() * 1118)
    const response =  await fetch(url)
    const pokemon = await response.json()
    return pokemon
}

const renderPokemon = async () => {
    const pokemon = await getRandomPokemon()

    const img = document.createElement('img')
    console.log(pokemon.sprites.front_default)
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    img.style.height = '200px'   
    randomPokemon.append(img)
}

renderPokemon()
