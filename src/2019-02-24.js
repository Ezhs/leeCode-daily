function MyPromise (executor) {
    this.status = 'pending'; // 默认状态
    this.value = undefined; // 成功 resolve 函数的参数
    this.reason = undefined; // 成功 reject 函数的参数

    this.onResolvedCallbacks = []; // 处理异步 将 回调 函数 存储起来
    this.onRejectedCallbacks = [];

    // 定义 执行函数的 2个函数参数
    let resolve =  val => {
        // 只有状态为 pending 的时候才能修改状态    
        if (this.status === 'pending') {
            this.status = 'resolved';
            this.value = val;
            this.onResolvedCallbacks.forEach(cb => {
                cb();
            });
        }
    }
    let reject =  val => {
        // 只有状态为 pending 的时候才能修改状态
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.reason = val;
            this.onRejectedCallbacks.forEach(cb => {
                cb();
            });
        }
    }
    // 调用执行函数
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

// 定义 函数的 this 方法 then 方法 返回一个新的 promise 在 then 中 如果代码抛出异常 则将 promise 的状态改成 rejected
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var promise2;
    if (this.status === 'pending') {
        promise2 = new Promise((resolve, reject) => {
            onFulfilled && this.onResolvedCallbacks.push(() => { // 这里用一个函数包起来，是为了后面加入新的逻辑进去
                try {
                    let x = onFulfilled(this.value)
                    resolve(x);
                } catch (err) {
                    reject(err);
                }
            });
            onRejected && this.onRejectedCallbacks.push(() => { // 这里用一个函数包起来，是为了后面加入新的逻辑进去
                try {
                    let x = onRjected(_this.reason)
                    resolve(x);
                } catch (err) {
                    reject(err);
                }
            });
        })
    }
    if (this.status === 'resolved') {
        promise2 = new Promise((resolve, reject) => {
            try {
                let x = onFulfilled(this.value);
                resolve(x);
            } catch (err) {
                reject(err);
            }
        });
    }
    if (this.status === 'rejected') {
        promise2 = new Promise((resolve, reject) => {
            try {
                let x = onRjected(_this.reason)
                resolve(x);
            } catch (err) {
                reject(err);
            }
        });
        onRejected(this.reason);
    }

    return promise2;
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        reject(2)
    })
}).then((res) => {
    console.log(res);
    return 1;
}, (err) => {
    console.log(err)
}).then((res) => {
    console.log(res)
});


