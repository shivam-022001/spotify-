const Header = () => {
let res=true;
  const handleClickMenu=(e)=>{
  if(res==true){
   console.log(res);
   return res=false;
  }else{
  return  res=true;
  }
  }
  return (
    <header className="header-main">
      <img
        src="\images\spotify.png"
        alt="pic" width="100rem"
      />
      <input type="checkbox" id="menu"></input>
      <label htmlFor="menu" className="menu" id="menubutton" onClick={handleClickMenu}>
     {res? <i className= "fa fa-bars"></i>:<i className="fa-solid fa-xmark"></i>}
      </label>
      <nav>
        <ul>
          <li>primium</li>
          <li>Support</li>
          <li>Download</li>
          <li>|</li>
          <li>Sign up</li>
          <li>log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
