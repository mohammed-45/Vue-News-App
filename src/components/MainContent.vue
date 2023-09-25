<template>
  <v-layout class="row wrap align-center">
    <v-col>
      <div v-for="article in articles" :key="article.title">
        <v-card class="my-3 mx-auto" max-width="800" hover>
          <v-img class="img" height="350" :src="article.urlToImage"></v-img>
          <v-card-item>
            <v-container fill-height fluid>
              <v-layout>
                <v-col class="xs12 d-flex">
                  <span class="headline">{{ article.title }}</span>
                </v-col>
              </v-layout>
            </v-container>
          </v-card-item>
          <v-card-text>{{ article.description }}</v-card-text>
          <v-card-actions>
            <v-chip small class="bg-black text-white">
              {{ article.source.name }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn icon class="text-red">
              <font-awesome-icon :icon="['fab', 'reddit']" />
            </v-btn>
            <v-btn icon class="text-light-blue">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </v-btn>
            <v-btn icon class="text-blue text-darken-4">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </v-btn>
            <v-btn icon class="text-red">
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </v-btn>
            <v-btn icon class="text-blue text-darken-4">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              small
              replace
              class="bg-info text-white"
              :href="article.url"
              target="_blank"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
};
</script>
<style scoped>
@media (max-width: 997px) {
  .img {
    height: auto !important;
  }
}
</style>
