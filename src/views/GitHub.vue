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
    import GitHubDetails from "../tabs/GitHubDetails";
    import {HEADERS1} from "../constants";
    import {MEMBERS} from "../constants";
    import {PIEDATA} from "../constants";
    import {TIMELINE} from "../constants";
    import {CodeQuality} from "../constants";


    export default {
        name: "Github",
        components: {Tab},
        data() {
            return {
                titlePrefix: "Github Statistics",
                title: null,
                resources: {},
                tabsKeys: {Commits: 'commits', 'Code Complexity': 'codeComplexity', Details: 'details',
                    Contributions: 'contributions'},
                tabsData: {},
                tabs: {
                    'Code Complexity': this.fillTabData(CodeQuality, GitHubDetails , null, 'Complexity'),
                    'Commits': this.fillTabData(MEMBERS, DataTable, HEADERS1, null),
                    'Contribution': this.fillTabData(PIEDATA, GithubContribution, null, null),
                    'Commits and Pull requests': this.fillTabData(TIMELINE, GithubTimeline, null, null)
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
        }
        ,
        created() {
        }
        ,
        mounted() {
            // Form Page Title
            this.title = `${this.titlePrefix} - ${this.slug}`;

            // Initialize resources
            this.resources[this.tabKeys['commits']] = this.$resource(this.getCommitsAPI());
            this.resources[this.tabKeys['codeQualityByFiles']] = this.$resource(this.getAllFilesComplexityAPI());
            this.resources[this.tabKeys['codeQualityByAuthors']] = this.$resource(this.getAllAuthorsComplexityAPI());
            this.resources[this.tabKeys['details']] = this.$resource(this.getDetailsAPI());
            // Progress Bar
            this.interval = setInterval(() => {
                if (this.donePercent >= 100.0) {
                    this.isLoading = false;
                    return (this.donePercent = 0.0)
                }
            }, 1000);

            // Get GitHub data

            this.resources[this.tabKeys['details']].get({}).then(response => {
                this.tabs[this.tabKeys['details']] = this.fillTabData(
                    this.prepareDetailsDataForRender(response.body), GitHubDetails,
                    [{text: 'Member Name', value: 'name'}], "Repository Details", null);
            }).catch((error) => {
                this.fillTabData(
                    this.prepareDetailsDataForRender(null), GitHubDetails,
                    [{text: 'Member Name', value: 'name'}], "Repository Details", null);
                console.log(error)
            }).finally(() => {
                this.donePercent += this.addToProgress();
            });
        },
        beforeDestroy: function () {
            clearInterval(this.interval);
        }
    }

</script>
