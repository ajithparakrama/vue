<script setup>
  import {useFlash} from "@/composables/useFlash";
  let {flash} = useFlash();
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p> <button @click="flash('About page', 'It Works','error')">Click Me</button></p>
  </div>
</template>

<style>
 
</style>
