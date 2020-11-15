import React from 'react';
import Sidebar from './sidebar';
import { Card, Table } from 'antd';
const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: '1',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: '2',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: '3',
    },
    {
        title: 'Address',
        dataIndex: 'Address',
        key: '4',
    }
];
class Users extends React.Component<any, any>{
    public render() {
        console.log(this.props)
        return (
            <div className="row p-3">
                <div className="col-lg-2" id="sidebar">
                    <Sidebar />
                </div>


                <div className="col-lg-10">
                    <div className="row p-3">
                        <Card style={{ width: 500 }}>
                            <label className="font-size">Active Users</label>
                            <h4 className="font-size">{this.props.location.state.activeUsers}</h4>
                        </Card>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Card style={{ width: 500 }}>
                            <label className="font-size">In Active Users</label>
                            <h4 className="font-size">{this.props.location.state.inactiveUsers}</h4>
                        </Card>
                    </div>

                    <Card>
                        <label className="font-size">User Logs</label>
                        <Table dataSource={this.props.location.state.userLogs} columns={columns} />;
                    </Card>

                </div>
            </div>
        );
    }
}
export default Users
