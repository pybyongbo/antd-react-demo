import React from 'react';

class Child extends React.Component {

    render(){
        const {value} = this.props;
        return (
            <div>
                我是Child,得到传下来的值:{value}
            </div>
        )
    }


}

export default Child;