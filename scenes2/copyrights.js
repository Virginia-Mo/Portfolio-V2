import { handleQuit } from "../utils/handleQuit"

export function setCopyrights(worldState) {
    add([
        sprite('tea3-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Copyrights", {
            font: "title",
            width: 1100,
            size: 35,
            lineSpacing: 8,
            letterSpacing: 2,
            transform: (idx, ch) => ({
                pos: vec2(0, wave(-2, 2, time() * 4 + idx * 0.5)),
                scale: wave(1, 1.2, time() * 3 + idx),
            }),

        }),
        pos(450, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(100, 130),
        color(10, 10, 10),
        text("Un petit mot sur la création de ce portfolio..J'ai utilisé la bibliothèque KaboomJS qui permet de créer des jeux en Javascript.", {
            width: 1100,
            size: 22,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(100, 220),
        color(10, 10, 10),
        text("Après avoir imaginer la map et les maisons, je les ai codé en utilisant les 'tilesets' de Jadson 'PixelJad' : (lien ici) ", {
            width: 1100,
            size: 22,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input3 = add([
        pos(100, 300),
        color(10, 10, 10),
        text("et l'interieur des maisons avec les 'tilesets' de Gif (lien ici)", {
            width: 1100,
            size: 22,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input34 = add([
        pos(100, 350),
        color(10, 10, 10),
        text("Les personnages chats sont de Pipoya : ICI", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input44 = add([
        pos(100, 400),
        color(10, 10, 10),
        text("et le personnage me représentant a été dessiné par Laufeyon et trouvé : ICI", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input64 = add([
        pos(100, 470),
        color(10, 10, 10),
        text("Les animaux du jardin ont été créés par Daniel Eddeland : ICI", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input4 = add([
        pos(100, 520),
        color(10, 10, 10),
        text("Les musiques viennent du célèbre créateur de Charlie the Unicorn :D  -> FilmCow.com <- ", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input54 = add([
        pos(100, 600),
        color(10, 10, 10),
        text("La petite blague de chat : jokes4us.com ", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input24 = add([
        pos(100, 650),
        color(10, 10, 10),
        text("Merci pour votre visite ! A bientôt ! 0/", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input14 = add([
        pos(100, 690),
        color(10, 10, 10),
        text("Tous autres droits reservés © Virginia Mo", {
            width: 1100,
            size: 22,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    handleQuit(worldState, 400, 250, 'relax')

    input2.onClick( () => {
        window.open(
            'https://pixeljad.itch.io/villagetopdown',
            '_blank'
        );
    })
    input3.onClick( () => {
        window.open(
            'https://gif-superretroworld.itch.io/interior-pack',
            '_blank'
        );
    })
    input34.onClick( () => {
        window.open(
            'https://pipoya.itch.io/pipoya-free-rpg-character-sprites-nekonin',
            '_blank'
        );
    })
    input44.onClick( () => {
        window.open(
            'https://www.deviantart.com/laufeyon/art/UTAU-RPG-VX-Sprite-Sheet-1-323819435',
            '_blank'
        );
    })
    input4.onClick( () => {
        window.open(
            'https://filmcow.itch.io/ctu-soundtrack',
            '_blank'
        );
    })    
    input64.onClick( () => {
        window.open(
            'https://opengameart.org/content/lpc-style-farm-animals',
            '_blank'
        );
    })    
}
