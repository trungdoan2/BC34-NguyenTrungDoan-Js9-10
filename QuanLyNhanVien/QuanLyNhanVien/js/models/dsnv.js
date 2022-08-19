function DanhSachNhanVien() {
    this.arr = [];
    this.themNV = function (nv) {
        this.arr.push(nv);
    }



    this._timViTriNV = function (name) {
        var index = -1;
        this.arr.forEach(function (nv, i) {
          if (nv.name === name) {
            index = i;
          }
        });
        return index;
      };
      this._xoaNV = function (name) {
        var index = this._timViTriNV(name);
        if (index !== -1) {
          this.arr.splice(index, 1);
        }
      };

      this._layThongTinNV = function (name) {
        var nv = null;
        //tìm vị trí sinh viên
        var index = this._timViTriNV(name);
    
        if (index !== -1) {
          nv = this.arr[index];
        }
    
        return nv;
      };

      this._capNhatNhanVien = function (nv) {
        //tim vi tri
        var index = this._timViTriNV(nv.name);
    
        if (index !== -1) {
          this.arr[index] = nv;
        }
      };


      this._timKiemNhanVien = function (Keyword) {
        var mangTimKiem = [];
        this.arr.forEach(function (nv) {
          var nameLowerCase = nv.xepLoai.toLowerCase();
          var KeywordLowerCase = Keyword.toLowerCase();
          if (nameLowerCase.indexOf(KeywordLowerCase) !== -1) {
            mangTimKiem.push(nv);
          }
        });
        return mangTimKiem;
      };
};