import React, { Component } from 'react';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from './Message';

// Create a Cookies object
const cookies = new Cookies();

class Chatbot extends Component {
    // variables
    messageEndEle;
    inputEle;

    constructor (props) {
        super(props);

        this.userID = uuid();
        this.state = {
            messages: []
        }

        // Bind methods earlier, whatever using 'this' keyword on html attributes.
        this._handleKeyPress = this._handleKeyPress.bind(this);

        if (cookies.get('USER_ID') === undefined) {
            // Set a new cookie & make it available as global using 'Path' param.
            cookies.set('USER_ID', this.userID, { path: '/' });
        }
    }

    componentDidMount () {
        this.inputEle.value = 'Please wait ...';
        this.df_text_query('who are you?');
    }

    componentDidUpdate() {
        this.messageEndEle.scrollIntoView({ behaviour: 'smooth' });
        this.inputEle.value = '';
        this.inputEle.focus();
    }


    // ------------------------------------------------------------------


    _updateMsg (msg, userName, msg_type='text', userID='0') {
        let says = {
            _type   : msg_type,
            userName: userName,
            userID  : userID,
            msg     : msg
        }

        // Update State, append with existing messages
        this.setState({messages: [...this.state.messages, says]});
    }

    async _handleKeyPress (e) {
          if (e.key === 'Enter') {
              // Enter key is pressed.
              let target = e.target;
              let value = target.value;
              target.value = 'Sending ... ';
              await this.df_text_query(value);

              // Reset the Input field.
              target.value = '';
          }
    }

    // Ajax call to server
    async df_text_query (text) {
        const args = {
          query : text,
          userID: this.userID
        }
        const results = await axios.post('/api/df_text_query', args);

        // Append it to messages
        this._updateMsg(text, 'me', 'text', args['userID']);

        // Iterate the responses
        for (let msg of results.data.fulfillmentMessages) {
            // append with messages.
            this._updateMsg(msg.text.text, 'BOT', 'text');
        }
    }

    async df_event_query (event) {
        const args = {
          query : event,
          userID: this.userID
        }
        const results = await axios.post('/api/df_event_query', args);

        for (let msg of results.data.fulfillmentMessages) {
            // Append with existing messages.
            this._updateMsg(msg, 'BOT', 'event');
        }
    }


    renderMsg (messages) {
        if (messages) {
            return messages.map((message, i) => {
                return <Message userName={message.userName} msg={message.msg} _type={message._type} />;
            })
        }

        return null;
    }


    render () {
        return (
            <div id="chatbot">
                <div className="inner-wrapper">
                    <div className="header">
                        <span>Chat</span>
                    </div>

                    <div className="content">
                        {this.renderMsg(this.state.messages)}
                        <div ref={(el) => {this.messageEndEle = el; }} style={{float: 'left', clear: 'both' }}></div>
                        <input type="text" autoFocus placeholder="Press Enter to send" onKeyPress={this._handleKeyPress} ref={(el) => {this.inputEle = el; }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chatbot;
