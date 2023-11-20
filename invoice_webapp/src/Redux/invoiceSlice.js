import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";


const invoiceSlice = createSlice({
    name: 'invoices',
    initialState: {
        allInvoice: data,
        filteredInvoice: [],
        invoiceById: null
    },
    reducers:{
        // Invoice Reducers Implementation
    }

})

export default invoiceSlice;