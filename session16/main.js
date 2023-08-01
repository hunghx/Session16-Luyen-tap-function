// cách khai báo hàm 
// cách 1 sử dụng từ khóa function : declaration function
function name(params) {
    
}
// cách 2 sử dụng biến được gán bởi 1 function : expression function
const sum = function(params){

}
// cách 3 sử dụng hàm mũ tên : arrow function
//  tính tổng 2 số a,b
const add = (a,b)=>{
    return a+b
};


// các phương thức làm việc với mảng ES6
// forEach();
// dùng để duyệt mảng
let arrInt = [1,2,3,4,5,6];
arrInt.forEach((currentValue,index)=>{
    console.log("Giá trị phần tử hiện tại "+ currentValue ); // không cần dùng array[i]
})
// reduce();
// dùng để ghi nhớ giá trị sau mỗi lần lặp
// tính tôngr các số chẵn trong mảng trên
 let total = arrInt.reduce((sum,value) =>{ 
    // if(value%2==0){
    //       return sum + value
    // }
    // return sum;
    return value%2==0?sum+value:sum;
 },0)
// bắt buộc phải trả về giá trị ghi nhớ cho biến sum 
// sum = sum + value
console.log(total);


// map();
// dung để tạo ra 1 mảng mới có độ dài bằng mảng đã cho nhưng theo điều kiện nhất định
// ví dụ sô lẻ thì tính bình phương còn số chẵn thì chia 2
let arrayPow = arrInt.map((value)=>{
    // if(value%2==0){
    //     return value/2;
    // }
    // return value * value
    return value%2==0?value/2:value*value;
})

console.log(arrayPow);

// filter();
// là bộ lọc , lọc các phần tử theo điều kiện xác định
// lọc các phần tử > 3

let arrayFilter = arrInt.filter((value)=>{
    return value > 3
})
console.log(arrayFilter);


let arrString = ["táo", "nho","vải","sầu riêng","mít","ổi"];
// lọc nững loại quả có chứa kí tự i : sử dụng includes
let string = "hung";
console.log(string.includes("i"));


let filter = arrString.filter((value)=>{
    return value.includes("i");
})
console.log(filter);


