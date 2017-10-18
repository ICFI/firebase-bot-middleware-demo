/* 
 * Copyright 2017, ICF
 * 
 * This function serves as a base backend for a smoking cessation chatbot
 * 
 * Use this function as a webhook for your chosen ai/nlp platform
 * Evaluate the incoming intents and entities generated from user input
 * and write custom logic to handle these events in an appropriate,
 * conversational manner. Engage your users! :)
 *
 * NOTE: this code was written for demonstration purposes only
 */

'use strict';

const functions = require('firebase-functions');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3'); // Watson tone analyzer

const DEBUG = true;
const ErrorCodes = {
	"WATSON_ERROR": 1000,
	"APP_ERROR": 2000
};

exports.firebaseFunction = functions.https.onRequest((request, response) => {
  
  // Log the request headers and body for debugging purposes
  if (DEBUG) {
	console.log('Request headers: ' + JSON.stringify(request.headers));
	console.log('Request body: ' + JSON.stringify(request.body));
  }
  
  /* 
   * Your function logic goes here
   *
   */
  
  // Sample code for Watson tone analyzer integration
  try {
    var toneAnalyzer = new ToneAnalyzerV3({
	  username: 'YOUR USERNAME',
      password: 'YOUR PASSWORD',
	  version_date: '2016-05-19'
    });
  
    toneAnalyzer.tone({ text: 'I slipped up and had a cigarette today.' },
      (err, tone) => {
        if (err)
          response.json({"code": ErrorCodes.WATSON_ERROR, "message": "Error occurred while attempting tone analysis.", "originalError": err});
        else
          response.json(tone);
      }
	);
	
  } catch(err) {
    response.json({"code": ErrorCodes.APP_ERROR, "message": "Server Error Occurred.", "originalError": err});
  }
});
