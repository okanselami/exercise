<template>
  <div class="home">
    <EventList v-bind:events="events.results" />
    <Loading v-bind:loading="events.loading" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Loading from '@/components/Loading.vue';
import EventList from '@/components/EventList.vue';

export default {
  name: 'Home',
  components: {
    Loading,
    EventList,
  },
  computed: {
    ...mapGetters({ events: 'getEvents' }),
  },
  methods: {
    ...mapActions(['getEvents']),
    eventsExist() {
      return this.events.results.length ? null : this.getEvents();
    },
  },
  created() {
    this.eventsExist();
  },
};
</script>
