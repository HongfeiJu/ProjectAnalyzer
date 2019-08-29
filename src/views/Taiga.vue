<template>
    <div>
        <template>
            <Tab v-bind:tabTitles=tabs v-bind:toolbarTitle="title"></Tab>
        </template>
    </div>
</template>

<script>
    import Tab from "@/components/Tab";
    import TaigaSprintDetails from "@/tabs/TaigaSprintDetails"
    import TaigaTaskDistribution from "@/tabs/TaigaTaskDistribution";
    import Burndown from "../components/Burndown";
    import TimeLine from "../components/TimeLine";

    export default {
        name: "Taiga",
        components: {Tab},
        data() {
            return {
                titlePrefix: "Tiaga Statistics",
                title: null,
                resources: {},
                tabsKeys: {Commits: 'commits', 'Code Complexity': 'codeComplexity', Details: 'details',
                    Contributions: 'contributions'},
                tabsData: {},
                tabs: {
                    'Burndown Chart': this.fillTabData(null, Burndown, null, 'Complexity'),
                    'Time Line': this.fillTabData(null, TimeLine, null, 'Complexity')
                }
            }
        },
        methods: {
            getCommitsAPI: function () {
                return process.env.VUE_APP_TAIGA_BASE + process.env.VUE_APP_COMMIT_KEY
            },
            getBurnDownChartAPI: function () {
                return process.env.VUE_APP_GITHUB_EP + process.env.VUE_APP_CODE_COMPLEXITY_KEY
            },
            getContributionsAPI: function () {
                return process.env.VUE_APP_GITHUB_EP + process.env.VUE_APP_CONTRIBUTIONS_KEY
            },
            getProcessAPI: function () {
                return process.env.VUE_APP_GITHUB_EP + process.env.VUE_APP_DETAILS_KEY
            },
            getSprintDetailsAPI: function () {
                return process.env.VUE_APP_TAIGA_BASE + process.env.VUE_APP_TAIGA_SPRINT_DETAILS + this.slug;
            },

            prepareDetailsDataForRender: function () {
                return {}
            },
            fillTabData: function (data, component, headers, title, leadColumn) {
                return {data, component, headers, title, leadColumn};
            },
            addToProgress: function () {
                return 100.0 / Object.keys(this.tabKeys).length;
            }
        },
        created() {
            // Initialize resources
        },
        mounted() {
            // Form Page Title
            this.title = `${this.titlePrefix} - ${this.slug}`;

            // Initialize resources
            this.resources[this.tabKeys['sprintDetails']] = this.$resource(this.getSprintDetailsAPI());
            this.resources[this.tabKeys['taskDistribution']] = this.$resource(this.getTaskDistributionAPI());

            // Progress Bar
            this.interval = setInterval(() => {
                if (this.donePercent >= 100.0) {
                    this.isLoading = false;
                    return (this.donePercent = 0.0)
                }
            }, 1000);

            // Get Taiga data
            this.resources[this.tabKeys['sprintDetails']].get({}).then(response => {
                let headers = ["sprint_name", "status", "created_date", "estimated_start",
                    "estimated_finish", "gap"];
                let headersRender = [{text: "Sprint Name", value: "sprint_name"}, {text: "Status", value: "status"},
                    {text: "Created Date", value: "created_date"}, {text: "Estimated Start", value: "estimated_start"},
                    {text: "Estimated Finish", value: "estimated_finish"}, {text: "Gap", value: "gap"}];
                this.tabs[this.tabKeys['sprintDetails']] = this.fillTabData(
                    this.prepareSprintDetailsDataForRender(response.body, headers),
                    TaigaSprintDetails, headersRender, "Sprint Details", "sprint_name");
            }).catch((error) => {
                let headersRender = [{text: "Sprint Name", value: "sprint_name"}, {text: "Status", value: "status"},
                    {text: "Created Date", value: "created_date"}, {text: "Estimated Start", value: "estimated_start"},
                    {text: "Estimated Finish", value: "estimated_finish"}, {text: "Gap", value: "gap"}];
                this.fillTabData(this.prepareSprintDetailsDataForRender(null),
                    TaigaSprintDetails, headersRender, "Sprint Details", null);
                console.log(error);
            }).finally(() => {
                this.donePercent += this.addToProgress();
            });

            this.resources[this.tabKeys['taskDistribution']].get({}).then(response => {
                this.tabs[this.tabKeys['taskDistribution']] = this.fillTabData(
                    this.prepareTaskDistributionDataForRender(response.body),
                    TaigaTaskDistribution, null, "Task Distribution By Members", null);
            }).catch((error) => {
                this.fillTabData(this.prepareSprintDetailsDataForRender(null),
                    TaigaTaskDistribution, null, "Task Distribution By Members", null);
                console.log(error);
            }).finally(() => {
                this.donePercent += this.addToProgress();
            });
        }
    }

</script>
