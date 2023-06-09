import { handleQuit } from "../utils/handleQuit"

export function setKDC(worldState) {
    add([
        sprite('kdc'),
        scale(0.65),
        pos(-50, 0)
    ])
    const title = add([
        text("KiddyCare", {
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
        text("Projet fullstack : ", {
            width: 900,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 140),
        color(10, 10, 10),
        text("Front-end : React, React Routeur, React Redux, SASS, ESlint.", {
            width: 1200,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 190),
        color(10, 10, 10),
        text("Back-end : NodeJS, Express, PostgreSQL et Sequelize. Architecture MVC.", {
            width: 1200,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input13 = add([
        pos(60, 240),
        color(10, 10, 10),
        text("Sécurité: Mise en place de middlewares permettant de vérifier le rôle de l'utilisateur connecté (accès back-office), de nettoyer les formulaire pour éviter les attaques XSS, utilisation de Sequelize SQL avec des requêtes préparées.", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 450),
        color(10, 10, 10),
        text("Site présentant une école fictive et permettant aux visiteurs de commenter les articles du blog, envoyer des messages à l'administration et se renseigner sur les cours proposés.L'administrateur a accès à un back-office pour créer de nouveaux articles, consulter les messages, demandes de newsletter et les supprimer si besoin.", {
            width: 1200,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    const btn3 = add([
        text("Repo Back-End", {
            font: "title",
            width: 300,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(800, 650),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const btn2 = add([
        text("Repo Front-End", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(400, 650),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const btn = add([
        text("En ligne ICI", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(80, 650),
        scale(1),
        area({ cursor: "pointer"})
    ])
    handleQuit(worldState, 250, 250, 'projects')

    btn2.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/Front-end_KiddyCare_V2',
            '_blank'
        );
    })
    btn3.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/Back-end_KiddyCare_V2',
            '_blank'
        );
    })
    btn.onClick( () => {
        window.open(
            'https://kiddycare.netlify.app/',
            '_blank'
        );
    })
}