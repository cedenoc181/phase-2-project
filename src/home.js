import  {React, useState} from "react";
import Hcontainer from "./Hcontainer";
// import TcreateC from "./TcreateC";
import Search from "./Search";
import "./home.css"

function Home({charactersArr, onSearch}) {
 
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="homePage">
    <button className= "login-btn" onClick={handleClick}>{isLoggedIn ? "Login" : "Logout"}</button>
   <div className="search=input"> <Search onSearch={onSearch} /> </div>
    <p className="welcome">{isLoggedIn ? null : "Welcome Back Teana!"} </p>
    <div>
      <img className = "logo" src = "https://www.smashbros.com/assets_v2/img/top/hero_title_en.png" alt='logo'>
  </img>
  <h1 className = "title">Smash hub</h1>
      {/*Login button with boolean expressionn to render logged in with click */}
     
        {/* <h2 className="welcome">{isLoggedIn ? "Sign In!" : "Welcome Back Teana!"} </h2> */}
      <Hcontainer charactersArr={charactersArr} />
      {/* <TcreateC newCharacter={newCharacter} /> */}
    </div>
    <main className="main">
    <h2 className="newsTitle"> Smash news</h2>
    <div className="line-through">______________________________________________________________________________</div>
      <article className="newsCard">
<img className="newsImage" 
src="https://visitowa.com/wp-content/uploads/2022/08/Website-Metadata-Super-Smash-Tournament-1024x533.jpg" 
alt="news" />
<h4 className="aticle-title">Our Smash Tourney is Hosted Every Saturday evening! </h4>
<p className="news-para">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
</p>
      </article>
      <article className="newsCard">
      <img className="newsImage" 
src="https://techcrunch.com/wp-content/uploads/2021/10/FA8OvTuXIAQEUzo.jpg" 
alt="news" />
<h4 className="aticle-title"> The Long anticipated Key Master is Here! </h4>
<p className="news-para">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
</p>
</article>
<article className="newsCard">
      <img className="newsImage" 
src="https://www.smashbros.com/assets_v2/img/howtoplay/img_howtoplay-mode02_pc_en.jpg" 
alt="news" />
<h4 className="aticle-title"> Play your team or new teams with Squad Strike </h4>
<p className="news-para">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
 </p>
 </article>

 <article className="newsCard">

 <img className="newsImage" 
src="https://i.ytimg.com/vi/vDCXWTQfLCc/maxresdefault.jpg" 
alt="news" />
<h4 className="aticle-title"> Thats right! more Stages more Fun  </h4>
<p className="news-para">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
</p>
       </article>

       <article className="newsCard">

      <img className="newsImage" 
src="https://i.ytimg.com/vi/hA2Kyz9JFdQ/maxresdefault.jpg" 
alt="news" />
<h4 className="aticle-title"> Steve is here and he isn't just laying blocks </h4>
<p className="news-para">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
</p>
</article>

<article className="newsCard">

      <img className="newsImage" 
src="https://i.pinimg.com/736x/7e/6d/42/7e6d421be9e8cf4cbb170715f100e339.jpg" 
alt="news" />
<h4 className="aticle-title"> Here me out, What if .... </h4>
<p className="news-para">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. 
Tristique nulla aliquet enim tortor at auctor. 
Lectus proin nibh nisl condimentum id venenatis. 
Vitae elementum curabitur vitae nunc sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
 Bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta lorem mollis. 
Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dictum varius duis at consectetur.
 Mauris sit amet massa vitae tortor. Purus faucibus ornare suspendisse sed.
 </p>
 </article>


    </main>
    </div>  
  );
}

export default Home;
