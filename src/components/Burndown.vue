<template>
    <v-card>
        <v-container width="100%">
            <v-layout justify-center>
                <GChart
                        type="LineChart"
                        :data="burndownData"
                        :options="{
                                title: 'Burn down chart',
                                legend: { position: 'right' },
                                width: 700,
                                height: 450,
                                chartArea:{
                                    left:10,
                                    top:40,
                                    right:100,
                                    bottom:40,
                                    width:800,
                                    height:450
                                }
                             }"
                />
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import { GChart } from 'vue-google-charts'
    export default {
        name: "BurnDown",

        components: {
            GChart
        },
        computed: {
            burndownData() {
                return this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].data.burndown;
            }
        },

    }
</script>

<style scoped>

</style>
