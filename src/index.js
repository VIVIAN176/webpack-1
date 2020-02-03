import x from './x.js'
import png from './assets/img.jpg'
console.log(png)


console.log(x)
console.log('hi')
console.log('hihi')

const div = document.getElementById('app')

div.innerHTML = `
    <img src="http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=code&step_word=&hs=0&pn=12&spn=0&di=82720&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=110758603%2C3802519514&os=1924275054%2C1163993865&simid=4253324308%2C724615948&adpicid=0&lpn=0&ln=1565&fr=&fmq=1580755699366_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171124%2F8b7027fb7bf1452da15dd7ed80e971cb.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bf5i7_z%26e3Bv54AzdH3FwAzdH3Fdamn00an9_llblcc0n&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined">
    <img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')   //import()实现懒加载
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}

div.appendChild(button)