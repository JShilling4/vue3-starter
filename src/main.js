import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import AppButton from "@/components/AppButton.vue";

// Create Vue instance
const app = createApp(App).use(router);

// Register Button component globally
app.component("AppButton", AppButton);

// Mount Vue instance
app.mount("#app");
