// reducers/index.js

import { combineReducers } from 'redux';
import {customerReducer, updateInfor, TK_OTP, Update_OTP, Status, Add, View, Edit, Delete, WarningLL, AddWarningLL,ViewList,EDIT, DELETEW} from './reducer'; // Reducer cho customer data

// Kết hợp các reducers thành rootReducer
const rootReducer = combineReducers({
      user: customerReducer,
      update: updateInfor,
      tkotp: TK_OTP ,
      UpdateOtp:Update_OTP,
      status:Status,
      Add:Add,
      View:View,
      Edit:Edit,
      Delete:Delete,
      WarningLL:WarningLL,
      AddWarningLL:AddWarningLL,
      ViewList:ViewList,
      EDIT:EDIT,
      DELETEW:DELETEW,
});

export default rootReducer;
