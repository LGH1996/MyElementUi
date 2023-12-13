export default {
    "msg": "Successful",
    "code": 200,
    "data": [
        {
            "name": "/",
            "path": "/hellow1?lgh=qwer",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "工作台",
                "icon": "工作台",
                "noCache": false
            }
        },
        {
            "name": "Demand",
            "path": "/Demand",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "采购需求管理",
                "icon": "收支统计表",
                "noCache": false
            },
            "children": [
                {
                    "name": "Application",
                    "path": "/hellow2?lgh=asdf",
                    "hidden": false,
                    "component": "Demand/application",
                    "meta": {
                        "title": "采购申请",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Demand",
                    "path": "/hellow3?lgh=zxcv",
                    "hidden": false,
                    "component": "Demand/demand",
                    "meta": {
                        "title": "采购需求池",
                        "icon": "收支统计表",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        }
    ]
}