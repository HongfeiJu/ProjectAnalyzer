<template>
    <v-card>
        <v-container width="100%">
            <h4>{{title}}</h4>
            <v-layout justify-center>
                <div id="timeline"> <v-btn @click="show">show</v-btn></div>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "TimeLine",
        props: ["data", "title"],
        data() {
            return {
                options:{
                    legend: { position: 'left', maxLines:4},
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
                }
            }
        },
        computed: {
            timelineData() {
                return this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].data.timeline;
            }
        },
        mounted() {
            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://www.gstatic.com/charts/loader.js');
            document.head.appendChild(recaptchaScript);
        },
        methods: {
            show: function () {
                google.charts.load('current', {'packages': ['timeline']});
                google.charts.setOnLoadCallback(() => {
                    const container = document.getElementById('timeline');
                    const chart = new google.visualization.Timeline(container);
                    const dataTable = new google.visualization.DataTable();

                    dataTable.addColumn({type: 'string', id: 'task'});
                    dataTable.addColumn({type: 'string', id: 'state'});
                    dataTable.addColumn({type: 'date', id: 'Start'});
                    dataTable.addColumn({type: 'date', id: 'End'});
                    dataTable.addRows(this.timelineData);
                    chart.draw(dataTable, this.options);
                });
            },
        },
        created() {
            this.show();
        }
    }
</script>

<style scoped>

</style>
