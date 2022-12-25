<script setup>
  import {useFlash} from "@/composables/useFlash";
  let {flash} = useFlash();
</script>

<template>
  <main>
    <p> <button @click="flash('It Works','this is the message','info')">Click Me</button></p>
  </main>
</template>
