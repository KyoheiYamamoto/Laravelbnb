<template>
  <div>
    <bookable-list-item
      :item-title="bookable1.title"
      :item-content="bookable1.content"
      v-bind:price="1000"
    ></bookable-list-item>
    <bookable-list-item
      :item-title="bookable2.title"
      :item-content="bookable2.content"
      v-bind:price="1500"
    ></bookable-list-item>
    <bookable-list-item
      :item-title="bookable3.title"
      :item-content="bookable3.content"
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
  data() {
    return {
      bookable1: null,
      bookable2: null,
    };
  },
  //   beforeCreate(){
  //       console.log('before create');
  //   },
  created() {
    console.log("created");
    console.log("this.bookable1");
    console.log("this.bookable2");

    setTimeout(() => {
      this.bookable1 = {
        title: "Expensive Villa",
        content: "A very Expensive villa",
      };
      this.bookable2 = {
        title: "Cheap Villa",
        content: "A very cheap villa",
      };
      this.bookable3 = {
        title: "Expensive Villa",
        content: "A very cheap villa 3",
      };

      this.bookable2.title = "very Expensive Villa";
    }, 5000);

    setTimeout(() => {
        console.log('first change')
      this.bookable1.title = "you will see this";
    },8000);

    setTimeout(() => {
    console.log('second change')
      this.bookable3.title = "you will see this";
    },12000);
  },

  //   beforeMount (){
  //       console.log('before mouted');
  //   },

  //   mounted(){
  //       console.log('mounted');
  //   },

  //   beforeDestroy(){
  //       console.log('before desgroy');
  //   },

  //   destroyed() {
  //       console.log('destroyed');
  //   },
};
</script>
