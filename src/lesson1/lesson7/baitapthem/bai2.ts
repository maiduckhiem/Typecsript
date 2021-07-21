type thongtincoban = {
  ngaysinh: Date;
  diachi: String;
};

type hoten ={
    ho: String,
    dem:String,
    ten: String
}

type sdt = {
  sdt: String;
};

type email = {
  email: String;
};
type user = thongtincoban & sdt & email&hoten;

let user1: user = {
  ho: "mai",
  dem: "duc",
  ten: "khiem",
  ngaysinh: new Date(),
  diachi: 'HN',
  sdt:'09423424',
  email:'duckhiem110@gmail.com'
};
