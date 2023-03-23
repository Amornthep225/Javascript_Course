// const a = document.querySelector('a')
const a = document.getElementsByTagName('a')
console.log(a);
a.setAttribute('herf','https://www.google.co.th');
a.setAttribute('target','_blank')

const result = {first_name: "Palm",last_name:"Taya"}
const fullname = `${result.frist_name} ${result.last_name}`;


const p = document.querySelector('p')
p.innerHTML = fullname;