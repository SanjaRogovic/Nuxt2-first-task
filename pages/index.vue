<template>
  <div class="container">
    <nuxt-link to="/about" class="link"> <!-- link to the about experience page -->
      ABOUT
    </nuxt-link>
    <form @submit.prevent="submitForm">
      <label for="serviceName">Service Name:</label>
      <input type="text" v-model="serviceName" required />

      <label for="businessName">Business Name:</label>
      <input type="text" v-model="businessName" required />

      <label for="serviceRating">Service Rating:</label>
      <input type="number" min="1" max="5" v-model="serviceRating" required />

      <button type="submit">Submit</button>
    </form>

    <div class="cards">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />  <!-- use the Card component for each card in the array -->
    </div>


  </div>
</template>

<script>
import Card from "~/components/Card.vue"  //import the Card component

export default {
  components: { 
    Card  //register the Card component
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
      // return [this.serviceName, this.businessName, this.serviceRating]
      return this.$store.state.cards  //get the cards from the store
  },
},
  methods: {
    submitForm() {
      const newCard = {
        serviceName: this.serviceName,
        businessName: this.businessName,
        serviceRating: this.serviceRating,
    }

    this.$store.commit("addCard", newCard) //create a new card object with the input data and commit the mutations to add to card to the store
    this.resetForm() // reset form input fields
    },

    resetForm() {
      this.serviceName = ""
      this.businessName = ""
      this.serviceRating = 1
    }
  }
}

</script>

<style scoped>

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #6d6767;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #1f1b1b;
  }

  .link {
      text-decoration: none;
      text-transform: capitalize;
      color: #047e99;
      text-align: center;
      font-weight: 800;
    }

    button {
      padding-left: 50px;
      border-radius: 10px;
      padding: 8px;
      margin-top: 10px;
      background: #f5eebe;
      cursor: pointer;
    }

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
}

</style>