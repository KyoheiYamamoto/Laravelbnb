<template>
  <div>
    <bookable-list-item
      item-title="Cheap villa"
      item-content=" A very good"
      v-bind:price="1000"
    ></bookable-list-item>
    <bookable-list-item
      item-title="Cheap villa2"
      item-content=" A very good2"
      v-bind:price="1500"
    ></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
};
</script>
