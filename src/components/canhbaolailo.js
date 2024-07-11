import { Button, Form, Select, Tabs, Table, Popover, Input } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddWarning, EditWarning,DeleteWarning } from "~/redux/Actions";

const {Option} = Select
function CanhBao() {
 const dispatch = useDispatch()
    
      const handleKeyDown = (e) => {
        // Lấy mã phím từ sự kiện
        const keyCode = e.keyCode || e.which;
        
        // Chỉ cho phép các phím liên quan đến số và một số phím điều hướng
        if (!(keyCode >= 48 && keyCode <= 57) &&  // Số từ 0 đến 9
            !(keyCode >= 96 && keyCode <= 105) && // Số từ 0 đến 9 trên bàn phím số
            keyCode !== 8 &&                      // Phím Backspace
            keyCode !== 9 &&                      // Phím Tab
            keyCode !== 37 &&                     // Phím mũi tên trái
            keyCode !== 39 &&                     // Phím mũi tên phải
            keyCode !== 46) {                     // Phím Delete
          e.preventDefault(); // Ngăn chặn sự kiện mặc định của phím
        }
      };
      const [disableSymbolSelect, setDisableSymbolSelect] = useState(false);

      const handleTypeChange = (value) => {
        setType(value);
        // If the selected type is 'Loại áp dụng', disable the symbol select
        setDisableSymbolSelect(value === '000');
        // Reset the symbol select value when the type changes
        setSymbol(null);
      };

      const [acctno,setAcctno] = useState('')
      const [type,setType] = useState('')
      const [symbol,setSymbol] = useState('')
      const [profitRate,setProfitRate] = useState('')
      const [lossRate,setLossRate] = useState('')
      const [autoId,setAutoId] = useState('')

      const handleReset =() => {
        setAcctno('')
        setType('')
        setSymbol('')
        setProfitRate('')
        setLossRate('')
      }

// loại áp dụng
const apply = useSelector ((state) => state.WarningLL.listUsers)

// thêm
const add = () =>{
  dispatch(AddWarning(acctno, type, symbol,parseFloat( profitRate),parseFloat(lossRate) ))
}
// viewlist
const view = useSelector((state) => state.ViewList.listUsers)

//sửa
const [confirm,setConfirm] = useState(false)
const [applyy,setApply] = useState(true)
const handleRepair = () => {
  setConfirm(true)
  setApply(false)
}
const handleConfirm = () => {
  setApply(true)
  setConfirm(false)
  edit()

}

const fillFormWithRowData = (record) => {
  setAcctno(record.acctno);
  setType(record.type);
  setSymbol(record.symbol);
  setProfitRate(record.profitrate);
  setLossRate(record.lossrate);
  setAutoId(record.autoid)
};
const edit = () =>{
    dispatch(EditWarning(acctno, autoId,profitRate ,lossRate ))
}

// xoas


const [open, setOpen] = useState(false);
const hide = () => {
  setOpen(false);
};
const handleOpenChange = () => {
  setOpen();
};

const deletew = () => {
    dispatch(DeleteWarning(autoId))
}


      const columns = [
        {
          title: "Tài khoản",
          dataIndex: "acctno", // Sửa dataIndex để khớp với tên trường dữ liệu
          key: "acctno", // Sửa key để khớp với tên trường dữ liệu
        },
        {
          title: "Loại áp dụng",
          dataIndex: "type",
          key: "type",
        },
        {
          title: "Mã chứng khoán",
          dataIndex: "symbol",
          key: "symbol",
        },
        {
          title: "Lãi(%)",
          dataIndex: "profitrate",
          key: "profitrate",
        },
        {
          title: "Lỗ(%)",
          dataIndex: "lossrate",
          key: "lossrate",
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
                    <Button  type="primary"  className="btn-warning delete" onClick={() => {deletew(record)}}>Xác nhận</Button>
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
      
      

    return ( 
        <Tabs>
            <Tabs.TabPane tab='Cài đặt cảnh báo'>
            <Content className="contentt">
            <Form className="warning">
                <Item className="box">
                    <span className="details">Tài khoản</span>
                    <Form.Item
                    name='taikhoan'
                    rules={[
                      {
                          required: true,
                          message: 'Không được để trống!',
                      },
                      ]}>

                    <Select 
                    placeholder='chọn tài khoản'
                    className="select-warning"
                    allowClear
                    value={acctno}
                    onChange={(value) => {setAcctno(value)}}
                    defaultValue="0001056217MG"
                    >
                      <Option key={1} value='0001056217MG'>
                      0001056217MG
                        </Option>
                        <Option key={2} value='0001056217NM'>
                        0001056217NM
                        </Option>

                    </Select>
                    </Form.Item>
                </Item>
                <Item className="box">
                    <span className="details">Loại áp dụng</span>
                    <Form.Item
                    name='loaiapdung'
                    rules={[
                      {
                          required: true,
                          message: 'Không được để trống!',
                      },
                      ]}>

                    <Select placeholder='Loại áp dụng' 
                    className="select-warning" 
                    allowClear
                    value={type}
                    onChange={handleTypeChange}
                    defaultValue='Toàn danh mục'
                    >
                      {apply.map((item) => (
                        <Option key={item.cdcontent} value={item.cdval}>{item.vN_CDCONTENT}</Option>
                      ))}
                      
                    </Select>
                    </Form.Item>
                </Item>
                <Item className="box">
                    <span className="details">Mã chứng khoán</span>
                    <Form.Item
                    name='machungkhoan'
                    rules={[
                      {
                          required: true,
                          message: 'Không được để trống!',
                      },
                      ]}>

                    <Select placeholder='Lựa chọn' 
                    className="select-warning"
                    allowClear
                    disabled={disableSymbolSelect}
                    value={symbol}
                    onChange={(value) => {setSymbol(value)}}
                    >
                    <Option key={1} value='ALL'>Tất cả</Option>
                    <Option key={2} value='AAV'>AAV</Option>
                    <Option key={3} value='AME'>AME</Option>
                    <Option key={4} value='AMV'>AMV</Option>
                    <Option key={5} value='API'>API</Option>
                    <Option key={6} value='APS'>APS</Option>
                    <Option key={7} value='BCC'>BCC</Option>
                    <Option key={8} value='BNA'>BNA</Option>
                    <Option key={9} value='BSC'>BSC</Option>
                    </Select>
                    </Form.Item>
                    
                </Item>
                <Item className="box" >
                    <span className="details">Lãi (%)</span>
                    <Form.Item
                    name='lai'
                    rules={[
                      {
                          required: true,
                          message: 'Không được để trống!',
                      },
                      ]}>
                    <Input className="select-warning"
                     formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} // Hiển thị giá trị với dấu phẩy ngăn cách hàng nghìn
                     onKeyDown={handleKeyDown}
                     value={profitRate}   
                     onChange={(e) => {setProfitRate(e.target.value)}}
     
                    />
                    </Form.Item>
                    
                </Item>
                <Item className="box">
                    <span className="details">Lỗ (%)</span>
                    <Form.Item
                    name='lo'
                    rules={[
                      {
                          required: true,
                          message: 'Không được để trống!',
                      },
                      ]}>
                    

                    <Input className="select-warning "
                     formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} // Hiển thị giá trị với dấu phẩy ngăn cách hàng nghìn
                     onKeyDown={handleKeyDown}
                     value={lossRate}
                     onChange={(e) => {setLossRate(e.target.value)}}
                    />
                    </Form.Item>
                    
                </Item>
                <Item  className="box box-btn">
                { applyy && <Button type="primary" htmlType="submit" className="btn-warning" onClick={add}>Áp dụng</Button> }
                    { confirm && <Button type="primary" className="btn-warning"  onClick={() => {handleConfirm()}}>Lưu</Button> }
                    <Button className="btn-reset" /*onClick={handleReset}*/> Làm mới</Button>
                </Item>
            </Form>
            <Table dataSource={view} columns={columns} className="custom-thead"
                  pagination={false}
                    />
                    <Footer></Footer>
        </Content>
            </Tabs.TabPane>
        </Tabs>
        
       
     );
}

export default CanhBao;