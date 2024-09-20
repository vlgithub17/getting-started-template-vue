<template>
  <div>
    <h2>Signup Page</h2>
    <form action="/login" @submit="e=>skapi.signup(e).catch(err=>alert(err.message))">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <br />
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
      />
      <br />
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script setup>
import { skapi } from '../main'; 
function alert(msg) {
  window.alert(msg);
}
</script>
