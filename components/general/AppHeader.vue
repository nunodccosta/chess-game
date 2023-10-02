<template>
  <div class="header background h-20 w-full p-relative">
    <div class="grid grid-cols-5 grid-rows-1 gap-4 h-full">
      <a href="#" class="logo-container flex items-center justify-start h-20">
        <img class="logo h-10 pl-4" src="/favicon.ico" alt="logo-chess.ico" />
      </a>
      <div class="col-start-5">
        <div class="tools-container h-full flex flex-row items-center">
          <button type="button" @click="toggleTheme(false)">
            <p>toggle-theme</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      var root = document.documentElement;
      const isDarkTheme = localStorage.getItem("theme") === "dark";
      localStorage.setItem("theme", isDarkTheme ? "light" : "dark");

      if (localStorage.getItem("theme") === "dark")
        root.classList.add("dark-theme");
      else root.classList.remove("dark-theme");

      return;
    },
    getTheme() {
      var root = document.documentElement;
      const isDarkTheme = localStorage.getItem("theme") === "dark";

      if (isDarkTheme) root.classList.add("dark-theme");
      else root.classList.remove("dark-theme");

      return;
    },
  },
  mounted() {
    this.getTheme();
  },
};
</script>
<style>
.header {
  border-bottom: 2px solid rgba(167, 167, 167, 0.339);
}
.logo-container {
}
.logo {
  transition: scale 150ms ease-in-out;
  scale: 1;
}
.logo:hover {
  scale: 1.2;
}
</style>
