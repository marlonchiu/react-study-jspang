// React Hooks写法
import React, { useState, useEffect } from 'react';
function ExampleHooks() {
    const [count, setCount] = useState(0) // 数组的解构
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
     );
}
export default ExampleHooks;