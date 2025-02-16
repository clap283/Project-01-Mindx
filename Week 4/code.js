//Cú pháp khai báo Array
let dshs = [ 'Lam', 'Ngoc', 'Bach', 'Danh', 'Phuong', 'Vanh' ]
let number=[0,1,5,3,4]
let mixedArray =[1,2,3, 'Hello', true, null, undefined]
// Truy vẫn dữ liệu
console.log(dshs[1])
for(let i=0;i < dshs.length ;i++ ){
    console.log(dshs[i])
}
//Thêm phần tử vào mảng
dshs.push('Duy ')
console.log(dshs[6])
//Thay thế phần tử
number.splice(2,1,2)
console.log(number)
//Xoá phần tử
dshs.splice(0,2)
console.log(dshs)
let person={
    name : 'Luong',
    age: 15,
} 
console.log(person.name)
 console.log(person['age'])
for ( let key in person){
    console.log (key)
 }
person.sex= 'male'
person['gener']='nam'
if ("name"in person){
    console.log("name đã tồn tại")
}
delete person.age