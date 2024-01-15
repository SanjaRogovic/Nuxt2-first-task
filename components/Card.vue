<template>
    <div>
        <b-card img-src="https://picsum.photos/600/400/?image=25" img-alt="Image" img-top
            class="mb-2">
            <b-card-text>
                <p>Service Name: {{ card.serviceName }}</p>
                <p>Business Name: {{ card.businessName }}</p>
                <div class="rating">
                    <p>Service Rating: {{ card.serviceRating }}<i class="fa fa-star"></i></p>
                </div>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
p {
    font-size: 1.1em;
    margin-top: 5px;
}

.rating i {
    color: gold;
}

.card {
    width: 400px;
    height: 500px;
    padding: 5px; 
    border-radius: 10px; 
    box-shadow: 2px 2px 5px gray;
    background-color: #fcfbfb;
    border: 1px solid #ccc;
}

.mb-2{
    margin: 10px 10px;
}


</style>