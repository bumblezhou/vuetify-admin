<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Welcome to vuetify-admin!</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Login" name="login" prepend-icon="person" type="text" v-model="user_name"/>
                <v-text-field label="Password" name="password" prepend-icon="lock" type="password" v-model="user_psd"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" v-on:click="onLoginClick">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
        user_name: '',
        user_psd: '',
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
    let token = sessionStorage.getItem("token");
    if (token) {
        this.$emit("authenticated", true);
        this.$router.replace({ name: "index" });
    }
  },
  methods: {
    onLoginClick: function(){
        if(this.user_name === 'admin' && this.user_psd === '123456') {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "index" });
            sessionStorage.setItem("token", this.user_name);
        }
    }
  }
};
</script>