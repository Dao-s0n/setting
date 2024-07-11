import { Tabs, Form, Radio, Button, Modal } from "antd";
import { Content } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOtp, status } from "~/redux/Actions";

function OTP(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState('SMS');
    const showModal = () => {
        setIsModalOpen(true);
      };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  //lấy tk
  const Tkotp = useSelector((state) => state.tkotp.listUsers)


  //sửa
  const dispatch =useDispatch()
  const UpdateOtp = () => {
    dispatch (updateOtp(value))
}

    return ( 
        <>
        <Tabs>
            <Tabs.TabPane tab='Phương thức nhập OTP' key={1}>
                <Content className="contentt">
                    <Form >
                        <Item className="title-otp">
                            <span className="details">Tài khoản</span>
                            <div className="value">{Tkotp ? Tkotp.name : ''}</div>
                        </Item>
                        <Item className="title-otp">
                            <span className="details">Phương thức nhận OTP hiện tại</span>
                            <div className="value">{Tkotp ? Tkotp.vn_cdcontent : ''}</div>
                        </Item>
                        <Item>
                        <Radio.Group onChange={onChange} value={value} >
                        <Radio value={'SMS'}>SMS OTP</Radio>
                        <Radio value={'SMART'}>SMART OTP</Radio>
                        <Radio value={''}>Xác thực 2 lớp</Radio>
                        </Radio.Group>
                        </Item>
                    </Form>
                    <div>
                        <p className="communication">*Để xác nhận giao dịch bằng phương thức Xác thực 2 lớp, quý khách vui lòng truy cập và xác nhận trên App ký số đã được CTCK cung cấp.</p>
                        <Button type="primary" className="fix" onClick={() => {UpdateOtp();showModal()}}> Xác nhận</Button>
                    </div>
                </Content>
                 </Tabs.TabPane>
                 
        </Tabs>
        <Modal  
        centered
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
         footer={null}  >  
        <div className="img-success"><img src="http://192.168.2.55:8080/static/img/icon/ic_createacc_success.svg" alt=""/></div>
        <p>Đổi phương thức thành công !</p>
        

        </Modal>
        </>
     );
}
//Account/GetOTPMethod
export default OTP;