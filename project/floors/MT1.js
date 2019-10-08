main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "4,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "5,1": [
            "\t[【说明书】] 第一行数字代表怪物剩余血量，第二行数字代表硬碰硬会受到的伤害。",
            "\t[【说明书】]弓箭射中怪物后，怪物会对你进行追击，通过上下楼可以摆脱追击，获取红蓝宝石提升属性可以提高击杀效率。",
            "\t[【说明书】]清完本层后上楼梯打开。"
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [201,  0,  0,  0, 87,  1, 88,  1,  0,  0,  0,  0,  0],
    [  0,  1,  1,  0,  1, 45,  0,  1,  0,  1,  0,  1,  0],
    [  0,  0,  0,201,  0,  0,  0,  0,202, 81,  0,  1,  0],
    [  0,  0,  1,  1,  0,  0,  1,  1,  0,  1,  0,  1,  0],
    [  1,  0,  1,  0,  0,  1,  0,  0,  0,  1,  0,  1,  0],
    [  0,  0,  1,  0,  0,  0,  1,  0,  1,  1,  0,  0,201],
    [  1,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  1, 28],
    [  1,201,  0,  0,  0,202,  1,  1,  0,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  0,  0,  1,201,  0,  0,  0,202],
    [  1,  0,  1,  0,  0,  0,  0,  1,  0,  1,  1,  1,  0],
    [ 21,  0,  1,  0,  1,  0,  0,  1,  0, 83, 63,  1, 27],
    [  1,  0,  0,202,  0,  0,  0,  1,  0,  1,  1,  1, 81],
    [  0,  0,  1,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}