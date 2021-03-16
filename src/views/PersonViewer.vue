<template>
<div>
    <!--<span v-for="person in people" :key="person.id">-->
        <div class="person">
            <button class="pure-button" name="go_to_mother" v-on:click="go_to_mother">Go to Mother</button>
            <button class="pure-button" name="go_to_father" v-on:click="go_to_father">Go to Father</button>
            <p>{{person.first_name}} {{person.last_name}} ({{person.gender}})</p>
            <p>Born in {{person.birth_city}}, <span v-if="person.birth_state != null">{{person.birth_state}}, </span>{{person.birth_country}} on {{person.birth_date}}</p>
            <p>Laid to rest in {{person.death_city}}, <span v-if="person.death_state != null"> {{person.death_state}}, </span>{{person.death_country}}</p>
            <button class="pure-button pure-button-primary" id="save_person" name="save_person" v-on:click="savePerson">Save Person</button>
            <p id="info_text"></p>
            <button class="pure-button" name="go_to_son" v-on:click="go_to_son">Go to Son</button>
            <button class="pure-button" name="go_to_daughter" v-on:click="go_to_daughter">Go to Daughter</button>
        </div>
    <!--</span>-->
</div>
</template>

<script>
import peopleData from "../../mock_data.json";
    
export default {
    name: "PersonViewer",
    data() {
        return {
            // sorts data by birthdate
             people: peopleData.sort(function(a, b) {
                 return new Date(b.birth_date).getTime() - new Date(a.birth_date).getTime();
            }),
            person: {}
        }
    },
    created: function() {
        this.person = this.people[250]
    },
    methods: {
        go_to_mother: function() {
            document.getElementById("info_text").innerHTML = "";
            // find next female
            for (let i = this.current_id; i < 500; i++) {
                if (this.people[i+1].gender === "Female") {
                    this.person = this.people[i+1];
                    this.current_id = i+1;
                    break;
                }
            }
            
            this.$forceUpdate();
        },
        go_to_father: function() {
            document.getElementById("info_text").innerHTML = "";
            // find next male
            for (let i = this.current_id; i < 500; i++) {
                if (this.people[i+1].gender === "Male") {
                    this.person = this.people[i+1];
                    this.current_id = i+1;
                    break;
                }
            }

            this.$forceUpdate();
        },
        go_to_son: function() {
            document.getElementById("info_text").innerHTML = "";
            for (let i = this.current_id; i > 0; i--) {
                if (this.people[i-1].gender == "Male") {
                    this.person = this.people[i-1];
                    this.current_id = i-1;
                    break;
                }
            }

            this.$forceUpdate();
        },
        go_to_daughter: function() {
            document.getElementById("info_text").innerHTML = "";
            for (let i = this.current_id; i > 0; i--) {
                if (this.people[i-1].gender == "Female") {
                    this.person = this.people[i-1];
                    this.current_id = i-1;
                    break;
                }
            }

            this.$forceUpdate();
        },
        savePerson: function() {
            // check if person is already in the array
            let found = false;
            for (let i = 0; i < this.$root.$data.savedPeople.length; i++) {
                if (this.$root.$data.savedPeople[i].id == this.person.id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                document.getElementById("info_text").innerHTML = "";
                this.$root.$data.savedPeople.push(this.person);
            } else {
                document.getElementById("info_text").innerHTML = "Person already saved";
            }
        }
    }
}
</script>