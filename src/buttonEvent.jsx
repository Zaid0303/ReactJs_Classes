import React, { useState } from 'react';

// Example 1
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Button Click Example</h2>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default MyComponent;

// Example 2
// function Football(){
//     const shoot = (a, b) => {
//         alert(b.type + " " + a)
//     };
  
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h2>FootBall Button Click Example</h2>
//         <button onClick={(event) => shoot("Goal", event)}>Take A shoot</button>
//       </div>
//     );
// }
// export default Football;

// Example 3
function Football2(){
    function handClick(){
        let bodyStyle = document.body.style;
        if(bodyStyle.backgroundColor === 'black'){
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>FootBall Handel Click Example</h2>
        <button onClick={handClick}>Toggle Light & dark theme</button>
      </div>
    );
}
export default Football2;
