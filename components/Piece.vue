<template>
  <div draggable="true" class="piece">
    {{ piece }}
  </div>
</template>
<script>
export default {
  props: {
    piece: {
      type: String,
      default: "",
    },
  },
  methods: {},
};
</script>
<style>
.piece {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 80%;
}
.piece:hover {
  cursor: grab;
}
.piece:active {
  cursor: grabbing;
}
/* images */
.piece .r {
}
.piece .n {
}
.piece .b {
}
.piece .q {
}
.piece .k {
}
.piece .pawn {
}
</style>
