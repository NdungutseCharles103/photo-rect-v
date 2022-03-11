import { Link } from "react-router-dom";
import styled from 'styled-components';
import './Home.css';
import './side.css';
import Follow from './follow';
import Saved from './saved';
import Activity from './activity';
import searchUtils from "./posts/searchQuery";
import { useEffect, useState } from "react";


function Side({ isVisible, handleShowRe, setVisible,
  isToggled, setToggled }) {


  const ReStyle = styled.div`
   display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
   flex-direction: column;
   align-items: center;
  `
  const [searchResults, setResults] = useState([]);

  useEffect(() => {
    if (!searchResults.length) {
      getResults()
    }
  }, [searchResults])
  const getResults = async () => {
    let res = await searchUtils.showUser()
    if (res.length) {
      setResults(res)
    }
  }
  const handleSearch = (e) => {
    e.preventDefault()
    searchUtils.showUser(() => {
      getResults()
    })
  }


  return (
    <Test isToggled={isToggled} setToggled={setToggled}
      className={`side `}>
      <div className="side-view">
        <div className="topside">
          <div onClick={handleShowRe} className="input-search" >
            <input onClick={handleShowRe} type="text" placeholder="Search" disabled />
            <i className="bx bx-search icon"></i>
          </div>
          <div className="bell" id="log">
            <i title="See notifications" className="bx bx-bell icon"></i>
          </div>
          <div className="bell" id="bell">
            <Link to="login"><a href="login.html"><i title="Log out" className="bx bx-log-out"></i></a></Link>
          </div>
          <div>
          </div>
        </div>
        <ReStyle isVisible={isVisible} setVisible={setVisible} className="results shadow-xl">
          <form onLoad={searchUtils.onload} onSubmit={handleSearch}>
            <div className="input-search1">
              <input type="text" placeholder="Search" />
              <i className="bx bx-search icon"></i>
              <i onClick={handleShowRe} class='bx bx-window-close' id="close"></i>
            </div>
            <div className="searchContents" onClick={handleShowRe}>
              {
                searchResults.map((item)=>
                <div id="search-reult" key={item._id}>
                  <div className="full"></div>
                </div>
                )
              }
            </div>
          </form>
        </ReStyle>
        <Follow onClick={handleShowRe} />
        <Saved />
        <Activity />
      </div>
    </Test>
  );
}

export default Side;

const Test = styled.div`
@media screen and (max-width: 900px){
        position: fixed;
        height: 100vh;
        // right: -1000px;
        right: ${({ isToggled }) => (isToggled ? '0' : '-2000px')};
        width: 100%;
        background-color: rgba(12, 12, 12, 0.516);
        z-index: 56;
}
`
