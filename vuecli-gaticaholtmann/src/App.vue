<template>
    <CardInfo v-for="(pokemon, index) in pokemons" :key="index" :id="pokemon.id" :image="pokemon.image" :name="pokemon.name"
    :description="pokemon.description" :moves="pokemon.moves" :columns=columns>
  </CardInfo>
</template>

<script>
import CardInfo from './components/CardInfo.vue';

export default {
  name: 'App',
  components: {
    CardInfo
  },
  data() {
    return {
      pokemons: [
                {
                    id: 1,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                    name: "Pikachu",
                    description: "Likes to relax",
                    moves: [
                        { attack_name: "mega-punch", type: "normal" },
                        { attack_name: "pay-day", type: "normal" },
                        { attack_name: "thunder-punch", type: "electric" }
                    ]
                },
                {
                    id: 2,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    name: "Bulbasaur",
                    description: "Loves to eat",
                    moves: [
                        { attack_name: "razor-wind", type: "leaf" },
                        { attack_name: "sword-dance", type: "leaf" },
                        { attack_name: "cut", type: "leaf" }
                    ]
                },
                {
                    id: 3,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                    name: "Charmander",
                    description: "Highly curious",
                    moves: [
                        {attack_name:"bite", type:"normal"},
                        {attack_name:"fire-punch", type:"fire"},
                        {attack_name:"scratch",type:"normal"}
                    ]
                }
            ],
            columns: ["Name","Type"]
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}

.banner {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.leaf {
  color: green;
  background-color: aquamarine;
  border-color: green;
  border-radius: 1rem;
  text-align: center;
}

.electric {
  color: yellow;
  background-color: lemonchiffon;
  border-color: yellow;
  border-radius: 1rem;
  text-align: center;
}

.normal {
  color: gray;
  background-color: silver;
  border-color: gray;
  border-radius: 1rem;
  text-align: center;
}

.fire {
  color: red;
  background-color: coral;
  border-color: red;
  border-radius: 1rem;
  text-align: center;
}

.card-img-top {
  border-style: solid;
  border-color: black;
}</style>
