import Child from "./child";

export default class User{
    constructor(public userId:number,
      public name:string,
       public familyName:string,
      public tz:string,
      public dob:Date,
      public gender:number,
      public hmo:number,
      public children: Child[]
        ){}
}