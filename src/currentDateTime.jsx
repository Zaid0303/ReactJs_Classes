import React from 'react';
import { Card, Container } from 'react-bootstrap';

function CurrentDate() {
  const fname = "Zaid";
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let msg = "";
//   let backgroundColor = "";
  let textColor = "";

  if (currentHour >= 1 && currentHour < 12) {
    msg = "Good Morning";
    // backgroundColor = "lightyellow";
    textColor = "red";
  } else if (currentHour >= 12 && currentHour < 18) {
    msg = "Good Afternoon";
    // backgroundColor = "lightblue";
    textColor = "blue";
  } else {
    msg = "Good Evening";
    // backgroundColor = "lightgrey";
    textColor = "green";
  }

  const myrandom = Math.random();

  return (
    <Container className="text-center">
      <Card style={{ color: textColor, padding: '20px' }}>
        <h1>{msg}, {fname}!</h1>
        <p>Random Number: {myrandom.toFixed(3)}</p>
        <p>Current Date & Time: {currentDate.toLocaleString()}</p>
      </Card>
    </Container>
  );
}

export default CurrentDate;
