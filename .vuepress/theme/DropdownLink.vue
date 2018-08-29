<template>
  <div class="navbar-item has-dropdown is-hoverable" >
    <a class="navbar-link">{{ item.text }}</a>

    <div class="navbar-dropdown" >
      <NavLink v-for="(subItem, index) in item.items" :item="subItem" :key="subItem.link || index"/>
    </div>


  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  props: {
    item: {
      required: true
    }
  }

}
</script>
