// actions/index.js

import { UPDATE_CUSTOMER_DATA,
   TkOtp, 
   Fet_request,
    Fet_success,
     Fet_error, 
     UpdateOpt ,
     STATUS,
     ADD,
     VIEW,
     EDIt,
     DELETE,
     WARNINGLL,
     ADDWARNING,
     VIEWLIST,
     EDITWARNING,
     DELETEWARNING,
    } from './typeAction'; // Import action types

import axios from 'axios';
import { message } from 'antd';


const token = localStorage.getItem('token')
const username =localStorage.getItem('username')
const cusstID =  localStorage.getItem('cusstID')


//thông tin khách hàng
export const infor = () => {
  return async (dispatch, getState) => {
    dispatch( FetRequest())
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params: {
                          CUSTODYCD: username,
                          EDDOVER: '1',
                      }
                  };
                  const res = await axios.get('http://192.168.2.55:9090/Account/GetInfoCustomerDetail', config);
                  const data = res.data.data;
                  dispatch(FetSuccess(data))
                  localStorage.setItem('cusstID',data.custid)
                  console.log('view',data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}


// cập nhật thông tin khách hàng
export const update = ( phone, email, address) => {
  return async (dispatch, getState) => {
    try {
              const config = {
                  headers: {
                      Authorization: `Bearer ${token}`
                  },
                  
              }
              
              
              const res = await axios.put('http://192.168.2.55:9090/Account/UpdateCustomerInfo', {
                      CUSTODYCD: username,
                      PHONE: phone,
                      EMAIL: email,
                      ADDRESS: address,
              }, config);
              const data = res.data.data;
              dispatch(Update(data))
          } catch (error) {
              console.error('Error fetching data:', error);
          }
  }
}

//OTP
export const TkOTP = () => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params: {
                          CUSTODYCD: username,
                      }
                  };
                  const res = await axios.get('http://192.168.2.55:9090/Account/GetOTPMethod', config);
                  const data = res.data.data[0];
                  dispatch(TK_OTP(data))
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
//cập nhật otp
export const updateOtp = ( recvtype) => {
  return async (dispatch, getState) => {
    try {
              const config = {
                  headers: {
                      Authorization: `Bearer ${token}`
                  },
                  
              }
              
              
              const res = await axios.put('http://192.168.2.55:9090/Account/ChangeOTPMethod', {
                      CUSTODYCD: username,
                      RECVTYPE: recvtype,
                      
              }, config);
              const data = res.data.data;
              dispatch(UpdateOtp(data))
          } catch (error) {
              console.error('Error fetching data:', error);
          }
  }
}


//thông tin ký số
export const Statuss = () => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params: {
                        CDTYPE:'api',
                        CDCODE:'SIGNSTATUS',
                      }
                  };
                  const res = await axios.get('http://192.168.2.55:9090/HomeMobile/GetAllCode?', config);
                  const data = res.data.data;
                  dispatch(Status(data))
                  console.log('all',data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}


