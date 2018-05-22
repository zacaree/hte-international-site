/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import Question from './Question';

export default class PageFAQ extends Component {
  state = {
    faqs: [
      {
        // Maybe map or something can split on splits and insert link components...

        id: 1,
        question: 'How do I find an authorized Hustler dealer?',
        answer: ['Please contact the', 'in your area. They will assist you in finding a dealer near you.'],
        link: ['http://www.hustlerturf.com/find-a-retailer', 'Hustler distributor'],
      },
      {
        id: 2,
        question: 'I need to purchase parts for my mower. Should I contact Hustler Turf for parts?',
        answer: ['Hustler Turf does not sell parts to the public. Please contact the', 'in your area for assistance.'],
        link: ['http://www.hustlerturf.com/find-a-retailer', 'Hustler distributor'],
      },
      {
        id: 3,
        question: 'Can I purchase a battery for my mower from Hustler Turf?',
        answer: ['Hustler Turf does not sell replacement batteries. However, our dealers will sell replacement batteries that will meet our requirements.'],
        link: false,
      },
      {
        id: 4,
        question: 'The oil in the transmission expansion tank seems low. Is this ok?',
        answer: ['On models with hydro-gear transmissions, as long as you can see the oil in the bottom of the overflow tank, then it is ok. The cold fill line is just above the bottom of the tank. Refer to your Operator’s Manual for details. On all other mowers, please refer to your Operator’s Manual on how to check the oil for the drive system.'],
        link: false,
      },
      {
        id: 5,
        question: 'My mower seems sluggish.',
        answer: ['If your mower seems slower or sluggish compared to when you purchased it, there are a few things that could be the cause of this issue.', 'If the repair is not something you are comfortable doing, please see your local Hustler Turf dealer.'],
        link: false,
        list: [
          'Tires are not inflated to proper PSI.',
          'Engine is not being ran at full RPM. It is possible that the throttle cable slipped and came out of adjustment or the operator isn’t using full throttle.',
          'Drive belt is damaged or stretched out and needs to be replaced.',
          'Tow-valves are not fully closed.',
          'Linkage or control arm bent.',
          'Drive system needs to be serviced.',
        ],
      },
      {
        id: 6,
        question: "My mower isn't steering straight.",
        answer: ['If your mower is not tracking straight there are many different things that could be affecting it. The simplest would be unequal tire pressures. You can also adjust the drive straight. The procedure for that varies between mowers and is listed in the General Service Manual. General Service Manuals can be found on our website at https://www.hustlerturf.com/support/manuals. You will need your model number. Contact your local Hustler Turf servicing dealer if more help is needed. All authorized dealers can be found on our website by going to www.hustlerturf.com. Use the Find A Retailer button in the upper right hand corner of the page, it will help you to find local dealers in your area.'],
        link: false,
      },
      {
        id: 7,
        question: 'I want to purchase bigger tires/bigger deck/bigger seat.',
        answer: ['All our mowers go through and pass stability testing when they are designed and engineered. Because changing a component can effect that stability, Hustler Turf cannot authorize or recommend any alterations to our mowers outside what we list as accessories.'],
        link: false,
      },
      {
        id: 8,
        question: 'How do I read the deck height indicator?',
        answer: ["Some of our mowers come with letters indicating the deck height instead of numbers. Different models have different ranges and different cutting heights but “A” is always the lowest cutting height of your mower. Then “B” will be higher and so on. Depending on the model it will be in ¼” or ½” increments. For specific questions about your model, please refer to your Operator's Manual."],
        link: false,
      },
    ],
  }

  render() {
    return (
      <div className="pageWrap page-FAQ">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          <div className="accentBar" />

          <div className="row-offset-1rem">


            {this.state.faqs.map((faq, i) => (
              <Question key={faq.id} faq={faq} i={i} />
            ))}


          </div>

        </div>
      </div>
    );
  }
}
