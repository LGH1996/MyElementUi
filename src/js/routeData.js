export default {
    "msg": "Successful",
    "code": 200,
    "data": [
        {
            "name": "/",
            "path": "//",
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
                    "path": "application",
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
                    "path": "demand",
                    "hidden": false,
                    "component": "Demand/demand",
                    "meta": {
                        "title": "采购需求池",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Enquiry",
            "path": "/Enquiry",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "采购询价管理",
                "icon": "基础数据维护",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "Enquiry",
                    "path": "enquiry",
                    "hidden": false,
                    "component": "Enquiry/enquiry",
                    "meta": {
                        "title": "询价单",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Quotation",
                    "path": "quotation",
                    "hidden": false,
                    "component": "Enquiry/quotation",
                    "meta": {
                        "title": "报价单",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Allot",
                    "path": "allot",
                    "hidden": false,
                    "component": "Enquiry/allot",
                    "meta": {
                        "title": "分配比价",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Pricing",
                    "path": "pricing",
                    "hidden": false,
                    "component": "Enquiry/pricing",
                    "meta": {
                        "title": "定价单",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Bidding",
            "path": "/Bidding",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "采购招标管理",
                "icon": "redis",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "Project",
                    "path": "project",
                    "hidden": false,
                    "component": "Bidding/project",
                    "meta": {
                        "title": "采购项目",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Bid",
                    "path": "bid",
                    "hidden": false,
                    "component": "Bidding/bid",
                    "meta": {
                        "title": "采购标段",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Source",
                    "path": "source",
                    "hidden": false,
                    "component": "Bidding/source",
                    "meta": {
                        "title": "采购寻源单",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "WinBidding",
                    "path": "winBidding",
                    "hidden": false,
                    "component": "Bidding/win_bidding",
                    "meta": {
                        "title": "中标单",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Order",
            "path": "/Order",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "供应商订单管理",
                "icon": "order",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "Manage",
                    "path": "manage",
                    "hidden": false,
                    "component": "Order/list",
                    "meta": {
                        "title": "订单管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Contract",
            "path": "/Contract",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "合同管理",
                "icon": "基础数据维护",
                "noCache": false
            },
            "children": [
                {
                    "name": "ContractTemplate",
                    "path": "contractTemplate",
                    "hidden": false,
                    "component": "Contract/contractTemplate",
                    "meta": {
                        "title": "合同模板",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "ContractDraft",
                    "path": "contractDraft",
                    "hidden": false,
                    "component": "Contract/contractDraft",
                    "meta": {
                        "title": "合同录入",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "ContractLedger",
                    "path": "contractLedger",
                    "hidden": false,
                    "component": "Contract/contractLedger",
                    "meta": {
                        "title": "合同列表",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "ContractChange",
                    "path": "contractChange",
                    "hidden": false,
                    "component": "Contract/contractChange",
                    "meta": {
                        "title": "合同变更",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Warning",
                    "path": "warning",
                    "hidden": false,
                    "component": "Contract/warning",
                    "meta": {
                        "title": "合同预警",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Supplier",
            "path": "/Supplier",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "国内供应商管理",
                "icon": "资金周报",
                "noCache": false
            },
            "children": [
                {
                    "name": "Register",
                    "path": "register",
                    "hidden": false,
                    "component": "Supplier/register",
                    "meta": {
                        "title": "供应商登记",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Admittance",
                    "path": "admittance",
                    "hidden": false,
                    "component": "Supplier/admittance",
                    "meta": {
                        "title": "供应商准入",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Supplier",
                    "path": "supplier",
                    "hidden": false,
                    "component": "Supplier/supplier",
                    "meta": {
                        "title": "供应商库",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "PaymentDays",
                    "path": "paymentDays",
                    "hidden": false,
                    "component": "Supplier/payment_days",
                    "meta": {
                        "title": "供应商账期",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Change",
                    "path": "change",
                    "hidden": false,
                    "component": "Supplier/change",
                    "meta": {
                        "title": "信息变更",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Reappraise",
                    "path": "reappraise",
                    "hidden": false,
                    "component": "Supplier/reappraise",
                    "meta": {
                        "title": "重新评估列表",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Expansion",
                    "path": "expansion",
                    "hidden": false,
                    "component": "Supplier/expansion",
                    "meta": {
                        "title": "品类扩充列表",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Examine",
                    "path": "examine",
                    "hidden": false,
                    "component": "Supplier/examine",
                    "meta": {
                        "title": "供应商考核",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Category",
                    "path": "category",
                    "hidden": false,
                    "component": "Supplier/category",
                    "meta": {
                        "title": "供应商类别管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Certification",
                    "path": "certification",
                    "hidden": false,
                    "component": "Supplier/certification",
                    "meta": {
                        "title": "资质文件配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "AdmittanceTemplate",
                    "path": "admittanceTemplate",
                    "hidden": false,
                    "component": "Supplier/admittance_template",
                    "meta": {
                        "title": "准入评分要素配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "AssessmentTemplate",
                    "path": "assessmentTemplate",
                    "hidden": false,
                    "component": "Supplier/assessment_template",
                    "meta": {
                        "title": "考核评分要素配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "SupplierForeign",
            "path": "/SupplierForeign",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "境外供应商管理",
                "icon": "资金周报",
                "noCache": false
            },
            "children": [
                {
                    "name": "Register",
                    "path": "register",
                    "hidden": false,
                    "component": "SupplierForeign/register",
                    "meta": {
                        "title": "供应商登记",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Admittance",
                    "path": "admittance",
                    "hidden": false,
                    "component": "SupplierForeign/admittance",
                    "meta": {
                        "title": "供应商准入",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Supplier",
                    "path": "supplier",
                    "hidden": false,
                    "component": "SupplierForeign/supplier",
                    "meta": {
                        "title": "供应商库",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "PaymentDays",
                    "path": "paymentDays",
                    "hidden": false,
                    "component": "SupplierForeign/payment_days",
                    "meta": {
                        "title": "供应商账期",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Change",
                    "path": "change",
                    "hidden": false,
                    "component": "SupplierForeign/change",
                    "meta": {
                        "title": "信息变更",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Reappraise",
                    "path": "reappraise",
                    "hidden": false,
                    "component": "SupplierForeign/reappraise",
                    "meta": {
                        "title": "重新评估列表",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Expansion",
                    "path": "expansion",
                    "hidden": false,
                    "component": "SupplierForeign/expansion",
                    "meta": {
                        "title": "品类扩充列表",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Examine",
                    "path": "examine",
                    "hidden": false,
                    "component": "SupplierForeign/examine",
                    "meta": {
                        "title": "供应商考核",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Category",
                    "path": "category",
                    "hidden": false,
                    "component": "SupplierForeign/category",
                    "meta": {
                        "title": "供应商类别管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Certification",
                    "path": "certification",
                    "hidden": false,
                    "component": "SupplierForeign/certification",
                    "meta": {
                        "title": "资质文件配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "AdmittanceTemplate",
                    "path": "admittanceTemplate",
                    "hidden": false,
                    "component": "SupplierForeign/admittance_template",
                    "meta": {
                        "title": "准入评分要素配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "ProcessCenter",
            "path": "/ProcessCenter",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "审批流程配置",
                "icon": "集团借贷情况表",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "WorkflowList",
                    "path": "workflowList",
                    "hidden": false,
                    "component": "workflowConfiguration/list",
                    "meta": {
                        "title": "流程表单配置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "FormDesign",
                    "path": "formDesign",
                    "hidden": true,
                    "component": "workflowConfiguration/Design",
                    "meta": {
                        "title": "表单设计",
                        "icon": "#",
                        "activeMenu": "/ProcessCenter/workflowList",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Data",
            "path": "/Data",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "采购主数据管理",
                "icon": "example",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "ServiceClass",
                    "path": "serviceClass",
                    "hidden": false,
                    "component": "MainData/classify",
                    "meta": {
                        "title": "服务类别管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "ServiceData",
                    "path": "serviceData",
                    "hidden": false,
                    "component": "MainData/database",
                    "meta": {
                        "title": "服务数据库",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "MaterialsClass",
                    "path": "materialsClass",
                    "hidden": false,
                    "component": "MainData/classify_goods",
                    "meta": {
                        "title": "物资类别管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "MaterialsData",
                    "path": "materialsData",
                    "hidden": false,
                    "component": "MainData/database_goods",
                    "meta": {
                        "title": "物资数据库",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Database",
            "path": "/Database",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "基础数据配置",
                "icon": "FAQ",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "ContractSubject",
                    "path": "contractSubject",
                    "hidden": false,
                    "component": "Database/contractSubject",
                    "meta": {
                        "title": "合同主体",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "ContractClassify",
                    "path": "contractClassify",
                    "hidden": false,
                    "component": "Database/contractClassify",
                    "meta": {
                        "title": "合同类型",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Currency",
                    "path": "currency",
                    "hidden": false,
                    "component": "Database/currency",
                    "meta": {
                        "title": "币种管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "PaymentType",
                    "path": "paymentType",
                    "hidden": false,
                    "component": "Database/paymentType",
                    "meta": {
                        "title": "结算方式",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Bank",
                    "path": "bank",
                    "hidden": false,
                    "component": "Database/bank",
                    "meta": {
                        "title": "银行管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Illegal",
                    "path": "illegal",
                    "hidden": false,
                    "component": "Database/illegal",
                    "meta": {
                        "title": "供应商违规类型",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Country",
                    "path": "country",
                    "hidden": false,
                    "component": "Database/country",
                    "meta": {
                        "title": "境外国家城市",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "SystemUser",
            "path": "/SystemUser",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "系统用户",
                "icon": "salesAgent",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "Dept",
                    "path": "dept",
                    "hidden": false,
                    "component": "SystemUser/dept",
                    "meta": {
                        "title": "组织机构",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "User",
                    "path": "user",
                    "hidden": false,
                    "component": "SystemUser/user",
                    "meta": {
                        "title": "成员管理",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                },
                {
                    "name": "Role",
                    "path": "role",
                    "hidden": false,
                    "component": "SystemUser/role",
                    "meta": {
                        "title": "权限设置",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": true
                    }
                }
            ]
        },
        {
            "name": "Log",
            "path": "/log",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "日志管理",
                "icon": "log",
                "activeMenu": "",
                "noCache": false
            },
            "children": [
                {
                    "name": "Operation",
                    "path": "operation",
                    "hidden": false,
                    "component": "SystemUser/log_oper",
                    "meta": {
                        "title": "操作日志",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                },
                {
                    "name": "Login",
                    "path": "login",
                    "hidden": false,
                    "component": "SystemUser/log_login",
                    "meta": {
                        "title": "登录日志",
                        "icon": "#",
                        "activeMenu": "",
                        "noCache": false
                    }
                }
            ]
        }
    ]
}