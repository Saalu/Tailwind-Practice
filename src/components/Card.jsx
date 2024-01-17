
const Card = () => {
  return (
    <div className="flex justify-center items-center rounded-md">
     <div className="box border-2 border-gray-400 w-[400px] h-[580px] " >
        <div className="content  flex justify-center items-center flex-col">
            <h2 className="font-bold mt-4">YasinCengiz</h2>
            <div className="my-2 rounded-[100%] p-5 bg-gray-400 ">Vata</div>
            <h3 className="font-medium">@yasincengiz</h3>
            <div className="status my-2 flex justify-between items-center gap-10">
              <div className="wrapper ">
               <div className="digit text-center font-bold">3</div>
               <div className="desc text-gray-300">Following</div>
              </div>
              <div className="wrapper">
               <div className="digit  text-center font-bold">13.4M</div>
               <div className="desc text-gray-300">Followers</div>
              </div>
              <div className="wrapper">
               <div className="digit  text-center font-bold">164.3M</div>
               <div className="desc text-gray-300">Likes</div>
              </div>
            
            </div>
            <div className="btn social flex justify-between gap-2">
              <button className="bg-red-500 px-16 py-2 font-medium text-slate-100 rounded-md">Follow</button>
              <div className="social-logo bg-gray-200  h-10 w-10 rounded-md"></div>
              <div className="more bg-gray-200  h-10 w-10 rounded-md"></div>
            </div>
        </div>

        {/* Next Section */}
      <div className="mt-4 content  flex justify-center flex-col gap-1 ">
        <div className="wrapper flex justify-between gap-1">
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
        </div>
        <div className="wrapper flex justify-between">
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
          <div className="box h-[150px] w-[130px] bg-gray-200"> </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Card
