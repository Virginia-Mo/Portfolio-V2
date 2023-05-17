import { playerMove } from "../utils/playerMove"
import { flashScreen } from "../utils/flashScreen"
import { dialogCats } from "../utils/dialogCats"
import { dialogObjects } from "../utils/dialogObjects"
export function setSchool(worldState) {
    function makeTile(type) {
        return [
            sprite('tile2'),
            {
                type
            }
        ]
    }

    function makeBigTile(type) {
        return [
            sprite('bigobject2'),
            {
                type
            }
        ]
    }

    function makeSmallTile(type) {
        return [
            sprite('smalltiles2'),
            {
                type
            }
        ]
    }
    setBackground(Color.fromHex("#000000"))
    const map = [
        addLevel([
            '                                      ',
            '                                      ',
            '       56666666666667                 ',
            '       9111111111111a                 ',
            '       9222222222222a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       cddddb00fdddde                 ',
            '            cdde                      ',
            '                                      ',
            '                                      ',
            '                                      ',

        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('ground-clear'),
                '1': () => makeTile('greenwalltop'),
                '2': () => makeTile('greenwallbottom'),
                '5': () => makeTile('cornerwallTL'),
                '6': () => makeTile('wall'),
                '7': () => makeTile('cornerwallTR'),
                '8': () => makeTile('firstcorner'),
                '9': () => makeTile('leftwall'),
                'a': () => makeTile('rightwall'),
                'b': () => makeTile('secondcorner'),
                'c': () => makeTile('cornerwallBL'),
                'd': () => makeTile('wallbottom'),
                'e': () => makeTile('cornerwallBR'),
                'f': () => makeTile('thirdcorner'),
            }
        }),
        addLevel([

            '                                      ',
            '                                      ',
            '                                      ',
            '             01                       ',
            '        dede 23 dede                  ',
            '        fgfg    fgfg                  ',
            '            o  o                      ',
            '            pqrs                      ',
            '                   k                  ',
            '         yz        l                  ',
            '         BC     456D                  ',
            '        h456    789E                  ',
            '         789    abc                   ',
            '        habc   F   k                  ',
            '         h h   G   l                  ',
            '             mn                       ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile('window1'),
                '1': () => makeBigTile('window2'),
                '2': () => makeBigTile('window3'),
                '3': () => makeBigTile('window4'),
                '4': () => makeBigTile('greencarpet0'),
                '5': () => makeBigTile('greencarpet1'),
                '6': () => makeBigTile('greencarpet2'),
                '7': () => makeBigTile('greencarpet3'),
                '8': () => makeBigTile('greencarpet4'),
                '9': () => makeBigTile('greencarpet5'),
                'a': () => makeBigTile('greencarpet6'),
                'b': () => makeBigTile('greencarpet7'),
                'c': () => makeBigTile('greencarpet8'),
                'd': () => makeBigTile('library1'),
                'e': () => makeBigTile('library2'),
                'f': () => makeBigTile('library3'),
                'g': () => makeBigTile('library4'),
                'h': () => makeBigTile('poufgreen'),
                'k': () => makeBigTile('tree1'),
                'l': () => makeBigTile('tree2'),
                'm': () => makeBigTile('carpetred'),
                'n': () => makeBigTile('carpetred1'),
                'o': () => makeBigTile('desk1'),
                'p': () => makeBigTile('desk2'),
                'q': () => makeBigTile('desk3'),
                'r': () => makeBigTile('desk5'),
                's': () => makeBigTile('desk6'),
                'u': () => makeBigTile('library1'),
                'v': () => makeBigTile('library2'),
                'w': () => makeBigTile('library3'),
                'x': () => makeBigTile('library4'),
                'y': () => makeBigTile('commode1'),
                'z': () => makeBigTile('commode2'),
                'B': () => makeBigTile('commode3'),
                'C': () => makeBigTile('commode4'),
                'D': () => makeBigTile('bench'),
                'E': () => makeBigTile('bench1'),
                'F': () => makeBigTile('minitableC'),
                'G': () => makeBigTile('minitableC2'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '             45                       ',
            '             67                       ',
            '                                      ',
            '            8  9                      ',
            '                                      ',
            '                                      ',
            '        0 2                           ',
            '        1 3                           ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeSmallTile('minitable'),
                '1': () => makeSmallTile('minitable1'),
                '2': () => makeSmallTile('book'),
                '3': () => makeSmallTile('book1'),
                '4': () => makeSmallTile('curtaingreen'),
                '5': () => makeSmallTile('curtaingreen1'),
                '6': () => makeSmallTile('curtaingreen2'),
                '7': () => makeSmallTile('curtaingreen3'),
                '8': () => makeSmallTile('flower'),
                '9': () => makeSmallTile('candle'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '       00000000000000                 ',
            '       00000000000000                 ',
            '       00000000000000                 ',
            '       00000000000000                 ',
            '       0    0000    0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0           00                 ',
            '       0000        00                 ',
            '       0           00                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0       0   00                 ',
            '       000000  000000                 ',
            '            0000                      ',
            '                                      ',
            '                                      ',
            '                                      ',

        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => [
                    area({
                        shape: new Rect(vec2(0), 16, 16)
                    }),
                    body({
                        isStatic: true
                    })
                ],
            }
        }),


    ]
    for (const layer of map) {
        layer.use(scale(2.5))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }
    add([sprite('carpet'), scale(2.5), pos(520, 600), area(), body({
        isStatic: true
    }), 'carpet12'])
    add([sprite('goldcat'), scale(2.2), pos(520, 210), area(), body({
        isStatic: true
    }), 'goldcat'])
    add([sprite('library'), scale(2.5), pos(320, 160), area(), body({
        isStatic: true
    }), 'library'])
    add([sprite('library'), scale(2.5), pos(400, 160), area(), body({
        isStatic: true
    }), 'library2'])
    add([sprite('library'), scale(2.5), pos(640, 160), area(), body({
        isStatic: true
    }), 'library3'])
    add([sprite('library'), scale(2.5), pos(720, 160), area(), body({
        isStatic: true
    }), 'library4'])
    add([sprite('books'), scale(2.5), pos(400, 400), area(), body({
        isStatic: true
    }), 'books'])

    let spookybananas = new Audio("/assets/audio/SpookyBananas.mp3")
    let doorclose = new Audio("/assets/audio/doorclose.wav")

    spookybananas.play()
    spookybananas.volume = 0.1
    spookybananas.loop = true
    doorclose.volume = 0.1

    let playMusic = true
    const textMusic = add([
        text("Volume ON",{
         font: "title",  
         width: 400, 
        }),
        pos(10 , 10),
        color(255,255,255),
        fixed(),
        area()
    ])
    textMusic.onClick(() => {
        playMusic = !playMusic
        if (playMusic){
        spookybananas.play()
        textMusic.text = "Volume ON"
        } else {
            spookybananas.pause()
            textMusic.text = "Volume OFF"
        }
    })
    const arrow = add([
        text("Utilisez les flêches du clavier pour vous déplacer",{
         font: "unscii",  
         width: 400, 
         size: 22,
        }),
        pos(10 , 50),
        color(255,255,255),
        fixed(),
        area()
    ])
    const arrow2 = add([
        text("Cliquez sur 'ENTRER' ou 'ESPACE' pour faire défiler les dialogues",{
         font: "unscii",  
         width: 400, 
         size: 22,
        }),
        pos(10 , 90),
        color(255,255,255),
        fixed(),
        area()
    ])
    const player = add([
        sprite('player-up'),
        scale(2.2),
        pos(550, 500),
        area(),
        body(),
        {
            speed: 400,
            isInDialogue: false,
        }
    ])

 playerMove(player)

    player.pos = worldState.playerPos
    player.onCollide('carpet12', () => {
        spookybananas.pause()
        spookybananas.currentTime = 0
        flashScreen()
        doorclose.play()
        setTimeout(() => {
            worldState.playerPos = vec2(470, 1200)
            go("world", worldState)
        }, 1000)
    })
        let dialogs = [
            ["Bonjour! Vous trouverez les différentes expériences professionnelles acquises à droite"],
            ["et à gauche les formations suivies."],
            ["Bonne lecture!"],
        ]   
    dialogCats(player, 'goldcat', dialogs)
    player.onCollide('books', () => {
        let dialog = ["Le poids de l'Internet entier est de seulement 50 grammes, soit le poids d'un oeuf!"]
        dialogObjects(player, dialog) }
    )
    libraryCollides('library3', "work")
    libraryCollides('library2', "studies")
    function libraryCollides(name, place){
        player.onCollide(name, () => {
            flashScreen()
            spookybananas.pause()
            spookybananas.currentTime = 0
            setTimeout(() => {
                go(place, worldState)
            }, 500)
    })
    }
}