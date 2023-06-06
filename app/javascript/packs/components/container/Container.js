import React, {useState} from "react";
import Profile from "../profile/Profile";
import './container.scss';
import IndexSideBar from "../indexSideBar/IndexSideBar";
import { TokenContext } from "../tokenContext/TokenContext";

const Container = () => {
  const [token, setToken] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  };
  
  const indexStyle = {
    flex: 2,
    backgroundColor: "#202123",
    overflowY: 'auto',
    height: '100vh'
  };
  
  const showStyle = {
    flex: 12,
    overflowY: 'auto',
    height: '100vh',
    backgroundColor: 'white'
  };

return (<TokenContext.Provider value={{ token, setToken }}>
    <div className="custom-container" style={containerStyle}>
      <div style={indexStyle}>
        <IndexSideBar />
      </div>
      <div style={showStyle}>
        <Profile disabled={false}/>
      </div>
    </div>
    </TokenContext.Provider>
  );
}

export default Container;
