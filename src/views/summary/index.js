import React from 'react';
import {connect} from 'dva';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function Summary(){
	return(
		<div>
			<Header style={{ background: '#fff', padding: 0 }} className="header">
			<h1>GAOGAO的小店</h1>
			</Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
		</div>
	)
}
Summary.propTypes={
	
}
export default connect()(Summary);