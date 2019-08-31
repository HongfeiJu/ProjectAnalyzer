<template>
    <div>
        <template>
            <Tab v-bind:tabTitles=tabs v-bind:toolbarTitle="title"></Tab>
        </template>
    </div>
</template>

<script>
    import Tab from "@/components/Tab";
    import Burndown from "../components/Burndown";
    import TimeLine from "../components/TimeLine";
    import TaigaProjectInfo from "../components/TaigaProjectInfo";

    export default {
        name: "Taiga",
        components: {Tab},
        data() {
            return {
                tabsKeys: {Commits: 'commits', 'Code Complexity': 'codeComplexity', Details: 'details',
                    Contributions: 'contributions'},
                tabs: {
                    'project info': this.fillTabData(null, TaigaProjectInfo, null, 'Complexity'),
                    'Burndown Chart': this.fillTabData(null, Burndown, null, 'Complexity'),
                    'Time Line': this.fillTabData(null, TimeLine, null, 'Complexity')
                }
            }
        },
        methods: {
            fillTabData: function (data, component, headers, title, leadColumn) {
                return {data, component, headers, title, leadColumn};
            },
            addToProgress: function () {
                return 100.0 / Object.keys(this.tabKeys).length;
            }
        },
        computed: {
            title() {
                return "Tiaga Statistics - " + this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].title;
            }
        }
    }

</script>
