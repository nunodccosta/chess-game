<template>
  <div class="chess-overlord mb-10 grid grid-cols-8 grid-rows-8 gap-1">
    <template v-for="(square, index) in squares" v-bind:key="index">
      <Cell :square="square"></Cell>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      squares: [],
    };
  },

  methods: {
    setGame() {
      var row_index = 0;
      var row_count = 8;
      const array_letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

      for (let i = 63; i >= 0; i--) {
        var starting_piece = "";
        var color = "";

        // check color

        if (row_count % 2 == 0) {
          if ((i - 1) % 2 == 0) color = "light";
          else color = "dark";
        } else {
          if ((i - 1) % 2 == 0) color = "dark";
          else color = "light";
        }

        // check if maintains starting piece
        if (i <= 15 || i >= 48) {
          if (row_count == 1 || row_count == 8) {
            if (row_index == 0 || row_index == 7) starting_piece = "r";
            if (row_index == 1 || row_index == 6) starting_piece = "n";
            if (row_index == 2 || row_index == 5) starting_piece = "b";
            if (row_index == 3) starting_piece = "q";
            if (row_index == 4) starting_piece = "k";
          }
          if (row_count == 2 || row_count == 7) starting_piece = "pawn";
        }

        // push the object
        this.squares.push({
          index: i,
          position: array_letters[row_index] + row_count,
          color: color,
          current_piece: starting_piece,
        });

        // counter from 1 - 8 each row
        row_index++;

        // only happens when index rest of 8 is 0 (each new line)
        if (i % 8 == 0 && i != 63) {
          // counter of rows
          row_count--;
          // reset row singularity count
          row_index = 0;
        }
      }
    },
  },
  mounted() {
    this.setGame();
  },
};
</script>
<style>
@import url("~/assets/css/main.css");
.chess-overlord {
  position: relative;

  height: 100dvh;
  max-height: calc(100dvh - 160px);

  aspect-ratio: 1 / 1;
}
</style>
