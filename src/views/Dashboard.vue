<template>
    <v-container>
        <v-layout>
            <v-flex xs2>
                <v-navigation-drawer permanent absolute>
                    <v-toolbar flat>
                        <v-list>
                            <v-list-tile color="success">
                                <v-list-tile-title class="title">
                                    Analyser
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-list dense class="pt-0">
                        <course-list></course-list>
                        <control-panel></control-panel>
                        <v-list>
                            <v-list-tile style="alignment: center">
                                <h3 style="color:green">Data Management</h3>
                            </v-list-tile>
                            <v-list-tile>
                                <v-btn dark block color="pink" @click="uploadData">upload data</v-btn>
                            </v-list-tile>
                            <v-list-tile>
                                <v-btn dark block color="pink" @click="fetchData">fetch data</v-btn>
                            </v-list-tile>
                        </v-list>


                    </v-list>
                </v-navigation-drawer>
            </v-flex>
            <v-flex xs12 sm12 offset-sm1>
                <new-project-form></new-project-form>
                <v-layout row wrap>
                    <v-flex
                            v-for="(project, index) in this.courses[this.activeCourse].projects"
                            :key="project.title"
                            xs12
                            pa-1
                    >
                        <project-summary :project="project"  :projectIndex="index"></project-summary>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import CourseList from "../components/CourseList";
    import ControlPanel from "../components/ControlPanel";
    import NewProjectForm from "../components/NewProjectForm";
    import ProjectSummary from "../components/ProjectCard";

    export default {
        name: "DashboardExtent",
        components: {CourseList, ProjectSummary, NewProjectForm, ControlPanel},
        computed: {
            courses() {
                return this.$store.state.courses;
            },
            activeCourse() {
                return this.$store.state.activeCourse;
            }
        },
        methods:{
            createProject:function(project){
                this.courses[this.activeCourse].projects.push({
                    name: project.projectName,
                    githubSlug: project.githubSlug,
                    taigaSlug: project.taigaSlug,
                    description: project.description
                });
            },
            uploadData() {
                this.$http.put('https://hongfei-project-analyzer.firebaseio.com/courses.json', this.courses)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    })
            },
            fetchData() {
                this.$http.get('https://hongfei-project-analyzer.firebaseio.com/courses.json')
                    .then(response => {
                        return response.json();
                    }).then(data => console.log(data));
            }

        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>

