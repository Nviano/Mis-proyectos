import React, { Component } from 'react';

class Text extends Component {
    render() {
      const {
        arrayOfNumbers,
        arrayOfWords,
        text,
        number,
        boolean,
        objectOfHeros,
        multiply,
        words,
        title
      } = this.props;
  
  
      const mappedNumbers = arrayOfNumbers.map(multiply);
      // const mappedWords = this.props.arrayOfWords.map(n => n.slice(0, 2))
      const mappedWords = arrayOfWords.map(words);
      return (
        <div>
          <p>{arrayOfNumbers.join(', ')}</p>
          <p>{arrayOfWords.join(', ')}</p>
          <p>{text}</p>
          <p>{number}</p>
          <p>{boolean}</p>
          <p>{JSON.stringify(boolean)}</p>  {/* para q pinte el valor del booleano hay q pasarlo a string */}
          <p>{mappedWords.join(' ')}</p>
          <p>{mappedNumbers.join(', ')}</p>
          <p>{objectOfHeros.hero2}</p>
          {title}
         
  
        </div>
      )
  
    }
  }










export default Text;
