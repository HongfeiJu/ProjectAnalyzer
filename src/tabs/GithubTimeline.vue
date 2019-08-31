<template>
    <v-card height="50%">
        <v-container width="100%">
            <v-container>
                <v-layout justify-center>
                    <ComboChart :data="commitAndPullRequestData[0]" title="commit"></ComboChart>
                    <ComboChart :data="commitAndPullRequestData[1]" title="pull request"></ComboChart>
                </v-layout>
            </v-container>
        </v-container>
    </v-card>

</template>

<script>
    import ComboChart from "../components/ComboChart"
    export default {
        name: "GithubTimeline",
        components: {
            ComboChart
        },
        computed: {
            commitAndPullRequestData() {
                return this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].data.commitAndPullRequest;
            }
        },
    }
</script>
