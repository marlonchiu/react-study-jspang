// 多状态声明

// React是根据useState出现的顺序来确定的
import React, { useState } from 'react';
// let showSex = true
function ExampleHooks2() {
    const [age, setAge] = useState(25)
    // if (showSex) {
        const [sex, setSex] = useState('男')
    //     showSex = false
    // }
    const [work, setWork] = useState('前端开发工程师') 
    return (
        <div>
            <p>MarlonChiu</p>
            <p>年龄： {age}</p>
            <p>性别：{sex}</p>
            <p>职称：{work}</p>
        </div>
     );
}
export default ExampleHooks2;

/**
   Line 9:   React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
   Line 17:  'sex' is not defined  
   

   useState不能在if...else...这样的条件语句中进行调用，
   必须要按照相同的顺序进行渲染。
   如果你还是不理解，你可以记住这样一句话就可以了：
   就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
 */