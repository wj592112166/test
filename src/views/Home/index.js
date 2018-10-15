import React from 'react';
import { connect } from 'dva';
import './home.css'
import { Layout, Menu, Icon } from 'antd';

const {
	Sider
} = Layout;
class Home extends React.Component {
	render(){
		return(
			<Layout>
    			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
			      <div className="logo" />
			      <dt className="pic">♙</dt>
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			        <Menu.Item key="1">
			          <Icon type="user" />
			          <span className="nav-text">概况</span>
			        </Menu.Item>
			        <Menu.Item key="2">
			          <Icon type="video-camera" />
			          <span className="nav-text">店铺</span>
			        </Menu.Item>
			        <Menu.Item key="3">
			          <Icon type="upload" />
			          <span className="nav-text">商品</span>
			        </Menu.Item>
			        <Menu.Item key="4">
			          <Icon type="bar-chart" />
			          <span className="nav-text">订单</span>
			        </Menu.Item>
			        <Menu.Item key="5">
			          <Icon type="cloud-o" />
			          <span className="nav-text">客户</span>
			        </Menu.Item>
			        <Menu.Item key="6">
			          <Icon type="appstore-o" />
			          <span className="nav-text">数据</span>
			        </Menu.Item>
			        <Menu.Item key="7">
			          <Icon type="team" />
			          <span className="nav-text">资产</span>
			        </Menu.Item>
			        <Menu.Item key="8">
			          <Icon type="marketing" />
			          <span className="solution">营销</span>
			        </Menu.Item>
			        <Menu.Item key="9">
			          <Icon type="set-up" />
			          <span className="setting">设置</span>
			        </Menu.Item>
			        <Menu.Item key="10">
			          <Icon type="search" />
			          <span className="nav-text">搜索</span>
			        </Menu.Item>
			      </Menu>
			    </Sider>
    		<Layout style={{ marginLeft: 200 }}>
  				{this.props.children}
    		</Layout>
  		</Layout>
	)
	}
	
}
Home.propTypes = {

}
export default connect()(Home);