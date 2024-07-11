import { Button, Checkbox, Tabs } from "antd";
import { Content } from "antd/lib/layout/layout";

function SMS() {
    return (  
        <Tabs>
            <Tabs.TabPane tab='Đăng kí nhận SMS'>
                <Content className="contentt">
                    <div> <Checkbox className="check-sms">Biến động số dư tiền <img src="http://192.168.2.55:8080/static/img/icon/ic_info.svg" alt=""/></Checkbox></div>
                    <div> <Checkbox className="check-sms">Biến động số dư chứng khoán <img src="http://192.168.2.55:8080/static/img/icon/ic_info.svg" alt=""/></Checkbox></div>
                    <div> <Checkbox className="check-sms">Thông báo khớp lệnh <img src="http://192.168.2.55:8080/static/img/icon/ic_info.svg" alt=""/></Checkbox></div>
                    <div> <Checkbox className="check-sms">Thông tin tài khoản <img src="http://192.168.2.55:8080/static/img/icon/ic_info.svg" alt=""/></Checkbox></div>
                    <div> <Checkbox className="check-sms">Thông báo dịch vụ <img src="http://192.168.2.55:8080/static/img/icon/ic_info.svg" alt=""/></Checkbox></div>
                    <div>
                        <p className="notify-sms">*Phí dịch vụ nhận Thông báo qua SMS được công bố theo thời kỳ</p>
                        <Button type="primary" htmlType="submit">Xác nhận</Button>
                    </div>
                </Content>
            </Tabs.TabPane>
        </Tabs>
     );
}

export default SMS;