<!-- <template>
  <!<Tutorial/> -->
  <!-- <h1>First project Nuxt2</h1>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script> --> 

<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="serviceName">Service Name:</label>
      <input type="text" v-model="serviceName" required />

      <label for="businessName">Business Name:</label>
      <input type="text" v-model="businessName" required />

      <label for="serviceRating">Service Rating:</label>
      <input type="number" min="1" max="5" v-model="serviceRating" required />

      <button type="submit">Submit</button>
    </form>

    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>