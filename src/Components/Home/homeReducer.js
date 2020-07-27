const initialState = {
  isLoading: false,
  data: [],
  error: null,
  timelineWidth: 0,
  content: '',
  title: '',
  subTotalAmount: 0,
  userFormData: {
    name: '',
    surname: '',
    email: '',
    phone: '',
    description: ''
  }
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LIST":
      return { ...state, ...action, isLoading: true };

    case "FETCH_LIST_SUCCESS":
      return { ...state, ...action, isLoading: false };

    case "FETCH_LIST_ERROR":
      return { ...state, error: action.error, isLoading: false };

    //Product Quantity Change 
    case "UPDATE_PRODUCT_QUANTITY":
      return { ...state, ...action, isLoading: false };
    case "UPDATE_PRODUCT_QUANTITY_SUCCESS":
      return { ...state, ...action, isLoading: false };
    case "UPDATE_PRODUCT_QUANTITY_ERROR":
      return { ...state, error: action.error, isLoading: false };

    //User Form Data Change 
    case "UPDATE_FORM_DATA":
      return { ...state, ...action, isLoading: true };
    case "UPDATE_FORM_DATA_SUCCESS":
      return { ...state, ...action, isLoading: false }
    case "UPDATE_FORM_DATA_ERROR":
      return { ...state, error: action.error, isLoading: false };

    //Empty Cart Details 
    case "EMPTY_CART_DATA":
      return { ...state, ...action, isLoading: false };
    case "EMPTY_CART_DATA_SUCCESS":
      return { ...state, ...action, isLoading: false }
    case "EMPTY_CART_DATA_ERROR":
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
};

export default homeReducer;
