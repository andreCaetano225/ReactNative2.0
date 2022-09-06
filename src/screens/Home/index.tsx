import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

    function hanbleParticipantAdd() {
        console.log('Clickou no botao de add!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#fff"}

                />
                <TouchableOpacity style={styles.buttonAdd} onPress={hanbleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
