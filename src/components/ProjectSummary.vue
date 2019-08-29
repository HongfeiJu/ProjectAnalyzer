<template>
    <v-card>
        <v-img
                class="white--text"
                height="75px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">{{'Group ' + index}}: {{project.title}}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title>
            <div>
                <span class="grey--text">{{project.description}}</span><br>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="orange" :href="'/github'">Github</v-btn>
            <v-btn flat color="orange" :href="'/taiga'">Taiga</v-btn>
            <v-btn flat color="red" @click="removeProject">delete</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProjectSummary",
        props: ["project", "index"],
        methods:{
            removeProject: function () {
                console.log("remove courses"+this.$store.state.activeCourse+" project "+this.index);
                this.$store.state.courses[this.$store.state.activeCourse]
                    .projects.splice(this.index-1, 1);
                this.showRemoveProject=false;
            }

        },
    }
</script>

<style scoped>

</style>
