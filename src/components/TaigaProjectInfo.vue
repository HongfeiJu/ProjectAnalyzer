<template>
    <v-card height="50%"  py-0 px-2>
        <v-container width="90%">
            <v-card-title primary-title>
                <div>
                    <p class="headline mb-0 orange&#45;&#45;text">Title</p>
                </div>
            </v-card-title>
            <v-card-text>
                <div>
                    {{this.project.title}}
                </div>
            </v-card-text>
            <v-card-title primary-title>
                <div>
                    <p class="headline mb-0 orange&#45;&#45;text">Members</p>
                </div>
            </v-card-title>
            <v-card-text>
                <div>
                    {{this.project.members}}
                </div>
            </v-card-text>
            <v-card-title primary-title>
                <div>
                    <p class="headline mb-0 orange&#45;&#45;text">Description</p>
                </div>
            </v-card-title>
            <v-card-text>
                <div>
                    {{this.project.description}}
                </div>
            </v-card-text>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "TaigaProjectInfo",
        computed: {
            project() {
                return this.$store.state.courses[this.$store.state.activeCourse].projects[this.$route.params.pi]
            }
        },
    }
</script>

<style scoped>

</style>
