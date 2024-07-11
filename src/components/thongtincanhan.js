import { Tabs, Form, Input, Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "~/redux/Actions";




function Thongtin(props) {
    const [input,setInput] = useState(false)
    const [edit,setEdit] = useState(true)
    const [isConfirmationEnabled, setConfirmationEnabled] = useState(true);
    const [disabledEdit,setDisabledEdit] = useState(false)
    const [emailValue,setemailValue] =useState('')
    const [addressValue,setAddressValue] =useState('')
    const [phoneValue,setPhoneValue] =useState('')
    const [forbidden,setForbidden] =useState(false)
    const [entitled,setEntitled] =useState(true)


    const handleEdit = () => {
        setInput(!input);
        setEdit(!edit)
        setConfirmationEnabled(!isConfirmationEnabled)
        setemailValue( customerData ? customerData.email : '')
        setAddressValue( customerData ? customerData.address : '')
        setPhoneValue( customerData ? customerData.phone : '')
    }
    const handleauthenticate = () =>{
        setInput(false)
        setEdit(true)
        setDisabledEdit(true)
        setConfirmationEnabled(true)
        setForbidden(true)
        setEntitled(false)
    }

    //lấy thông tin
    const customerData = useSelector((state) => state.user.listUsers )

    // sửa
  const dispatch =useDispatch()

    const updateData = () => {
        dispatch(update( phoneValue, emailValue, addressValue))
    }



    return ( 
        <span >
               <Tabs>
                <Tabs.TabPane tab='Thông tin chung' key={1} >
                    <Content  className="contentt">
                        <span>
                        <Form className="from-ttc">
                            <Item> <span className="details"> Tài khoản</span>  <div className="value">{customerData ? customerData.custodycd :''}</div></Item>
                            <Item>
                            <span className="details"> Di động</span>  <div className="value">{customerData ? customerData.mobile :''}</div>
                            </Item>
                            <Item>
                            <span className="details">Tên khách hàng</span>  <div className="value">{customerData ? customerData.fullname :''}</div>
                            </Item>
                            <Item>
                            <span className="details">Email</span>  <div className="value">{input &&( <Input value={emailValue} onChange={(e) => setemailValue(e.target.value)}/>)}{edit && (customerData ? customerData.email :'')}</div>
                            </Item>
                            <Item>
                            <span className="details"> Số ĐKSH/Passport</span>  <div className="value">{customerData ? customerData.idcode :''}</div>
                            </Item>
                            <Item>
                            <span className="details"> Loại khách hàng</span>  <div className="value">{customerData ? customerData.custtypE_TEXT :''}</div>
                            </Item>
                            <Item>
                            <span className="details"> Ngày cấp</span>  <div className="value">{customerData ? customerData.iddate :''}</div>
                            </Item>
                            <Item>
                            <span className="details"> Chi nhánh</span>  <div className="value">{customerData ? customerData.brname :''}</div>
                            </Item>
                            <Item>
                            <span className="details">Nơi cấp</span>  <div className="value">{customerData ? customerData.IDCARDPLACE :''}</div>
                            </Item>
                            <Item>
                            <span className="details">Cán bộ tư vấn</span>  <div className="value">{customerData ? customerData.brokerid :''}</div>
                            </Item>
                            <Item>
                            <span className="details"> Địa chỉ</span>  <div className="value">{input && (<Input value={addressValue} onChange={(e) => setAddressValue(e.target.value)} />)}{edit && (customerData ? customerData.address :'')}</div>
                            </Item>
                            <Item>
                            <span className="details">Trạng thái thông tin</span>  <div className="value">{customerData ? customerData.statuS_TEXT :''}</div>
                            </Item>
                            <Item>
                            <span className="details">Điện thoại</span>  <div className="value">{input && (<Input value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)}/>)}{edit && (customerData ? customerData.phone :'')}</div>
                            </Item>
                        </Form>
                        <div>
                            {entitled && (<p className="communication">*Người dùng có thể thay đổi thông tin Email, Số điện thoại, và Địa chỉ</p>)}
                            {forbidden && (<p className="communication">*Thông tin điều chỉnh đang chờ phê duyệt, khách hàng sẽ không thể thực hiện chức năng này!</p>)}
                            <div>
                                <Button className="btn-reset fix" onClick={() => handleEdit()} disabled={disabledEdit}>Điều chỉnh</Button>
                                <Button className="fix" type="primary" onClick={() => {handleauthenticate(); updateData()}} 
                                disabled={isConfirmationEnabled}
                                > Xác nhận</Button>
                            </div>
                        </div>
                        </span>
                        
                    </Content>

                </Tabs.TabPane>
                <Tabs.TabPane tab='Thông tin giao dịch' key={2}>
                    <Content className="contentt">
                        <span className="value">
                            <span>Email nhận thông tin về giao dịch online trên tài khoản chứng khoán <span className="Transaction ">{ customerData ? customerData.fullname : ''}</span></span>
                            <p>Được sử dụng để nhận thông báo về dịch vụ giao dịch online trên tài khoản chứng khoán, xác nhận và kích hoạt giao dịch online trên tài khoản chứng khoán, nhận mật khẩu,...</p>
                        </span>
                        <span className="value">
                            <span>Số di động đăng ký <span className="Transaction ">{customerData ? customerData.mobile : ''}</span></span>
                            <p>Được sử dụng để gọi lên Contact Center nhanh hơn.</p>
                        </span>
                        <span className="value">
                            <span>Tài khoản ngân hàng </span>
                            <span>Quý khách có thể đăng ký tài khoản ngân hàng (TK NH) tại CTCK. Sau khi đăng ký, Quý khách có thể yêu cầu chuyển tiền qua phương thức giao dịch điện tử từ TK CK tại CTCK tới </span>
                            <span>1.Các TK NH đã đăng ký này</span>
                            <p>2.Tới TK NH bất kỳ, có tên người thụ hưởng trùng với tên chủ TK CK tại CTCK</p>
                        </span>

                    </Content>
                </Tabs.TabPane>
               </Tabs>
                
    
        </span>
       
     );

    
}

export default Thongtin;