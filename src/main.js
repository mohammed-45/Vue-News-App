import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faFacebook,
  faReddit,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook, faReddit, faLinkedin, faGooglePlusG);
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(vuetify);

app.mount("#app");
