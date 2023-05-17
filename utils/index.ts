export const random = (min:number,max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

//过渡函数
export function transition(from:number,to:number,time:number,callback:(value:number) => void) {
    const startTime = performance.now();
    const difference = to - from;
    const speed = difference / time;
    let value = from;
    //start
    callback(value);
    function run() {
        const now = performance.now();
        const partTime = now - startTime;
        //end
        if(partTime >= time) {
            value = to;
            callback(value);
            return;
        }
        const increment = speed * partTime - value;
        value += increment;
        console.log(value);
        callback(value);
        requestAnimationFrame(run);
    }
    requestAnimationFrame(run);
}
//创建动画函数
export function createAnimate(startValue:number,endValue:number,start:number,end:number)  {
    return (value:number) => {
        if(value <= start) {
            return startValue;
        }
        if(value >= end) {
            return endValue;
        }
        return startValue + (endValue - startValue) * ((value - start) / (end - start));
    }
}