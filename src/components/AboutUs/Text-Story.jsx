import React from 'react';

const TextStory = (props) => {
  const { language, text } = props;


  // h1 *************************************
  if (text === 'h1') {
    switch (language) {
      default:
      case 'English':
        return (
          <h1>Hustler&#39;s Story</h1>
        );
      case 'Latin':
        return (
          <h1>Lorem ipsum dolor sit</h1>
        );
    }
    // Content ***************************************
  } else if (text === 'content') {
    switch (language) {
      default:
      case 'English':
        return (
          <div className="ctr-left">
            <h2>We make the best.</h2>
            <h2>Then, we make it better.</h2>
            <p className="bodyCopy">Hustler’s commitment to purposeful innovation gives you everything you could ask for in a mower, and so much more. </p>
            <p className="bodyCopy">In 1964, we introduced the Hustler, the world’s first zero-turn mower. The Hustler allowed our customers to tackle their lawns in record time, with unparalleled precision. This easy-to-handle, highly maneuverable innovation revolutionized the mower industry, and we’ve been committed to making innovative outdoor power equipment ever since.</p>
          </div>
        );
      case 'Latin':
        return (
          <div className="ctr-left">
            <h2>Lorem ipsum dolor</h2>
            <h2>sit amet consectetur</h2>
            <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus vitae consequuntur.</p>
            <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit quisquam esse saepe, eum possimus sint impedit a placeat amet eveniet inventore! Delectus ipsa, fugiat itaque officiis porro iure nobis.</p>
          </div>
        );
    }
  } else {
    return '';
  }
};

export default TextStory;
