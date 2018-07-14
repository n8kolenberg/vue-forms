<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <!-- v-model="userData.email" is the same as :value="userData.email" + @input="userData.email = $event.target.value"-->
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value"
                                required
                                >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                                <!--.lazy only updates the userData.password when element gets out of focus / user clicks on another element-->

                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model.number="userData.age">
                                <!--.number ensures that only numbers are updated-->

                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <!-- As we're dealing with a checkbox here, the value attribute will be used in the Vue Instance for the binding-->
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMails"  
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                            <option disabled value="">Please select an option</option>
                            <option v-for="priority in priorities">{{ priority }}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>


            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space: pre">Message: {{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="mail in sendMail"> {{mail}}</li>
                        </ul>
                        <p>Gender: {{gender}} </p>
                        <p>Priority: {{selectedPriority}} </p>
                        <p>Switched: {{dataSwitch}} </p>
                    </div>
                </div>
            </div>
        </div>
        <hr>

        <h2>Local City List</h2>    
        <div class="row">
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
        </div>

        <hr>
        <h2>Component City List</h2>
        <div class="row">
            <city-filter></city-filter>
        </div>

    <hr>
        <h2>City List Filter Through Mixin</h2>
        <div class="row">
            <city-filter-mixin></city-filter-mixin>
        </div>

    </div>
</template>

<script>
import Switch from "./Switch.vue";
import CityFilter from "./CityFilter.vue";
import CityFilterMixin from "./CityFilterMixin.vue";

    export default {
        data() {
            return {
                userData: {
                    email: "",
                    password: "",
                    age: 27
                },
                message: "Write your message here..",
                sendMail: [],
                gender: "Male",
                priorities: ["Low", "Medium", "High"],
                selectedPriority: "Low",
                dataSwitch: true,
                isSubmitted: false,
                cityList: ["Moscow", "New York", "London", "Barcelona", "Stockholm", "Dubai", "Singapore", "Florence", "Rome", "Venice", "Berlin", "Amsterdam", "Copenhagen", "Paris", "Madrid", "Lisbon", "Munich", "Rotterdam", "Sevilla", "Manchester", "Dublin", "Helsinki"],
                filteredCity: ""
                
            }
        },
            methods: {
                submitted() {
                    this.isSubmitted = true;
                }
            },
            computed: {
                filterCities() {
                    return this.cityList.filter((city) => {
                        return city.toLowerCase().match(this.filteredCity.toLowerCase());
                    });
                }
            },
            components: {
                "app-switch": Switch,
                "city-filter": CityFilter,
                "city-filter-mixin": CityFilterMixin
            }
    }
</script>

<style>

</style>
