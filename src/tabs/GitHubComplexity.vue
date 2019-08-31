<template>
    <v-layout row wrap>
        <v-flex>
            <v-layout justify-center align-center>
                <v-container>
                    <DataTable
                            :data="complexityData[0].data"
                            :headers="complexityData[0].header"
                            title="complexity by member"
                            :leadColumn="leadColumn">
                    </DataTable>
                    <v-card blue-grey lighten-4 width="94%">
                        <p class="headline mb-0 text-xs-center" style="background-color: gainsboro">Project Code Quality: 82</p>
                    </v-card>
                </v-container>

                <v-container>
                    <DataTable
                            :data="complexityData[1].data"
                            :headers="complexityData[1].header"
                            title="complexity by file"
                            :leadColumn="leadColumn">
                    </DataTable>
                </v-container>
            </v-layout>

        </v-flex>
    </v-layout>
</template>

<script>
    import DataTable from "../components/DataTable";

    export default {
        name: "GitHubDetails",
        components: {DataTable},
        computed: {
            complexityData() {
                return this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].data.complexity;
            }
        },
    }
</script>

<style scoped>

</style>
