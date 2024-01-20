import React from 'react'

const Bank = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='bg-green-300 h-[300px] w-[440px]'>
      <div className="flex justify-between gap-1 mx-4 my-6 font-bold text-white">
         <div className="menu">Menu</div>
         <div className="title">Dashboard</div>
         <div className="more">More</div>
      </div>
     <div className="flex justify-center">
       <div className="bg-white rounded-[50%] h-[150px] w-[150px] flex justify-center items-center ">
       <div className="border-2 border-slate-50 h-[130px] w-[130px] rounded-[50%] flex justify-center items-center">
         <div className="text-green-500 font-medium text-small">GHS 17,846.56</div>
       </div>
       </div>
     </div>



      <div className="cards bg-slate-100 mt-10 h-[200px] flex justify-around bg-gray-50" >
            <div className="h-[75px] shadow-md rounded-md px-6 py-4  mt-8 mx-4 bg-white">
                <div className="flex items-center ">
                    <span className='h-2 w-2 rounded-[100%] mr-1  bg-green-500'></span> 
                    <p className='text-gray-300'>Available Balance</p>
                </div>
                <h2 className='font-medium text-large'>GHS 1,784.64</h2>
            </div>   
            <div className="h-[75px] shadow-md rounded-md px-6 py-4  mt-8 mx-4 bg-white">
                <div className="flex items-center ">
                    <span className='h-2 w-2 rounded-[100%] mr-1  bg-blue-800'></span> 
                    <p className='text-gray-300'>Available Balance</p>
                </div>
                <h2 className='font-medium text-large'>GHS 1,784.64</h2>
            </div>   
      </div>
    </div>
    </div>
  )
}

export default Bank
