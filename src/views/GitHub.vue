<template>
    <div>
        <Tab v-bind:tabTitles=tabs v-bind:toolbarTitle="title"></Tab>
    </div>
</template>

<script>
    import Tab from "@/components/Tab";
    import DataTable from "@/components/DataTable";
    import GithubContribution from "../tabs/GithubContribution";
    import GithubTimeline from "../tabs/GithubTimeline";
    import GitHubDetails from "../tabs/GitHubComplexity";

    export default {
        name: "Github",
        components: {Tab},
        data() {
            return {
                tabsKeys: {Commits: 'commits', 'Code Complexity': 'codeComplexity', Details: 'details',
                    Contributions: 'contributions'},
                tabs: {
                    'Code Complexity': this.fillTabData(null, GitHubDetails , null, 'Complexity'),
                    'Commits': this.fillTabData(this.$store.state.courses[this.$store.state.activeCourse]
                        .projects[this.$route.params.pi].data.commit.data, DataTable,
                        this.$store.state.courses[this.$store.state.activeCourse]
                        .projects[this.$route.params.pi].data.commit.header, null),
                    'Contribution': this.fillTabData(null, GithubContribution, null, null),
                    'Commits and Pull requests': this.fillTabData(null, GithubTimeline, null, null)
                }
            }
        },
        methods: {
            fillTabData: function (data, component, headers, title, leadColumn) {
                return {data, component, headers, title, leadColumn};
            },
            addToProgress: function () {
                return 100.0 / Object.keys(this.tabKeys).length;
            },
        },
        computed: {
            title() {
                return "Github statistic - " + this.$store.state.courses[this.$store.state.activeCourse]
                    .projects[this.$route.params.pi].title;
            }
        }
    }

</script>
