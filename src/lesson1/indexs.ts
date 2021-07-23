interface IComponent {
  render: () => void;
  template: () => String;
  afterRender: () => void;
}

abstract class Component implements IComponent{
  public  render(){

    //thêm dấu ! sau querySelector
    //=> thông báo với typescript : chắc chắn có một phần tử trong dom có id là root 
    //& document.queryselector('root') không bao giờ null
      document.querySelector("#root")!.innerHTML = await this .template();

    //hiển thị giao diện
    // await this.afterRender();

  }
  public abstract  afterRender ():void;
  public abstract template (): string;
}

class UserIndex extends Component {
    public template(){
      return`
        <h1>Hello</h1>
      `
    }
    public afterRender(){
      console.log('UserIndex@afterRender');
    }
}

let gui: UserIndex= new UserIndex();
gui.render();