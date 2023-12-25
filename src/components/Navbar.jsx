
const Navbar = () => {
  return (
    <main className="flex justify-around my-4 h-14 shadow-md">
      {/* LEFT  */}
      <div className="logo">
        <h2>YouTube</h2>
      </div>

      {/* CENTER  */}
      <div className="border-[.5px] border-gray-600  rounded-lg h-8 w-[40%] border-lg relative">
        <div className="search-btn absolute right-0  h-8  w-12 bg-gray-400 ">&</div>
      </div>

      {/* RIGHT  */}
      <div className="avatar">
        <div className="add-video"></div>
        <div className="notification-bell"></div>

        <div className="border-[.5px] rounded-[50%] h-12 w-12 border-lg "></div>
      </div>
    </main>
  )
}

export default Navbar
