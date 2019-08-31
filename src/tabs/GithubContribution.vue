<template>
    <v-card height="50%">
        <v-container width="100%">
            <v-container>
                <v-layout justify-center>
                    <pie-chart :data="contributionData[0]" title="contribution by pull request"></pie-chart>
                    <pie-chart :data="contributionData[1]" title="contribution by commit"></pie-chart>
                </v-layout>
            </v-container>
        </v-container>
    </v-card>

</template>

<script>
    import PieChart from "../components/PieChart"
    export default {
        name: "GithubContribution",
        components: {
            PieChart
        },
        computed: {
            contributionData() {
                return this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].data.contribution;
            }
        },
    }
</script>
