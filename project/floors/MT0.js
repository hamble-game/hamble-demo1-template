main.floors.MT0=
{
    "floorId": "MT0",
    "title": "主塔 0 层",
    "name": "0",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  5,  1,  0,  1,  5,  1,  1,  1,  1],
    [  1,  1,  1,  5,  5,  1,  0,  1,  5,  5,  1,  1,  1],
    [  1,  1,  5,  5,  5,  1,201,  1,  5,  5,  5,  1,  1],
    [  1,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  1],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1, 85,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  1,124,  1,  5,  5,  5,  5,  5]
],
    "firstArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [],
                "false": [
                    "\t[hero]放我出去！我不打了！",
                    "\t[fairy]你，你可是我花费一百年才召唤出的勇士，我还等着你击败魔王呢，怎么能还没出发就退缩了？",
                    "\t[hero]我不敢打怪啊，太疼了，会死的！！",
                    "\t[fairy]啊啊啊啊，神啊，我为什么会召唤出这么一个勇士来，我给你一件装备，怪物碰到你就死，求你去打怪行不行？",
                    "\t[hero]什么？还有这种无双操作？快让我试试！",
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,3": [
            "\t[hero]你个瘪三，竟然算计我！明明怪物摸我还是会掉血啊！！",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down"
                ]
            },
            "\t[fairy]我给你的buff叫【一碰就炸】，碰到怪物时会对你造成\r[yellow]（怪物攻击力-你的防御力）+怪物血量\r[] 的伤害。即：怪物先砍你一刀，这个buff才会触发把怪物炸掉。而且炸掉也会产生伤害。",
            "\t[hero]哈？？？那我不打了，除非再给我一把AK，让我远距离杀怪！",
            "\t[fairy]那是什么东西……",
            "\t[hero]总之，没有秒天秒地的东西我是不干的。",
            "\t[fairy]好吧，再给你个buff，打开装备栏装上这支箭，就可以无限射箭了，这是我最后的私藏了……",
            {
                "type": "setValue",
                "name": "item:skill1",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:arrow1",
                "value": "1"
            },
            "\t[fairy]对了，这个buff叫做【无限箭制】，但是箭支是需要金币补充的，我送你三把红钥匙和10金币启动资金。红钥匙可以咸了换钱，但影响最终评分。",
            {
                "type": "addValue",
                "name": "status:money",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "item:redKey",
                "value": "3"
            },
            "\t[fairy]加油吧，弓之勇者！"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "width": 13,
    "height": 13
}