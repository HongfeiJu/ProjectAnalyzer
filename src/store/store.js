import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        courses:[

            {
                title: 'ser 515',
                projects: [
                    {
                        title: 'text editor',
                        description: "a text editor with syntax highlight"
                    },
                    {
                        title: 'blog',
                        description: "a blog website"
                    }

                ]
            },

            {
                title: 'ser 516',
                projects: [
                    {
                        title: 'exam web',
                        description: 'online exam platform'
                    },
                    {
                        title: 'weather notice',
                        description: 'weather service web'
                    }
                ]
            }
        ],
        activeCourse: 0
    }
});
