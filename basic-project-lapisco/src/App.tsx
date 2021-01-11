// import React, { useState } from 'react';
// import Welcome from '../src/views/Welcome'
// import Child from '../src/views/Child'

// /**
//  * Variable for comparing the use of state (cont2).
//  * 
//  * The use of state causes my component to be updated / rendered whenever there is a change in my variable.
//  */
// // var cont2 = 0;

// function App() {
//   const [cont, setCont] = useState<number>(0);

//   const increment = () => {
//     setCont(cont + 1);
//     // cont2++;
//     console.log("🚀 ~ file: App.tsx ~ line 8 ~ increment ~ cont", cont)
//     // console.log("🚀 ~ file: App.tsx ~ line 16 ~ increment ~ cont2", cont2)
//   };
    

//   const decrement = () => {
//     setCont(cont - 1);
//     // cont2--;
//     console.log("🚀 ~ file: App.tsx ~ line 14 ~ decrement ~ cont", cont)
//     // console.log("🚀 ~ file: App.tsx ~ line 22 ~ decrement ~ cont2", cont2)
//   };
    

//   return (
//     <div>
//       <Welcome fullname = {"Raul Aquino"} />
//       {/* <Welcome fullname = {"Nityananda Barbosa"} /> */}
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <h1>State cont: {cont}</h1>
//       {/* <h1>State cont2: {cont2}</h1> */}
//       <Child number={cont}/>
//     </div>
//   );
// }

// export default App;

// Studies about hooks (useState, useEffect, useLayoutEffect)
import React, { FC, useState, useEffect, useLayoutEffect } from 'react';

const App: FC = () => {
  const [produto, setProduto] = useState<string>("Chocolate");

  useEffect(() => {
    // setProduto("Chocolate");
    console.log('useEffect');

  }, []);

  /**
   * The difference between useEffect and useLayoutEffect,
   * is that useLayoutEffect loads before rendering my page.
   */

  useLayoutEffect(() => {
    console.log('useLayoutEffect');

  }, []);

  return (
    <div>
      <input type="text"
      placeholder="produto"
      value={produto}
      onChange={(event) => setProduto(event.target.value)}
      />
      <h2>{produto}</h2>
    </div>
  );
}

export default App;