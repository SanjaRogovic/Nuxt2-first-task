<template>
    <div class="container">
        <nuxt-link to="/" class="link"> <!-- link to home -->
            HOME
        </nuxt-link>
        <h1>About</h1>
        <hr size="1">
        <p> {{ description }}</p>
        <hr size="1">
        <h2>Cards starting with M</h2>
        <div class="cards">
            <Card v-for="(card, index) in cardsStartingWithM" :key="index" :card="card" />
        </div>
    </div>
</template>

<script>
    import Card from '~/components/Card.vue';  //import the Card component

    export default {
        components: {
            Card  //register the Card component
    },
    data() {
        //text content about coding experience 
        return {
            description: 
            "This is page where I describe my experience and challenges coding this task. I enjoyed using Nuxt 2 and Vue to create a simple web app with a form and cards. I used the options API to define the data, computed properties, methods, and lifecycle hooks. I also used vuex to manage the state of the cards and create getters and mutations. i faced some challenges with making the cards responsive on mobile devices, but I solved them by using flexbox and media queries. I also learned how to use nuxt-link to create links between pages and use props to pass data to components."
        }
    },
    computed: {
        cardsStartingWithM() {
            return this.$store.getters.cardsStartingWithM  //get the cards starting with M from the store
        }
    }
}
</script>

<style>
    .container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
    }

    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .link {
        text-decoration: none;
        text-transform: capitalize;
        color: #047e99;
        text-align: center;
        font-weight: 650;
    }

    h1 {
        text-align: center;
        padding: 20px;
    }

    h2 {
        text-align: center;
        padding: 15px;
    }

    p {
        line-height: 1.8em;
        padding: 20px;
    }

    @media (max-width: 600px) {
        .cards {
            flex-direction: column;
            align-items: center;
        }  
    }
</style>