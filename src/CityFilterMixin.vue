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
import {FilterCity} from "./FilterCity"
export default {
    mixins: [FilterCity], //Mixin is not shared across components - if you want to use shared data, create an object in a js file that you then use in data object inside of component
    data() {
        return {
           
        };
    },
    
}
</script>


<style>

</style>
