<template>
  <div>Timezone: {{ this.timezone }}</div>
  <div>Local Time at location: {{ this.localDateTime }}</div>
</template>

<script>
export default {
  name: "Timezone",
  props: ["timezone", "localDateTime"],
};
</script>
