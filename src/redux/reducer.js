// reducers/customerReducer.js
import { Fet_request,
   Fet_success,
    Fet_error,
    UPDATE_CUSTOMER_DATA,
    TkOtp,
    UpdateOpt,
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
   } from "./typeAction";

const initialState = {
  // Khởi tạo trạng thái ban đầu của customerData
  // Có thể là một đối tượng rỗng hoặc null tùy thuộc vào ứng dụng của bạn
  listUsers: []
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fet_request:
      return {
        ...state
      };
      case Fet_success:

      return {
        ...state,listUsers: action.payload
      };
      case Fet_error:
      return {
        ...state
      };
    default:
      return state;
  }
};


const updateInfor = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_DATA:
      return {
        ...state
      };
      
    default:
      return state;
  }
};
  //otp
const TK_OTP = (state = initialState, action) => {
  switch (action.type) {
    case TkOtp:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const Update_OTP = (state = initialState, action) => {
  switch (action.type) {
    case UpdateOpt:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};

// ttks

const Status = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const Add = (state = initialState, action) => {
  switch (action.type) {
    case ADD:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const View = (state = initialState, action) => {
  switch (action.type) {
    case VIEW:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const Edit = (state = initialState, action) => {
  switch (action.type) {
    case EDIt:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const Delete = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};


//cảnh báo lãi lỗ
const WarningLL = (state = initialState, action) => {
  switch (action.type) {
    case WARNINGLL:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const AddWarningLL = (state = initialState, action) => {
  switch (action.type) {
    case ADDWARNING:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const ViewList = (state = initialState, action) => {
  switch (action.type) {
    case VIEWLIST:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const EDIT = (state = initialState, action) => {
  switch (action.type) {
    case EDITWARNING:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};
const DELETEW = (state = initialState, action) => {
  switch (action.type) {
    case DELETEWARNING:

      return {
        ...state, listUsers:action.payload
      };
      
    default:
      return state;
  }
};



export {customerReducer, updateInfor, TK_OTP, Update_OTP, Status, Add ,View, Edit, Delete, WarningLL,AddWarningLL,ViewList,EDIT, DELETEW};
