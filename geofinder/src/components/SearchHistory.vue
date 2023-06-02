<template>
  <h2>Searched Places</h2>
  <div>
    <v-btn @click="removeLocation" color="error">Delete Selected </v-btn>
  </div>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="markers"
    items-per-page="10"
    item-value="address"
    return-object
    show-select
  >
  </v-data-table>
</template>
<script>
export default {
  name: "SearchHistory",
  props: ["markers"],
  emits: ["locations-removed"],
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
      selected: [],
      headers: [
        { title: "Address", key: "address" },
        { title: "Lattitude", key: "position.lat" },
        { title: "Longtitude", key: "position.lng" },
      ],
    };
  },

  computed: {
    pageCount() {
      return Math.ceil(this.markers.length / this.itemsPerPage);
    },
  },
  methods: {
    removeLocation() {
      this.$emit("locations-removed", this.selected);
      this.selected = [];
    },
  },
};
</script>
