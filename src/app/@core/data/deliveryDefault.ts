
export class DeliveryDefaults{
    id:number;
    max:number;
    current:number;


    getProgress() {
        return this.current/this.max*100;
      }


}

