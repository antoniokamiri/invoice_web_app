import {Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
import Center from './components/Center';
import InvoiceInfo from './components/InvoiceInfo';
import {useDispatch} from 'react-redux';
import invoiceSlice from './redux/invoiceSlice';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(invoiceSlice.actions.deleteInvoice({id : id }))
  }
  
  return (
    <div className='dark:bg-[#141625] bg:-[#f8f8fb] duration-300 min-h-screen'>
      {/* header Section */}
      <Header />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>

          <Route element={<Center />} path='' />
          <Route element={<InvoiceInfo onDelete={onDelete} />} path='/invoice' />

        </Routes>

      </AnimatePresence>
    </div>
  )
}

export default App
