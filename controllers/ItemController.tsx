import React,{useState} from "react";
import { Item } from "../models/Item";
import { itemService } from "../services/ItemServices";

export function ItemController (){
    const [itens,setItens] = useState<Item[]>([]);
    const [modalVisible,setModalVisible] = useState(false);

    const [nome,setNome] = useState("")
    const[descricao,setDescricao] = useState("")


}