<template>
    <v-layout row wrap>
        <v-flex>
            <v-layout justify-center align-center>
                <v-container>
                    <DataTable :data="data1" :headers="header1" :title="title" :leadColumn="leadColumn">
                    </DataTable>
                    <v-card blue-grey lighten-4 width="94%">
                        <p class="headline mb-0 text-xs-center" style="background-color: gainsboro">Project Code Quality: 82</p>
                    </v-card>
                </v-container>

                <v-container>
                    <DataTable :data="data2" :headers="header2" title="title" :leadColumn="leadColumn">
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
        props: {data: Array, headers: Array, title:String, leadColumn: String},
        data() {
            return {
                data1: [
                    { name: 'Abigail',     property1: 90},
                    { name: 'James',       property1: 70},
                    { name: 'John',        property1: 80},
                    { name: 'Anna',        property1: 60},
                    { name: 'Lucy',        property1: 90}
                ],
                header1:[
                    {
                        text: 'Member',
                        align: 'center',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Code Quality',
                        value: 'codeQuality'
                    }
                ],
                search: '',
                data2: [
                    { name: 'Abigail',     property1: 90},
                    { name: 'James',       property1: 70},
                    { name: 'John',        property1: 80},
                    { name: 'Anna',        property1: 60},
                    { name: 'Lucy',        property1: 90}
                ],
                header2:[
                    {
                        text: 'Member',
                        align: 'center',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Code Quality',
                        value: 'codeQuality'
                    }
                ],
            }
        },
    }
</script>

<style scoped>

</style>
