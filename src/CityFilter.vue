<template>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
        <label for="cities">Filter The Cities</label>
        <input
                id="cities"
                class="form-control"
                v-model="filteredCity">
        <ul>
            <li v-for="city in filterCities"> {{city}} </li>
        </ul>        
    </div>
</template>

<script>
export default {
    data() {
        return {
           cityList: ["Moscow", "New York", "London", "Barcelona", "Stockholm", "Dubai", "Singapore", "Florence", "Rome", "Venice", "Berlin", "Amsterdam", "Copenhagen", "Paris", "Madrid", "Lisbon", "Munich", "Rotterdam", "Sevilla", "Manchester", "Dublin", "Helsinki"],
           filteredCity: ""
        };
    },
    computed: {
        filterCities() {
            return this.cityList.filter((city) => {
                return city.toLowerCase().match(this.filteredCity.toLowerCase());
            });
        }
    }
}
</script>


<style>

</style>
