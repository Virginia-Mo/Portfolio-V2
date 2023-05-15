function setCopyrights(worldState) {
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
        text("Un petit mot sur la création de ce portfolio..J'ai utilisé la bibliothèque KaboomJS qui permet de créer des jeux en Javascipt.", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(100, 220),
        color(10, 10, 10),
        text("Après avoir imaginer la map et les maisons, je les ai codé en utilisant les 'tileset' de Jadson 'PixelJad' : (lien ici) ", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input3 = add([
        pos(100, 310),
        color(10, 10, 10),
        text("et l'interieur des maisons avec les 'tileset' de Gif (lien ici)", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input34 = add([
        pos(100, 390),
        color(10, 10, 10),
        text("Les personnages chats sont de Pipoya : ICI", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input44 = add([
        pos(100, 450),
        color(10, 10, 10),
        text("et le personnage me représentant a été dessiné par Laufeyon et trouvé : ICI", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input4 = add([
        pos(100, 500),
        color(10, 10, 10),
        text("Les musiques viennent du célèbre créateur de Charlie the Unicorn :D  -> FilmCow.com <- ", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input54 = add([
        pos(100, 600),
        color(10, 10, 10),
        text("La petite blague de chat : jokes4us.com ", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area({cursor: "pointer"}),
    ])
    const input24 = add([
        pos(100, 650),
        color(10, 10, 10),
        text("Merci pour votre visite ! A bientôt ! 0/", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input14 = add([
        pos(100, 690),
        color(10, 10, 10),
        text("Tous autres droits reservés © Virginia Mo", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const details = add([
        pos(10, 10),
        color(245, 67, 54),
        text("ESC pour quitter", {
            font: "unscii",
            width: 1100,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    if (!worldState){
        worldState = {
            playerPos : (850,500),
        }
    }

    onKeyPress("escape", () => {
        worldState.playerPos = vec2(400, 250)
        go("relax", worldState)
    })
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
}