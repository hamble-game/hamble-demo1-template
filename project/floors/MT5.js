main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "5",
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
    "events": {},
    "changeFloor": {
        "5,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "12,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [ 27, 31, 81,  0,  0,  1,  0,  0,  0, 31,  0, 22,603],
    [  0, 28,  1,213,  0,  0,203,  0,  0,  1,  0,206, 21],
    [  0,206,  0,  0,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,  1,  0,206,  0,  0,203,  0,  0, 81,  0,  0, 61],
    [ 63, 32,  1,  0,  1, 31,  0,  0,206,  1,213, 27,  0],
    [  1, 83,  1,  1,  1,213,  1,  1,  0,  1,  0,  1, 81],
    [  0,  0,  0,  1,  0, 28,  0,  1,  0,  0,  0,  0,203],
    [  0,203,  0,206,  0,  0,  0, 81,  0,  0,  0,  1,  0],
    [206,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1,  1,  0],
    [  0,  0, 81,609,222,  0,  0, 31,  1,  0,  0,  1,  0],
    [  0,  0,  1,  1,  0,  0,  1,  0,  1,  0,  0,  1,213],
    [  0,  0,  1,  0,  0,  0,  1,206, 61,203,  0, 82, 28],
    [  0,203,  0,  0,  0, 88,  1, 27,  1,  0,  0,  1, 87]
],
    "bgmap": [

],
    "fgmap": [

]
}