<template>
    <div class="card" style="width: 18rem;">
        <img :src=image class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <h5>Moves</h5>
            <table class="table retro-table">
                <thead>
                    <tr>
                        <th v-for="(column, index) in columns" :key="index">
                            {{ column }}
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
    </div>
</template>

<script>
export default {
    name: "CardInfo",
    props: {
        id: Number,
        image: String,
        name: String,
        description: String,
        moves: Array,
        columns: Array
    }
}
</script>

<style></style>
