/* eslint-disable array-callback-return */
import React, { useState, useMemo } from "react";
import { message, Menu } from 'antd';
import './index.less';
const { SubMenu } = Menu;
const Tooltip = ({ children, text, ...rest }) => {

  const [show, setShow] = useState(false);



  return (

    <div className="tooltip-container">
      <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
        {text}
        <span className="tooltip-arrow"></span>
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}

      >
        {children}
      </div>
    </div>
  )

}


const TestTool = () => {

  const [textColor, setTextColor] = useState('#ff0000');

  const changeColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

  return (
    <div>
      <Tooltip text="Simple tooltip">
        <button style={{ marginTop: 50 }}>Hover me!</button>
      </Tooltip>
      <br />
      <br />
      <Tooltip text={`${changeColor()}`}>
        <button onClick={() => { setTextColor(changeColor()) }} style={{ color: textColor, marginTop: 50, padding: '5px 10px' }}>click Me</button>
      </Tooltip>
    </div>

  );
}


// function Child({ visible }) {

//   useEffect(() => {
//     message.info('我只在页面挂载是打印');
//     return () => {
//       message.info('我只在页面卸载时打印')
//     }
//   }, []);
//   return visible ? 'true' : 'false'

// }


function Child({ count }) {
  return <p style={{ width: '100%', margin: '20px 0' }}>当前传递的count为:{count}</p>
}


