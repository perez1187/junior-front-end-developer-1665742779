import completedIcon from '../../assets/icons/Rectangle_1010.png'
import activeIcon from '../../assets/icons/Rectangle 1011.png'
import blockIcon from '../../assets/icons/Rectangle 1012.png'

export const icons = [
    {
        "id":1,
        "icon":completedIcon,
        "alt":"completed task"
    },
    {
        "id":2,
        "icon":activeIcon,
        "alt":"active task"
    },    
    {
        "id":3,
        "icon":blockIcon,
        "alt":"block task"
    },
]  


export const userTasks = [
    {
        "id":1,
        "status":1,
        "title": "Application Setup",
        "businessContext": [],
    },
    {
        "id":2,
        "status":1,
        "title": "Static Books List",
        "businessContext": [],
    },
    {
        "id":3,
        "status":1,
        "title": "Administration Panel",
        "businessContext": [],
    },
    {
        "id":4,
        "status":2,
        "title": "Connect Admin with Frontend",
        "businessContext": [
            {
                "id":1,
                "title": "New sprint, tasks and intro information.",
                "content":"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
                "author":"Olga Nelson",
                "created_at":"10/10/2022",
                "status":1,
            },
            {   
                "id":2,
                "title": "Application has been accepted 🎉 🙌",
                "content":"bla bla bla",
                "author":"Kirsten Aniston ",
                "created_at":"10/10/2022",
                "status":2
            },
            {
                "id":3,
                "title": "New sprint, tasks and intro information.",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasy",
                "author":"Olga Nelson ",
                "created_at":"10/10/2022",
                "status":3,
            },
        ],
    },
    {
        "id":5,
        "status":3,
        "title": "Book Review Feature",
        "businessContext": [],
    },

]

export const taskStyles = [
    {
        "id":1,
        "name":"TaskListNameId1"
    },        
    {
        "id":2,
        "name":"TaskListNameId2"
    },
    {
        "id":3,
        "name":"TaskListNameId3"
    },

]

export const taskStatusStyles = [
    {
        "id":1,
        "box":"BusinessContextTaskBoxId1",
        "title":"BusinessContextTaskTitleId1"
    },        
    {
        "id":2,
        "box":"BusinessContextTaskBoxId2",
        "title":"BusinessContextTaskTitleId2"
    },
    {
        "id":3,
        "box":"BusinessContextTaskBoxId3",
        "title":"BusinessContextTaskTitleId2"
    },
]