import React, { useState } from 'react';

// Example 1
function AddHook() {
  let [like, setLike] = useState(1); // 'like' small letters mein

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Like Button Count Example</h2>
      <button onClick={() => { setLike(like + 1); console.log(like); }}>
        Like
      </button>
      <br />
      <h3>{like}</h3>
    </div>
  );
}

export default AddHook;

// Example Use State 1
// function LikeButton() {
//   const [like, setLike] = useState(1); // Initial value 1

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Like Button Count Example</h2>
//       <button
//         onClick={() => {
//           setLike(like + 1);
//           console.log('Like count:', like + 1); // Updated count in console
//         }}
//       >
//         Like
//       </button>
//       <br />
//       <h3>{like}</h3>
//     </div>
//   );
// }

// export default LikeButton;