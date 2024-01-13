<template>
    <div class="card">
        <p>Service Name: {{ card.serviceName }}</p>
        <p>Business Name: {{ card.businessName }}</p>
        <p>Service Rating: {{ card.serviceRating }}<i class="fa fa-star"></i></p>
</div>
</template>

<script>
    export default {
        props: {
            card: Object,
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        width: 200px;
    }
</style>