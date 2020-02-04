<template>
  <v-app>
    <router-view @authenticated="setAuthenticated" />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    if (!this.authenticated) {
      if (this.$route.name != "login") {
        this.$router.replace({ name: "login" });
      }
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    }
  }
};
</script>
