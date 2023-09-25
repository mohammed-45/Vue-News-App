<template>
  <v-app light>
    <SideMenue
      :drawer="drawer"
      :api_key="api_key"
      @selectsource="setResource"
    ></SideMenue>
    <v-app-bar fixed app light clipped-left color="primary" class="elevation-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>News App</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <MainContent :articles="articles"></MainContent>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
import MainContent from "./components/MainContent.vue";
import SideMenue from "./components/SideMenue.vue";
export default {
  name: "App",
  components: {
    MainContent,
    SideMenue,
  },
  data() {
    return {
      drawer: true,
      api_key: "fe0e923ebe6f431f87c99a740a5bfc43",
      articles: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
          this.api_key
      )
      .then((response) => {
        this.articles = response.data.articles;
        console.log(this.articles);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    setResource(source) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=" +
            this.api_key
        )
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
