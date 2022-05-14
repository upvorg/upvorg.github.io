##

- https://github.com/zhihu/griffith/issues/231

- m3u8
- autoplay true // m3u8 必须

```js
// 失败
const [video, setVideo] = useState<R.Video[]>([])
const [i,seti]=useState 0

useEffect: get and setvideo([....])

video[i]?.VideoUrl?     <GriffithPlayer src={video[currentIndex]?.VideoUrl} />:null
```

```js
// 成功
const [video, setVideo] = useState<R.Video[]>([])
const [i,seti]=useState -1

useEffect: get and setvideo([....])

video[i]?.VideoUrl?     <GriffithPlayer src={video[currentIndex]?.VideoUrl} />:null

button onclick seti(i) // 手动点击页面按钮

//失败
// 而是延迟自动执行set(i)
useEffect: get and setvideo([....]) settimeout(seti, 5000)
```
