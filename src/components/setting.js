import { Button } from 'antd';
import 'antd/dist/antd.css'
import {  useState} from 'react';
import { useSelector } from 'react-redux';
import Thongtin from './thongtincanhan';
import OTP from './phuongthucnhapotp';
import CanhBao from './canhbaolailo';
import SMS from './caidatsms';
import KySo from './thongtinkyso';
function Setting() {

    const [currentPage, setCurrentPage] = useState('thongtin'); // State để lưu trạng thái trang hiện tại
    // Hàm để chuyển đổi trang hiển thị
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    

    


    

    const renderPage = () => {
        
        switch (currentPage) {
            case 'thongtin':
                return <Thongtin />;
            case 'otp':
                return <OTP />;
            case 'canhbao':
                return <CanhBao />;
            case 'sms':
                return <SMS />;
            case 'kyso':
                return <KySo />;
            default:
                return <Thongtin />;
        }
    };
    //lấy thông tin
    const customerData = useSelector((state) => state.user.listUsers )




    return ( 
    <div>

            <div className='title-wrapp'>
                <span className='title'>
                    <div> Xin chào,</div>
                   <h1>{customerData ? customerData.fullname :''}</h1> 
                    <div>{customerData ? customerData.custodycd :''}</div>
                </span>
                <div className='nav-wrap' >
                   
                <Button className='btn-setting'  onClick={() => handlePageChange('thongtin')} >
                       <span className='title-btn'>
                       <img src='http://192.168.2.55:8080/static/img/icon/ic_setting_user.svg' alt=''/>
                        <span>Thông tin cá nhân</span></span> 
                        </Button>
                    <Button className='btn-setting' onClick={() => handlePageChange('otp')}>
                       <span className='title-btn'>  <img src='http://192.168.2.55:8080/static/img/icon/ic_setting_otp.svg' alt=''/>
                        <span>Phương thức nhập OTP</span></span>
                        </Button>
                    <Button className='btn-setting' onClick={() => handlePageChange('canhbao')}>
                       <span className='title-btn'> <img src='http://192.168.2.55:8080/static/img/icon/ic_setting_losswarn.svg' alt=''/>
                        <span>Cảnh báo lãi lỗ</span></span> 
                        </Button>
                    <Button className='btn-setting' onClick={() => handlePageChange('sms')}>
                        <span className='title-btn'>
                        <img src='http://192.168.2.55:8080/static/img/icon/ic_setting_sms.svg' alt=''/>
                        <span>Cài đặt SMS</span>
                        </span>
                        </Button>
                    <Button className='btn-setting' onClick={() => handlePageChange('kyso')}>
                       <span className='title-btn'>
                       <img src='http://192.168.2.55:8080/static/img/icon/ic_setting_pay.svg' alt=''/>
                        <span>
                            Thông tin ký số
                        </span></span> 
                        </Button>
                </div>
            </div>
            <div className='content'>
            
           { renderPage()}
            
            </div>
    </div>
        
     );
}

export default Setting;