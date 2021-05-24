<template lang="pug">
main
  p {{counter}}
  HelloWorld {{counter}}
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
    ...mapState(["counter"]),
  },
  methods: {
    ...mapActions(["incrementCounter"]),
  },
  created() {
    this.incrementCounter();
  },
};
</script>
