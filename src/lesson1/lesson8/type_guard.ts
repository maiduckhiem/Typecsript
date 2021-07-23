type sinhVien = {
  ho_ten: string;
  ma: string;
  diHoc: (monhoc: string) => void;
};

type nhanvienFpt = {
  ho_ten: string;
  ma: string;
  lamviec: (congviec: string) => void;
};

type fptMember = sinhVien | nhanvienFpt;

function doWork(member:fptMember){
    if('diHoc' in member){
        //typescript hieu member dang xet trong if la doi tuong kieu sinhvien
        member.diHoc('lap trinh typescript');
    }else{
        //typescript hieu member dang xet trong else la doi tuong kieu nhanvienfpt
        member.lamviec('code typecsript')
    }
}

//instanceof kiem tra doi tuong chuyen vao 
// class xemay ={

// }