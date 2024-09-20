<template>
  <div>
    <h1 id="welcome_message">{{ welcomeMessage }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { skapi } from '../main'; 

const welcomeMessage = ref('');

onMounted(() => {
  skapi
    .getProfile()
    .then((profile) => {
      if (!profile) {
        window.location.href = '/login';
      } else {
        welcomeMessage.value = `Welcome, ${profile.email}.`;
        console.log(profile);
      }
    })
    .catch((err) => {
      window.alert(err.message);
    });
});
</script>
