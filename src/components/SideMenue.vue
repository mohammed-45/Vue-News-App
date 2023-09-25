<template>
  <v-navigation-drawer
    v-if="drawer"
    fixed
    app
    clipped
    class="drawer-style"
    id="style-1"
  >
    <v-list dense class="pt-3 text-white">
      <v-list-item
        v-for="source in sources"
        :key="source.id"
        @click="selectSource(source.id)"
      >
        <v-list-item-action>
          <v-avatar size="32px">
            <v-img
              class="img-circle elevation-7 mb-1"
              :src="getImgUrl(source.id)"
            />
          </v-avatar>
          <v-list-item-title class="ml-4">{{ source.name }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";

export default {
  name: "SideMenue",
  props: { api_key: String, drawer: Boolean },

  data: () => ({
    sources: [],
    errors: [],
  }),
  // computed: {
  //   propModel: {
  //     get() {
  //       return this.prop;
  //     },
  //     set(drawer) {
  //       this.$emit("update:prop", drawer);
  //     },
  //   },
  // },
  created() {
    axios
      .get("https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key)
      .then((response) => {
        this.sources = response.data.sources;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    getImgUrl(pic) {
      return new URL(`../assets/images/${pic}.png`, import.meta.url).href;
    },
    selectSource(source) {
      this.$emit("selectsource", source);
    },
  },
};
</script>
<style scoped>
#style-1::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
#style-1::-webkit-scrollbar-thumb {
  background-color: #f90;
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.drawer-style {
  background-color: #2196f3 !important;
  border-color: #2196f3 !important;
}
</style>
