import React from 'react'
import { StyleSheet,Text,View } from 'react-native';
import { Card,Title,Paragraph,IconButton } from 'react-native-paper';

interface ItemViewProps{
    items: Item[];
    onOpenModal:()=> void;
    onRemovePress:(item: Item)=> void;
}
export function ItemView({items,onOpenModal,onRemovePress}: ItemViewProps)
return(
    <View style={styles.container}>
        {items.length === 0?(
            <Text style={styles.noItems}>Nenhum Item</Text>):
        )(
            items.map((item, index)=>(

            ))
        )}
    </View>
)