export const AddTTKS = (persionalUserId, pass, fromDate, toDate, description) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      
                  };
                  const res = await axios.post('http://192.168.2.55:9090/api/CA-Sign/CA-Sign-Registration-Add?',{
                  custId:cusstID,
                  persionalUserId:persionalUserId,
                  persionalPass:pass,
                  fromDate:fromDate,
                  toDate:toDate,
                  description:description,}, config);
                  const data = res.data.data;
                  dispatch(Add(data))
                  console.log('add :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}

export const Vieww = () => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params : {
                        pCustId:cusstID,
                      }
                      
                  };
                  const res = await axios.get('http://192.168.2.55:9090/api/CA-Sign/CA-Sign-Registration-View', config);
                  const data = res.data.data;
                  dispatch(View(data))
                  console.log('View :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
export const Editt = (persionalUserId, pass, fromDate, toDate, description) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      
                      
                  };
                  const res = await axios.put('http://192.168.2.55:9090/api/CA-Sign/CA-Sign-Registration-Edit',{
                    autoId: 0,
                    custId: cusstID,
                    persionalUserId: persionalUserId,  
                    persionalPass: pass,
                    fromDate: fromDate,
                    toDate: toDate,
                    description: description,
                    lastChangeBy: "",
              } , config);
                  const data = res.data.data;
                  dispatch(Edit(data))
                  console.log('Edit :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
export const Deletee = ( autoId) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params: {
                        pAutoId: autoId
                      }
                      
                      
                  };
                  const res = await axios.delete('http://192.168.2.55:9090/api/CA-Sign/CA-Sign-Registration-Delete' , config);
                  const data = res.data.data;
                  dispatch(Delete(data))
                  console.log('delete :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}


//cảnh báo lãi lỗ
export const warningLL = () => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params: {
                        CDTYPE:'api',
                        CDCODE:'APPLYTYPE',
                      }
                  };
                  const res = await axios.get('http://192.168.2.55:9090/HomeMobile/GetAllCode?', config);
                  const data = res.data.data;
                  dispatch(WarningLL(data))
                  console.log('warningll',data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
export const AddWarning = (acctno, type, symbol, profitRate, lossRate) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      
                  };
                  const res = await axios.post('http://192.168.2.55:9090/ProfitLossWarning/Insert',{
                    custodycd: username,
                    acctno: acctno,
                    type: type,
                    symbol: symbol,
                    profitRate: profitRate,
                    lossRate: lossRate}, 
                    config);
                  const data = res.data.data;
                  dispatch(AddWarningLL(data))
                  console.log('addw :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
export const ViewList = () => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      params : {
                        custodycd:username,
                      }
                      
                  };
                  const res = await axios.get('http://192.168.2.55:9090/ProfitLossWarning/GetList?', config);
                  const data = res.data.data;
                  dispatch(ViewLists(data))
                  console.log('Viewlít :', data)
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
  }
}
export const EditWarning = ( acctno, autoId, profitRate, lossRate) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      
                      
                  };
                  const res = await axios.post('http://192.168.2.55:9090/ProfitLossWarning/Edit',{
                    custodycd: username,
                    acctno: acctno,
                    autoId:autoId,
                    profitRate: profitRate,
                    lossRate: lossRate
              } , config);
                  const data = res.data.data;
                  dispatch(EditW(data))
                  success()
                  console.log('Editw :', data)
              } catch  {error()}
  }
}
export const DeleteWarning = (  autoId ) => {
  return async (dispatch, getState) => {
    try {
                  const config = {
                      headers: {
                          Authorization: `Bearer ${token}`
                      },
                      
                      
                  };
                  const res = await axios.put('http://192.168.2.55:9090/ProfitLossWarning/Remove',{
                    autoId:autoId,
              } , config);
                  const data = res.data.data;
                  dispatch(DELETE_WARNING(data))
                  success()
                  console.log('Delete :', data)
              } catch  {error()}
  }
}

const success = () => {
  message.success({
    content: (
      <>
        <h3>Thành công</h3>
        {/* <span>Đăng nhập thành công!</span> */}
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
        {/* <span>Tài khoản hoặc mật khẩu không đúng!</span> */}
      </>
    ),
    className:'error'
  });
};





export const FetRequest = () => {
  return {
    type: Fet_request,
  }}
export const FetSuccess = (payload) => {
    return {
      type: Fet_success,
      payload
    }}
export const FetError = () => {
      return {
        type: Fet_error,
      }}

export const Update = (payload) => {
    return {
      type:UPDATE_CUSTOMER_DATA,
      payload
    }
}

//otp
export const TK_OTP = (payload) => {
  return {
      type:TkOtp,
      payload
  }
}
export const UpdateOtp = (payload) => {
  return {
    type:UpdateOpt,
    payload
  }
}

//thông tin ký số

export const Status = (payload) => {
  return {
    type:STATUS,
    payload
  }
}
export const Add = (payload) => {
  return {
    type:ADD,
    payload
  }
}
export const View = (payload) => {
  return {
    type:VIEW,
    payload
  }
}
export const Edit = (payload) => {
  return{
    type:EDIt,
    payload
  }
}
export const Delete = (payload) => {
  return {
    type:DELETE,
    payload
  }
}
//canh báo lãi lỗ
export const WarningLL = (payload) => {
  return {
    type:WARNINGLL,
    payload
  }
}
export const AddWarningLL = (payload) => {
  return {
    type:ADDWARNING,
    payload
  }
}
export const ViewLists = (payload) => {
  return{
    type: VIEWLIST,
    payload
  }
}
export const EditW = (payload) => {
  return {
    type:EDITWARNING,
    payload
  }
}
export const DELETE_WARNING = (payload ) => {
  return {
    type:DELETEWARNING,
    payload
  }
}