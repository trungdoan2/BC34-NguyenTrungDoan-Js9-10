function NhanVien(
    _taiKhoan,
    _name,
    _email,
    _matKhau,
    _ngayLam,
    _luongCb,
    _chucVu,
    _gioLam
) {
   this.taiKhoan = _taiKhoan;
   this.name = _name;
   this.email = _email;
   this.matKhau = _matKhau;
   this.ngayLam = _ngayLam;
   this.luongCb = _luongCb;
   this.chucVu = _chucVu;
   this.gioLam = _gioLam;
   this.tongLuong = 0;
   this.xepLoai = "";

   this.tinhTongLuong = function () {
      if (this.chucVu === "Sếp") {
        this.tongLuong = this.luongCb *3;
      }else if (this.chucVu === "Trưởng phòng") {
        this.tongLuong = this.luongCb *2;
      }else {
        this.tongLuong = this.luongCb *1;
      }
   }

   this.xepLoaiNV = function () {
     
     if (this.gioLam >= 192) {
       this.xepLoai = "Xuất sắc"
     }else if (  this.gioLam >= 176) {
        this.xepLoai = "Giỏi"
     }else if (this.gioLam >= 160) {
        this.xepLoai = "Khá"
     }else if (this.gioLam < 160) {
       this.xepLoai = "Trung bình"
     }
     return this.xepLoai;
   }
    
  

  

}