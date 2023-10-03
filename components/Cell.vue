<template>
  <div :id="square.position" class="square" :class="square.color">
    <template v-if="square.current_piece">
      <Piece :piece="square.current_piece"></Piece>
    </template>

    <div @mouseover="hover = true" @mouseleave="hover = false" class="hover">
      i
    </div>
    <div
      v-if="hover"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      class="info-baloon"
    >
      <p style="font-size: 16px">
        {{ square }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    square: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style>
@import url("~/assets/css/main.css");

.square {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 0;
  flex-shrink: 1;

  max-height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
}
.square.light {
  background-color: var(--light-square);
}
.square.dark {
  background-color: var(--dark-square);
}

/* TO DELETE */
.hover {
  position: absolute;
  top: 0;
  left: 0;

  height: 20px;
  width: 20px;
  text-align: center;
  background-color: purple;
}
.info-baloon {
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  padding: 6px;
  background-color: rgba(212, 0, 255, 0.894);
  z-index: 200;
}
</style>
