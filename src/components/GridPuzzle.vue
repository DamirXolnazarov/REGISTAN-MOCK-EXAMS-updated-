<script setup>
import store from '../store/index'
import { mapState, mapActions } from 'vuex';
</script>
<template>
  <div class="puzzle-grid" :style="gridStyle">
    <div v-for="(tile, index) in tiles" :key="index" :class="['tile', { empty: tile === 0 }]" :style="tileStyle"
      @click="moveTile(index)">
      {{ tile !== 0 ? tile : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gridSize: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      tiles: this.shuffleTiles([...Array(this.gridSize * this.gridSize - 1).keys()].map(i => i + 1).concat(0)),
      datas: {},
      coin: 0,
    };
  },
  mounted() {
    if (window.localStorage.coin) {
      this.coin = JSON.parse(window.localStorage.coin)
    } else {
      window.localStorage.coin = JSON.stringify(this.coin)
    }
  },
  computed: {
    ...mapState(['coins']),
    gridStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.gridSize}, ${this.tileSize}px)`,
        gridTemplateRows: `repeat(${this.gridSize}, ${this.tileSize}px)`,
        gap: '5px',
      };
    },
    tileStyle() {
      return {
        width: `${this.tileSize}px`,
        height: `${this.tileSize}px`,
      };
    },
    tileSize() {
      switch (this.gridSize) {
        case 3:
          return 100;
        case 4:
          return 80;
        case 5:
          return 70;
        default:
          return 100;
      }
    },
  },
  methods: {
    ...mapActions(['ADD_COIN_MUTATION']),
    shuffleTiles(tiles) {
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }
      return tiles;
    },
    moveTile(index) {
      const emptyIndex = this.tiles.indexOf(0);
      const [row1, col1] = [Math.floor(index / this.gridSize), index % this.gridSize];
      const [row2, col2] = [Math.floor(emptyIndex / this.gridSize), emptyIndex % this.gridSize];

      if (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1) {
        [this.tiles[index], this.tiles[emptyIndex]] = [this.tiles[emptyIndex], this.tiles[index]];
        if (this.isSolved()) {
          alert('Congratulations! You solved the puzzle!');
          this.counter += 10
          window.localStorage.counter = JSON.stringify(this.counter)
          this.counter = JSON.parse(window.localStorage.counter)
        }
      }
    },
    isSolved() {
      for (let i = 0; i < this.tiles.length - 1; i++) {
        if (this.tiles[i] !== i + 1) return false;
      }
      return true;
    },
  

  },
  watch: {
    gridSize() {
      this.tiles = this.shuffleTiles([...Array(this.gridSize * this.gridSize - 1).keys()].map(i => i + 1).concat(0));
    }
  }
};
</script>

<style scoped>
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #219ebc;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: .3s ease-in-out;
}

.tile.empty {
  background-color: #8ecae6;
  transition: .3s ease-in-out;
  cursor: default;
}
</style>
