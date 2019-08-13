function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('long_time_value')
        }, 2000);
    })
}

async function test() {
    const res = await takeLongTime()
    console.log(res)
}

test()
