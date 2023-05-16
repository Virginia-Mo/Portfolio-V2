export function setSkills(worldState) {
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
                '4': () => makeBigTile('bluecarpet0'),
                '5': () => makeBigTile('bluecarpet1'),
                '6': () => makeBigTile('bluecarpet2'),
                '7': () => makeBigTile('bluecarpet3'),
                '8': () => makeBigTile('bluecarpet4'),
                '9': () => makeBigTile('bluecarpet5'),
                'a': () => makeBigTile('bluecarpet6'),
                'b': () => makeBigTile('bluecarpet7'),
                'c': () => makeBigTile('bluecarpet8'),
                'd': () => makeBigTile('library1'),
                'e': () => makeBigTile('library2'),
                'f': () => makeBigTile('library3'),
                'g': () => makeBigTile('library4'),
                'h': () => makeBigTile('poufblue'),
                'k': () => makeBigTile('tree1'),
                'l': () => makeBigTile('tree2'),
                'm': () => makeBigTile('carpetblack'),
                'n': () => makeBigTile('carpetblack2'),
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
                '4': () => makeSmallTile('curtainblue'),
                '5': () => makeSmallTile('curtainblue1'),
                '6': () => makeSmallTile('curtainblue2'),
                '7': () => makeSmallTile('curtainblue3'),
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
    add([sprite('seriouscat'), scale(2.2), pos(520, 215), area(), body({
        isStatic: true
    }), 'seriouscat'])
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

    let spookybananas = new Audio("dist/audio/SpookyBananas.mp3")
    let doorclose = new Audio("dist/audio/doorclose.wav")
    doorclose.volume = 0.1
    spookybananas.play()
    spookybananas.volume = 0.1
    spookybananas.loop = true

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
        spookybananas = !spookybananas
        if (spookybananas){
        audio.play()
        textMusic.text = "Volume ON"
        } else {
            audio.pause()
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
        text("Cliquez sur 'ENTRER' pour faire défiler les dialogues",{
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

    onUpdate(() => {
        camPos(player.pos)
    })

    function setSprite(player, spriteName) {
        if (player.currentSprite !== spriteName) {
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }

    onKeyDown('down', () => {
        if (player.isInDialogue) {
            return
        }
        if (player.curAnim() !== 'godown') {
            setSprite(player, 'player-down')
            player.play('godown')
        }
        player.move(0, player.speed)
    })
    onKeyDown('up', () => {
        if (player.isInDialogue) {
            return
        }
        if (player.curAnim() !== 'goup') {
            setSprite(player, 'player-up')
            player.play('goup')
        }
        player.move(0, -player.speed)
    })

    onKeyDown('left', () => {
        if (player.isInDialogue) {
            return
        }
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)
    })
    onKeyDown('right', () => {
        if (player.isInDialogue) {
            return
        }
        player.flipX = true
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })

    onKeyRelease('left', () => {
        player.stop()
    })
    onKeyRelease('right', () => {
        player.stop()
    })
    onKeyRelease('up', () => {
        player.stop()
    })
    onKeyRelease('down', () => {
        player.stop()
    })
    if (!worldState) {
        worldState = {
            playerPos: vec2(850, 500),
        }
    }
    player.pos = worldState.playerPos
    player.onCollide('carpet2', () => {
        spookybananas.pause()
        spookybananas.currentTime = 0
        flashScreen()
        doorclose.play()
        setTimeout(() => {
            worldState.playerPos = vec2(1720, 300)
            go("world", worldState)
        }, 1000)
    })
    player.onCollide('seriouscat', () => {
        player.isInDialogue = true
        let dialogs = [
            ["Bonjour! Pour avoir plus d'informations sur les compétences techniques maitrisées"],
            ["dirigez vous vers les bibliothèques à droite."],
            ["Les soft skills et compétences de gestion de projet se trouvent à gauche."],
            ["Bonne lecture!"],
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
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
        })

        function updateDialog() {
            const [dialog] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()
    })
    player.onCollide('library3', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            go("tech", worldState)
        }, 500)
    })
    player.onCollide('library2', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            go("soft", worldState)
        }, 500)
    })
    function flashScreen() {
        const flash = add([rect(1280, 720), color(10, 10, 10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 1, (val) => flash.opacity = val, easings.easeOutCubic)
    }
}