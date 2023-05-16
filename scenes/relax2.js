export function setRelax2(worldState) {
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
            '       cdddddddddddde                 ',
            '                                      ',
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
            '                H H                   ',
            '         de     I I                   ',
            '        Ofg        J                  ',
            '        P                             ',
            '                                      ',
            '             L                        ',
            '             M                        ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                  k                   ',
            '                  l                   ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {

                'd': () => makeBigTile('commode1'),
                'e': () => makeBigTile('commode2'),
                'f': () => makeBigTile('commode5'),
                'g': () => makeBigTile('commode6'),
                'h': () => makeBigTile('bed'),
                'k': () => makeBigTile('plant'),
                'l': () => makeBigTile('plant1'),
                'm': () => makeBigTile('bed2'),
                'H': () => makeBigTile('smallwindow1'),
                'I': () => makeBigTile('smallwindow2'),
                'J': () => makeBigTile('stairsdown'),
                'L': () => makeBigTile('tv1'),
                'M': () => makeBigTile('tv2'),
                'N': () => makeBigTile('computertable'),
                'O': () => makeBigTile('computertable1'),
                'P': () => makeBigTile('backchair'),

            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '                                      ',
            '            S                         ',
            '          Q T                         ',
            '          R                           ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
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
                'Q': () => makeSmallTile('book'),
                'R': () => makeSmallTile('book1'),
            }
        }),
        addLevel([
            '                                      ',
            '                                      ',
            '       00000000000000                 ',
            '       00000000000000                 ',
            '       0000         0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0     0      0                 ',
            '       0            0                 ',
            '       0           00                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0            0                 ',
            '       0         0  0                 ',
            '       00000000000000                 ',
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


    const glassescat = add([sprite('catglassesdown'), scale(2.2), pos(735, 400), area(), body({
        isStatic: true
    }), 'catglassesdown'])
    add([sprite('stairsdown'), scale(2.5), pos(760, 200), area({
        scale: 0.7
    }), body({
        isStatic: true
    }), 'stairsdown'])
    add([sprite('computer'), scale(2.5), pos(320, 170), area(), body({
        isStatic: true
    }), 'computer'])
    add([sprite('computer2'), scale(2.5), pos(320, 130), area(), body({
        isStatic: true
    }), 'computer2'])
    add([sprite('tv'), scale(2.5), pos(520, 360), area(), body({
        isStatic: true
    }), 'tv'])
    add([sprite('bed1'), scale(3.5), pos(320, 490), area(), body({
        isStatic: true
    }), 'bed1'])
    add([sprite('bed2'), scale(3.5), pos(320, 545), area(), body({
        isStatic: true
    }), 'bed2'])
    add([sprite('books'), scale(2.5), pos(400, 200), area({
        scale: 0.5
    }), body({
        isStatic: true
    }), 'books'])
    add([sprite('map'), scale(2.5), pos(490, 115), area(), body({
        isStatic: true
    }), 'map'])

    const badjoke = new Audio("dist/audio/badjoke.wav")
    let spookybananas = new Audio("dist/audio/SpookyBananas.mp3")
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
        pos(450, 500),
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
            playerPos: vec2(450, 500),
        }
    }
    player.pos = worldState.playerPos
    player.sprite = worldState.playerSprite
    player.onCollide('catglassesdown', () => {
        if (player.currentSprite === 'player-side') {
            glassescat.use(sprite("catglassesside"))
        } else if (player.currentSprite === 'player-up') {
            glassescat.use(sprite("catglassesdown"))
        } else {
            glassescat.use(sprite("catglassessup"))
        }
        player.isInDialogue = true
        let dialogs = [
            ["Comment appelle-t-on un chat qui chante?"],
            ["..."],
            ["Chat-kira!"],
            ["..."],
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
            if (curDialog === 3) {
                badjoke.volume = 0.1
                badjoke.play()
            }
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
                glassescat.use(sprite("catglassesdown"))
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
            glassescat.use(sprite("catglassesdown"))
        })

        function updateDialog() {
            const [dialog] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()
    })
    player.onCollide('bed2', () => {
        const textbed = [
            ["Vous avez fait une petite sieste, vous êtes requinqué!"]
        ]
        flashScreen()
        dialog(textbed)
        setTimeout(() => {
            worldState.playerPos = vec2(390, 545)
            go("relax2", worldState)
        }, 2000)

    })
    player.onCollide('tv', () => {
        const textbed = [
            ["Vous jouez à votre jeu favori! Hélas, vous n'avez pas gagné..."]
        ]
        dialog(textbed)
    })
    player.onCollide('computer', () => {
        const audioCompter = new Audio("dist/audio/keyboard.wav")
        const textbed = [
            ["Historique de recherche: 'Comment gagner à tous les coups à pierre feuille ciseaux'..Intéressant.."]
        ]
        audioCompter.play()
        audioCompter.volume = 0.1
        setTimeout(() => {
            dialog(textbed), 1500
        })
        
    })
    player.onCollide('books', () => {
        const textbed = [
            ["Un paquet de livres sur le développement web et la vie des chats."]
        ]
        dialog(textbed)
    })
    player.onCollide('stairsdown', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            worldState.playerPos = vec2(760, 260)
            worldState.playerSprite = "player-down"
            go("relax", worldState)
        }, 500)
    })
    player.onCollide('map', () => {
        flashScreen()
        spookybananas.pause()
        spookybananas.currentTime = 0
        setTimeout(() => {
            go("map", worldState)
        }, 500)
    })

    function flashScreen() {
        const flash = add([rect(1280, 720), color(10, 10, 10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 1, (val) => flash.opacity = val, easings.easeOutCubic)
    }

    function dialog(dialogs) {
        player.isInDialogue = true
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
            destroy(dialogueBox)
            player.isInDialogue = false
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
        })
        content.text = dialogs
    }
}