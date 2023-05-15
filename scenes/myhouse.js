function setMyHouse(worldState) {
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
            '                                      ',
            '      56666666666666666667            ',
            '      9333333333333333333a            ',
            '      9444444444444444444a            ',
            '      9111222111221112211a            ',
            '      9111111112222111221a            ',
            '      9222111111111111111a            ',
            '      9111122111112211111a            ',
            '      9122111111222221221a            ',
            '      9111112221111111111a            ',
            '      9112211111222111111a            ',
            '      cddddddb1111fdddddde            ',
            '             cb11fe                   ',
            '              cdde                    ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',

        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('black'),
                '1': () => makeTile('ground-dark'),
                '2': () => makeTile('ground-dark-details'),
                '3': () => makeTile('brickwalltop'),
                '4': () => makeTile('brickwallbottom'),
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
            '                                      ',
            '        o 01    01    01              ',
            '        p 23de  23deq 23k             ',
            '            fg    fgr   l             ',
            '        F F        456 s              ',
            '        uvw        789 t              ',
            '        xyz        abc                ',
            '        BCD            s              ',
            '        E E        h h tk             ',
            '              G  G      l             ',
            '              H  H                    ',
            '               mn                     ',
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
                '4': () => makeBigTile('redcarpet0'),
                '5': () => makeBigTile('redcarpet1'),
                '6': () => makeBigTile('redcarpet2'),
                '7': () => makeBigTile('redcarpet3'),
                '8': () => makeBigTile('redcarpet4'),
                '9': () => makeBigTile('redcarpet5'),
                'a': () => makeBigTile('redcarpet6'),
                'b': () => makeBigTile('redcarpet7'),
                'c': () => makeBigTile('redcarpet8'),
                'd': () => makeBigTile('board'),
                'e': () => makeBigTile('board1'),
                'f': () => makeBigTile('board2'),
                'g': () => makeBigTile('board3'),
                'h': () => makeBigTile('poufred'),
                'k': () => makeBigTile('tree1'),
                'l': () => makeBigTile('tree2'),
                'm': () => makeBigTile('carpetred'),
                'n': () => makeBigTile('carpetred1'),
                'o': () => makeBigTile('etagere'),
                'p': () => makeBigTile('etagere1'),
                'q': () => makeBigTile('tv1'),
                'r': () => makeBigTile('tv2'),
                's': () => makeBigTile('sofa1'),
                't': () => makeBigTile('sofa2'),
                'u': () => makeBigTile('table1'),
                'v': () => makeBigTile('table2'),
                'w': () => makeBigTile('table3'),
                'x': () => makeBigTile('table4'),
                'y': () => makeBigTile('table5'),
                'z': () => makeBigTile('table6'),
                'B': () => makeBigTile('table7'),
                'C': () => makeBigTile('table8'),
                'D': () => makeBigTile('table9'),
                'E': () => makeBigTile('backchair'),
                'F': () => makeBigTile('chair'),
                'G': () => makeBigTile('plant'),
                'H': () => makeBigTile('plant1'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '          34    34    34              ',
            '          56    56   056              ',
            '                     1                ',
            '                                      ',
            '                                      ',
            '        7 2                           ',
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
                '2': () => makeSmallTile('coffee'),
                '3': () => makeSmallTile('curtainred'),
                '4': () => makeSmallTile('curtainred1'),
                '5': () => makeSmallTile('curtainred2'),
                '6': () => makeSmallTile('curtainred3'),
                '7': () => makeSmallTile('bottle'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '      00000000000000000000            ',
            '      00000000000000000000            ',
            '      00000000000000000000            ',
            '      0                 00            ',
            '      0                  0            ',
            '      0                  0            ',
            '      0 000              0            ',
            '      0                  0            ',
            '      0                  0            ',
            '      0                 00            ',
            '      00000000    00000000            ',
            '             0    0                   ',
            '              0000                    ',
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

    add([sprite('carpet'), scale(2.5), pos(600, 560), area(), 'carpet'])
    add([sprite('happycat'), scale(2.2), pos(600, 220), area({scale: 0.6}), 'happycat'])
    add([sprite('board'), scale(2.5), pos(480, 200), area({scale:0.6}), 'board'])
    add([sprite('board'), scale(2.5), pos(720, 200), area({scale:0.6}), 'board2'])

    let spookybananas = new Audio("/audio/SpookyBananas.mp3")
    let doorclose = new Audio("/audio/doorclose.wav")
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
        pos(600, 450),
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
            playerPos: player.pos,
        }
    }
    player.pos = worldState.playerPos
    player.onCollide('carpet', () => {
        spookybananas.pause()
        spookybananas.currentTime = 0
        flashScreen()
        doorclose.play()
        setTimeout(() => {
            worldState.playerPos = vec2(950, 500)
            go("world", worldState)
        }, 1000)
    })

    player.onCollide('happycat', () => {
        player.isInDialogue = true
        let dialogs = [
            ["Bonjour! Vous trouverez à gauche une description succinte de Virginia."],
            ["Et à droite, les différentes informations de contact."],
            ["Bonne lecture!"],
        ]

        let curDialog = 0
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 170, {
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
    player.onCollide('board', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            go("aboutme", worldState)
        }, 500)
    })
    player.onCollide('board2', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            go("contact", worldState)
        }, 500)
    })
    function flashScreen() {
        const flash = add([rect(1280, 720), color(10, 10, 10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 1, (val) => flash.opacity = val, easings.easeOutCubic)
    }


}