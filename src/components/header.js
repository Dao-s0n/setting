import { Menu, Layout, Badge, Select, Form, Input, Checkbox, Button, message} from "antd";
import 'antd/dist/antd.css'
import { useState, useEffect  } from "react";
import axios from "axios";
import { NavLink, useNavigate} from "react-router-dom";


const {Header} = Layout;
const {Item} = Menu;
const {Option} = Select;

function HeaderPage() {
const nav = useNavigate()
  const [login,setLogin] = useState(false)

  const [tkLogin, setTkLogin] = useState(false)
  const [btnLogin,setBtnLogin] = useState(true)
  

const [selectedKeys, setSelectedKeys] = useState(['1']);
      useEffect(() => {
       nav('/deal')
    }, []);
    const handleMenuSelect = ({ selectedKeys }) => {
      setSelectedKeys(selectedKeys); // Chọn mục đầu tiên khi trang được tải lại

      
  };


  const handleFormClick = (e) => {
    e.stopPropagation();
};


const success = () => {
  message.success({
    content: (
      <>
        <h3>Thành công</h3>
        <span>Đăng nhập thành công!</span>
      </>
    ),
    className:'success'
  });
};


const error = () => {
  message.error({
    content: (
      <>
        <h3>Thất bại</h3>
        <span>Tài khoản hoặc mật khẩu không đúng!</span>
      </>
    ),
    className:'error'
  });
};

    const onFinish = async (values) => {
      const config = {
        'userName': values.username,
          'password': values.password,
      }
        try {
          const response = await axios.post('http://192.168.2.55:9090/HomeMobile/GeneratetOken', config);
    
          const token = response.data.token
          console.log(token)
          localStorage.setItem('token',token)
          localStorage.setItem('username', values.username);
            console.log(response)
              success()
            setLogin(false)
            setTkLogin(true)
            setBtnLogin(false) 
            
            
          
        }catch{error()} 
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
    

      

    return ( 


    <Header className="Header">
        <div className='Menu'>

        <NavLink to={'/deal'} className="logo">
        <img src="http://192.168.2.55:8080/TAB-LEFT.svg" alt="img"/>
        <img src="http://192.168.2.55:8080/LOGO-NEW.svg" alt="img"/>
        </NavLink>
        <Menu theme="dark" defaultSelectedKeys={1} selectedKeys={selectedKeys} onSelect={handleMenuSelect}>
            <Item key={1}> <NavLink  to={'/deal'}  > Giao dịch </NavLink></Item>
            <Item key={2}> <NavLink to={'/conduct'}> Quản lý tài sản </NavLink></Item>
            <Item key={3}><NavLink to={'/utilities'}>Tiện ích </NavLink></Item>
            <Item key={4}><NavLink to={'/oderbook'}>Sổ lệnh</NavLink></Item>
            <Item key={5}><NavLink to={'/broadly'}>Mở rộng </NavLink></Item>
            <Item key={6}><NavLink to={'/setting'}>Cài đặt </NavLink></Item>
            <Item key={7}><NavLink to={'/statistic'}>Thống kê ngành </NavLink></Item>
        </Menu>

        </div>
        <div className="Menu">

        <Menu theme="dark">
            <div className="date">Invalid Date</div>
            <div className="date">Invalid Date</div>
        </Menu>
        <Badge count={1} size="small" className="notify">
                <img className="Notify" src="http://192.168.2.55:8080/static/img/icon/ic_bell.svg" alt=""/>
        </Badge>
        <img className="dark" src="http://192.168.2.55:8080/static/img/icon/ic_theme_dark.svg" alt=""/>
        <img className="img-language" src="http://192.168.2.55:8080/static/img/icon/icon-language-vi.svg" alt=""/>
        <Select className="language" defaultValue='Tiếng việt'>
            <Option value='Tiếng việt' >Tiếng việt</Option>
            <Option value='English' >English</Option>
            <Option value='中文' >中文</Option>
        </Select>
        {btnLogin && (
          <div onClick={() => {setLogin(true)}}>
          <img className="img-login" src="http://192.168.2.55:8080/static/img/icon/icon-login.svg" alt="" />
              <span className="login">Đăng nhập</span>
          </div>
        )}
        {tkLogin && (
          <div className="tk-login">
          <img className="img-tk-login" src="http://192.168.2.55:8080/static/img/icon/ic_user.svg" alt=""/>
          <span>TK thường</span> -
          <span>0001116273NM</span>
        </div>
        )}

        </div>
        {login && (
                  <div className="wrap" onClick={() => {setLogin(false)}}>
                  <div className="login-interface" onClick={handleFormClick}>
                      <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 24 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className='from-login'>
                      <Form.Item>
                          <h1 className="dang-nhap">Đăng nhập</h1>
                      </Form.Item>
                          <p className="usename">Tên đang nhập</p>
                      <Form.Item name='username' 
                              rules={[{required:true, message:'Vui lòng nhập tên đăng nhập!'}]}
                      > 
                      <Input placeholder="Nhập tài khoản" />
                      </Form.Item>
                      <p className="usename">Mật khẩu</p>
                      <Form.Item name='password' 
                              rules={[{required:true, message:'Vui lòng nhập mật khẩu!'}]}
                  >
                          <Input.Password placeholder="Nhập mật khẩu"/>
                      </Form.Item>
                      <Form.Item name="remember" valuePropName="checked">
                         <span className="pass"> <Checkbox className="remember"> Nhớ mật khẩu </Checkbox>
                            <p  className="forgot">Quyên mật khẩu</p></span>
                      </Form.Item>

                      <Form.Item>
                          <Button htmlType="submit" className="btn-login" type="primary" >
                              Đăng nhập
                          </Button>
                      </Form.Item>
                          <p className="open-account">Mở tài khoản giao dịch</p>
                          <p className="open-account">Tra cứu số tài khoản</p>
                      <Form.Item className="contact">
                        <span className="pass">
                          <span>Liên hệ hỗ trợ</span>
                      <span>Công bố rủi ro</span></span>
                      </Form.Item>
                  </Form>
                  <img className="img-close" src="http://192.168.2.55:8080/static/img/icon/icon-close.svg" alt=""
                  onClick={ () => {setLogin(false)}}/>
                  <img className="img-loginn" src="http://192.168.2.55:8080/login-img.png" alt=""/>
                  
                  </div>
                  
                  
                  
                  </div>
        )}

       
    </Header>

    
        
        );
}

export default HeaderPage;