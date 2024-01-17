import React from 'react'

const Test = () => {
  return (
  
    <div className="flex justify-center items-center">
    <div className="border-gray-500 border-2 w-[400px] h-[550px]  ">
    <div className="flex justify-center items-center">
      {/* Actual Name */}
      <h2 className="text-center text-red-700">YasinCengiz</h2>
      {/* Avatar */}
      <div className="avatar my-6 bg-orange-500 border-r-gray-500 rounded-[50%] w-12 h-12"></div>
     
     
      <div className="content flex justify-center items-center ">
        {/* <h2 className="username text-center ">@yasincengiz38</h2> */}
        {/* Status ----Follow--Followers--Likes */}
        <div className="status flex justify-around ">
            <div className="num-fol">
                <div className="text-center">3</div>
                <span className="text-gray-300">Following</span>
            </div>
            <div className="num-fol">
                <div className="text-center">13.4M</div>
                <span className="text-gray-300">Followers</span>
            </div>
            <div className="num-fol">
                <div className="text-center">164.3M</div>
                <span className="text-gray-300">Likes</span>
            </div>
        </div>

      </div>



      {/* end .... */}
      </div>

      <div className="boxes"></div>
    </div>
    </div>
  )
}

export default Test
