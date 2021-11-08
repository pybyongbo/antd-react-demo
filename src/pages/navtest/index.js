/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Button, } from "antd";
import { connect } from 'react-redux';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined

} from '@ant-design/icons';

const { SubMenu } = Menu;


function SidebarNav(props) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  // useEffect(() => {
  //   const { dispatch } = props;
  //   dispatch(getArtileList({ page: 2 })).then(res => {
  //     // console.log('result',res);
  //   });

  // }, []);

  // console.log('result props', props);

  const sideNavArr = [
    {
      id: 2,
      pid: 0,
      path: '/course',
      name: 'Course',
      title: '课程管理'
    },
    {
      id: 3,
      pid: 2,
      path: 'operate',
      name: 'CourseOperate',
      link: '/course/operate',
      title: '课程操作'
    },
    {
      id: 4,
      pid: 3,
      path: 'info_data',
      name: 'CourseInfoData',
      link: '/course/operate/info_data',
      title: '课程数据'
    },
    {
      id: 5,
      pid: 2,
      path: 'add',
      name: 'CourseAdd',
      link: '/course/add',
      title: '增加课程'
    },
    {
      id: 6,
      pid: 0,
      path: '/student',
      name: 'Student',
      title: '学生管理'
    },
    {
      id: 7,
      pid: 6,
      path: 'operate',
      name: 'StudentOperate',
      link: '/student/operate',
      title: '学生操作'
    },
    {
      id: 8,
      pid: 6,
      path: 'add',
      name: 'SudentAdd',
      link: '/student/add',
      title: '增加学生'
    },
    {
      id: 9,
      pid: 0,
      path: '/score',
      name: 'Score',
      title: '成绩管理'
    },
    {
      id: 10,
      pid: 9,
      path: 'savg',
      name: 'avgScore',
      link: '/student/avgscore',
      title: '平均成绩'
    },
    {
      id: 11,
      pid: 9,
      path: 'stotal',
      name: 'totalScore',
      link: '/student/totalscore',
      title: '总成绩'
    },
  ];

  const formatDataTree = (data) => {
    let parents = data.filter(p => p.pid === 0),
      children = data.filter(c => c.pid !== 0);

    console.log('result parents', parents);
    console.log('result children', children);

    dataToTree(parents, children);
    return parents;

  }


  const dataToTree = (parents, children) => {

    parents.map(p => {
      children.map((c, i) => {
        if (c.pid === p.id) {
          let _chilren = JSON.parse(JSON.stringify(children));
          _chilren.splice(i, 1);
          dataToTree([c], _chilren);

          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      })
    })

  }

  const navData = formatDataTree(sideNavArr);

  console.log('result 111', navData);

  const deepItem = (menuList) => {
    // const icon ='';
    if (menuList && menuList.length > 0) {
      return menuList.map((item) => {
        if (item.children && item.children.length > 0) {
          return <SubMenu
            key={item.name}
            icon={<PieChartOutlined />}
            title={item.title}
          >
            {deepItem(item.children)}
          </SubMenu>
        }
        return (
          <Menu.Item
            key={item.menuCode}
            icon={<PieChartOutlined />}
            onClick={() => {
              // link(item);   
              // props.history.push(item.link);
              console.log('result', item.link)
            }}>
            {item.title}
          </Menu.Item>
        )
      })
    }
  }

  return (
    <div>
      <h2>导航菜单测试</h2>
      <p>后端返回的接口数据一般为扁平化数据,处理导航菜单的时候,我们一般需要对数据进行处理,处理成对应的子父层级进行渲染<strong>无限极递归循环</strong></p>

      <div style={{ width: 220 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          theme="light"
          // selectedKeys={selectKey}
          defaultOpenKeys={[].concat(navData[0].name)}
          mode="inline"
          // onOpenChange={e => setOpenKeys(e)}
          // onSelect={e => setSelectKey(e)}
          inlineCollapsed={collapsed}
        >
          {deepItem(navData)}
        </Menu>
      </div>


    </div>

  )


}


// export default PageinationTest;

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);