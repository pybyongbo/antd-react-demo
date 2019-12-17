import React from 'react';
import { Cascader,Input } from 'antd';
import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';

// 格式化城市数据
areas.forEach(area => {
    const matchCity = cities.filter(city => city.code === area.cityCode)[0];
    if (matchCity) {
        matchCity.children = matchCity.children || [];
        matchCity.children.push({
            label: area.name,
            value: area.code
        });
    }
});

cities.forEach(city => {
    const matchProvince = provinces.filter(
        province => province.code === city.provinceCode
    )[0];
    if (matchProvince) {
        matchProvince.children = matchProvince.children || [];
        matchProvince.children.push({
            label: city.name,
            value: city.code,
            children: city.children
        });
    }
});

const options = provinces.map((province) => ({
    label: province.name,
    value: province.code,
    children: province.children
}));


export default class CitySelect extends React.Component {

    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            value
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    handleChange = value => {
        const { onChange } = this.props;
        this.setState({
            value
        });
        if (onChange) {
            onChange(value);
        }
    };
    render() {
        const { value } = this.state;
        return (
            <Input value={value} onChange={this.handleChange} />
            // <Cascader
            //     value={value}
            //     key={value}
            //     options={options}
            //     showSearch
            //     placeholder="请选择地址"
            //     onChange={this.handleChange}
            // />
        );
    }
}