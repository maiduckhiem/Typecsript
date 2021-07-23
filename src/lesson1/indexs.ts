interface IComponent {
  render: () => void;
  template: () => String;
  afterRender: () => void;
}

class Compoment implements IComponent{
  public async render(){

    //thêm dấu ! sau querySelector
    //=> thông báo với typescript : chắc chắn có một phần tử trong dom có id là root 
    //& document.queryselector('root') không 
      document.querySelector("#root")!.innerHTML = await this .template();

    //hiển thị giao diện
    await this.afterRender();

  }
  public abstract  afterRender ():void;
  public abstract template (): string;
}
