

function getEle(id) {
    return document.getElementById(id);
  }
  var dsnv = new DanhSachNhanVien();
   var validation = new Validation();


function layThongTinNV() {
    var taiKhoan= getEle('tknv').value;
    var name = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle('datepicker').value;
    var luongCb = getEle('luongCB').value *1;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value *1;
    var isValid = true;

    isValid &=
    validation.kiemTraRong(name, "errorTen", "(*)  Vui lòng nhập họ và tên") &&
    validation.kiemTraKiTuChuoi(
      name,
      "errorTen",
      "(*)  Vui lòng nhập chuỗi ki tự"
    );

    isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*)  Vui lòng nhập email") &&
    validation.checkEmail(
      email,
      "errorEmail",
      "(*)  Vui lòng nhập email dung dinh dang!"
    );

   
   
    var nhanVien = new NhanVien(
        taiKhoan,
        name,
        email,
        matKhau,
        ngayLam,
        luongCb,
        chucVu,
        gioLam)

        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNV();


        return nhanVien;

        
}

getEle('btnThemNV').addEventListener("click",function () {
    var nhanVien = layThongTinNV();
    
    dsnv.themNV(nhanVien);
    
    renderTable(dsnv.arr)
});

function renderTable(data) {
    var content = "";
  
  data.forEach(function (nv) {
    content += `
    <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td>
        <button class="btn btn-info" onclick="suaNV('${nv.name}')">Sửa</button>
        <button class="btn btn-danger" onclick="xoaNV('${nv.name}')">Xoá</button>
        </td>
    </tr>
`;
  
    
  });
  
    getEle("tableDanhSach").innerHTML = content;
  }







  function xoaNV(name) {
    dsnv._xoaNV(name);
    renderTable(dsnv.arr);

  }
 
  function suaNV(name) {
    var nv = dsnv._layThongTinNV(name)

    if (nv) {
      getEle("tknv").value = nv.taiKhoan;
      getEle('name').value = nv.name;
      getEle("name").disabled = true;
      getEle('email').value = nv.email;
      getEle("password").value = nv.matKhau;
      getEle('datepicker').value = nv.ngayLam;
      getEle('luongCB').value  = nv.luongCb
      getEle('chucvu').value = nv.chucVu;
      getEle('gioLam').value  = nv.gioLam;
    }
  }
 
  getEle("btnCapNhat").addEventListener("click", function () {
    //lấy value từ các thẻ input
    var nhanVien = layThongTinNV(false);
  
    dsnv._capNhatNhanVien(nhanVien);
    renderTable(dsnv.arr);
   
 
  });

  getEle('searchName').addEventListener("keyup", function () {
    // dom lấy value input#txtKeyword
    var Keyword = getEle('searchName').value;
    var mangTimKiem = dsnv._timKiemNhanVien(Keyword);
    renderTable(mangTimKiem);
   })


 