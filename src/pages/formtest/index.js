/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
import React, { Fragment, useRef, useState, useEffect } from "react";
import { Row, Col, Form, Select, Input, Button, Table, Cascader, message, Tag, Tabs, Checkbox } from "antd";
import { Cascader as RCascader } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import AntdInputTag from "antd-input-tag";
import groupTags from '../../utils/tagData.js'
const { Option } = Select;
const TestForm = (props) => {

  const [channelName, setChannelName] = useState('抖音');
  const childRef = useRef();
  const [data, setData] = useState(["aa", "bb", "cc", "dd"]);
  const updateChildState = () => {
    // changeVal就是子组件暴露给父组件的方法
    setData(childRef.current.changeVal());
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ];

  const productTree = [
    {
      "id": 3,
      "parentId": null,
      "code": "000183",
      "name": "华海财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 3,
          "code": "HHM01",
          "name": "福海e生百万医疗保险月缴版(HHM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 3,
          "code": "HHY01",
          "name": "福海e生百万医疗保险年缴版(HHY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 3,
          "code": "HHM02",
          "name": "福海e生百万医疗保险月缴均分版(HHM02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 3,
          "code": "HHM03",
          "name": "福海e生百万医疗保险月缴版测试新商户号(HHM03)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 6,
      "parentId": null,
      "code": "000154",
      "name": "华泰",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 6,
          "code": "HTM01",
          "name": "华泰安康百万医疗险月缴版(HTM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6,
          "code": "HTY01",
          "name": "华泰安康百万医疗险年缴版(HTY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6,
          "code": "HTSZ",
          "name": "华泰善诊(HTSZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6,
          "code": "HTHYWZ",
          "name": "300元咨询问诊服务(HTHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 7,
      "parentId": null,
      "code": "000111",
      "name": "现代财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 7,
          "code": "XDCM01",
          "name": "橙易保百万医疗保险月缴版(XDCM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCY01",
          "name": "橙易保百万医疗保险年缴版(XDCY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDZJM01",
          "name": "橙易保重大疾病险月缴版(XDZJM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDZJY01",
          "name": "橙易保重大疾病险年缴版(XDZJY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCM02",
          "name": "橙易保百万医疗保险月缴版(XDCM02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCY02",
          "name": "橙易保百万医疗保险年缴版(XDCY02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDHYWZ",
          "name": "300元咨询问诊服务(XDHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCM03",
          "name": "橙易保百万医疗保险月缴版(XDCM03)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDZJM02",
          "name": "橙易保重大疾病险月缴版(XDZJM02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDZJY02",
          "name": "橙易保重大疾病险年缴版(XDZJY02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCM04",
          "name": "橙易保百万医疗保险月缴版(XDCM04)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCY03",
          "name": "橙易保百万医疗保险年缴版(XDCY03)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCXM01",
          "name": "橙易保百万医疗保险月缴版(XDCXM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDCXY01",
          "name": "橙易保百万医疗保险年缴版(XDCXY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 7,
          "code": "XDHYTJ",
          "name": "现代互医体检(XDHYTJ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 12,
      "parentId": null,
      "code": "KAISEN",
      "name": "凯森",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 12,
          "code": "KSM01",
          "name": "众安百万医疗保险2020月缴版(KSM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSY01",
          "name": "众安百万医疗保险2020年缴版(KSY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSMWM",
          "name": "众安百万医疗保险2020月缴版(KSMWM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSMAXC",
          "name": "众安百万医疗保险2020月缴版(KSMAXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSMAB",
          "name": "众安百万医疗保险2020月缴版(KSMAB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSYAXC",
          "name": "众安百万医疗保险2020年缴版(KSYAXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSYWM",
          "name": "众安百万医疗保险2020年缴版(KSYWM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSYAB",
          "name": "众安百万医疗保险2020年缴版(KSYAB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR36",
          "name": "尊享e生综合意外（基础月缴版）(AR36)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR35",
          "name": "尊享e生综合意外（基础年缴版）(AR35)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT14$AXC",
          "name": "众安百万防癌医疗险2020月缴版(AT14$AXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT13$AXC",
          "name": "众安百万防癌医疗险2020年缴版(AT13$AXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR36$AXC",
          "name": "尊享e生综合意外（基础月缴版）(AR36$AXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR35$AXC",
          "name": "尊享e生综合意外（基础年缴版）(AR35$AXC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT14$WM",
          "name": "众安百万防癌医疗险2020月缴版(AT14$WM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT13$WM",
          "name": "众安百万防癌医疗险2020年缴版(AT13$WM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR36$WM",
          "name": "尊享e生综合意外（基础月缴版）(AR36$WM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR35$WM",
          "name": "尊享e生综合意外（基础年缴版）(AR35$WM)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT14$CL",
          "name": "众安百万防癌医疗险2020月缴版(AT14$CL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT13$CL",
          "name": "众安百万防癌医疗险2020年缴版(AT13$CL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR36$CL",
          "name": "尊享e生综合意外（基础月缴版）(AR36$CL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR35$CL",
          "name": "尊享e生综合意外（基础年缴版）(AR35$CL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT14$AB",
          "name": "众安百万防癌医疗险2020月缴版(AT14$AB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AT13$AB",
          "name": "众安百万防癌医疗险2020年缴版(AT13$AB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR36$AB",
          "name": "尊享e生综合意外（基础月缴版）(AR36$AB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AR35$AB",
          "name": "尊享e生综合意外（基础年缴版）(AR35$AB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSMCL",
          "name": "众安百万医疗保险2020月缴版(KSMCL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSYCL",
          "name": "众安百万医疗保险2020年缴版(KSYCL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSMDLL",
          "name": "众安百万医疗保险2020月缴版(KSMDLL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "KSYDLL",
          "name": "众安百万医疗保险2020年缴版(KSYDLL)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AP21$KS",
          "name": "“周周领”重大疾病（赠险）(AP21$KS)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 12,
          "code": "AX68$KS",
          "name": "“周周领”重大疾病（赠险）(AX68$KS)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 15,
      "parentId": null,
      "code": "000038",
      "name": "亚太财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 15,
          "code": "YTCM01",
          "name": "亚太安康百万医疗保险月缴版(YTCM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTCY01",
          "name": "亚太安康百万医疗保险年缴版(YTCY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTSZ",
          "name": "亚太善诊(YTSZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTHYWZ",
          "name": "300元咨询问诊服务(YTHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTCM02",
          "name": "亚太安康百万医疗保险月缴版(YTCM02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTCY02",
          "name": "亚太安康百万医疗保险年缴版(YTCY02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 15,
          "code": "YTHYTJ",
          "name": "亚太互医体检(YTHYTJ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 17,
      "parentId": null,
      "code": "000060",
      "name": "利宝保险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 17,
          "code": "LBM01",
          "name": "利宝百万医疗险月缴版(LBM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 17,
          "code": "LBZ01",
          "name": "利宝重大疾病保险（赠险）(LBZ01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 17,
          "code": "LBY01",
          "name": "利宝百万医疗险年缴版(LBY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 17,
          "code": "LBHYWZ",
          "name": "300元咨询问诊服务(LBHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 18,
      "parentId": null,
      "code": "000142",
      "name": "国任财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 18,
          "code": "GRCM01",
          "name": "任小康百万医疗保险月缴版(GRCM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 18,
          "code": "GRCY01",
          "name": "任小康百万医疗保险年缴版(GRCY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 18,
          "code": "GRHYWZ",
          "name": "300元咨询问诊服务(GRHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 19,
      "parentId": null,
      "code": "HEINIU",
      "name": "黑牛",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 19,
          "code": "PTC418",
          "name": "黑牛短险(PTC418)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 25,
      "parentId": null,
      "code": "000010",
      "name": "大地财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150150",
          "name": "大地百万医疗保险月缴版(WVB2150150)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150151",
          "name": "大地百万医疗保险月缴版(WVB2150151)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150147",
          "name": "大地百万医疗保险年缴版(WVB2150147)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150148",
          "name": "大地百万医疗保险年缴版(WVB2150148)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "DDSZ",
          "name": "大地善诊(DDSZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "DDHYWZ",
          "name": "300元咨询问诊服务(DDHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150183",
          "name": "大地百万医疗保险月缴版(WVB2150183)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "WVB2150184",
          "name": "大地百万医疗保险月缴版(WVB2150184)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 25,
          "code": "DDHYTJ",
          "name": "大地互医体检(DDHYTJ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 26,
      "parentId": null,
      "code": "000016",
      "name": "平安保险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 26,
          "code": "MP03021259",
          "name": "平安·E生平安·疾病守护金(专享版)(MP03021259)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 26,
          "code": "MP03021718",
          "name": "平安个人交通工具意外险(赠险)(MP03021718)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 26,
          "code": "MP03021724",
          "name": "平安E生平安·百万医疗险(月缴)(MP03021724)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 26,
          "code": "MP03021725",
          "name": "平安E生平安·百万医疗险(年缴)(MP03021725)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 27,
      "parentId": null,
      "code": "000040",
      "name": "东京海上",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 27,
          "code": "DJHSYA",
          "name": "福如东海个人医疗入门款(DJHSYA)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 27,
          "code": "DJHSYB",
          "name": "福如东海个人医疗经典款(DJHSYB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 27,
          "code": "DJHSYC",
          "name": "福如东海个人医疗旗舰款(DJHSYC)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 1002,
      "parentId": null,
      "code": "000179",
      "name": "众安健康险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 1002,
          "code": "AN06$24890102",
          "name": "众安百万医疗保险2020年缴版(AN06$24890102)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AN07$2102099445",
          "name": "众安百万医疗保险2020月缴版(AN07$2102099445)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "RONGANBAO",
          "name": "城市惠民保(RONGANBAO)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "FHB",
          "name": "福惠保(FHB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AP21",
          "name": "“周周领”重大疾病（赠险）(AP21)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "HSBZA",
          "name": "惠宿保(HSBZA)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AS71",
          "name": "100万出行意外险-福利版(AS71)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AT14",
          "name": "众安百万防癌医疗险2020月缴版(AT14)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AT13",
          "name": "众安百万防癌医疗险2020年缴版(AT13)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV74",
          "name": "百万航空意外（赠险）(AV74)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AT34",
          "name": "众安10万抗疫保障金(AT34)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AP21$RP",
          "name": "“周周领”重大疾病（赠险）(AP21$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AS71$RP",
          "name": "100万出行意外险-福利版(AS71$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AT34$RP",
          "name": "众安10万抗疫保障金(AT34$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV27",
          "name": "尊享e生2021版月缴版A(AV27)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV25",
          "name": "尊享e生2021版年缴版A(AV25)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV28",
          "name": "尊享e生2021版月缴版B(AV28)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV26",
          "name": "尊享e生2021版年缴版B(AV26)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV27$RP",
          "name": "尊享e生2021版月缴版A(AV27$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV25$RP",
          "name": "尊享e生2021版年缴版A(AV25$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV28$RP",
          "name": "尊享e生2021版月缴版B(AV28$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV26$RP",
          "name": "尊享e生2021版年缴版B(AV26$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AX68",
          "name": "“周周领”重大疾病（赠险）(AX68)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AX68$RP",
          "name": "“周周领”重大疾病（赠险）(AX68$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AW80",
          "name": "众安百万医疗保险福利版A(AW80)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV48",
          "name": "众安百万医疗保险2021月缴版(AV48)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV44",
          "name": "众安百万医疗保险2021年缴版(AV44)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV49",
          "name": "众安百万医疗保险2021（月缴版D）(AV49)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV45",
          "name": "众安百万医疗保险2021（年缴版B）(AV45)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AX68$WZ",
          "name": "“周周领”重大疾病（赠险）(AX68$WZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "ZAHYWZ",
          "name": "300元咨询问诊服务(ZAHYWZ)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV29",
          "name": "尊享e生2021版月缴版C(AV29)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV30",
          "name": "尊享e生2021版月缴版D(AV30)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CO29",
          "name": "众安门诊保（普惠月缴版）(CO29)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CO28",
          "name": "众安门诊保（普惠年缴版）(CO28)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CO86",
          "name": "众安门诊保（免费版）(CO86)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CH71",
          "name": "众安百万防癌医疗险2021（升级版）分期版A(CH71)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CH69",
          "name": "众安百万防癌医疗险2021（升级版）年缴版A(CH69)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CM25",
          "name": "尊享e生2021普惠版A(CM25)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CM26",
          "name": "尊享e生2021普惠版B(CM26)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV29$ZB",
          "name": "尊享e生2021版月缴版C(AV29$ZB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV30$ZB",
          "name": "尊享e生2021版月缴版D(AV30$ZB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV25$ZB",
          "name": "尊享e生2021版年缴版A(AV25$ZB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "AV26$ZB",
          "name": "尊享e生2021版年缴版B(AV26$ZB)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CN74",
          "name": "众安门急诊医疗险年缴版(CN74)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CN75",
          "name": "众安门急诊医疗险月缴版(CN75)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "CO86$RP",
          "name": "众安门诊保（免费版）(CO86$RP)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 1002,
          "code": "ZAHYTJ",
          "name": "众安互医体检(ZAHYTJ)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 5001,
      "parentId": null,
      "code": "000189",
      "name": "渤海财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 5001,
          "code": "BH01",
          "name": "渤海财险百万医疗产品(BH01)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 6002,
      "parentId": null,
      "code": "000002",
      "name": "人保",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 6002,
          "code": "FHBPICC",
          "name": "福惠保(FHBPICC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6002,
          "code": "XHBPICC",
          "name": "襄惠保(XHBPICC)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6002,
          "code": "PICCJNM01",
          "name": "相伴无忧百万医疗保险月缴版(PICCJNM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6002,
          "code": "PICCJNY01",
          "name": "相伴无忧百万医疗保险年缴版(PICCJNY01)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 6003,
      "parentId": null,
      "code": "000022",
      "name": "天安财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 6003,
          "code": "TA01",
          "name": "天安添福e保 百万医疗保险月缴版(TA01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6003,
          "code": "TA02",
          "name": "天安添福e保 百万医疗保险年缴版(TA02)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    },
    {
      "id": 6004,
      "parentId": null,
      "code": "000208",
      "name": "前海财险",
      "type": null,
      "isEffect": null,
      "children": [
        {
          "id": null,
          "parentId": 6004,
          "code": "QHM01",
          "name": "前多福e生保月缴版(QHM01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6004,
          "code": "QHY01",
          "name": "前多福e生保年缴版(QHY01)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6004,
          "code": "QHM02",
          "name": "前多福e生保月缴版(QHM02)",
          "type": null,
          "isEffect": null,
          "children": null
        },
        {
          "id": null,
          "parentId": 6004,
          "code": "QHY02",
          "name": "前多福e生保年缴版(QHY02)",
          "type": null,
          "isEffect": null,
          "children": null
        }
      ]
    }
  ];

  const scasData = [
    {
      "id": 1,
      "parentId": 461,
      "code": "short",
      "name": "短险项目",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": [
        {
          "id": 5,
          "parentId": 1,
          "code": "short_kaisen_telemarketing",
          "name": "电销业务",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 12,
              "parentId": 5,
              "code": "AXCRGSMARTCALL",
              "name": "爱心筹智能外呼转人工外呼(AXCRGSMARTCALL)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 13,
              "parentId": 5,
              "code": "GIFT2SHORT",
              "name": "暖哇赠转短人工外呼(GIFT2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 14,
              "parentId": 5,
              "code": "INSTALLMENT",
              "name": "暖哇续期人工外呼(INSTALLMENT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 15,
              "parentId": 5,
              "code": "LBCL2SHORT",
              "name": "利宝存量人工外呼(LBCL2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 17,
              "parentId": 5,
              "code": "UNPAIDZACPA",
              "name": "健康未支付(UNPAIDZACPA)",
              "type": "leads_business_scene",
              "isEffect": "false",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 18,
              "parentId": 5,
              "code": "ZAGIFT2SHORT",
              "name": "健康赠转短(ZAGIFT2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "false",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 19,
              "parentId": 5,
              "code": "ZAINSTALLMENT",
              "name": "健康续期(ZAINSTALLMENT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 50,
              "parentId": 5,
              "code": "SHORT2LONG",
              "name": "短转长(SHORT2LONG)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 230,
              "parentId": 5,
              "code": "STCAPTCH",
              "name": "爱帮短险留资(STCAPTCH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 231,
              "parentId": 5,
              "code": "STBROWSE",
              "name": "短险浏览(STBROWSE)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 232,
              "parentId": 5,
              "code": "FICAPTCH",
              "name": "爱帮赠险留资(FICAPTCH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 233,
              "parentId": 5,
              "code": "LBGIFT2SHORT",
              "name": "利宝赠转短(LBGIFT2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 305,
              "parentId": 5,
              "code": "INSTALLMENTM2",
              "name": "暖哇M2分期人工外呼(INSTALLMENTM2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 306,
              "parentId": 5,
              "code": "INSTALLMENTM2AI",
              "name": "暖哇M2分期智能外呼(INSTALLMENTM2AI)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 312,
              "parentId": 5,
              "code": "LBSTCAPTCH",
              "name": "爱帮短险留资(LBSTCAPTCH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 313,
              "parentId": 5,
              "code": "LBSTBROWSE",
              "name": "短险浏览(LBSTBROWSE)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 314,
              "parentId": 5,
              "code": "LBFICAPTCH",
              "name": "爱帮赠险留资(LBFICAPTCH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 325,
              "parentId": 5,
              "code": "INSTLLMENTM2",
              "name": "续期M2人工外呼(INSTLLMENTM2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 326,
              "parentId": 5,
              "code": "INSTLLMENTM2AI",
              "name": "续期M2智能外呼(INSTLLMENTM2AI)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 327,
              "parentId": 5,
              "code": "YTCL2SHORT",
              "name": "亚太存量人工外呼(YTCL2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 340,
              "parentId": 5,
              "code": "ABCL2SHORT",
              "name": "付费险脱保(ABCL2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 342,
              "parentId": 5,
              "code": "DDCL2SHORT",
              "name": "大地人工外呼转化(DDCL2SHORT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 347,
              "parentId": 5,
              "code": "CONSULT",
              "name": "爱邦咨询(CONSULT)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 454,
              "parentId": 5,
              "code": "ZASERVUNPAID",
              "name": "众安服销未支付(ZASERVUNPAID)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 458,
              "parentId": 5,
              "code": "ZAHEALTHLIVE",
              "name": "众安健康直播留咨(ZAHEALTHLIVE)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 460,
              "parentId": 5,
              "code": "ZASERVADD",
              "name": "众安服销加保(ZASERVADD)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 481,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM2",
              "name": "众安服销续期到期前跟进M2(ZASERVINSTALLMENTM2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 482,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM3",
              "name": "众安服销续期到期前跟进M3(ZASERVINSTALLMENTM3)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 483,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM4",
              "name": "众安服销续期到期前跟进M4(ZASERVINSTALLMENTM4)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 484,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM5",
              "name": "众安服销续期到期前跟进M5(ZASERVINSTALLMENTM5)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 485,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM6",
              "name": "众安服销续期到期前跟进M6(ZASERVINSTALLMENTM6)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 486,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM7",
              "name": "众安服销续期到期前跟进M7(ZASERVINSTALLMENTM7)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 487,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM8",
              "name": "众安服销续期到期前跟进M8(ZASERVINSTALLMENTM8)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 488,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM9",
              "name": "众安服销续期到期前跟进M9(ZASERVINSTALLMENTM9)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 489,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM10",
              "name": "众安服销续期到期前跟进M10(ZASERVINSTALLMENTM10)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 490,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM11",
              "name": "众安服销续期到期前跟进M11(ZASERVINSTALLMENTM11)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 491,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM12",
              "name": "众安服销续期到期前跟进M12(ZASERVINSTALLMENTM12)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 4601,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM2",
              "name": "众安服销续期2期(ZASERVINSTALLMENTM2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 4602,
              "parentId": 5,
              "code": "ZASERVINSTALLMENTM3",
              "name": "众安服销续期3期(ZASERVINSTALLMENTM3)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 15009,
              "parentId": 5,
              "code": "dddd",
              "name": "开发4(dddd)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": [
                {
                  "id": 16,
                  "parentId": 15009,
                  "code": "UNPAID1",
                  "name": "暖哇未支付",
                  "type": "leads_business_type",
                  "isEffect": "true",
                  "isPartChoose": null,
                  "children": []
                },
                {
                  "id": 11001,
                  "parentId": 15009,
                  "code": "ces",
                  "name": "测试1",
                  "type": "dddd",
                  "isEffect": "true",
                  "isPartChoose": null,
                  "children": [
                    {
                      "id": 6002,
                      "parentId": 11001,
                      "code": "eeeddddddddddd",
                      "name": "开发1",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": [
                        {
                          "id": 14001,
                          "parentId": 6002,
                          "code": "dededede",
                          "name": "开发1fffrfr",
                          "type": "eeeddddddddddd",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": [
                            {
                              "id": 14004,
                              "parentId": 14001,
                              "code": "hyhyhyhy",
                              "name": "开发1hyhy",
                              "type": "no1",
                              "isEffect": "true",
                              "isPartChoose": null,
                              "children": []
                            },
                            {
                              "id": 20022,
                              "parentId": 14001,
                              "code": "gold_right_hand",
                              "name": "黄金右手",
                              "type": "no1",
                              "isEffect": "true",
                              "isPartChoose": null,
                              "children": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": 13002,
                      "parentId": 11001,
                      "code": "gggrg",
                      "name": "开发1ggg",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": [
                        {
                          "id": 14005,
                          "parentId": 13002,
                          "code": "ooooo",
                          "name": "开发1o",
                          "type": "ces",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": 14006,
                      "parentId": 11001,
                      "code": "gtgtgtgt",
                      "name": "开发1gtgtg",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": []
                    },
                    {
                      "id": 14007,
                      "parentId": 11001,
                      "code": "ttttttttttttttttt",
                      "name": "开发1111ttttttttttt",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": [
                        {
                          "id": 15001,
                          "parentId": 14007,
                          "code": "trtrtr",
                          "name": "trtrtr",
                          "type": "rr",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        },
                        {
                          "id": 15008,
                          "parentId": 14007,
                          "code": "ffff",
                          "name": "开发3344",
                          "type": "rr",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        },
                        {
                          "id": 16001,
                          "parentId": 14007,
                          "code": "rrrrrrrrrrrrrrrrr",
                          "name": "rrrrr",
                          "type": "rr",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": 15004,
                      "parentId": 11001,
                      "code": "ceshi",
                      "name": "测试一",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": []
                    },
                    {
                      "id": 15005,
                      "parentId": 11001,
                      "code": "测试",
                      "name": "测试呦",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": []
                    },
                    {
                      "id": 15006,
                      "parentId": 11001,
                      "code": "ceshiya",
                      "name": "测试呀",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": []
                    },
                    {
                      "id": 15007,
                      "parentId": 11001,
                      "code": "hh",
                      "name": "测试一样",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": []
                    },
                    {
                      "id": 15010,
                      "parentId": 11001,
                      "code": "type1",
                      "name": "测试了",
                      "type": "ces",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": [
                        {
                          "id": 16005,
                          "parentId": 15010,
                          "code": "ttytyyt",
                          "name": "开发1",
                          "type": "ghhj",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": [
                            {
                              "id": 16006,
                              "parentId": 16005,
                              "code": "hhh",
                              "name": "hhh",
                              "type": "hhh",
                              "isEffect": "true",
                              "isPartChoose": null,
                              "children": [
                                {
                                  "id": 16007,
                                  "parentId": 16006,
                                  "code": "kk",
                                  "name": "kk",
                                  "type": "kkk",
                                  "isEffect": "true",
                                  "isPartChoose": null,
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": 20029,
                              "parentId": 16005,
                              "code": "lbGQiOiJmaXJzdF9jaGFubmVsX25hbWUiLCJ0ZXh0Ijoi5LiA57qn5rig6YGT5ZCN56ewIiwidmFsdWUiOiLliKnlrp3lkajlkajpooYifSx7ImZpZWxkIjoic2Vjb25",
                              "name": "lbGQiOiJmaXJzdF9jaGFubmVsX25hbWUiLCJ0ZXh0Ijoi5LiA57qn5rig6YGT5ZCN56ewIiwidmFsdWUiOiLliKnlrp3lkajlkajpooYifSx7ImZpZWxkIjoic2Vjb25",
                              "type": "hhh",
                              "isEffect": "true",
                              "isPartChoose": null,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": 18002,
                          "parentId": 15010,
                          "code": "huiguiyi",
                          "name": "回归",
                          "type": "ghhj",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        },
                        {
                          "id": 18011,
                          "parentId": 15010,
                          "code": "asd",
                          "name": "丫丫",
                          "type": "ghhj",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        },
                        {
                          "id": 18013,
                          "parentId": 15010,
                          "code": "asds",
                          "name": "yyy",
                          "type": "ghhj",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        },
                        {
                          "id": 19001,
                          "parentId": 15010,
                          "code": "asdas",
                          "name": "ajgsjg",
                          "type": "ghhj",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 16002,
                  "parentId": 15009,
                  "code": "dededede",
                  "name": "开发1",
                  "type": "dddd",
                  "isEffect": "true",
                  "isPartChoose": null,
                  "children": [
                    {
                      "id": 16003,
                      "parentId": 16002,
                      "code": "ddedeedee",
                      "name": "ededede",
                      "type": "dededded",
                      "isEffect": "true",
                      "isPartChoose": null,
                      "children": [
                        {
                          "id": 16004,
                          "parentId": 16003,
                          "code": "gtgt",
                          "name": "gtgt",
                          "type": "gtgt",
                          "isEffect": "true",
                          "isPartChoose": null,
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 23004,
                  "parentId": 15009,
                  "code": "开发3",
                  "name": "开发3",
                  "type": "dddd",
                  "isEffect": "true",
                  "isPartChoose": null,
                  "children": []
                }
              ]
            },
            {
              "id": 20034,
              "parentId": 5,
              "code": "MFUPGRADE",
              "name": "魔方在保升级(MFUPGRADE)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 23005,
              "parentId": 5,
              "code": "UNPAID",
              "name": "暖哇未支付(UNPAID)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 41001,
              "parentId": 5,
              "code": "MFUNPAID",
              "name": "魔方未支付(MFUNPAID)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        },
        {
          "id": 6,
          "parentId": 1,
          "code": "short_smart_call",
          "name": "智能外呼",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 20,
              "parentId": 6,
              "code": "CAPTCHA_30",
              "name": "暖哇赠转短留资智能外呼(CAPTCHA_30)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 21,
              "parentId": 6,
              "code": "INSTALLMENTSMARTCALL",
              "name": "暖哇续期人工外呼后兜底智能外呼(INSTALLMENTSMARTCALL)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 22,
              "parentId": 6,
              "code": "gift2shortT2",
              "name": "赠转短接通未转化T+2智能外呼(gift2shortT2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 23,
              "parentId": 6,
              "code": "gift2shortT30",
              "name": "赠转短未拨打T30回收智能外呼(gift2shortT30)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 24,
              "parentId": 6,
              "code": "gift2shortT2F",
              "name": "赠转短未接通未转化T+2智能外呼(gift2shortT2F)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 25,
              "parentId": 6,
              "code": "gift2shortkn",
              "name": "存量历史未拨打赠转短(gift2shortkn)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 26,
              "parentId": 6,
              "code": "INSTALLMENTM2T7F",
              "name": "续期人工外呼未接通M2下发T+7智能外呼(INSTALLMENTM2T7F)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 27,
              "parentId": 6,
              "code": "INSTALLMENTM3T7F",
              "name": "续期人工外呼未接通M3下发T+7智能外呼(INSTALLMENTM3T7F)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 28,
              "parentId": 6,
              "code": "AXCAIWH",
              "name": "爱心筹智能外呼(AXCAIWH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 29,
              "parentId": 6,
              "code": "installmentT3AIM6",
              "name": "续期应缴日起T+3D未支付M6智能外呼(installmentT3AIM6)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 30,
              "parentId": 6,
              "code": "installmentT3AIM5",
              "name": "续期应缴日起T+3D未支付M5智能外呼(installmentT3AIM5)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 31,
              "parentId": 6,
              "code": "installmentT3AIM4",
              "name": "续期应缴日起T+3D未支付M4智能外呼(installmentT3AIM4)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 32,
              "parentId": 6,
              "code": "installmentT3AIM3",
              "name": "续期应缴日起T+3D未支付M3智能外呼(installmentT3AIM3)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 33,
              "parentId": 6,
              "code": "installmentT3AIM2",
              "name": "续期应缴日起T+3D未支付M2智能外呼(installmentT3AIM2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 34,
              "parentId": 6,
              "code": "AXCSMARTCALL",
              "name": "爱心筹智能外呼(AXCSMARTCALL)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        },
        {
          "id": 40001,
          "parentId": 1,
          "code": "internetchannel",
          "name": "网销业务",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": []
        }
      ]
    },
    {
      "id": 2,
      "parentId": 461,
      "code": "work_wx",
      "name": "企业微信",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": [
        {
          "id": 7,
          "parentId": 2,
          "code": "work_wx_smart_call",
          "name": "智能外呼",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 35,
              "parentId": 7,
              "code": "T1",
              "name": "短转长外呼T+1接通智能外呼添加企微(T1)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 36,
              "parentId": 7,
              "code": "T3",
              "name": "短转长外呼T+3未接通智能外呼添加企微(T3)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 37,
              "parentId": 7,
              "code": "short2longqwkn",
              "name": "存量历史短转长未添加数据智能外呼(short2longqwkn)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 38,
              "parentId": 7,
              "code": "G2SQWGZHT3",
              "name": "暖哇赠转短公众号成单，短信触达未转化+30min智能外呼添加企微(G2SQWGZHT3)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 39,
              "parentId": 7,
              "code": "G2SQWT3F",
              "name": "暖哇赠转短外呼未转化，T+1D短信触达未转化+30min智能外呼添加企微(G2SQWT3F)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "parentId": 461,
      "code": "site_innerd",
      "name": "站内运营d",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": [
        {
          "id": 8,
          "parentId": 3,
          "code": "site_inner_short_flow",
          "name": "短险跟进22",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 40,
              "parentId": 8,
              "code": "G2SQWGZH",
              "name": "暖哇赠转短公众号成单，10min短信触达(G2SQWGZH)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 41,
              "parentId": 8,
              "code": "LBBIRTHDX10H",
              "name": "利宝存量生日触达早10点(LBBIRTHDX10H)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        },
        {
          "id": 9,
          "parentId": 3,
          "code": "site_inner_outer_transform",
          "name": "外部合作转化",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 42,
              "parentId": 9,
              "code": "LBBIRTHMBXX9H",
              "name": "利宝存量生日触达早9点(LBBIRTHMBXX9H)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 43,
              "parentId": 9,
              "code": "LBBIRTHZNWHD2",
              "name": "利宝存量生日智能外呼(LBBIRTHZNWHD2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 44,
              "parentId": 9,
              "code": "LBCXSXDX10H",
              "name": "利宝存量失效短信10点(LBCXSXDX10H)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 45,
              "parentId": 9,
              "code": "LBCXSXMBXX9H",
              "name": "利宝存量失效短信9点(LBCXSXMBXX9H)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 46,
              "parentId": 9,
              "code": "LBCXSXZNWHD2",
              "name": "利宝存量失效智能外呼(LBCXSXZNWHD2)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 47,
              "parentId": 9,
              "code": "YXCLCD2021",
              "name": "2021元宵存量触达(YXCLCD2021)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        },
        {
          "id": 10,
          "parentId": 3,
          "code": "site_inner_stock_transform",
          "name": "存量转化",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": [
            {
              "id": 48,
              "parentId": 10,
              "code": "CLYY",
              "name": "202104存量转化策略执行(CLYY)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            },
            {
              "id": 49,
              "parentId": 10,
              "code": "G2SQWT1F",
              "name": "暖哇赠转短外呼未转化，T+1D短信触达(G2SQWT1F)",
              "type": "leads_business_scene",
              "isEffect": "true",
              "isPartChoose": null,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "parentId": 15009,
      "code": "UNPAID1",
      "name": "暖哇未支付",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": []
    },
    {
      "id": 18001,
      "parentId": 461,
      "code": "huigui",
      "name": "回归",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": []
    },
    {
      "id": 33003,
      "parentId": 461,
      "code": "rewfdf44d",
      "name": "开发1111",
      "type": "leads_business_type",
      "isEffect": "true",
      "isPartChoose": null,
      "children": [
        {
          "id": 33006,
          "parentId": 33003,
          "code": "eee",
          "name": "开发1111",
          "type": "leads_reach_type",
          "isEffect": "true",
          "isPartChoose": null,
          "children": []
        }
      ]
    }
  ];

  const dataFormat = (arr) => {

    let newArr = [];
    if (arr != undefined && arr.length > 0) {
      newArr = arr.map(item => {
        item.label = item.name;
        item.value = item.code;
        if (item.children != undefined && item.children.length > 0) {
          dataFormat(item.children);
        }
        return item;
      });
    }
    return deleteChildren(newArr);

  }
  // 删除 树形结构 最后一个children为空数组的值.
  const deleteChildren = (arr) => {
    let childs = arr
    for (let i = childs.length; i--; i > 0) {
      if (childs[i].children) {
        if (childs[i].children.length) {
          deleteChildren(childs[i].children)
        } else {
          delete childs[i].children
        }
      }
    }
    return arr
  }

  const [columnsArr, setColumnsArr] = useState(columns);

  const [tagVal, setTagVal] = useState([]);

  useEffect(() => {

    form.setFieldsValue({
      channelName
    })

  })

  const [form] = Form.useForm();

  const onValuesChange = (values) => {
    console.log('result', values)
  };


  const onChangeChannelName = (newChannelName) => {
    setChannelName(newChannelName);
    setTimeout(() => {
      form.setFieldsValue({
        channelName
      })
    }, 0)

  }

  const onSelectChange = (val) => {

    // console.log('result val', val);
    // val === 'other' && columns.push({
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // });

    console.log('columns', columns)

    if (val === 'other') {
      setColumnsArr(columns.concat({
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }))
    } else {
      setColumnsArr(columns);
    }

    console.log('result', columns);

  }

  const handleChange = () => {

    console.log('12312')

  }

  const onChange = (val) => {
    console.log('onChange val', val);
    setTagVal(val);
    form.setFieldsValue({
      loveTags: val
    })
  }

  const onTagsChange = (val) => {
    console.log('onTagsChange val', val);
    setTagVal(val);
    form.setFieldsValue({
      loveTags: val
    })
  }


  const handleChangeTag = (tag, checked) => {

    const nextSelectedTags = checked ? [...tagVal, tag] : tagVal.filter((t) => t !== tag);
    if (nextSelectedTags.length > 5) {
      message.warning(`最多只能选择 ${5} 个标签！`);
      return;
    }
    console.log('nextSelectedTags', nextSelectedTags);
    onChange?.(nextSelectedTags);
    onTagsChange?.(nextSelectedTags);
    setTagVal(checked ? [...tagVal, tag] : tagVal.filter((t) => t !== tag))
  };

  /**
   * 分组标签视图
   */
  const groupTagsView =
    groupTags &&
    groupTags.map((groupTag) => {
      return (
        <Tabs.TabPane tab={groupTag.name} key={groupTag.name}>
          {groupTag.tags.map((tag) => {
            return (
              <Tag.CheckableTag
                key={tag}
                checked={tagVal.indexOf(tag) > -1}
                onChange={(checked) => handleChangeTag(tag, checked)}
              >
                {tag}
              </Tag.CheckableTag>
            );
          })}
        </Tabs.TabPane>
      );
    });

  return (
    <div>
      <br /><br />
      <h2>测试代码改变表单字段值,是否触发</h2>
      <br /><br />
      <Form
        form={form}
        onValuesChange={onValuesChange}
      >
        <Row gutter={[10, 10]} style={{ width: '100%' }}>
          <Col>
            <Form.Item
              label="一级渠道名称"
              name="channelName"
            >
              <Input placeholder="请输入一级渠道名称" allowClear />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="一级渠道编码"
              name="channelCode"
            >
              <Input placeholder="请输入一级渠道名称" allowClear />
            </Form.Item>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Item
              label="下拉可搜可选"
              name="searchVal"
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Select>
            </Form.Item>
          </Col>

        </Row>


        <Row>
          <Col>
            <Form.Item
              label="下拉选择测试"
              name="shhw"
            >
              <Select
                style={{ width: 200 }}
                placeholder="Search to Select"
                onChange={onSelectChange}
              >
                <Option value="hhw">化合物</Option>
                <Option value="other">其他</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              label="选择喜欢标签"
              name="loveTags"
            >
              <Select
                style={{ width: '100%' }}
                // value={tagVal}
                mode="multiple"
                // showSearch
                dropdownRender={(e) => {
                  return (
                    <>
                      {e.props.searchValue.length > 0 ? (
                        e
                      ) : (
                        <div style={{ paddingLeft: '10px' }}>
                          <Tabs>{groupTagsView}</Tabs>
                        </div>
                      )}
                    </>
                  );
                }}
                onChange={(value1) => {
                  onChange?.(value1);
                }}
                optionFilterProp="children"
                placeholder={props.placeholder ?? `最多可选 5 个标签`}
                // loading={tagLoading}
                tokenSeparators={[',']}
                allowClear
              >
                {/* {optionTagsView} */}
              </Select>
            </Form.Item>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Item label="">
              <Button
                type="primary"
                // htmlType="submit"
                style={{ marginRight: 12, marginTop: 30 }}
                onClick={() => onChangeChannelName('头条')}
              >
                改变值
              </Button>

            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Cascader
              style={{ width: '100%' }}
              placeholder="请选择产品"
              options={
                productTree && dataFormat(productTree)
              }
              onChange={(val) => { console.log(val) }}
              multiple
            />
          </Col>


        </Row>

        <br /><br />
        <Row>
          <Col span={12}>
            <RCascader
              // style={{ width: '100%' }}
              placeholder="请选择产品"
              data={
                scasData && dataFormat(scasData)
              }
              onChange={(val) => { console.log('111', val) }}
              menuWidth={290}
              appearance="default" style={{ width: 340 }}
              renderValue={(value, activePaths, activeItemLabel) => {
                console.log(activePaths[activePaths.length - 1].name);
                return activePaths[activePaths.length - 1].name
                // return activePaths.map(item => item.label).join(' > ');
              }}
            />
          </Col>
        </Row>
        <br /><br />

        <Row gutter={[10, 30]}>
          <Col span={24}>
            <div
              contentEditable={true}
              suppressContentEditableWarning="true"
              style={{
                width: 320,
                minHeight: 80,
                borderRadius: 5,
                border: '1px solid #dedede',
                paddingTop: 10,
                paddingLeft: 8,
                paddingRight: 8,
                paddingBottom: 10
              }}
              onChange={handleChange}
            >
              <Tag color="magenta" closable>magenta</Tag>
            </div>
          </Col>
          <br /> <br /> <br />
          <Col span={24}>

            <AntdInputTag value={data} ref={childRef} />

            <Button style={{ marginTop: 10 }} onClick={updateChildState}>
              获取子组件数据
            </Button>
            <div>{JSON.stringify(data)}</div>
          </Col>
        </Row>

      </Form>

      <br /><br />

      <Checkbox.Group value={['1', '2']}>
        <Checkbox value='1'>1</Checkbox>
        <Checkbox value='2'>2</Checkbox>
        <Checkbox value='3'>3</Checkbox>
        <Checkbox value='4'>4</Checkbox>
      </Checkbox.Group>
      <br /><br />
      <Table
        columns={columnsArr}
        dataSource={[]}
      />
    </div>
  );

}

export default TestForm;