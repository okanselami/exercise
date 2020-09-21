<template>
  <div class="session-item" :class="{ active: session.broadcast_enabled ? true: null}">
    <div>{{session.name}}</div>
    <div class="date">Start Date: {{humanDate(session.starts)}}</div>
    <div class="date">End Date: {{humanDate(session.ends)}}</div>
    <div class="capacity">capacity: {{new Intl.NumberFormat().format(session.capacity)}}</div>
  </div>
</template>

<script>
export default {
  name: 'SessionItem',
  props: {
    session: Object,
  },
  methods: {
    humanDate(date) {
      return new Date(date).toLocaleString();
    },
    sortDate() {
      return 'xxx';
    },
  },
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 40em) {
  .session-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    padding: $minorPadding;
    border-radius: $borderRadius;
    display: flex;
    flex: 0 1 calc(45%);
    background-color: $color4;
    & > div {
      color: $colorLightGrey;
      font-weight: $boldest;
    }
    & > .date {
      font-size: $normal;
      font-weight: $bold;
      color: $colorWhite;
    }
    & > .capacity {
      font-size: $big;
      font-weight: $bolder;
      color: $colorWhite;
    }
    &.active {
      background-color: $colorGreen;
    }
  }
}

@media screen and (max-width: 39em) {
  .session-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    display: flex;
    flex: 0 1 calc(33% - 0.5em);
    background-color: $color4;
    border-radius: $borderRadius;
    & > div {
      color: colorLightGrey;
      font-weight: $bolder;
    }
    &.active {
      background-color: $colorGreen;
    }
  }
}
</style>
