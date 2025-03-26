
import {Item} from "../models/Item";

export class itemService{
     private static items: Item[] = [];

    static addItem(nome:string,descricao:string):void{
        this.items.push({nome,descricao});
    }


    static removeItem(item: Item){
        const index = this.items.findIndex(
            (i) => i.nome === item.nome && i.descricao === item.descricao
        );
        if(index !== -1){
            this.items.splice(index,1);
        }
    }
    static getItems(): Item[] {
        return[...this.items];
    }
}