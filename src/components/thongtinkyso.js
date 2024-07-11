import { Button, DatePicker, Form, Input, Select, Tabs, Table, Modal, Popover } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import moment from 'moment';

import { useSelector, useDispatch } from "react-redux";
import { AddTTKS,Editt, Deletee } from "~/redux/Actions";

const {Option} = Select;

function KySo() {
  const dispatch = useDispatch()
  const [persionalUserId, setpersionalUserId] = useState('')
  const [pass, setpass] = useState('')
  const [fromDate, setfromDate] = useState('')
  const [toDate, settoDate] = useState('')
  const [description, setdescription] = useState('')
  const [autoId, setAutoId] =useState('')
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleReset =() => {
    setpersionalUserId('')
    setpass('')
    setfromDate('')
    settoDate('')
    setdescription('')
  }
  // xoá
  const [open, setOpen] = useState(false);
const hide = () => {
  setOpen(false);
};
const handleOpenChange = () => {
  setOpen();
};

  const Delete = () => {
    dispatch(Deletee(autoId))
  }

  //sửa
  const [confirm,setConfirm] = useState(false)
  const [apply,setApply] = useState(true)
  

  const handleRepair = () => {
    setConfirm(true)
    setApply(false)
  }
  const handleConfirm = () => {
    setApply(true)
    setConfirm(false)
    Edit()

  }
  const Edit = () => {
    dispatch(Editt(persionalUserId, pass, fromDate, toDate, description))
  }

    // Hàm để điền giá trị từ hàng được chọn vào các ô input
    const fillFormWithRowData = (record) => {
      setpersionalUserId(record.personal_UserId);
      setpass(record.personal_Pass);
      setfromDate(record.fromDate);
      settoDate(record.toDate);
      setdescription(record.description);
      setAutoId(record.autoId)
    };

  //add


  const add = () => {
    dispatch( AddTTKS(persionalUserId, pass, fromDate, toDate, description))
  }
  //view
  const StaTus = useSelector((state) => state.status.listUsers)
  const View = useSelector ((state) => state.View.listUsers)
    const columns = [
        {
          title: "Tên đăng nhập",
          dataIndex: "personal_UserId", // Sửa dataIndex để khớp với tên trường dữ liệu
          key: "personal_UserId", // Sửa key để khớp với tên trường dữ liệu
        },
        {
          title: "Mật khẩu đăng nhập",
          dataIndex: "personal_Pass",
          key: "personal_Pass",
        },
        {
          title: "Từ ngày",
          dataIndex: "fromDate",
          key: "fromDate",
        },
        {
          title: "Đến ngày",
          dataIndex: "toDate",
          key: "toDate",
        },
        {
          title: "Trạng thái",
          dataIndex: "status_Vn",
          key: "status_Vn",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
          },
        {
          title: "Chức năng",
          dataIndex: "RESTRICTEDQTTY",
          key: "RESTRICTEDQTTY",
          render: (_, record) => (
            <div className="img-warning">
                 <img src="http://192.168.2.55:8080/static/img/icon/ic_edit.svg" alt="" onClick={() => {handleRepair(); fillFormWithRowData(record)}}/>
                 <Popover
                  content={<div>
                    <div className="message-warning">Chắc chắn xoá?</div>
                    <Button className="btn-reset" onClick={hide}>Đóng</Button>
                    <Button  type="primary"  className="btn-warning delete" onClick={() => {Delete(record)}}>Xác nhận</Button>
                  </div>
                }
                  trigger="click"
                  title=''
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                 <img src="http://192.168.2.55:8080/static/img/icon/ic_delete.svg" alt="" />
                </Popover>
                        </div>
          ),
        },
        
      ];

    return ( <>
    <Tabs>
        <Tabs.TabPane tab='Thông tin ký số'>
            <Content className="contentt">
                <Form className="warning">
                <Item className="box">
                    <span className="details">Khách hàng</span>
                    <Input placeholder=""/>
                </Item>
                <Item className="box">
                 <span className="details">Từ ngày*</span>

                <Form.Item 
                
                        name='tungay'
                        rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },
                        ]}>
                          
                    <DatePicker value={fromDate ? moment(fromDate) : null} onChange={(date) => {setfromDate(date)}}/>
                </Form.Item></Item>
                <Item className="box">
                 <span className="details">Đến ngày*</span>

                <Form.Item
                name='denngay'
                rules={[
                    {
                        required: true,
                        message: 'Không được để trống!',
                    },
                    ]}>
                    <DatePicker value={toDate ? moment(toDate) : null} onChange={(date) => {settoDate(date)}}/>
                </Form.Item></Item>
                <Item className="box">
                    <span className="details">Đơn vị cung cấp</span>
                    <Input/>
                </Item>
                <Item className="box">
                 <span className="details">Tên đăng nhập*</span>

                <Form.Item
                name='user'
                rules={[
                    {
                        required: true,
                        message: 'Không được để trống!',
                    },
                    ]}>
                    <Input value={persionalUserId} onChange={(e) => {setpersionalUserId(e.target.value)}}/>
                </Form.Item></Item>
                <Item className="box">
                 <span className="details">Mật khẩu đăng nhập*</span>

                <Form.Item 
                name='pass'
                rules={[
                    {
                        required: true,
                        message: 'Không được để trống!',
                    },
                    ]}>
                    <Input.Password value={pass} onChange={(e) => { setpass(e.target.value)}}/>
                </Form.Item></Item>
                <Item className="box">
                    <span className="details">Trạng thái*</span>
                    <Select className="select-warning" >
                    {StaTus.map((item) => (
                        <Option key={item.cdval} value={item.cdval}>{item.vN_CDCONTENT}</Option>
                      ))}
                    </Select>
                </Item>
                <Item  className="box">
                    <span className="details">Mô tả</span>
                    <Input value={description} onChange={(e) => {setdescription(e.target.value)}}/>
                </Item>
                <Item className="box box-btn">
                    { apply && <Button type="primary" htmlType="submit" className="btn-warning" onClick={add}>Áp dụng</Button> }
                    { confirm && <Button type="primary" className="btn-warning"  onClick={() => {handleConfirm(); showModal()}}>Lưu</Button> }
                    <Button className="btn-reset" onClick={handleReset}> Làm mới</Button>
                </Item>

                </Form>
                <Table dataSource={View} columns={columns} className="custom-thead-ks"
                  pagination={false}
                    />
                    <Footer></Footer>
            </Content>
        </Tabs.TabPane>
       

    </Tabs> 
     <Modal  
        centered
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
         footer={null}  >
           <div className="img-success"><img src="http://192.168.2.55:8080/static/img/icon/ic_createacc_success.svg" alt=""/></div>
        <p>Đổi thông tin thành công !</p> 
        

        </Modal>
       
        
        </>);
}
// /HomeMobile/GetAllCode?CDTYPE=API&CDCODE=SIGNSTATUS
// /api/CA-Sign/CA-Sign-Registration-View
export default KySo;