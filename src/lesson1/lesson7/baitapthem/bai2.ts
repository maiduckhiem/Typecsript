type thongtincoban ={
    hoten: String,
    ngaysinh: Date,
    diachi:String
}

type sdt = {
     sdt: String
}

type email = {
    email: String
}

type user = thongtincoban & {
    hoten: string,
    ngaysinh: Date,
    diachi: String,
    sdt: String,
    email: String
}