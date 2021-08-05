import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as UserAction from "./store/user/userAction";
import * as DeviceAction from "./store/device/deviceAction";
import { bindActionCreators } from "redux";
import { Card } from "antd";
import { Switch } from "antd";
import { Tabs } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const { TabPane } = Tabs;
class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "Devices",
      deviceData: [],
      userData: [],
    };
  }

  componentDidMount() {
    this.props.DeviceAction.getDeviceData();
    this.props.UserAction.getUserData();
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps &&
      nextProps.DeviceReducer &&
      nextProps.DeviceReducer.isDeviceLoading
    ) {
      currentState.isLoading = true;
    } else if (
      nextProps &&
      nextProps.DeviceReducer &&
      !nextProps.DeviceReducer.isDeviceLoading &&
      nextProps.DeviceReducer.isDeviceDataFetched
    ) {
      currentState.isLoading = false;
      nextProps.DeviceReducer.isDeviceDataFetched = false;
      currentState.deviceData = nextProps.DeviceReducer.deviceData;
    } else if (
      nextProps &&
      nextProps.DeviceReducer &&
      !nextProps.DeviceReducer.isDeviceLoading &&
      nextProps.DeviceReducer.isDeviceDataError
    ) {
      currentState.isLoading = false;
      currentState.deviceError = "Something went wrong!!";
    }
    if (
      nextProps &&
      nextProps.UserReducer &&
      nextProps.UserReducer.isUserLoading
    ) {
      currentState.isLoading = true;
      currentState.userData = nextProps.UserReducer.userData;
    } else if (
      nextProps &&
      nextProps.UserReducer &&
      !nextProps.UserReducer.isUserLoading &&
      nextProps.UserReducer.isUserDataFetched
    ) {
      currentState.isLoading = false;
      currentState.userData = nextProps.UserReducer.userData;
    } else if (
      nextProps &&
      nextProps.UserReducer &&
      !nextProps.UserReducer.isUserLoading &&
      nextProps.UserReducer.isUserDataError
    ) {
      currentState.isLoading = false;
      currentState.userError = "Something went wrong!!";
    }

    return currentState;
  }

  handleTabChange = (checked) => {
    if (checked == 1) {
      this.setState({
        selected: "Devices",
      });
    } else if (checked == 2) {
      this.setState({
        selected: "Users",
      });
    } else {
      this.setState({
        selected: "Devices",
      });
    }
  };

  handleSwitchChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  render() {
    const { userData, deviceData, isLoading } = this.state;
    if (isLoading) return <div>Loading</div>;
    else {
      return (
        <div className="container">
          <div className="tab-wrapper">
            <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
              <TabPane tab="Devices" key="1">
                {deviceData &&
                  deviceData.map((item, index) => {
                    return (
                      <Card className="card">
                        <div className="row">
                          <div className="rowContent">
                            <div className="avatar">
                              <Avatar size="large" />
                            </div>
                            <div>
                              <div className="userName">
                                {item.attributes.name}
                              </div>
                              <div className="userEmail">
                                {item.attributes.model_number}
                              </div>
                              <div className="switchWrapper">
                                <Switch
                                  defaultChecked
                                  onChange={this.handleSwitchChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="lockWrapper">
                            <div className="rowContent">
                              <span>
                                {item.attributes.state == "locked" ? (
                                  <LockOutlined style={{ color: "red" }} />
                                ) : (
                                  <UnlockOutlined style={{ color: "green" }} />
                                )}
                              </span>
                              <span
                                className="state"
                                style={{
                                  color:
                                    item.attributes.state == "locked"
                                      ? "red"
                                      : "green",
                                }}
                              >
                                {item.attributes.state}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </TabPane>
              <TabPane tab="Users" key="2">
                {userData.map((item, index) => {
                  return (
                    <Card className="card">
                      <div className="row">
                        <div className="rowContent">
                          <div className="avatar">
                            <Avatar size="large" />
                          </div>
                          <div>
                            <div className="userName">
                              {item.attributes.name}
                            </div>
                            <div className="userEmail">
                              {item.attributes.email}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="statusWrapper">
                        <span className="status">{item.attributes.status}</span>
                      </div>
                    </Card>
                  );
                })}
              </TabPane>
            </Tabs>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer,
    DeviceReducer: state.DeviceReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserAction: bindActionCreators(UserAction, dispatch),
    DeviceAction: bindActionCreators(DeviceAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
