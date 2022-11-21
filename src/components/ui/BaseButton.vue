<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background: var(--main-gradient);
  border: 1px solid #ca0530;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background: #a61083;
  border-color: #a605ca;
}

.flat {
  background-color: transparent;
  color: #78041d;
  border: none;
}

.outline {
  background: transparent;
  border-color: #ca0530;
  color: #78041d;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffd2e3;
}
</style>
