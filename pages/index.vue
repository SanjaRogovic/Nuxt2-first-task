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

<script>
import card from "~/components/Card.vue"

export default {
  components: { 
    Card: card 
  },
  data() {
    return {
      serviceName: "",
      businessName: "",
      serviceRating: 1,
  }
},
  computed: {
    cards() {
      return [this.serviceName, this.businessName, this.serviceRating]
  },
},
  methods: {
    submitForm() {
      const newCard = {
        serviceName: this.serviceName,
        businessName: this.businessName,
        serviceRating: this.serviceRating,
    }
    this.$store.commit("addCard", card)

    // reset form input fields
    this.serviceName = ""
    this.businessName = ""
    this.serviceRating = 1
    }
  }
}

</script>

<style scoped>
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  form {
    width: 40%;
    margin-right: 2rem;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
</style>