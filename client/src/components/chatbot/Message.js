import React from 'react';

const Message = (props) => {
    return (
        <div className="col s12 m8 offset-m2 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    {props.userName === 'BOT' &&
                    <div className="col s3">
                        <a className="btn-floating btn-large waves-effect waves-light red">{props.userName}</a>
                    </div>
                    }

                    <div className="col s9">
                        <span className="black-text">{props.msg}</span>
                    </div>

                    {props.userName !== 'BOT' &&
                    <div className="col s3">
                        <a className="btn-floating btn-large waves-effect waves-light red">{props.userName}</a>
                    </div>
                    }
                </div>
            </div>
        </div>
    )

}


export default Message;
