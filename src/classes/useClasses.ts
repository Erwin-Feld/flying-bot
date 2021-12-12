class ProtoBlob {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  smurch(this: ProtoBlob): string {
    console.log("I am blob");
    return this.name;
  }
}

const myBlob = new ProtoBlob("blob");


myBlob.smurch();




