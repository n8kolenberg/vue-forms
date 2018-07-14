export const FilterCity = {
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