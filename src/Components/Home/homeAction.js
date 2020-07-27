  // Product List
  const fetchList = () => ({
    type: "FETCH_LIST"
  });
  
  const fetchListSuccess = (data, subTotalAmount) => ({
    type: "FETCH_LIST_SUCCESS",
    data,
    subTotalAmount
  });
  
  const fetchListError = error => ({
    type: "FETCH_LIST_ERROR",
    error
  });
  
  // Product Quantity Change
  const productQuantityChange = (e,action, val, Olddata) => ({
    type: "UPDATE_PRODUCT_QUANTITY",
    activeObject: e,
    activity: action, 
    activeValue: val,
    Olddata
  });


  const productQuantityChangeSuccess = (data, subTotalAmount) => ({
    type: "UPDATE_PRODUCT_QUANTITY_SUCCESS",
    data,
    subTotalAmount
  });

  const productQuantityChangeError = error => ({
    type: "UPDATE_PRODUCT_QUANTITY_ERROR",
    error
  });

  // Form Data Change 
  const formDataChanged = (name, value, Olddata) => ({
    type: "UPDATE_FORM_DATA",
    name,
    value,
    Olddata
  });


  const formDataChangedSuccess = (userFormData) => ({
    type: "UPDATE_FORM_DATA_SUCCESS",
    userFormData
  });

  const formDataChangedError = error => ({
    type: "UPDATE_FORM_DATA_ERROR",
    error
  });


  // Empty Cart Data 
  const emptyCartData = (Olddata) => ({
    type: "EMPTY_CART_DATA",
    Olddata
  });

  const emptyCartDataSuccess = () => ({
    type: "EMPTY_CART_DATA_SUCCESS"
  });

  const emptyCartDataError = error => ({
    type: "EMPTY_CART_DATA_ERROR",
    error
  });

  export { fetchList, fetchListSuccess, fetchListError, productQuantityChange, productQuantityChangeSuccess, productQuantityChangeError, formDataChanged,formDataChangedError,formDataChangedSuccess, emptyCartData , emptyCartDataSuccess,emptyCartDataError };
  