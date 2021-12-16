/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Form, Select, Input, Button, Table, Cascader } from "antd";

const { Option } = Select;
const TestForm = (props) => {

  const [channelName, setChannelName] = useState('抖音');

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

    console.log('columns',columns)

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

      </Form>

      <br /><br />

      <Table
        columns={columnsArr}
        dataSource={[]}
      />
    </div>
  );

}

export default TestForm;