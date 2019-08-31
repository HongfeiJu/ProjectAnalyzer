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
                        members: 'Ann Kennedy, Gordon Larsen, Nyasia Rowe, Luz Herman',
                        description: "a text editor with syntax highlight",
                        data:{
                            burndown: [
                                ['day', 'Story points'],
                                ['1', 40],
                                ['2', 37],
                                ['3', 35],
                                ['4', 30],
                                ['5', 27],
                                ['6', 23],
                                ['7', 20],
                                ['8', 16],
                                ['9', 10],
                                ['10', 8],
                                ['11', 2],
                                ['12', 1],
                                ['13', 1],
                                ['14', 0]
                            ],
                            timeline:[
                                [ 'task 1', 'created', new Date(2019, 3, 27), new Date(2019, 4, 1)],
                                [ 'task 1', 'in process', new Date(2019, 4, 1), new Date(2019, 4, 10)],
                                [ 'task 1', 'test', new Date(2019, 4, 10), new Date(2019, 4, 13)],
                                [ 'task 2', 'created', new Date(2019, 3, 28), new Date(2019, 4, 3)],
                                [ 'task 2', 'in process', new Date(2019, 4, 3), new Date(2019, 4, 9) ],
                                [ 'task 2', 'test', new Date(2019, 4, 9), new Date(2019, 4, 12) ],
                                [ 'task 3', 'created', new Date(2019, 4, 2), new Date(2019, 4, 10)],
                                [ 'task 3', 'in process', new Date(2019, 4, 10), new Date(2019, 4, 15)],
                                [ 'task 3', 'test', new Date(2019, 4, 15), new Date(2019, 4, 16)]],
                            complexity: [
                                {
                                    data: [
                                        { name: 'Abigail',     property1: 90},
                                        { name: 'James',       property1: 70},
                                        { name: 'John',        property1: 80},
                                        { name: 'Anna',        property1: 60},
                                        { name: 'Lucy',        property1: 90}
                                    ],
                                    header:[
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
                                    ],},
                                {
                                    data: [
                                        { name: 'SyntaxAwareDocument.java',     property1: 90},
                                        { name: 'IOAgent.java',       property1: 70},
                                        { name: 'PathDB.java',        property1: 80},
                                        { name: 'KeywordDB.java',        property1: 60},
                                        { name: 'ToJson.java',        property1: 90},
                                        { name: 'FindDialog.java',        property1: 75},
                                        { name: 'FontFrame.java',        property1: 90}
                                    ],
                                    header:[
                                        {
                                            text: 'file',
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
                            ],
                            commit:{
                                header: [
                                    {
                                        text: 'Team Members',
                                        align: 'center',
                                        sortable: true,
                                        value: 'name'
                                    },
                                    {text: 'Sprint 1', value: 'property1'},
                                    {text: 'Sprint 2', value: 'property2'},
                                    {text: 'Sprint 3', value: 'property3'}
                                ],
                                data:[
                                    {        name: 'Abigail',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'James',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'John',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'Anna',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'Lucy',        property1: 10,        property2: 5,        property3: 8    }

                                ]
                            },
                            contribution: [
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 2],
                                    ['member 2', 3],
                                    ['member 3', 4],
                                    ['member 4', 5],
                                    ['member 5', 3]
                                ],
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 30],
                                    ['member 2', 50],
                                    ['member 3', 40],
                                    ['member 4', 30],
                                    ['member 5', 10]
                                ]

                            ],
                            commitAndPullRequest:[
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  12,     14,      10,             36],
                                    ['sprint 2',  17,     14,      12,             43],
                                    ['sprint 3',  14,     17,      25,             56]
                                ],
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  5,      6,        8,             19],
                                    ['sprint 2',  7,      4,        6,             17],
                                    ['sprint 3',  7,      7,        5,             19]
                                ]

                            ]
                        }
                    },
                    {
                        title: 'blog',
                        members: 'Yosef Weaver, Julianne Mejia, Litzy Hawkins, Jewel Schultz',
                        description: "a blog website",
                        data:{
                            burndown: [
                                ['day', 'Story points'],
                                ['1', 40],
                                ['2', 37],
                                ['3', 35],
                                ['4', 30],
                                ['5', 27],
                                ['6', 23],
                                ['7', 20],
                                ['8', 16],
                                ['9', 10],
                                ['10', 8],
                                ['11', 2],
                                ['12', 1],
                                ['13', 1],
                                ['14', 0]
                            ],
                            timeline:[
                                [ 'task 1', 'created', new Date(2019, 3, 27), new Date(2019, 4, 1)],
                                [ 'task 1', 'in process', new Date(2019, 4, 1), new Date(2019, 4, 10)],
                                [ 'task 1', 'test', new Date(2019, 4, 10), new Date(2019, 4, 13)],
                                [ 'task 2', 'created', new Date(2019, 3, 28), new Date(2019, 4, 3)],
                                [ 'task 2', 'in process', new Date(2019, 4, 3), new Date(2019, 4, 9) ],
                                [ 'task 2', 'test', new Date(2019, 4, 9), new Date(2019, 4, 12) ],
                                [ 'task 3', 'created', new Date(2019, 4, 2), new Date(2019, 4, 10)],
                                [ 'task 3', 'in process', new Date(2019, 4, 10), new Date(2019, 4, 15)],
                                [ 'task 3', 'test', new Date(2019, 4, 15), new Date(2019, 4, 16)]],
                            complexity: [
                                {
                                    data: [
                                        { name: 'Abigail',     property1: 90},
                                        { name: 'James',       property1: 70},
                                        { name: 'John',        property1: 80},
                                        { name: 'Anna',        property1: 60},
                                        { name: 'Lucy',        property1: 90}
                                    ],
                                    header:[
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
                                    ],},
                                {
                                    data: [
                                        { name: 'SyntaxAwareDocument.java',     property1: 90},
                                        { name: 'IOAgent.java',       property1: 70},
                                        { name: 'PathDB.java',        property1: 80},
                                        { name: 'KeywordDB.java',        property1: 60},
                                        { name: 'ToJson.java',        property1: 90},
                                        { name: 'FindDialog.java',        property1: 75},
                                        { name: 'FontFrame.java',        property1: 90}
                                    ],
                                    header:[
                                        {
                                            text: 'file',
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
                            ],
                            commit:{
                                header: [
                                    {
                                        text: 'Team Members',
                                        align: 'center',
                                        sortable: true,
                                        value: 'name'
                                    },
                                    {text: 'Sprint 1', value: 'property1'},
                                    {text: 'Sprint 2', value: 'property2'},
                                    {text: 'Sprint 3', value: 'property3'}
                                ],
                                data:[
                                    {        name: 'Abigail',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'James',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'John',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'Anna',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'Lucy',        property1: 10,        property2: 5,        property3: 8    }

                                ]
                            },
                            contribution: [
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 2],
                                    ['member 2', 3],
                                    ['member 3', 4],
                                    ['member 4', 5],
                                    ['member 5', 3]
                                ],
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 30],
                                    ['member 2', 50],
                                    ['member 3', 40],
                                    ['member 4', 30],
                                    ['member 5', 10]
                                ]

                            ],
                            commitAndPullRequest:[
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  12,     14,      10,             36],
                                    ['sprint 2',  17,     14,      12,             43],
                                    ['sprint 3',  14,     17,      25,             56]
                                ],
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  5,      6,        8,             19],
                                    ['sprint 2',  7,      4,        6,             17],
                                    ['sprint 3',  7,      7,        5,             19]
                                ]

                            ]
                        }
                    }

                ]
            },

            {
                title: 'ser 516',
                projects: [
                    {
                        title: 'exam web',
                        members: 'Emery Blair, Joaquin Richard, Leandro Brewer, Tori Love',
                        description: 'online exam platform',
                        data:{
                            burndown: [
                                ['day', 'Story points'],
                                ['1', 40],
                                ['2', 37],
                                ['3', 35],
                                ['4', 30],
                                ['5', 27],
                                ['6', 23],
                                ['7', 20],
                                ['8', 16],
                                ['9', 10],
                                ['10', 8],
                                ['11', 2],
                                ['12', 1],
                                ['13', 1],
                                ['14', 0]
                            ],
                            timeline:[
                                [ 'task 1', 'created', new Date(2019, 3, 27), new Date(2019, 4, 1)],
                                [ 'task 1', 'in process', new Date(2019, 4, 1), new Date(2019, 4, 10)],
                                [ 'task 1', 'test', new Date(2019, 4, 10), new Date(2019, 4, 13)],
                                [ 'task 2', 'created', new Date(2019, 3, 28), new Date(2019, 4, 3)],
                                [ 'task 2', 'in process', new Date(2019, 4, 3), new Date(2019, 4, 9) ],
                                [ 'task 2', 'test', new Date(2019, 4, 9), new Date(2019, 4, 12) ],
                                [ 'task 3', 'created', new Date(2019, 4, 2), new Date(2019, 4, 10)],
                                [ 'task 3', 'in process', new Date(2019, 4, 10), new Date(2019, 4, 15)],
                                [ 'task 3', 'test', new Date(2019, 4, 15), new Date(2019, 4, 16)]],
                            complexity: [
                                {
                                    data: [
                                        { name: 'Abigail',     property1: 90},
                                        { name: 'James',       property1: 70},
                                        { name: 'John',        property1: 80},
                                        { name: 'Anna',        property1: 60},
                                        { name: 'Lucy',        property1: 90}
                                    ],
                                    header:[
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
                                    ],},
                                {
                                    data: [
                                        { name: 'SyntaxAwareDocument.java',     property1: 90},
                                        { name: 'IOAgent.java',       property1: 70},
                                        { name: 'PathDB.java',        property1: 80},
                                        { name: 'KeywordDB.java',        property1: 60},
                                        { name: 'ToJson.java',        property1: 90},
                                        { name: 'FindDialog.java',        property1: 75},
                                        { name: 'FontFrame.java',        property1: 90}
                                    ],
                                    header:[
                                        {
                                            text: 'file',
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
                            ],
                            commit:{
                                header: [
                                    {
                                        text: 'Team Members',
                                        align: 'center',
                                        sortable: true,
                                        value: 'name'
                                    },
                                    {text: 'Sprint 1', value: 'property1'},
                                    {text: 'Sprint 2', value: 'property2'},
                                    {text: 'Sprint 3', value: 'property3'}
                                ],
                                data:[
                                    {        name: 'Abigail',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'James',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'John',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'Anna',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'Lucy',        property1: 10,        property2: 5,        property3: 8    }

                                ]
                            },
                            contribution: [
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 2],
                                    ['member 2', 3],
                                    ['member 3', 4],
                                    ['member 4', 5],
                                    ['member 5', 3]
                                ],
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 30],
                                    ['member 2', 50],
                                    ['member 3', 40],
                                    ['member 4', 30],
                                    ['member 5', 10]
                                ]

                            ],
                            commitAndPullRequest:[
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  12,     14,      10,             36],
                                    ['sprint 2',  17,     14,      12,             43],
                                    ['sprint 3',  14,     17,      25,             56]
                                ],
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  5,      6,        8,             19],
                                    ['sprint 2',  7,      4,        6,             17],
                                    ['sprint 3',  7,      7,        5,             19]
                                ]

                            ]
                        }
                    },
                    {
                        title: 'weather notice',
                        members: 'Ashanti Newton, Karter Brooks, Josh Rhodes, Gia Ramsey',
                        description: 'weather service web',
                        data:{
                            burndown: [
                                ['day', 'Story points'],
                                ['1', 40],
                                ['2', 37],
                                ['3', 35],
                                ['4', 30],
                                ['5', 27],
                                ['6', 23],
                                ['7', 20],
                                ['8', 16],
                                ['9', 10],
                                ['10', 8],
                                ['11', 2],
                                ['12', 1],
                                ['13', 1],
                                ['14', 0]
                            ],
                            timeline:[
                                [ 'task 1', 'created', new Date(2019, 3, 27), new Date(2019, 4, 1)],
                                [ 'task 1', 'in process', new Date(2019, 4, 1), new Date(2019, 4, 10)],
                                [ 'task 1', 'test', new Date(2019, 4, 10), new Date(2019, 4, 13)],
                                [ 'task 2', 'created', new Date(2019, 3, 28), new Date(2019, 4, 3)],
                                [ 'task 2', 'in process', new Date(2019, 4, 3), new Date(2019, 4, 9) ],
                                [ 'task 2', 'test', new Date(2019, 4, 9), new Date(2019, 4, 12) ],
                                [ 'task 3', 'created', new Date(2019, 4, 2), new Date(2019, 4, 10)],
                                [ 'task 3', 'in process', new Date(2019, 4, 10), new Date(2019, 4, 15)],
                                [ 'task 3', 'test', new Date(2019, 4, 15), new Date(2019, 4, 16)]],
                            complexity: [
                                {
                                    data: [
                                        { name: 'Abigail',     property1: 90},
                                        { name: 'James',       property1: 70},
                                        { name: 'John',        property1: 80},
                                        { name: 'Anna',        property1: 60},
                                        { name: 'Lucy',        property1: 90}
                                    ],
                                    header:[
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
                                    ],},
                                {
                                    data: [
                                        { name: 'SyntaxAwareDocument.java',     property1: 90},
                                        { name: 'IOAgent.java',       property1: 70},
                                        { name: 'PathDB.java',        property1: 80},
                                        { name: 'KeywordDB.java',        property1: 60},
                                        { name: 'ToJson.java',        property1: 90},
                                        { name: 'FindDialog.java',        property1: 75},
                                        { name: 'FontFrame.java',        property1: 90}
                                    ],
                                    header:[
                                        {
                                            text: 'file',
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
                            ],
                            commit:{
                                header: [
                                    {
                                        text: 'Team Members',
                                        align: 'center',
                                        sortable: true,
                                        value: 'name'
                                    },
                                    {text: 'Sprint 1', value: 'property1'},
                                    {text: 'Sprint 2', value: 'property2'},
                                    {text: 'Sprint 3', value: 'property3'}
                                ],
                                data:[
                                    {        name: 'Abigail',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'James',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'John',        property1: 10,        property2: 6,        property3: 8    },
                                    {        name: 'Anna',        property1: 10,        property2: 5,        property3: 8    },
                                    {        name: 'Lucy',        property1: 10,        property2: 5,        property3: 8    }

                                ]
                            },
                            contribution: [
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 2],
                                    ['member 2', 3],
                                    ['member 3', 4],
                                    ['member 4', 5],
                                    ['member 5', 3]
                                ],
                                [
                                    ['Contribution', 'commits'],
                                    ['member 1', 30],
                                    ['member 2', 50],
                                    ['member 3', 40],
                                    ['member 4', 30],
                                    ['member 5', 10]
                                ]

                            ],
                            commitAndPullRequest:[
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  12,     14,      10,             36],
                                    ['sprint 2',  17,     14,      12,             43],
                                    ['sprint 3',  14,     17,      25,             56]
                                ],
                                [
                                    ['Sprint', 'member 1', 'member 2', 'member 3', 'Total'],
                                    ['sprint 1',  5,      6,        8,             19],
                                    ['sprint 2',  7,      4,        6,             17],
                                    ['sprint 3',  7,      7,        5,             19]
                                ]

                            ]
                        }
                    }
                ]
            }
        ],
        activeCourse: 0
    }
});
