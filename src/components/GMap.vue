<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <GMapAutocomplete
      id="autocomplete"
      placeholder="Type to search a place"
      @keyup.enter="searchPlace"
      @place_changed="setPlace"
    ></GMapAutocomplete>

    <v-btn @click="searchPlace" color="secondary">Search</v-btn>
    <div>
      <v-btn @click="getLocation" color="primary">Get your location</v-btn>
    </div>
  </div>

  <GMapMap id="map" :center="center" :zoom="12">
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center = m.position"
    />
  </GMapMap>
</template>

<script>
export default {
  name: "GMap",
  props: ["center", "markers"],
  emits: ["location-added", "center-updated"],
  data() {
    return {};
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const latitude = location.coords.latitude;
          const longitude = location.coords.longitude;
          var geocoder = new google.maps.Geocoder();
          var latlng = { lat: latitude, lng: longitude };
          geocoder.geocode({ location: latlng }, function (results, status) {
            if (status === "OK") {
              if (results[1]) {
                autocomplete.value = results[1].formatted_address;
              } else {
                window.alert("No results found");
              }
            }
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    setPlace(value) {
      let address = value.name + ", " + value.formatted_address;
      let lat = value.geometry.viewport.Ua.lo;
      let lng = value.geometry.viewport.Ha.lo;
      let utc_offset_minutes = value.utc_offset_minutes;

      this.searchedLocation = {
        address: address,
        position: {
          lat: lat,
          lng: lng,
        },
        utc_offset_minutes: utc_offset_minutes,
      };
    },
    searchPlace() {
      if (!this.searchedLocation) {
        alert(
          "Location not found. Please select a location from the dropdown list."
        );
      } else {
        this.$emit("location-added", this.searchedLocation);
        this.$emit("center-updated", this.searchedLocation.position);
        this.$emit(
          "timezone-updated",
          this.searchedLocation.utc_offset_minutes
        );
      }
    },
  },
};
</script>

<style></style>
