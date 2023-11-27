import { Link } from 'react-router-dom';
import rightArrow from '../assets/icon-arrow-right.svg';
import PropTypes from 'prop-types';
import PaidStatus from './PaidStatus';

function InvoiceCard({ invoice }) {
  return (
    <Link to={`invoice?${invoice.id}`}>
        <div className='hidden md:flex cursor-pointer duration-100 ease-in-out hover:border border-purple-500
             py-4 shadow-sm px-6 dark:bg-[#1E2139] bg-white rounded-lg  items-center justify-between'>
            <div className='flex items-center'>
                <h2 className='dark:text-white'>
                    <span className='text-[#7e88c3]'>#</span>
                    {invoice.id}
                </h2>
                <h2 className='text-sm text-gray-400 font-light ml-6'>
                    Due {invoice.paymentDue}
                </h2>
                <h2 className='text-sm text-gray-400 font-light ml-10'>
                    {invoice.clientName}
                </h2>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-sm mb-4 text-gray-400 font-light  text-right'>
                    {invoice.clientName}
                </h1>
                
                <PaidStatus type={invoice.status} />
            </div>
        </div>  

        {/* phone screen   */}

        <div className=' md:hidden flex cursor-pointer hover:border border-purple-500 py-4 shadow-sm px-6 dark:bg-[#1E2139] bg-white rounded-lg  items-center justify-between'>

            <div className=' flex flex-col'>
                <h2 className=' dark:text-white '>
                    <span className=' text-[#7e88c3]'>
                        #
                    </span>
                    {invoice.id}
                </h2>

                <h2 className=' text-sm text-gray-400 font-light mt-3 '>
                    Due {invoice.paymentDue}
                </h2>
                <h1 className=' text-xl  dark:text-white'>
                    £ {invoice.total}
                </h1>
            </div>

            <div className=' flex   flex-col'>
                <h2 className=' text-sm mb-4 text-gray-400 font-light  text-right  '>
                    {invoice.clientName}
                </h2>

                <PaidStatus type={invoice.status} />

            </div>
        </div>

    </Link>
  )
}

InvoiceCard.propTypes = {
    invoice: PropTypes.object.isRequired
}


export default InvoiceCard
