import { playerMove } from "../utils/playerMove";
import { flashScreen } from "../utils/flashScreen";
import { dialogCats } from "../utils/dialogCats";
export function setRelax(worldState) {
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
                '1': () => makeTile('bluewalltop'),
                '2': () => makeTile('bluewallbottom'),
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
            '             H  H H                   ',
            '        dede IL I IJ                  ',
            '        fgfg  M    K                  ',
            '                                      ',
            '                                      ',
            '            45556                     ',
            '            78889                     ',
            '            78889                     ',
            '            78889                     ',
            '            abbbc                     ',
            '                   k                  ',
            '                   l                  ',
            '             mn                       ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {

                'd': () => makeBigTile('library1'),
                'e': () => makeBigTile('library2'),
                'f': () => makeBigTile('library3'),
                'g': () => makeBigTile('library4'),
                'h': () => makeBigTile('poufblue'),
                'k': () => makeBigTile('plant'),
                'l': () => makeBigTile('plant1'),
                'm': () => makeBigTile('carpetblack'),
                'n': () => makeBigTile('carpetblack2'),
                'H': () => makeBigTile('smallwindow1'),
                'I': () => makeBigTile('smallwindow2'),
                'J': () => makeBigTile('stairsup'),
                'K': () => makeBigTile('stairsup2'),
                'L': () => makeBigTile('tv1'),
                'M': () => makeBigTile('tv2'),
                '4': () => makeBigTile('bluecarpet0'),
                '5': () => makeBigTile('bluecarpet1'),
                '6': () => makeBigTile('bluecarpet2'),
                '7': () => makeBigTile('bluecarpet3'),
                '8': () => makeBigTile('bluecarpet4'),
                '9': () => makeBigTile('bluecarpet5'),
                'a': () => makeBigTile('bluecarpet6'),
                'b': () => makeBigTile('bluecarpet7'),
                'c': () => makeBigTile('bluecarpet8'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '             P+Q                      ',
            '            NRTUN                     ',
            '             RTU                      ',
            '            NVWXN                     ',
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
                'N': () => makeBigTile('smallchair'),
                'P': () => makeBigTile('tablebrown'),
                '+': () => makeBigTile('tablebrown1'),
                'Q': () => makeBigTile('tablebrown2'),
                'R': () => makeBigTile('tablebrown3'),
                'T': () => makeBigTile('tablebrown4'),
                'U': () => makeBigTile('tablebrown5'),
                'V': () => makeBigTile('tablebrown6'),
                'W': () => makeBigTile('tablebrown7'),
                'X': () => makeBigTile('tablebrown8'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '       00000000000000                 ',
            '       00000000000000                 ',
            '       0000   0     0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0      00    0                 ',
            '       0      0     0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0           00                 ',
            '       000000  000000                 ',
            '                                      ',
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
    add([sprite('carpet2'), scale(2.5), pos(520, 600), area(), body({
        isStatic: true
    }), 'carpet2'])
const mumcat = add([sprite('mumcat'), scale(2.2), pos(620, 310), area({scale:0.8}), body({
        isStatic: true
    }), 'mumcat'])
const stairs = add([sprite('stairsup'), scale(2.5), pos(760, 200), area({scale:0.6}), body({
        isStatic: true
    }), 'stairsup'])
const library =  add([sprite('library'), scale(2.5), pos(320, 160), area(), body({
        isStatic: true
    }), 'library2'])

const library2 = add([sprite('library'), scale(2.5), pos(400, 160), area(), body({
        isStatic: true
    }), 'library4'])
    add([sprite('flower'), scale(2.5), pos(560, 370), area(), body({
        isStatic: true
    }), 'flower'])
    const play = add([sprite('play'), scale(0.85), pos(170, 15), area(), fixed(), body({
        isStatic: true
    }), 'play'])
    let spookybananas = new Audio("/assets/audio/spookyBananas.mp3")
    let doorclose = new Audio("/assets/audio/doorclose.wav")
    spookybananas.volume = 0.1
    spookybananas.loop = true
    doorclose.volume = 0.1

    let playMusic = false

    const textMusic = add([
        text("Musique ",{
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
        play.use(sprite('pause'))
        } else {
            spookybananas.pause()
            play.use(sprite('play'))
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

    if (!worldState) {
        worldState = {
            playerPos: vec2(550, 500),
            playerSprite: 'player-down',
        }
    }
    player.pos = worldState.playerPos
    player.sprite = worldState.playerSprite
    
    player.onCollide('mumcat', () => {
        if (player.currentSprite === 'player-side') {
            mumcat.use(sprite("mumcatside"))
        } else if (player.currentSprite === 'player-up') {
            mumcat.use(sprite("mumcatdown"))
        } else {
            mumcat.use(sprite("mumcatup"))
        }
        player.isInDialogue = true
        let dialogs = [
            ["Bonjour! Bienvenue à la maison!"],
            ["N'hésitez pas à lire un livre ou vous reposez dans la chambre à l'étage."],
            ["PS:Vous aimez ma coiffure? So Shiny!"],
        ]

        let curDialog = 0
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 190, {
                radius: 32
            }),
            outline(4),
            pos(150, 500),
            fixed(),
            color(237, 221, 187),
        ])

        const content = dialogueBox.add([
            text('', {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(40, 30),
            fixed()
        ])

        onKeyPress("enter", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
                mumcat.use(sprite("mumcat"))
            }
        })
        onKeyPress("space", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
                mumcat.use(sprite("mumcat"))
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
            mumcat.use(sprite("mumcat"))
        })

        function updateDialog() {
            const [dialog] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()
    })

    player.onCollide('carpet2', () => {
        spookybananas.pause()
        spookybananas.currentTime = 0
        flashScreen()
        doorclose.play()
        setTimeout(() => {
            worldState.playerPos = vec2(420, 1300)
            go("world", worldState)
        }, 1000)
    })

    player.onCollide('stairsup', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            worldState.playerPos = vec2(760, 250)
            go("relax2", worldState)
        }, 500)
    })
    collides('library')
    collides('library2')
    function collides(boardname){
        player.onCollide(boardname, () => {
            flashScreen()
            spookybananas.pause()
            spookybananas.currentTime = 0
            setTimeout(() => {
                go('copyrights', worldState)
            }, 500)
        })    
    }
}