const HookDemo = () => {

  // const [visible,changeVisible] = useState(true);
  // return (
  //   <div>
  //     {
  //       visible && <Child visible={visible}/>
  //     }
  //     <button onClick={()=>{changeVisible(!visible)}}>
  //       改变visible
  //     </button>
  //   </div>
  // )

  // const [count1, changeCount1] = useState(0);
  // const [count2, changeCount2] = useState(10);

  // const calculateCount = useMemo(() => {
  //   message.info('重新生成计算结果');
  //   return count1 *10+count2;
  // }, [count1,count2]);

  // return (
  //   <div>
  //       {calculateCount}
  //       <button onClick={()=>{changeCount1(count1+1)}}>改变count1</button>
  //       <button onClick={()=>{changeCount2(count2+1)}}>改变count2</button>
  //   </div>
  // )

  const [count1, changeCount1] = useState(0);
  const [count2, changeCount2] = useState(10);

  const formatDataTree = (data) => {

    let parents = data.filter(p => p.pid === 0),
      chilren = data.filter(c => c.pid !== 0);
    dataToTree(parents, chilren);
    return parents;


  }

  const dataToTree = (parents, children) => {
    parents.map(p => {
      children.map((c, i) => {
        if (p.id === c.pid) {
          let _chilren = JSON.parse(JSON.stringify(children));
          _chilren.splice(i, 1);
          dataToTree([c], _chilren);
          if (p.chilren) {
            p.chilren.push(c);
          } else {
            p.chilren = [c];
          }
        }
      })
    })

  }

  const menuListArr = [
    {
      "id": 40002,
      "menuCode": "memberCompanies",
      "nameZn": "企业成员",
      "nameEn": "memberCompanies",
      "path": "memberCompanies",
      "componentPath": "memberCompanies",
      "icon": null,
      "parentCode": "Employeemanagement",
      "isHidden": "N",
      "sort": null,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 40001
    },
    {
      "id": 40011,
      "menuCode": "strategy",
      "nameZn": "策略中心",
      "nameEn": "strategy",
      "path": "Strategy",
      "componentPath": "Strategy",
      "icon": "clzx",
      "parentCode": "strategyCenter",
      "isHidden": "N",
      "sort": null,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 20001
    },
    {
      "id": 40009,
      "menuCode": "AuthorizationManagement",
      "nameZn": "企微授权管理",
      "nameEn": "AuthorizationManagement",
      "path": "authorizationManagement",
      "componentPath": "/weComManagements/authorizationManagement/",
      "icon": null,
      "parentCode": "enterprisesettings",
      "isHidden": "N",
      "sort": null,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 40008
    },
    {
      "id": 41006,
      "menuCode": "RoleList",
      "nameZn": "角色信息",
      "nameEn": "RoleList",
      "path": "/user/roleList",
      "componentPath": "/user/roleList",
      "icon": null,
      "parentCode": "user",
      "isHidden": "N",
      "sort": null,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41004
    },
    {
      "id": 43001,
      "menuCode": "welcomeWords",
      "nameZn": "欢迎语",
      "nameEn": "WelcomeWords",
      "path": "/pages/weComManagements/materialHouse/welcomeWords",
      "componentPath": "/pages/weComManagements/materialHouse/welcomeWords",
      "icon": null,
      "parentCode": "wechatSale",
      "isHidden": "N",
      "sort": 0,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 24002
    },
    {
      "id": 108,
      "menuCode": "IndexLayout",
      "nameZn": "首页",
      "nameEn": "IndexLayout",
      "path": "IndexLayout",
      "componentPath": "IndexLayout",
      "icon": "index",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 0,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 0
    },
    {
      "id": 38004,
      "menuCode": "WeComcustomerList",
      "nameZn": "客户列表",
      "nameEn": "WeComcustomerList",
      "path": "/weComManagements/labelManagement/",
      "componentPath": "/weComManagements/labelManagement/",
      "icon": null,
      "parentCode": "addressbookManage",
      "isHidden": "N",
      "sort": 0,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 18001
    },
    {
      "id": 36004,
      "menuCode": "CustomerList",
      "nameZn": "客户池",
      "nameEn": "CustomerList",
      "path": "/customer/customerList",
      "componentPath": "/customer/customerList",
      "icon": null,
      "parentCode": "customermanagement",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36001
    },
    {
      "id": 19001,
      "menuCode": "channelLiveCode",
      "nameZn": "引流获客",
      "nameEn": "channelLiveCode",
      "path": "/pages/weComManagements/channelLiveCode/",
      "componentPath": "/pages/weComManagements/channelLiveCode/",
      "icon": "khyl",
      "parentCode": "enterprise",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 9052
    },
    {
      "id": 40012,
      "menuCode": "StrategyList",
      "nameZn": "策略管理",
      "nameEn": "strategyList",
      "path": "StrategyList",
      "componentPath": "StrategyList",
      "icon": null,
      "parentCode": "strategy",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 40011
    },
    {
      "id": 41013,
      "menuCode": "MenuConfigList",
      "nameZn": "菜单信息",
      "nameEn": "MenuConfigList",
      "path": "/app/menuConfigList",
      "componentPath": "/app/menuConfigList",
      "icon": null,
      "parentCode": "app",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41010
    },
    {
      "id": 36001,
      "menuCode": "customermanagement",
      "nameZn": "客户管理",
      "nameEn": "customermanagement",
      "path": "customer",
      "componentPath": "customer",
      "icon": "khgl",
      "parentCode": "customer",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 109
    },
    {
      "id": 41009,
      "menuCode": "OrgList",
      "nameZn": "机构信息",
      "nameEn": "OrgList",
      "path": "/organization/orgList",
      "componentPath": "/organization/orgList",
      "icon": null,
      "parentCode": "organization",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41007
    },
    {
      "id": 36009,
      "menuCode": "CustomergroupList",
      "nameZn": "客群列表",
      "nameEn": "CustomergroupList",
      "path": "/customer/customergroupList",
      "componentPath": "/customer/customergroupList",
      "icon": null,
      "parentCode": "cluemanagement",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36002
    },
    {
      "id": 28002,
      "menuCode": "QwWorkBenchConfig",
      "nameZn": "工作台配置",
      "nameEn": "QwWorkBenchConfig",
      "path": "/weComManagements/qwWorkBenchConfig/",
      "componentPath": "/weComManagements/qwWorkBenchConfig/",
      "icon": null,
      "parentCode": "wechatSale",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 24002
    },
    {
      "id": 125,
      "menuCode": "MouldList",
      "nameZn": "模板管理",
      "nameEn": "MouldList",
      "path": "/operation/mouldList",
      "componentPath": "/operation/mouldList",
      "icon": "mbgl",
      "parentCode": "operation",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": "",
      "pid": 124
    },
    {
      "id": 41004,
      "menuCode": "user",
      "nameZn": "用户管理",
      "nameEn": "user",
      "path": "user",
      "componentPath": "user",
      "icon": "yhgl",
      "parentCode": "sysmanage",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41003
    },
    {
      "id": 38003,
      "menuCode": "CustomerLabel",
      "nameZn": "客户标签",
      "nameEn": "CustomerLabel",
      "path": "/weComManagements/labelManagement/",
      "componentPath": "/weComManagements/labelManagement/",
      "icon": null,
      "parentCode": "addressbookManage",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 18001
    },
    {
      "id": 19002,
      "menuCode": "LiveCodeManage",
      "nameZn": "活码管理",
      "nameEn": "LiveCodeManage",
      "path": "/pages/weComManagements/channelLiveCode/liveCodeManageMent",
      "componentPath": "/pages/weComManagements/channelLiveCode/liveCodeManageMent",
      "icon": null,
      "parentCode": "channelLiveCode",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 19001
    },
    {
      "id": 109,
      "menuCode": "customer",
      "nameZn": "客户中心",
      "nameEn": "customer",
      "path": "customer",
      "componentPath": "customer",
      "icon": "UserOutlined",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 1,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": "",
      "pid": 0
    },
    {
      "id": 41008,
      "menuCode": "OrgRoleList",
      "nameZn": "机构角色信息",
      "nameEn": "OrgRoleList",
      "path": "/organization/roleList",
      "componentPath": "/organization/roleList",
      "icon": null,
      "parentCode": "organization",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41007
    },
    {
      "id": 18001,
      "menuCode": "addressbookManage",
      "nameZn": "客户管理",
      "nameEn": "addressbookManage",
      "path": "addressbookManage",
      "componentPath": "addressbookManage",
      "icon": "khgj",
      "parentCode": "enterprise",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 9052
    },
    {
      "id": 41005,
      "menuCode": "UserList",
      "nameZn": "用户信息",
      "nameEn": "UserList",
      "path": "/user/userList",
      "componentPath": "/user/userList",
      "icon": null,
      "parentCode": "user",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41004
    },
    {
      "id": 34001,
      "menuCode": "SopSales",
      "nameZn": "服销SOP",
      "nameEn": "SopSales",
      "path": "/weComManagements/sopSales/",
      "componentPath": "/weComManagements/sopSales/",
      "icon": null,
      "parentCode": "wechatSale",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 24002
    },
    {
      "id": 41007,
      "menuCode": "organization",
      "nameZn": "机构管理",
      "nameEn": "organization",
      "path": "organization",
      "componentPath": "organization",
      "icon": "jggl",
      "parentCode": "sysmanage",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41003
    },
    {
      "id": 30001,
      "menuCode": "LiveCodeMemberPack",
      "nameZn": "\"千码\"成员包",
      "nameEn": "LiveCodeMemberPack",
      "path": "pages/weComManagements/channelLiveCode/liveCodeMemberPack",
      "componentPath": "pages/weComManagements/channelLiveCode/liveCodeMemberPack",
      "icon": null,
      "parentCode": "channelLiveCode",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 19001
    },
    {
      "id": 36008,
      "menuCode": "ClueCirculationList",
      "nameZn": "线索流转管理",
      "nameEn": "ClueCirculationList",
      "path": "/pages/clueCirculation/clueCirculationList",
      "componentPath": "/pages/clueCirculation/clueCirculationList",
      "icon": null,
      "parentCode": "cluemanagement",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36002
    },
    {
      "id": 41012,
      "menuCode": "AppList",
      "nameZn": "应用信息",
      "nameEn": "AppList",
      "path": "/app/list",
      "componentPath": "/app/list",
      "icon": null,
      "parentCode": "app",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41010
    },
    {
      "id": 38005,
      "menuCode": "CycleMassList",
      "nameZn": "群发任务",
      "nameEn": "CycleMassList",
      "path": "/weComManagements/weMass/cycleMassList",
      "componentPath": "/weComManagements/weMass/cycleMassList",
      "icon": null,
      "parentCode": "addressbookManage",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 18001
    },
    {
      "id": 36002,
      "menuCode": "cluemanagement",
      "nameZn": "线索管理",
      "nameEn": "cluemanagement",
      "path": "/clue",
      "componentPath": "/clue",
      "icon": "xsgl",
      "parentCode": "customer",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 109
    },
    {
      "id": 41001,
      "menuCode": "materialManagement",
      "nameZn": "内容管理",
      "nameEn": "MaterialManagement",
      "path": "/materialHouse/materialManagement",
      "componentPath": "/materialHouse/materialManagement",
      "icon": "nrgl",
      "parentCode": "operation",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 124
    },
    {
      "id": 36005,
      "menuCode": "WorkWechatList",
      "nameZn": "企微客户池",
      "nameEn": "WorkWechatList",
      "path": "/customer/workWechatList",
      "componentPath": "/customer/workWechatList",
      "icon": null,
      "parentCode": "customermanagement",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36001
    },
    {
      "id": 40013,
      "menuCode": "StrategyFlow",
      "nameZn": "策略流水",
      "nameEn": "StrategyFlow",
      "path": "StrategyFlow",
      "componentPath": "StrategyFlow",
      "icon": null,
      "parentCode": "strategy",
      "isHidden": "N",
      "sort": 2,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 40011
    },
    {
      "id": 40014,
      "menuCode": "EventManagement",
      "nameZn": "事件管理",
      "nameEn": "eventManagement",
      "path": "EventManagement",
      "componentPath": "EventManagement",
      "icon": null,
      "parentCode": "strategy",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 40011
    },
    {
      "id": 36006,
      "menuCode": "CustomerBlackList",
      "nameZn": "黑名单管理",
      "nameEn": "CustomerBlackList",
      "path": "/pages/customerBlackList",
      "componentPath": "/pages/customerBlackList",
      "icon": null,
      "parentCode": "customermanagement",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36001
    },
    {
      "id": 41010,
      "menuCode": "app",
      "nameZn": "资源管理",
      "nameEn": "app",
      "path": "app",
      "componentPath": "app",
      "icon": "zygl",
      "parentCode": "sysmanage",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 41003
    },
    {
      "id": 42001,
      "menuCode": "posterComposition",
      "nameZn": "海报合成",
      "nameEn": "PosterComposition",
      "path": "/materialHouse/posterComposition",
      "componentPath": "/materialHouse/posterComposition",
      "icon": "hbhc",
      "parentCode": "operation",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 124
    },
    {
      "id": 24002,
      "menuCode": "wechatSale",
      "nameZn": "客户转化",
      "nameEn": "wechatSale",
      "path": "/weComManagements",
      "componentPath": "/weComManagements",
      "icon": "yygj",
      "parentCode": "enterprise",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 9052
    },
    {
      "id": 31001,
      "menuCode": "LiveCodeMemberWelcome",
      "nameZn": "\"千码\"欢迎语",
      "nameEn": "LiveCodeMemberWelcome",
      "path": "/pages/weComManagements/channelLiveCode/liveCodeMemberWelcome",
      "componentPath": "/pages/weComManagements/channelLiveCode/liveCodeMemberWelcome",
      "icon": null,
      "parentCode": "channelLiveCode",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 19001
    },
    {
      "id": 41011,
      "menuCode": "WeMassList",
      "nameZn": "群发流水",
      "nameEn": "WeMassList",
      "path": "/weComManagements/weMass/weMassList/",
      "componentPath": "/weComManagements/weMass/weMassList/",
      "icon": null,
      "parentCode": "addressbookManage",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 18001
    },
    {
      "id": 36007,
      "menuCode": "LeadManageList",
      "nameZn": "线索分发管理",
      "nameEn": "LeadManageList",
      "path": "/operation/leadManageList",
      "componentPath": "/operation/leadManageList",
      "icon": null,
      "parentCode": "cluemanagement",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 36002
    },
    {
      "id": 24004,
      "menuCode": "WechatServiceSales",
      "nameZn": "微店商品库",
      "nameEn": "WechatServiceSales",
      "path": "/weComManagements/wechatserviceSales/",
      "componentPath": "/weComManagements/wechatserviceSales/",
      "icon": null,
      "parentCode": "wechatSale",
      "isHidden": "N",
      "sort": 3,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 24002
    },
    {
      "id": 40001,
      "menuCode": "Employeemanagement",
      "nameZn": "员工管理",
      "nameEn": "Employeemanagement",
      "path": "/employeemanagement",
      "componentPath": "/employeemanagement",
      "icon": "yggl",
      "parentCode": "enterprise",
      "isHidden": "N",
      "sort": 4,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 9052
    },
    {
      "id": 38008,
      "menuCode": "Elizabeth",
      "nameZn": "企微渠道管理",
      "nameEn": "Elizabeth",
      "path": "/enterprise/elizabeth",
      "componentPath": "/enterprise/elizabeth",
      "icon": null,
      "parentCode": "wechatSale",
      "isHidden": "N",
      "sort": 4,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 24002
    },
    {
      "id": 40008,
      "menuCode": "enterprisesettings",
      "nameZn": "企微设置",
      "nameEn": "enterprisesettings",
      "path": "Enterprisesettings",
      "componentPath": "Enterprisesettings",
      "icon": "qwsz",
      "parentCode": "enterprise",
      "isHidden": "N",
      "sort": 5,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 9052
    },
    {
      "id": 9052,
      "menuCode": "enterprise",
      "nameZn": "企业微信",
      "nameEn": "enterprise",
      "path": "/enterprise",
      "componentPath": "/enterprise",
      "icon": "WechatOutlined",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 9,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 0
    },
    {
      "id": 20001,
      "menuCode": "strategyCenter",
      "nameZn": "运营中心",
      "nameEn": "StrategyCenter",
      "path": "/StrategyCenter",
      "componentPath": "/StrategyCenter",
      "icon": "ApartmentOutlined",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 10,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 0
    },
    {
      "id": 124,
      "menuCode": "operation",
      "nameZn": "内容中心",
      "nameEn": "operation",
      "path": "operation",
      "componentPath": "operation",
      "icon": "AuditOutlined",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 12,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": "",
      "pid": 0
    },
    {
      "id": 41003,
      "menuCode": "sysmanage",
      "nameZn": "系统管理",
      "nameEn": "sysmanage",
      "path": "sysmanage",
      "componentPath": "sysmanage",
      "icon": "CalendarOutlined",
      "parentCode": "0",
      "isHidden": "N",
      "sort": 20,
      "parentName": null,
      "appCode": "CRM-ADMIN",
      "iframe": null,
      "pid": 0
    }
  ];

  const newmenuAllList = formatDataTree(menuListArr);

  const deep = (menuList) => {
    // const icon ='';
    if (menuList && menuList.length > 0) {
      return menuList.map((item) => {
        if (item.chilren && item.chilren.length > 0) {
          return (item.isHidden === "N" ? <SubMenu
            key={item.menuCode}
            // icon={icons(item.icon)}
            title={item.nameZn}
          >
            {deep(item.chilren)}
          </SubMenu> : null)
        }
        return (
          item.isHidden === "N" ? <Menu.Item
            key={item.menuCode}
            // icon={icons(item.icon)}
            onClick={() => {
              // link(item);   
              console.log('result', 123)
            }}>
            {item.nameZn}
          </Menu.Item> : null
        )
      })
    }
  }

  const child = useMemo(() => {
    message.info('重新生成Child组件');
    return <Child count={count1} />
  }, [count1]);

  return (
    <div>
      {child}
      <button onClick={() => { changeCount1(count1 + 1) }}>改变count1</button>
      <button onClick={() => { changeCount2(count2 + 1) }}>改变count2</button>

      <br /><br />
      <h2>导航菜单</h2>
      <Menu
        theme="light"
        // selectedKeys={selectKey}
        // defaultOpenKeys={openKeys}
        mode="inline"
      // onOpenChange={e => setOpenKeys(e)}
      // onSelect={e => setSelectKey(e)}
      >
        {deep(newmenuAllList)}
      </Menu>

    </div>
  )

}
export default HookDemo;
// export default TestTool;