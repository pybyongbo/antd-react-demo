import React from 'react';
import { Input } from 'antd';

export default class EmailInput extends React.PureComponent {

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
    return <Input value={value} onChange={this.handleChange} />;
  }
}