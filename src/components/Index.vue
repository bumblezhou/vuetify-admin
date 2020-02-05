<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y v-model="show_account_dialog" width="400">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{account.user_name}}</v-list-item-title>
                <v-list-item-subtitle>{{account.email}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="logout">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>vuetify-admin&copy; 2019</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    show_account_dialog: false,
    account:{
      email: null,
      user_name: null,
    }
  }),
  created() {
    this.$vuetify.theme.dark = true;
    this.account.email = 'john@vuetifyjs.com';
    this.account.user_name = sessionStorage.getItem("token");
  },
  methods:{
    logout: function(){
      this.show_account_dialog = false;
      this.$emit("authenticated", false);
      sessionStorage.removeItem("token");
      this.$router.replace({ name: "login" });
    }
  }
};
</script>