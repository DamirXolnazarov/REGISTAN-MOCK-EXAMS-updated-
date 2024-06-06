<script setup>
import PuzzleGrid from '../components/GridPuzzle.vue'
</script>
<template>
    <div class="games w-[100%]">
        <div class="top flex flex-row justify-between items-center pt-[15px] px-[50px] w-[100%] h-[120px] flex-nowrap">
            <img class="w-[70px] h-[36px]" src="../assets/PLAY.png" alt="">
            <img class="w-[215px] h-[88px]" src="../assets/GAMES1.png" alt="">
        </div>
        <div class="center flex flex-row items-center px-[10px] w-[100%] h-[50px] justify-between">
            <img class="h-[1px]" src="../assets/Line 2.png" alt="">
            <img class="w-[50px] h-[22px]" src="../assets/AND.png" alt="">
            <img class="h-[1px]" src="../assets/Line 2.png" alt="">
        </div>
        <div class="bottom px-[50px] flex flex-row items-center justify-between">
            <span class="text-[25px]">
                E <br> A <br> R <br> N <br>
            </span>
            <div class="coins relative">
                <img src="../assets/C INS.png" alt="">
                <img class="absolute w-[64px] top-[4px] left-[60px]" src="../assets/coin.png" alt="">
                <img src="../assets/R.png" class="absolute top-[25px] left-[80px]" alt="">
            </div>
        </div>
        <div class="game_frame px-[15px] pt-[35px]">
            <div class="puzzle-game">
                <div class="buttons">
                    <button class="btn bg-[lightgreen]" @click="changeGridSize(3)">3x3</button>
                    <button class="btn bg-[orange]" @click="changeGridSize(4)">4x4</button>
                    <button class="btn bg-[red]" @click="changeGridSize(5)">5x5</button>
                </div>
                <PuzzleGrid :gridSize="gridSize" />
            </div>
        </div>
        <RouterLink to="/StudentPage"><div class="home cursor-pointer mt-[30px] mx-[195px]"><img class="w-[40px]" src="../assets/home.png" alt="">
        </div></RouterLink>
    </div>
</template>
<script>
export default {
    components: {
        PuzzleGrid,
    },
    data() {
        return {
            gridSize: 3,
        };
    },
    methods: {
        changeGridSize(size) {
            this.gridSize = size;
        },
    },
};
</script>
<style scoped>
.puzzle-game {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons {
    margin-bottom: 20px;
}

button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>