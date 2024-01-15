<template>
    <div class="card">
        <p>Service Name: {{ card.serviceName }}</p>
        <p>Business Name: {{ card.businessName }}</p>
        <div class="rating">
            <p><i class="fa fa-star"></i>Service Rating: {{ card.serviceRating }}</p>
        </div>
       
    </div>
</template>

<script>
    export default {
        props: {
            card : {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        padding-left: 25px;
        margin: 10px;
        width: 300px;
        height: 200px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px gray;
        background-color: #fcf4f4;
    }

    .card p {
        font-size: 1.2em;
    }

    .rating i {
        color: gold;
    }

    .card div {
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>