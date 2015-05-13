export default class Test {

  private something: string;

  static getAll(): Test[] {
    return ['hello', 'world'];
  }

  constructor(foo: string) {
    this.something = 12;
    this.otherthing = 13;
  }

}
