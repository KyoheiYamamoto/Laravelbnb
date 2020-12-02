<template>
  <div>
   Rows is: {{ rows }}
    <div v-if="loading ">Data is loading</div>
    <div v-else>
        <bookable-list-item
        :item-title="bookable.title"
        :item-content="bookable.content"
        v-bind:price="1000"
        v-for="(bookable, index) in bookables"
        :key="index"
        ></bookable-list-item>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
  data() {
    return {
      bookables: null,
      loading: false,
      collumns:3
    };
  },
  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    }
  },

  created() {
    this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          id: 1,
          title: "Expensive Villa",
          content: "A very Expensive villa",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
        },
      ];
      this.loading = false;
    }, 2000);
  },
};
</script>
