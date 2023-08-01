
function handleSubmit(){
    // lấy ra giá trị của ô input
    let value =  document.getElementById("input").value;
    console.log(value);
    value = value.toLowerCase();
    // tạo 1 mảng để chứa danh sách các kí tự và số lần xuất hiện  của nó
    let array = []; // mang 2 chieu , ki tu se luu o phan tu so 0 cua mang con
    
    // duyệt từng kí tự của chuỗi trong ô input và kiểm tra 
    for (let i = 0; i < value.length; i++) {
    let index = checkExistCharacter(array,value.charAt(i));
      if(index>=0){// nếu kí tự thứ i tồn tại trong mảng array
            // đã tồn tại kí tự , phải sửa sô lần xuất hiện 
            // for (let i = 0; i < array.length; i++) {
            //      if(array[i][0] == value.charAt(i)){
            //         array[i][1] +=1;
            //      }
            // }

            array[index][1]+=1;
      }else{
        // chưa tồn tại thì thêm mới vào mảng array 1 phần tử có số lần xuất hiện là 1
        array.push([value.charAt(i),1]);
      }
    }
    // array = [[r,1],[i,2],[k,2],[e,2],[' ',1],[a,2],[c,1],[d,1],[m,1],[y,1]]

    // in ra kết quả
    for (let i = 0; i < array.length; i++) {
        console.log(`Ký tự ${array[i][0]} xuất hiện ${array[i][1]} lần`);
    }

}

// kiểm tra tồn tại của 1 kí tự ở trong 1 mảng và trả về vị trí của phần tử nếu tồn tại,
// nếu không tồn tại thì trả về -1
function checkExistCharacter(arr,char){ // arr là  mangr 2 chiều [['c',2],['b',3]]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] == char){
            // tồn tại
            return i;
        }
    }
    // chưa tồn tại
    return -1;
}


// hệ thống lại kiến thức mảng 
// 1 mảng có thành phần vi trí (index) phần tử (element)
// truy xuất , lấy ra 1 phần tử của mảng array tại vị trí index :
//  array[index]   (tương tác 2 chiều) : có nghĩa là có thể thay đổi giá trị bằng phép gán
// duyệt mảng : có 3 cách for in, for of, for i 
// các phương thức chính của mảng : push() , pop(), indexOf(element), sort(function), splice()
// mang nhiều chiều : trong mảng có mảng , cách truy xuất phần tử của mảng nhiều chiều array[i][j][k].....
// cú pháp khai báo và khởi tạo mảng: cách 1 let arr = [], cách 2 let arr = new Array();


// splice : xóa 1 hoặc nhiều phần tử + thêm mới 1 hoặc nhiều phần tử tịa vị trí vùa xóa
let arrInt =[1,2,3,4,5,6];
console.log(arrInt[4]);
