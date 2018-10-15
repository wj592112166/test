import React from 'react';
import {connect} from 'dva';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function Shop(){
	return(
		<h1>shop</h1>
	)
}
Shop.propTypes={
	
}
export default connect()(Shop);