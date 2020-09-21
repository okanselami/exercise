<template>
  <fragment>
    <Loading v-bind:loading="event.loading" />
    <div class="event" :class="{ hidden: event.loading ? true: null}">
      <div v-show="!event.loading" id="item-card">
        <EventItem :event="event.detail" />
      </div>
      <section id="session">
        <SessionItem
          v-for="session in eventSession.sessions"
          :key="session.id"
          :session="session" />
      </section>
    </div>
  </fragment>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import EventItem from '@/components/EventItem.vue';
import SessionItem from '@/components/SessionItem.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Event',
  components: { EventItem, SessionItem, Loading },
  computed: {
    ...mapGetters({ event: 'getEventById', eventSession: 'getEventSessions' }),
  },
  methods: {
    ...mapActions(['getEventById', 'getEventsSessions']),
  },
  created() {
    this.getEventById(this.$route.params.id);
    this.getEventsSessions(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
#item-card {
  display: flex;
  align-items: center;
  margin: $standardPadding;
  padding: $standardPadding;
  background: $colorWhite;
  border-radius: $layoutBorderRadius;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  & > a {
    text-align: left;
  }
}

@media screen and (min-width: 40em) {
  #session {
    margin-top: -1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: $standardPadding;
    padding: $standardPadding;
    background: $colorWhite;
  }
}

@media screen and (max-width: 39em) {
  #session {
    margin: $standardPadding;
    padding: $standardPadding;
    background: $colorWhite;
  }
}
</style>
