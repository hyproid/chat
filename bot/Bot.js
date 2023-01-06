'use strict'

const dialogflow = require('dialogflow');
const structjson = require('structjson');
const config     = require('../config/keys');

const projectID = config.googleProjectID;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

// Create a dialogflow Session.
const sessionClient = new dialogflow.SessionsClient({projectID, credentials});

module.exports = {
    _getSessionPath: (userID) => {
        return sessionClient.sessionPath(projectID, config.dialogFlowSessionID + userID);
    },

    _handleAction: (responses) => {
        return responses;
    },

    // -----------------------------------------------------------------------

    textQuery: async (text, userID, parameters = {}) => {
        let self = module.exports;

        // Create a dialogflow request params
        const request = {
            session: self._getSessionPath(userID),
            queryInput: {
                text: {
                    text: text,
                    languageCode: config.dialogFlowSessionLanguageCode
                }
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        }

        let responses = await sessionClient
            .detectIntent(request);
          /*.then(responses => {
                console.log('Intent is detected.');

                const result = responses[0].queryResult;
                console.log('Query: ' + result.queryText);
                console.log('Response: ' + result.fulfillmentText);

                if (result.intent) {
                    console.log('Intent: ' + result.intent.displayName);
                } else {
                    console.log('No intent is matched.');
                }
          })
          .catch(err => {
              console.error('Error: ' + err);
          });*/

        // Call handleAction method
        responses = await self._handleAction(responses);
        return responses;
    },

    // Event
    eventQuery: async (event, userID, parameters={}) => {
        let self = module.exports;

        const request = {
            session: self._getSessionPath(userID),
            queryInput: {
                event: {
                  name: event,
                  parameters: structjson.jsonToStructProto(parameters),
                  languageCode: config.dialogFlowSessionLanguageCode
                }
            }
        }

        let responses = await sessionClient.detectIntent(request);

        // Call handleAction method
        responses = await self._handleAction(responses);
        return responses;
    }
}
