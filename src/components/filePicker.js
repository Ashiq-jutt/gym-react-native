import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export const FilePicker = () => {
    const [fileInfo, setFileInfo] = useState(null);

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFileInfo(result);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
            } else {
                // Error
            }
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={pickFile}>
                <Text>Select File</Text>
            </TouchableOpacity>
            {fileInfo && (
                <View>
                    <Text>Name: {fileInfo.name}</Text>
                    <Text>Type: {fileInfo.type}</Text>
                    <Text>Size: {fileInfo.size} bytes</Text>
                    <Text>URI: {fileInfo.uri}</Text>
                </View>
            )}
        </View>
    );
};
