function setProjects(worldState) {
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
            '      566666666666667                 ',
            '      91111111111111a                 ',
            '      92222222222222a                 ',
            '      90000000000000a                 ',
            '      90000000000000a                 ',
            '      90000000000000a                 ',
            '      90000000000000a                 ',
            '      900000000fdddde                 ',
            '      900000000a                      ',
            '      900000000a                      ',
            '      cddb00fdde                      ',
            '         cdde                         ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',

        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('ground-clear'),
                '1': () => makeTile('redwalltop'),
                '2': () => makeTile('redwallbottom'),
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
            '        d d d d d01                   ',
            '       fe e e e e23f                  ',
            '       g4555555556 g                  ',
            '        7888888889                    ',
            '        abbbbbbbbc q                  ',
            '                 h r                  ',
            '        w                             ',
            '        st   kl                       ',
            '       wuv   mn                       ',
            '          op                          ',
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
                'd': () => makeBigTile('miniboard'),
                'e': () => makeBigTile('miniboard1'),
                'f': () => makeBigTile('plant'),
                'g': () => makeBigTile('plant1'),
                'h': () => makeBigTile('poufred'),
                'k': () => makeBigTile('commode1'),
                'l': () => makeBigTile('commode2'),
                'm': () => makeBigTile('commode3'),
                'n': () => makeBigTile('commode4'),
                'o': () => makeBigTile('carpetred'),
                'p': () => makeBigTile('carpetred1'),
                'q': () => makeBigTile('sofa1'),
                'r': () => makeBigTile('sofa2'),
                's': () => makeBigTile('smalltable'),
                't': () => makeBigTile('smalltable1'),
                'u': () => makeBigTile('smalltable2'),
                'v': () => makeBigTile('smalltable3'),
                'w': () => makeBigTile('smallchair'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                 34                   ',
            '                 56                   ',
            '                                      ',
            '                                      ',
            '               7                      ',
            '               8                      ',
            '                                      ',
            '        a9   0                        ',
            '             1                        ',
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
                '0': () => makeSmallTile('book'),
                '1': () => makeSmallTile('book1'),
                '3': () => makeSmallTile('curtainred'),
                '4': () => makeSmallTile('curtainred1'),
                '5': () => makeSmallTile('curtainred2'),
                '6': () => makeSmallTile('curtainred3'),
                '7': () => makeSmallTile('minitable'),
                '8': () => makeSmallTile('minitable1'),
                '9': () => makeSmallTile('bottle'),
                'a': () => makeSmallTile('coffee'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '      000000000000000                 ',
            '      000000000000000                 ',
            '      00           00                 ',
            '      0            00                 ',
            '      0             0                 ',
            '      0             0                 ',
            '      0        0    0                 ',
            '      0        000000                 ',
            '      0 0      0                      ',
            '      0 00   000                      ',
            '      0000  0000                      ',
            '         0000                         ',
            '                                      ',
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
    add([sprite('carpet'), scale(2.5), pos(400, 520), area(), body({
        isStatic: true
    }), 'carpet'])
    add([sprite('miniboard'), scale(2.5), pos(320, 200), area(), body({
        isStatic: true
    }), 'board1'])
    add([sprite('miniboard'), scale(2.5), pos(400, 200), area(), body({
        isStatic: true
    }), 'board2'])
    add([sprite('miniboard'), scale(2.5), pos(480, 200), area(), body({
        isStatic: true
    }), 'board3'])
    add([sprite('miniboard'), scale(2.5), pos(560, 200), area(), body({
        isStatic: true
    }), 'board4'])
    add([sprite('miniboard'), scale(2.5), pos(640, 200), area(), body({
        isStatic: true
    }), 'board5'])
    const cat = add([sprite('meloncat'), scale(2.2), pos(300, 370), area(), body({
        isStatic: true
    }), 'meloncat'])
    
    const player = add([
        sprite('player-up'),
        scale(2.2),
        pos(400, 420),
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
            playerPos: vec2(400, 420),
        }
    }
    player.pos = worldState.playerPos
    player.onCollide('carpet', () => {
        flashScreen()
        setTimeout(() => {
            worldState.playerPos = vec2(1840, 940)
            go("world", worldState)
        }, 1000)
    })

    player.onCollide('meloncat', () => {
        cat.use(sprite("meloncatside"))
        player.isInDialogue = true
        let dialogs = [
            [ "Bonjour! Bienvenue dans la maison des projets!" ],
            [ "Vous pouvez consulter les différents projets crées sur le mur." ],
            [ "Ces derniers sont classés par niveau de difficulté (du projet fullstack à la simple todo liste!)" ],
            [ "Merci pour votre attention, bonne lecture!" ],
        ]
        
        let curDialog = 0
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200, { radius: 32 }),
            outline(4),
            pos(150,500),
            color(237, 221, 187),
            fixed()
        ])
    
        const content = dialogueBox.add([
            text('',
            {
                size : 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])
    
        onKeyPress("space", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
                    if (curDialog ===0 ){
                destroy(dialogueBox)
                player.isInDialogue = false
                cat.use(sprite("meloncat"))
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
            cat.use(sprite("meloncat"))
        })
        function updateDialog() {
            const [ dialog ] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()

    })

    player.onCollide('board1', () => {
        flashScreen()
        setTimeout(() => {
            go("kdc", worldState)
        }, 1000)
    })
    player.onCollide('board2', () => {
        flashScreen()
        setTimeout(() => {
            go("madji", worldState)
        }, 1000)
    })
    player.onCollide('board3', () => {
        flashScreen()
        setTimeout(() => {
            go("pnb", worldState)
        }, 1000)
    })
    player.onCollide('board4', () => {
        flashScreen()
        setTimeout(() => {
            go("pokedex", worldState)
        }, 1000)
    })
    player.onCollide('board5', () => {
        flashScreen()
        setTimeout(() => {
            go("todo", worldState)
        }, 1000)
    })
    function flashScreen() {
        const flash = add([rect(1280, 720), color(10, 10, 10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 0.5, (val) => flash.opacity = val, easings.easeInOutQuad)
    }
}