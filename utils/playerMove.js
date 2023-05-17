export function playerMove(player){
    onUpdate(() => {
        camPos(player.pos)
    })
    if (/Android|iPhone/i.test(navigator.userAgent)) {
            const back = add([sprite('back'), scale(2), pos(1055, 600), area(), body({
        isStatic: true
    }), fixed(), 'back'])
    const next = add([sprite('next'), scale(2), pos(1185, 600), area(), body({
        isStatic: true
    }), fixed(), 'next'])
    const up = add([sprite('up'), scale(2), pos(1120, 550), area(), body({
        isStatic: true
    }), fixed(), 'up'])
    const down = add([sprite('down'), scale(2), pos(1120, 650), area(), body({
        isStatic: true
    }), fixed(), 'down'])
        down.onClick(() => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'godown'){
            setSprite(player, 'player-down')
            player.play('godown')
        }
        player.move(0,player.speed)
    })

    up.onClick(() => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'goup'){
            setSprite(player, 'player-up')
            player.play('goup')
        }
        player.move(0,-player.speed)
    }) 

    back.onClick(() => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = false
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)
    })

    back.onClick(() => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = false
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)
    })
    next.onClick(() => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = true
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })
      }


    function setSprite(player, spriteName){
        if (player.currentSprite !== spriteName){
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }
    
    onKeyDown('down', () => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'godown'){
            setSprite(player, 'player-down')
            player.play('godown')
        }
        player.move(0,player.speed)
    })

    
    onKeyDown('up', () => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'goup'){
            setSprite(player, 'player-up')
            player.play('goup')
        }
        player.move(0,-player.speed)
    })

    
    onKeyDown('left', () => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = false
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)
    })

    onKeyDown('right', () => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = true
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })



releaseKey('left')
releaseKey('right')
releaseKey('up')
releaseKey('down')


    function releaseKey(key){
        onKeyRelease(key, () => {
            player.stop()
        })
    }
}