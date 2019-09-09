// 自定义Hooks函数获取窗口大小
import React, { useState, useEffect, useCallback } from 'react';

/**
 * 函数中先用useState设置size状态，然后编写一个每次修改状态的方法onResize，
 * 这个方法使用useCallback，目的是为了缓存方法(useMemo是为了缓存变量)。 
 * 然后在第一次进入方法时用useEffect来注册resize监听时间。
 * 为了防止一直监听所以在方法移除时，使用return的方式移除监听。
 * 最后返回size变量就可以了
 */


 // 可以单独封装成公共组件方法哟
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  // useCallback  缓存方法
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    // 离开 移除监听
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function Example() {
  const size = useWinSize()
  return (
    <div>
      页面Size:{size.width}x{size.height}
    </div>
  )
}

export default Example