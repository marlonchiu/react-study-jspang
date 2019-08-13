function getSomething(){
    return 'something'
}

async function testAsync() {
    return 'Hello Async'
}

async function test() {
    const res1 = await getSomething()
    const res2 = await testAsync()
    console.log(res1, res2)
}

// 执行
test()  // something Hello Async
