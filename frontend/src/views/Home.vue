<template lang="pug">
main
  .card(v-for="player in players")
    h2 {{player.name}} {{player.surname}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(["players"]),
  },
  methods: {
    ...mapActions(["fetchPlayers"]),
  },
  created() {
    this.fetchPlayers();
  },
};
</script>
