const dateTo = new Date(1000000000);
const dateFrom = new Date(500000);
const counter = (from, to) => {
    /* provide your code here */
    let diff = to - from
    let d = Math.floor(diff / (24*60*60*1000))
    let diffd = diff - (d * (24*60*60*1000))
    let h = Math.floor(diffd / (60*60*1000))
    let diffh = diffd - (h * (60*60*1000))
    let m = Math.floor(diffh / (60*1000))
    let diffm = diffh - (m * (60*1000))
    let s = Math.floor(diffm / 1000)

    return `${d} days - ${h} hours - ${m} minutes - ${s} seconds`
}
const timer = counter(dateFrom, dateTo)
console.log(timer)