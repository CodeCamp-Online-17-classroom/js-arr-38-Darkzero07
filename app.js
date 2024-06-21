// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const array2 = array.filter(arr => arr.length > 6 )
console.log(array2)
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว

const array = [1, -3, 2, 8, -4, 5];
const array2 = array.filter(arr => arr > 0)
console.log(array2)
// ค่าที่เป็นเลขบวก

const array = [1, 3, 4, 5, 6, 7, 8];
const array2 = array.filter((arr) => arr % 3 === 0);
console.log(array2);
// ค่าที่หาร 3 ลงตัว
