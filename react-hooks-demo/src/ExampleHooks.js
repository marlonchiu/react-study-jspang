// React Hooks写法
import React, { useState } from 'react';
function ExampleHooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
     );
}
export default ExampleHooks;