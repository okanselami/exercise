<template>
  <ul class="list">
    <li class="item" v-for="event in events" :key="event.id">
      <EventItem :event="event" />
    </li>
  </ul>
</template>

<script>
import EventItem from '@/components/EventItem.vue';

export default {
  name: 'EventList',
  components: {
    EventItem,
  },
  props: {
    events: Array,
  },
};
</script>

<style scoped lang="scss">
  ul.list {
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    font-weight: $bolder;
  }
  li.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>
