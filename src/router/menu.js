import HollowWrold from '../components/HelloWorld.vue'
export let menu = [{
	path: '/Supplier',
	component: HollowWrold,
	children: [{
		path: 'register/add',
		name: 'addRegister',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '创建供应商',
			activeMenu: '/Supplier/register',
			noCache: false,
		}
	}, {
		path: 'register/:id',
		name: 'registerDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商登记详情',
			activeMenu: '/Supplier/register'
		}
	}, {
		path: 'admittance/approve',
		name: 'admittanceApprove',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商准入申请',
			activeMenu: '/Supplier/admittance',
		}
	}, {
		path: 'admittance/:id',
		name: 'admittanceDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商准入详情',
			activeMenu: '/Supplier/admittance'
		}
	}, {
		path: 'supplier/:id',
		name: 'supplierDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商详情',
			activeMenu: '/Supplier/supplier'
		}
	}, {
		path: 'supplier/expansion/add',
		name: 'supplierExpansionAdd',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '品类扩充',
			activeMenu: '/Supplier/supplier'
		}
	}, {
		path: 'expansion/:id',
		name: 'expansionDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '品类扩充详情',
			activeMenu: '/Supplier/expansion'
		}
	}, {
		path: 'reappraise/:id',
		name: 'reappraiseDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '重新考核详情',
			activeMenu: '/Supplier/reappraise'
		}
	}, {
		path: 'change/add',
		name: 'supplierChangeAdd',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '变更申请',
			activeMenu: '/Supplier/change'
		}
	}, {
		path: 'change/:id',
		name: 'supplierChangeDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '变更详情',
			activeMenu: '/Supplier/change'
		}
	}, {
		path: 'category/add',
		name: 'categoryAdd',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建供应商类别',
			activeMenu: '/Supplier/category'
		}
	}, {
		path: 'category/:id',
		name: 'categoryDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商类别详情',
			activeMenu: '/Supplier/category'
		}
	}]
}, {
	path: '/SupplierForeign',
	component: HollowWrold,
	children: [{
		path: 'register/add',
		name: 'addRegisterForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '创建供应商',
			activeMenu: '/SupplierForeign/register',
			noCache: false,
		}
	}, {
		path: 'register/:id',
		name: 'registerDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商登记详情',
			activeMenu: '/SupplierForeign/register'
		}
	}, {
		path: 'admittance/approve',
		name: 'admittanceApproveForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商准入申请',
			activeMenu: '/SupplierForeign/admittance',
		}
	}, {
		path: 'admittance/:id',
		name: 'admittanceDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商准入详情',
			activeMenu: '/SupplierForeign/admittance'
		}
	}, {
		path: 'supplier/:id',
		name: 'supplierDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商详情',
			activeMenu: '/SupplierForeign/supplier'
		}
	}, {
		path: 'supplier/expansion/add',
		name: 'supplierExpansionAddForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '品类扩充',
			activeMenu: '/SupplierForeign/supplier'
		}
	}, {
		path: 'expansion/:id',
		name: 'expansionDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '品类扩充详情',
			activeMenu: '/SupplierForeign/expansion'
		}
	}, {
		path: 'reappraise/:id',
		name: 'reappraiseDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '重新考核详情',
			activeMenu: '/SupplierForeign/reappraise'
		}
	}, {
		path: 'change/add',
		name: 'supplierChangeAddForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '变更申请',
			activeMenu: '/SupplierForeign/change'
		}
	}, {
		path: 'change/:id',
		name: 'supplierChangeDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '变更详情',
			activeMenu: '/SupplierForeign/change'
		}
	}, {
		path: 'category/add',
		name: 'categoryAddForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建供应商类别',
			activeMenu: '/SupplierForeign/category'
		}
	}, {
		path: 'category/:id',
		name: 'categoryDetailForeign',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '供应商类别详情',
			activeMenu: '/SupplierForeign/category'
		}
	}]
}, {
	path: '/Contract',
	component: HollowWrold,
	children: [{
		path: 'contractTemplate/add',
		name: 'addTemplate',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建合同模板',
			activeMenu: '/Contract/contractTemplate'
		}
	}, {
		path: 'contractTemplate/:id',
		name: 'contractTemplateDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '合同模板详情',
			activeMenu: '/Contract/contractTemplate'
		}
	}, {
		path: 'contractDraft/add',
		name: 'addContract',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建合同',
			activeMenu: '/Contract/contractDraft'
		}
	}, {
		path: 'contractDraft/:id',
		name: 'contractDraft',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '合同录入详情',
			activeMenu: '/Contract/contractDraft'
		}
	}, {
		path: 'contractChange/add',
		name: 'addContractChange',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建合同变更',
			activeMenu: '/Contract/contractChange'
		}
	}, {
		path: 'contractChange/:id',
		name: 'contractChangeDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '合同变更详情',
			activeMenu: '/Contract/contractChange'
		}
	}, {
		path: 'contractLedger/:id',
		name: 'contractLedger',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '合同台账详情',
			activeMenu: '/Contract/contractLedger'
		}
	}],
}, {
	path: '/Demand',
	component: HollowWrold,
	children: [{
		path: 'application/add',
		name: 'addApplication',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建采购申请',
			activeMenu: '/Demand/application'
		}
	}, {
		path: 'application/:id',
		name: 'applicationDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '采购申请详情',
			activeMenu: '/Demand/application'
		}
	}]
}, {
	path: '/Enquiry',
	component: HollowWrold,
	children: [{
		path: 'enquiry/add',
		name: 'addEnquiry',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建询价单',
			activeMenu: '/Enquiry/enquiry'
		}
	}, {
		path: 'enquiry/:id',
		name: 'enquiryDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '询价单详情',
			activeMenu: '/Enquiry/enquiry'
		}
	}, {
		path: 'quotation/:id',
		name: 'quotationDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '报价单详情',
			activeMenu: '/Enquiry/quotation'
		}
	}]
}, {
	path: '/Data',
	component: HollowWrold,
	children: [{
		path: 'serviceClass/add',
		name: 'addServiceClass',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建服务分类',
			activeMenu: '/Data/serviceClass'
		}
	}, {
		path: 'serviceClass/:id',
		name: 'serviceClassDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '服务分类详情',
			activeMenu: '/Data/serviceClass'
		}
	}, {
		path: 'serviceData/add',
		name: 'addServiceData',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建服务数据',
			activeMenu: '/Data/serviceData'
		}
	}, {
		path: 'serviceData/:id',
		name: 'serviceDataDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '服务数据详情',
			activeMenu: '/Data/serviceData'
		}
	},{
		path: 'materialsClass/add',
		name: 'addMaterialsClass',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建物资分类',
			activeMenu: '/Data/materialsClass'
		}
	}, {
		path: 'materialsClass/:id',
		name: 'materialsClassDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '物资分类详情',
			activeMenu: '/Data/materialsClass'
		}
	}, {
		path: 'materialsData/add',
		name: 'addMaterialsData',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '新建物资数据',
			activeMenu: '/Data/materialsData'
		}
	}, {
		path: 'materialsData/:id',
		name: 'materialsDataDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '物资数据详情',
			activeMenu: '/Data/materialsData'
		}
	}]
}, {
	path: '/Order',
	component: HollowWrold,
	children: [{
		path: 'manage/add',
		name: 'addOrder',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '创建订单',
			activeMenu: '/Order/manage'
		}
	}, {
		path: 'manage/:id',
		name: 'orderDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '订单详情',
			activeMenu: '/Order/manage'
		}
	}]
}, {
	path: '/Bidding',
	component: HollowWrold,
	children: [{
		path: 'project/add',
		name: 'addProject',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '创建项目',
			activeMenu: '/Bidding/project'
		}
	}, {
		path: 'project/:id',
		name: 'projectDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '项目详情',
			activeMenu: '/Bidding/project'
		}
	},{
		path: 'bid/add',
		name: 'addBid',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '创建标段',
			activeMenu: '/Bidding/bid'
		}
	}, {
		path: 'bid/:id',
		name: 'bidDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '标段详情',
			activeMenu: '/Bidding/bid'
		}
	}, {
		path: 'source/:id',
		name: 'sourceDetail',
		component: HollowWrold,
		hidden: true,
		meta: {
			title: '采购寻源单详情',
			activeMenu: '/Bidding/source'
		}
	}]
}]