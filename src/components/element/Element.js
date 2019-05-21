import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';



export default function Element({ element }) {
  const SummaryCard = styles.summary`
    @import url(‘https://fonts.googleapis.com/css?family=Muli:300,700’);
    font-family: ‘Muli’, sans-serif;
    color: white;
    background: black;
    margin: .2em;
    width: 3em;
    height: max-content;
    content: "+"; 
`;
  const DetailCard = styles.details`
    @import url(‘https://fonts.googleapis.com/css?family=Muli:300,700’);
    font-family: ‘Muli’, sans-serif;
    font-size: .5em;
    color: white;
    background: black;
    margin: .5em;
    width: max content;
    height: 3em;
    list-style-type: none;
    height: max-content;

`;
  console.log(element);

  return (
    <>
      <SummaryCard> {element.symbol}
        <DetailCard> Atomic Mass: {element.atomicMass}  Name: {element.name} Eletron Config: {element.electronicConfiguration} Atomic Radius: {element.atomicRadius} Group: {element.groupBlock}</DetailCard>
      </SummaryCard>

    </>
  );

}

Element.propTypes = {
  element: PropTypes.object.isRequired
};

