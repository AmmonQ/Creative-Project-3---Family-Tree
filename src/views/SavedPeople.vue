<template>
<div>
    <h4>Saved People</h4>
    <div class="saved_people_div" v-for="person in SavedPeopleData" :key="person.id">
        <div class="saved_person">
            <p>{{person.first_name}} {{person.last_name}} ({{person.gender}})</p>
            <p>Born in {{person.birth_city}}, <span v-if="person.birth_state != null">{{person.birth_state}}, </span>{{person.birth_country}} on {{person.birth_date}}</p>
            <p>Laid to rest in {{person.death_city}}, <span v-if="person.death_state != null"> {{person.death_state}}, </span>{{person.death_country}}</p>
            <button class="pure-button pure-button-primary" id="remove_person" name="remove_person" v-on:click="removePerson(person)">Remove Person</button>
        </div>
    </div>
    <button id="print" class="pure-button" onclick="window.print(); return false;">Print</button>
</div>
</template>

<script>
    export default {
        name: "SavedPeople",
        computed: {
            SavedPeopleData: function() {
                return this.$root.$data.savedPeople;
            }
        },
        methods: {
            removePerson: function(person) {
                let index = this.$root.$data.savedPeople.indexOf(person);
                
                this.$root.$data.savedPeople.splice(index, 1);
            }
        }
    }
</script>