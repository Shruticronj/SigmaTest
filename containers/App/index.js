import React, {Component} from 'react';
import './wifi.css';
import { Card } from 'antd';
import { Switch } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// const Demo = () => (
//   <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="Tab 1" key="1">
//       Content of Tab Pane 1
//     </TabPane>
//     <TabPane tab="Tab 2" key="2">
//       Content of Tab Pane 2
//     </TabPane>
//     <TabPane tab="Tab 3" key="3">
//       Content of Tab Pane 3
//     </TabPane>
//   </Tabs>
// );
// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }

// ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);
export default class Wifi extends Component {
    constructor(){
        super();
        this.state={
            selected:'Devices'
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="container">
                <Card>

                </Card>
            </div>
        )
    }
}