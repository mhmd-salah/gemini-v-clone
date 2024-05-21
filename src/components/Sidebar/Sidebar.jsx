import "./siderbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
function Sidebar () {
  const [ extended, setExtended ] = useState( false );
  const { onSent, prevPrompts, setRecentPrompt } = useContext( Context );
  return (
    <div className={ "sidebar" }>
      <div className="top">
        <img onClick={ () => setExtended( prev => !prev ) } className="menu" src={ assets.menu_icon } alt="" />
        <div className="new-chat">
          <img src={ assets.plus_icon } alt="" />
          { extended ? <p>New Chat</p> : null }
        </div>
        { extended ?
          <div className={ "recent" }>
            <p className={ "recent-title" }>Recent</p>
            {/* { prevPrompts.map( ( item, index ) => {
              return (
                <div className={ "recent-entry" } key={index}>
                  <img src={ assets.message_icon } />
                  <p>{ item } ...</p>
                </div>
              );
            } ) } */}

          </div>
          : null
        }

      </div>
      <div className="bottom">
        <div className={ "bottom-item recent-entry" }>
          <img src={ assets.question_icon } />
          { extended ? <p>Help</p> : null }
        </div>
        <div className={ "bottom-item recent-entry" }>
          <img src={ assets.history_icon } />
          { extended ? <p>Activity</p> : null }
        </div>
        <div className={ "bottom-item recent-entry" }>
          <img src={ assets.setting_icon } />
          { extended ? <p>Settings</p> : null }
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
