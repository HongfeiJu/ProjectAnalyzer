<template>
    <v-list>
        <v-list-tile style="alignment: center">
            <h3 style="color:green">Course Management</h3>
        </v-list-tile>
        <v-list-tile>
            <v-btn dark block color="orange" @click="showNewCourse=!showNewCourse">
                <v-icon dark>add</v-icon> add course
            </v-btn>
        </v-list-tile>
        <v-list-tile v-if="this.showNewCourse">
            <v-text-field
                    single-line
                    label="course name"
                    v-model="newCourseName"
            ></v-text-field>
            <v-btn @click="addCourse()">
                add
            </v-btn>
        </v-list-tile>
        <v-list-tile>
            <v-btn dark block color="orange" @click="showRemoveCourse=!showRemoveCourse">
                <v-icon dark>remove</v-icon> remove course
            </v-btn>
        </v-list-tile>
        <v-list-tile v-if="this.showRemoveCourse">
            <v-text-field
                    single-line
                    label="course index"
                    v-model="removeCourseIndex"
            ></v-text-field>
            <v-btn @click="removeCourse()">
                remove
            </v-btn>
        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        name: "ControlPanel",
        data() {
            return {
                activeProject:{
                    name: 'project 1', route: '/github', icon: 'dashboard'
                },

                showNewCourse:false,
                showNewProject:false,
                showRemoveCourse:false,
                showRemoveProject:false,

                newCourseName: '',
                removeCourseIndex: '',
                removeProjectIndex: '',

                hover: true,
                gridSize: 'xl'
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
            showCourse: function (index) {
                this.activeCourse = index;
            },
            addCourse: function () {
                this.$store.state.courses.push({
                    title: this.newCourseName,
                    projects: []
                });
                this.showNewCourse=false;
            },
            removeCourse: function () {
                console.log("remove course "+this.removeCourseIndex);
                if(!isNaN(this.removeCourseIndex)){
                    this.$store.state.courses.splice(this.removeCourseIndex-1, 1);
                    this.showRemoveCourse=false;
                }
            }
        },
    }
</script>

<style scoped>

</style>
