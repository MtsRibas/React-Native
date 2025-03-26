import React,{useState} from 'react';
import { Item } from '../models/Item';
import { itemService } from '../services/ItemServices';
import {Item} from '../models/Item';
import {ItemView} from '../views/ItemView';
import {ItemModal} from '..components/ConfirmRemoveModal';
import {ConfirmRemoveModal} from '../components/ConfirmRemoveModal';

export function ItemController (){
    const [itens,setItens] = useState<Item[]>([]);
    const [modalVisible,setModalVisible] = useState(false);

    const [nome,setNome] = useState("")
    const[descricao,setDescricao] = useState("")

    const [removeModalVisible,setRemoveModalVisible] = useState(false);
    const[itemToRemove,setItemToRemove]<Item | undefined> (undefined);

    const openAddModal =()=>{
        setNome('');
        setDescricao('');
        setModalVisible(true);

    };
    const closeAddModal =()=>{
        setModalVisible(false);
    };
    
    const handleSave =()=>{
        if(!nome||!descricao){
            alert('por favor, preencha os campos ')
            return;
        }
    }

    itemService.addItem(nome,descricao);
    setItens(itemService.getItems());
    setModalVisible(false);

    const handleRemovePress =(item: Item) =>{
        setItemToRemove(item);
        setRemoveModalVisible(true);

    };
    const handleConfirmRemove =()=>{
        if(itemToRemove){
            itemService.removeItem(itemToRemove);
            setItens(itemService.getItems());
        }
    };
    const handleCancelRemove =()=>{
        setRemoveModalVisible(false);
        setItemToRemove(undefined)
    };
    return(
        <>
        <ItemView
            itens={itens}
            onOpenModal=(openAddModal)
            onRemovePress=(handleRemovePress)
        />
        <ItemModal
            visible=(modalVisible)
            onDismiss=(closeAddModal)
            nome=(nome)
            setNome=(setNome)
            descricao=(descricao)
            setDescricao=(setDescricao)
            onSave=(handleSave)


        />
        </>

    );

}