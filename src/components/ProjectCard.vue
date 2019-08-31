<template>
    <v-card>
        <v-img
                class="white--text"
                height="75px"
                src="https://image.freepik.com/free-vector/blue-light-sparkles-background-with-copyspace_1017-20091.jpg"
        >
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">{{'Project ' + (projectIndex + 1)}}: {{project.title}}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title>
            <div>
                <span class="grey--text">Members: {{project.members}}</span><br>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="orange" :href="'/github/'+this.projectIndex">Github</v-btn>
            <v-btn flat color="orange" :href="'/taiga/'+this.projectIndex">Taiga</v-btn>
            <v-btn flat color="red" @click="removeProject">delete</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProjectSummary",
        props: ["project", "projectIndex"],
        computed: {
            binding() {
                const binding = {};
                if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;
                return binding
            },
            courses() {
                return this.$store.state.courses;
            },
            activeCourse() {
                return this.$store.state.activeCourse;
            }
        },
        methods:{
            removeProject: function () {
                console.log("remove courses"+this.$store.state.activeCourse+" project "+this.index);
                this.$store.state.courses[this.$store.state.activeCourse]
                    .projects.splice(this.projectIndex, 1);
                this.showRemoveProject=false;
            }

        },
    }
</script>

<style scoped>

</style>
