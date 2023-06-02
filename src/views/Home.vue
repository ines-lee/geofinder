<template>
  <div>
    <h1>GeoFinder</h1>
    <GMap
      :center="center"
      :markers="markers"
      :utc_offset_minutes="utc_offset_minutes"
      @location-added="addLocation"
      @center-updated="updateCenter"
      @timezone-updated="getTimezoneAndTime"
    />
    <Timezone :timezone="timezone" :localDateTime="localDateTime" />
    <SearchHistory :markers="markers" @locations-removed="removeLocations" />
  </div>
</template>

<script>
import SearchHistory from "@/components/SearchHistory.vue";
import GMap from "@/components/GMap.vue";
import Timezone from "@/components/Timezone.vue";
import moment from "moment-timezone";

export default {
  name: "Home",
  components: {
    SearchHistory,
    GMap,
    Timezone,
  },
  data() {
    return {
      center: { lat: 43.7517076, lng: -79.2929489 },
      markers: [],
      utc_offset_minutes: 0,
      timezone: "",
      localDateTime: null,
    };
  },
  methods: {
    addLocation(newLocation) {
      if (
        this.markers.find((marker) => marker.address === newLocation.address)
      ) {
        alert("This location already had a marker.");
        return;
      }
      this.markers.push(newLocation);
    },

    updateCenter(center) {
      this.center = center;
    },

    removeLocations(locations) {
      if (locations.length > 0) {
        const updatedmarkers = this.markers.filter((marker) => {
          return !locations.some(
            (location) => location.address === marker.address
          );
        });
        this.markers = updatedmarkers;
      }
    },
    getTimezoneAndTime(utc_offset_minutes) {
      const hourOffset = parseInt(utc_offset_minutes) / 60;
      const date = new Date();
      date.setUTCHours(date.getUTCHours() + hourOffset);
      this.localDateTime = date.toUTCString();
      if (hourOffset > 0) {
        this.timezone = "UTC+" + hourOffset;
      } else if (hourOffset < 0) {
        this.timezone = "UTC" + hourOffset;
      } else {
        this.timezone = "UTC";
      }
    },
  },
};
</script>

<style>
h1,
h2 {
  margin: 15px 5px;
}
.v-btn {
  margin: 15px 5px;
}

#autocomplete {
  color: aliceblue;
  width: 70%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
.vue-map-container {
  margin: 15px 5px;
  width: 800px;
  height: 600px;
  max-width: 100%;
}
</style>
