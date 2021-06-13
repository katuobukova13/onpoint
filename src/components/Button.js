import React, { useEffect, useState } from "react";
import "../css/Button.css";

function Button({ value, idName, id }) {
  /* let { state, setState } = useState({state: true});

  useEffect(() => {
    if ({ value } == "Подробнее") {
      setState({state: false});
      console.log(state);
    }
  }, [{value}]); */

  return (
    <a href={idName}>
      <button className="btn" id={id}>
        <div className="btn__arrow">
          <div></div>
        </div>
        <span id="btn__text">{value}</span>
      </button>
    </a>
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
    /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */
   /*:  (<button className="btn">
    <div className="btn__arrow">
      <div></div>
    </div>
    <span id="btn__text">{value}</span>
  </button>)} */);
}
export default Button;
