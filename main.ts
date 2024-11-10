function zuoyi () {
    if (chedao != 1) {
        chedao += -1
    }
}
function shengchen (chedao1shibushihua: boolean, chedao2shibushihua: boolean, chedao3shibushihua: boolean) {
    bushitanshewu(1, chedao1shibushihua)
    bushitanshewu(2, chedao2shibushihua)
    bushitanshewu(3, chedao3shibushihua)
}
function xinchedao (jihao: number) {
    if (jihao == 1) {
        mySprite.setPosition(60, 80)
    } else if (jihao == 2) {
        mySprite.setPosition(80, 80)
    } else {
        mySprite.setPosition(100, 80)
    }
}
function tanshe () {
    suijishu = randint(1, 5)
    if (suijishu == 1) {
        shengchen(true, true, true)
    } else if (suijishu == 2) {
        shengchen(false, true, false)
    } else if (suijishu == 3) {
        shengchen(true, false, false)
    } else if (suijishu == 4) {
        shengchen(false, false, true)
    } else {
        shengchen(true, true, false)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    youyi()
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "HAPPY BIRTHDAY,NAHIDA")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.gameOver(true)
})
function youyi () {
    if (chedao != 3) {
        chedao += 1
    }
}
function bushitanshewu (chedao: number, shibushihua: boolean) {
    if (chedao == 1) {
        if (shibushihua) {
            if (randint(0, 1) == 1) {
                wupin1 = sprites.createProjectileFromSide(assets.image`flower`, 0, sudu)
                wupin1.setPosition(60, 0)
                wupin1.setKind(SpriteKind.Food)
            }
        } else {
            if (randint(0, 2) == 1) {
                wupin1 = sprites.createProjectileFromSide(assets.image`huapin`, 0, sudu)
                wupin1.setPosition(60, 0)
                wupin1.setKind(SpriteKind.Enemy)
            }
        }
    } else if (chedao == 2) {
        if (shibushihua) {
            if (randint(0, 1) == 1) {
                wupin2 = sprites.createProjectileFromSide(assets.image`flower`, 0, sudu)
                wupin2.setPosition(80, 0)
                wupin2.setKind(SpriteKind.Food)
            }
        } else {
            if (randint(0, 2) == 1) {
                wupin2 = sprites.createProjectileFromSide(assets.image`huapin`, 0, sudu)
                wupin2.setPosition(80, 0)
                wupin2.setKind(SpriteKind.Enemy)
            }
        }
    } else {
        if (shibushihua) {
            if (randint(0, 1) == 1) {
                wupin3 = sprites.createProjectileFromSide(assets.image`flower`, 0, sudu)
                wupin3.setPosition(100, 0)
                wupin3.setKind(SpriteKind.Food)
            }
        } else {
            if (randint(0, 2) == 1) {
                wupin3 = sprites.createProjectileFromSide(assets.image`huapin`, 0, sudu)
                wupin3.setPosition(100, 0)
                wupin3.setKind(SpriteKind.Enemy)
            }
        }
    }
}
info.onLifeZero(function () {
    mySprite.setImage(assets.image`konglingche`)
    game.setGameOverMessage(false, "NAHIDA IS DIED...")
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() < maxlive) {
        info.changeLifeBy(1)
    } else {
        info.changeScoreBy(5)
    }
    sprite.sayText(":)", 1000, false)
    sprites.destroy(otherSprite)
})
function gaisudu (sudu_: number) {
    sudu = sudu_
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    zuoyi()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.sayText(":(", 1000, false)
    sprites.destroy(otherSprite)
})
let wupin3: Sprite = null
let wupin2: Sprite = null
let wupin1: Sprite = null
let suijishu = 0
let sudu = 0
let maxlive = 0
let mySprite: Sprite = null
let chedao = 0
chedao = 2
mySprite = sprites.create(assets.image`lingche`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`beijing`)
tiles.setCurrentTilemap(tilemap`ditu`)
maxlive = 4
info.setLife(4)
sudu = 10
let gengxingshijian = 20000 / sudu
info.startCountdown(120)
music.play(music.createSong(assets.song`bgm`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(2000, function () {
    if (sudu == 10) {
        tanshe()
    }
})
game.onUpdateInterval(1000, function () {
    if (sudu == 20) {
        tanshe()
    }
})
forever(function () {
    xinchedao(chedao)
    if (info.score() < 50) {
        gaisudu(10)
        maxlive = 4
    } else if (info.score() < 100) {
        gaisudu(20)
        maxlive = 5
    } else {
        gaisudu(40)
        maxlive = 6
    }
})
game.onUpdateInterval(500, function () {
    if (sudu == 40) {
        tanshe()
    }
})
