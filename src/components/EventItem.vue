<template>
  <router-link v-bind:to="'/event/' + event.id">
    <div id="name">{{event.name}}</div>
    <div id="date">
      <span>{{humanDate(event.starts)}} - {{humanDate(event.ends)}}</span>
    </div>
    <div id="venue">
      <span>- {{event.venue ? event.venue: 'Unknown Location' }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventItem',
  props: ['event'],
  methods: {
    humanDate(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
div#name {
  font-size: $big;
}
div#date {
  font-size: $small;
  color: $colorGrey;
}
div#venue {
  font-size: $small;
  color: $colorGrey;
}
</style>
