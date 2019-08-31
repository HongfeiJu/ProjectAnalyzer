<template>
    <v-dialog v-model="dialog" persistent max-width="700px">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">create project</v-btn>
        </template>
        <v-card
                class="mx-auto"
        >
            <v-system-bar
                    color="deep-purple darken-4"
                    dark
            ></v-system-bar>
            <v-toolbar
                    color="deep-purple accent-4"
                    cards
                    dark
                    flat
            >
                <v-card-title class="title font-weight-regular">Create a project</v-card-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="pa-3 pt-4"
            >
                <v-text-field
                        type=""
                        v-model="projectData.projectName"
                        :counter="50"
                        label="Project Name"
                        required
                ></v-text-field>

                <br>
                <v-text-field
                        v-model="projectData.githubSlug"
                        :counter="50"
                        label="Github Slug"
                        required
                ></v-text-field>
                <v-textarea
                        v-model="projectData.description"
                        :counter="500"
                        label="Project Description"
                        auto-grow
                ></v-textarea>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="red"
                        flat
                        @click="dialog = false"
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                        flat
                        @click="$refs.form.reset()"
                >
                    Clear
                </v-btn>
                <v-btn
                        class="white--text"
                        color="deep-purple accent-4"
                        depressed
                        v-on:click="createProject"
                >Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    export default {
        name: "NewProjectForm",
        data(){
            return {
                dialog: false,
                valid: true,
                projectData:{
                    projectName: "",
                    members:"",
                    description:""
                },
                rules:{
                    nameRules:[
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 20) || 'Name must be less than 50 characters'
                    ],

                }
            }
        },
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
            createProject:function(){
                console.log("name: "+this.projectData.projectName);
                this.courses[this.activeCourse].projects.push({
                    title: this.projectData.projectName,
                    members: this.projectData.members,
                    description: this.projectData.description
                });
                console.log(this.courses);
                this.dialog = false;
            }
        },
    }
</script>

<style scoped>

</style>
