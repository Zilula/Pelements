import React from 'react';
import PropTypes from 'prop-types';
import Element from '../element/Element';
import styles from './Home.css';


export default class Home extends React.PureComponent {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    fetchQuotes: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchQuotes();

  }
  render() {
    console.log(this.props.quotes);
    const listOfQuotes = this.props.quotes.map(quote => {
      return (
        <Element element={quote} key={quote.symbol} />
      );
    });

    return (
      <>
        <h1> Periodic Table </h1>
        <div className={styles.div}>
          {listOfQuotes}
        </div>
      </>
    );
  }
}
