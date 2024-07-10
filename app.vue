<template>
  <button @click="causeError">cause error</button>
</template>

<script setup>
const causeError = () => {
  foo.value = 'bar';
};
</script>
