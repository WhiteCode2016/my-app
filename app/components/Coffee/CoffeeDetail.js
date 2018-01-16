import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout,
    Menu,
    Breadcrumb,
    Button,
    Card,
    Row,
    Col,
    Tabs
} from 'antd';

const TabPane = Tabs.TabPane;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;
/*const coffeeList = [
    {coffeeId: "1", coffeeName: "坦桑尼亚风味挂耳咖啡", coffeePrice: "$68", coffeeLevel: "1"},
    {coffeeId: "2", coffeeName: "456", coffeePrice: "$78", coffeeLevel: "2"},
    {coffeeId: "3", coffeeName: "789", coffeePrice: "$98", coffeeLevel: "3"},
    {coffeeId: "4", coffeeName: "qwer", coffeePrice: "$108", coffeeLevel: "3"},
    {coffeeId: "5", coffeeName: "tyui", coffeePrice: "$128", coffeeLevel: "3"}
];*/

var coffeeData={};
class CoffeeDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        /*for (var i=0;i<coffeeList.length;i++) {
            if (props.match.params.id == coffeeList[i].coffeeId) {
                coffeeData = coffeeList[i] ;
                console.log(coffeeData)
            }
        }*/


    }

    componentWillMount() {
        console.log("componentWillMount");
        coffeeData= this.props.data.find(p => p.id === Number(this.props.match.params.id));
        console.log(coffeeData)
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        coffeeData= this.props.data.find(p => p.id === Number(this.props.match.params.id));
        console.log(coffeeData)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
           <div>
               <Row>
                   <Col span={7}>
                       <Row>
                           <Col span={24}>
                               <Card
                                   hoverable
                                   style={{ width: 240 }}
                                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                               >
                               </Card>
                           </Col>
                           <Col span={24}>
                               <Col span={3}>
                                   <Card
                                       hoverable
                                       cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                   >
                                   </Card>
                               </Col>
                               <Col span={3}>
                                   <Card
                                       hoverable
                                       cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                   >
                                   </Card>
                               </Col>
                               <Col span={3}>
                                   <Card
                                       hoverable
                                       cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                   >
                                   </Card>
                               </Col>
                           </Col>
                       </Row>
                   </Col>
                   <Col span={12}>
                       <Row>
                           <Col span={24}><h3>{coffeeData.coffeeName}</h3></Col>
                           <Col span={24}><h3>{coffeeData.coffeePrice}</h3></Col>
                           <Col span={24}>特点:一口丝滑，浓郁醇香</Col>
                           <Col span={24}>甜度:</Col>
                           <Col span={24}>酸度:</Col>
                       </Row>
                       <Row>
                           <Col span={24}>酸度:</Col>
                           <Col span={24}>规格:80（80 * 10P）</Col>
                           <Col span={24}>品种:坦桑尼亚</Col>
                           <Col span={24}>豆种:坦桑尼亚</Col>
                           <Col span={24}>产地:中国</Col>
                           <Col span={24}>期限:12个月</Col>
                       </Row>
                       <Row>
                           <Col span={6}>
                               <Button type="danger" ghost>加入购物车</Button>
                           </Col>
                           <Col span={6}>
                               <Button type="danger">立即购买</Button>
                           </Col>
                       </Row>
                   </Col>
               </Row>
               <Row>
                   <Tabs type="card">
                       <TabPane tab="产品详情" key="1">Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1,
                           Content of Tab Pane 1
                       </TabPane>
                       <TabPane tab="产品描述" key="2">Content of Tab Pane 2</TabPane>
                       <TabPane tab="累计评价" key="3">Content of Tab Pane 3</TabPane>
                       <TabPane tab="享受服务" key="4">Content of Tab Pane 4</TabPane>
                   </Tabs>
               </Row>
               <Row>
                   <Card title="更多推荐">
                       <Row>
                           <Col span={3}>
                               <Card
                                   hoverable
                                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                               >
                               </Card>
                               <Meta
                                   title="Europe Street beat"
                                   description="www.instagram.com"
                               />
                           </Col>
                           <Col span={3}>
                               <Card
                                   hoverable
                                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                               >
                               </Card>
                               <Meta
                                   title="Europe Street beat"
                                   description="www.instagram.com"
                               />
                           </Col>
                           <Col span={3}>
                               <Card
                                   hoverable
                                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                               >
                               </Card>
                               <Meta
                                   title="Europe Street beat"
                                   description="www.instagram.com"
                               />
                           </Col>
                           <Col span={3}>
                               <Card
                                   hoverable
                                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                               >
                               </Card>
                               <Meta
                                   title="Europe Street beat"
                                   description="www.instagram.com"
                               />
                           </Col>
                       </Row>
                   </Card>
               </Row>
           </div>
        )
    }
}

/*const CoffeeDetail = ({match,data}) => {
    var product= data.find(p => p.id === Number(match.params.id));
    var productData;

    if(product)
        productData = <div>
            <h3> {product.id} </h3>
            <p>{product.coffeeName}</p>
            <hr/>
            <h4>{product.coffeePrice}</h4>  </div>;
    else
        productData = <h2> Sorry. Product doesnt exist </h2>;

    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '0 10% 0 10%',
                width: '80%',
                margin: 'auto',
                background: '#ffffff' }}>

                {productData}
            </div>
        </div>
    )
}*/

export default CoffeeDetail

