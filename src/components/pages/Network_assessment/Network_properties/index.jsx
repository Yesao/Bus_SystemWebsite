import React, { Component } from 'react'
import { Button, Select, Row, Col, Table } from 'antd'
import LeftMap from "../../../Map/left_map";
import RightMap from "../../../Map/right_map";
import {connect} from "react-redux";

import {Link} from "react-router-dom";
import axios from "axios";
import Processors from "kepler.gl/processors";
import leftdataStore from "../../../../redux/leftdataStore";
import rightdataStore from "../../../../redux/rightdataStore";
import {update_left_data, update_right_data, update_station_data} from "../../../../redux/actions/update_data";
import {get_static_value} from "../../../../redux/actions/get_static_value";

const { Option } = Select;


class Network_properties extends Component {
    state = {
        columns: [{
            title: '指标',
            dataIndex: 'static',
            align: 'center',
          },
          {
            title: '值',
            dataIndex: 'value',
            align: 'center',
          }],
        data: [],
    }
    loadMap = () => {
        axios.post(`/prodata`,).then(response => {
              const ProData = {
                  data: Processors.processGeojson(response.data),
                  info: {
                      label: 'Routes',
                      id: 'bk4x78l5m'
                  }
              };
              rightdataStore.dispatch(update_right_data(ProData))
          },
              error => {
                console.log('失败了',error);
                alert('当前日期没有数据，请更换')
            }
          )
    }
    render() {
        return (
            <div className="site-drawer-render-in-current-wrapper">
                {/*<Select defaultValue="路段负荷度" style={{position: "absolute", top: 17, left:150, zIndex: 999}}>*/}
                {/*    <Option value="路段负荷度">路段负荷度</Option>*/}
                {/*    <Option value="lucy">线路负荷度</Option>*/}
                {/*    <Option value="Yiminghe">线网负荷度</Option>*/}
                {/*    <Option value="Yiminghe">线网均衡度</Option>*/}
                {/*    <Option value="Yiminghe">整体负荷水平</Option>*/}
                {/*</Select>*/}
                <Button  style={{position: "absolute", top: 17, left:280, zIndex: 999}} type="primary" >
                    <Link onClick={()=>{this.loadMap()}} to="/Network_properties_compare">对比分析</Link>
                </Button>

                <div className="table-left">
                    <LeftMap/>
                </div>
                <div className="table-right">
                    <Table columns={this.state.columns} dataSource={this.props.static_value} size="small" pagination={false} bordered title={() => '线网静态指标'}/>
                </div>

            </div>
        )
    }
}
export default connect(
    state => ({
        static_value: state.staticvalue
    }),
    {update_left_data, update_right_data}
)(Network_properties)