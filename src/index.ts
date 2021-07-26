interface IComponent {
  render: () => void;
  template: () => String;
  afterRender: () => void;
}

abstract class Component implements IComponent {
  public render() {
    //thêm dấu ! sau querySelector
    //=> thông báo với typescript : chắc chắn có một phần tử trong dom có id là root
    //& document.queryselector('root') không bao giờ null
    document.querySelector("#root")!.innerHTML = this.template();

    //hiển thị giao diện
    // await this.afterRender();
  }
  public abstract afterRender(): void;
  public abstract template(): string;
}

class user {
  private _id: number;
  private _name:string;
  private _birthbay: Date;
  private _email
}

class UserIndex extends Component {
  public template():string {
    return `
        <h1>Hello</h1>
      `;
  }
  public afterRender():void {
    con