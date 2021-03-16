<template>
    <span v-for="person in people" :key="person.id">
        <div class="person" v-if="person.id == current_id">
            <button name="go_to_mother" v-on:click="go_to_mother">Go to Mother</button>
            <button name="go_to_father" v-on:click="go_to_father()">Go to Father</button>
            <button name="go_to_son" v-on:click="go_to_son()">Go to Son</button>
            <button name="go_to_daughter" v-on:click="go_to_daughter">Go to Daughter</button>
            <p>{{person.first_name}} {{person.last_name}}</p>
            <p>Born in {{person.birth_city}}, <span v-if="person.birth_state != null">{{person.birth_state}}, </span>{{person.birth_country}} on {{person.birth_date}}</p>
            <p>Laid to rest in {{person.death_city}}, <span v-if="person.death_state != null"> {{person.death_state}}, </span>{{person.death_country}}</p>
        </div>
    </span>
</template>

<script>
import peopleData from "../../mock_data.json";
    
export default {
    name: "PersonViewer",
}
</script>

<style scoped>
    .person {
        border: 2px green dashed;
        margin: 1em;
    }
</style>