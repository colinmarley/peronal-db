
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type TabElementProps = {
  label: string;
  active?: boolean;
  onClick?: () => void; 
};

const TabElement: React.FC<TabElementProps> = ({ label, active = false, onClick = () => {} }) => {
  return (
    <View style={(active) ? styles.active : styles.tabElement}>
        <TouchableOpacity  onPress={onClick}>
            <Text>{label}</Text>
        </TouchableOpacity>
    </View>
  );
};

// create a stylesheet component to make the label Bold when active = true
const styles = StyleSheet.create({
    tabElement: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    active: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
});

export default TabElement;
