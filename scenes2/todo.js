import { handleQuit } from "../utils/handleQuit"

export function setTodo(worldState) {
    add([
        sprite('todo'),
        scale(0.65),
        pos(-50, 0)
    ])
    const title = add([
        text("To Do List", {
            font: "title",
            width: 900,
            size: 45,
            lineSpacing: 8,
            letterSpacing: 2,
        }),
        pos(450, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(60, 90),
        color(10, 10, 10),
        text("Projet front-end : ", {
            width: 900,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 140),
        color(10, 10, 10),
        text("Voici un projet que j'ai crée afin de me former à Typescript. J'ai crée 3 'To Do List' identiques avec des technologies différentes:", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 280),
        color(10, 10, 10),
        text("React, Typescript, SASS, react-beautiful-dnd :", {
            width: 1100,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12_2 = add([
        pos(810, 280),
        color(245, 67, 54),
        text("Repo ici ", {
            font: "title",
            width: 900,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({ cursor: "pointer"})
    ])
    const input13 = add([
        pos(60, 340),
        color(10, 10, 10),
        text("React, ReduxToolKit, Typescript, SASS, react-beautiful-dnd :", {
            width: 800,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input14 = add([
        pos(400, 370),
        color(245, 67, 54),
        text("Repo ici ", {
            font: "title",
            width: 900,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({ cursor: "pointer"})
    ])
    const input22 = add([
        pos(60, 450),
        color(10, 10, 10),
        text("Vue3 (composition API), Typescript, SASS, API HTML Drag and Drop :", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    const btn3 = add([
        text("Repo ici", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(550, 478),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const btn2 = add([
        text("En Ligne ici", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(250, 478),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const input42 = add([
        pos(60, 550),
        color(10, 10, 10),
        text("Créer ces projets m'a permis de commencer à me former à Typescript, découvrir de nouvelles bibliothèques et apprendre à reprendre un code et le modifier selon les spécificités de différentes technologies et frameworks.", {
            width: 1200,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    handleQuit(worldState, 600, 250, 'projects')

    input12_2.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/ToDoList_React_TS',
            '_blank'
        );
    })
    input14.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/To-Do-List--V2',
            '_blank'
        );
    })
    btn3.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/ToDoList--VueTS',
            '_blank'
        );
    })
    btn2.onClick( () => {
        window.open(
            'https://mytodolist-vm.netlify.app/',
            '_blank'
        );
    })
}