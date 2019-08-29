<template>
    <v-list>
        <v-list-tile style="alignment: center">
            <h3 style="color:green">Course List</h3>
        </v-list-tile>
        <v-list-tile v-for="(course, index) in courses" :key="course.title">
            <v-btn dark block :color="activeCourse===index?'green darken-3':'green'"
                   @click="showCourse(index)">
                <v-icon dark pr-3>{{ 'dashboard' }}</v-icon>{{ (index+1) + '. ' +course.title }}
            </v-btn>
        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        name: "CourseList",
        computed:{
            courses(){
                console.log("courses update");
                return this.$store.state.courses;
            },
            activeCourse(){
                return this.$store.state.activeCourse;
            }
        },
        methods: {
            showCourse: function (index) {
                this.$store.state.activeCourse = index;
            },
        }
    }
</script>

<style scoped>

</style>
