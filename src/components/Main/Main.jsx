import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
export default function Main () {
  const { onSend, recentPrompt, showResult, loading, resultData, setInput, input } = useContext( Context );
  return (
    <div className={ "main" }>
      <div className={ "nav" }>
        <p>Gemini</p>
        <img src={ assets.portfolio } />
      </div>
      <div className={ "main-container" }>
        { !showResult
          ? <>
            <div className={ "greet" }>
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className={ "cards" }>
              <div className={ "card" }>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={ assets.compass_icon } />
              </div>
              <div className={ "card" }>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={ assets.bulb_icon } />
              </div>
              <div className={ "card" }>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={ assets.message_icon } />
              </div>
              <div className={ "card" }>
                <p>Tell me about React js and React native</p>
                <img src={ assets.code_icon } />
              </div>
            </div>
          </>
          : <div className={"result"}>
            <div className={ "result-title" }>
              <img src={ assets.portfolio_bg } />
              <p>{recentPrompt } ?</p>
            </div>

            <div className={ "result-data" } style={{overflow:"auto"}}>
              <img src={ assets.gemini_icon } />
              { loading
                ? <div className={"loader"}>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
                :<p dangerouslySetInnerHTML={ { __html: resultData } }></p>
              }
              
            </div>
          </div>
        }
        <div className={ "main-bottom" }>
          <div className={ "search-box" }>
            <input onChange={ ( e ) => setInput( e.target.value ) } value={ input } type={ "text" } placeholder={ "Enter a prompt here" } />
            <div>
              <img className={"gallery"} src={ assets.gallery_icon } />
              <img className={"mic"} src={ assets.mic_icon } />
              <img onClick={ () => onSend() } src={ assets.send_icon } />
            </div>
          </div>
          <div className={ "bottom-info" }>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
