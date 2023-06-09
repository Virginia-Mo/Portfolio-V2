import { handleQuit } from "../utils/handleQuit"

export function setPokedex(worldState) {
    add([
        sprite('pokedex'),
        scale(0.65),
        pos(-50, 0)
    ])
    const title = add([
        text("Pokedex", {
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
        text("Front-end : HTML, CSS, Vanilla Javascript.", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 190),
        color(10, 10, 10),
        text("API: PokéAPI", {
            width: 1200,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input13 = add([
        pos(60, 280),
        color(10, 10, 10),
        text("Voici un petit projet que j'ai fait afin de m'entraîner aux appels API. Le bien connu Pokedex ! ", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 370),
        color(10, 10, 10),
        text("Les utilisateurs, après avoir ouvert la pokeball, peuvent accéder aux informations de différents pokemons en tapant leur numéro ou nom en anglais. Ils peuvent aussi voir les pokemons de façon random en cliquant sur le bouton prévu à cet effet.", {
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    const btn3 = add([
        text("Repo", {
            font: "title",
            width: 300,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(800, 600),
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
        pos(400, 600),
        scale(1),
        area({ cursor: "pointer"})
    ])
    handleQuit(worldState, 520, 250, 'projects')

    btn3.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo/Pokedex',
            '_blank'
        );
    })
    btn2.onClick( () => {
        window.open(
            'https://thepokedexvm.netlify.app/',
            '_blank'
        );
    })
}