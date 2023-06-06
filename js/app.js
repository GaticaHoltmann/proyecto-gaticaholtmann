const { createApp } = Vue;

const app = createApp({
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
    },
    template: `<card-info
                    v-for="(pokemon, index) in pokemons" :key="index"
                    :id="pokemon.id"
                    :image="pokemon.image"
                    :name="pokemon.name"
                    :description="pokemon.description"
                    :moves="pokemon.moves"
                    :columns=columns>
               </card-info>`
})

app.component('card-info', {
    props: {
        id: Number,
        image: String,
        name: String,
        description: String,
        moves: Array,
        columns: Array
    },
    template: `<div class="card" style="width: 18rem;">
                    <img :src=image class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{{ name }}</h5>
                      <p class="card-text">{{ description}}</p>
                      <h5>Moves</h5>
                      <table class="table retro-table">
                        <thead>
                            <tr>
                                <th v-for="(column, index) in columns" :key="index">
                                    {{column}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(move, index) in moves" :key="index">
                                <td>{{ move.attack_name }}</td>
                                <td :class="move.type">{{ move.type }}</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
               </div>`
})

app.mount('#app')