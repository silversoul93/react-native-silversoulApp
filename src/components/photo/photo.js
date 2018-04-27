import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Camera from 'react-native-camera';

export default class Photo extends Component<{}> {
    constructor(props) {
        super(props);

        this.camera = undefined;
        this.state = {
            imagePath: ""
        };
    }

    onBarCodeRead(e) {
        console.log(
            "Barcode found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        if (this.camera) {
            this.camera.capture({ metadata: options }).then(function (data) {
                console.log(data);
                this.setState({ imagePath: data.path });
            }.bind(this)).catch(function (err) {
                console.error(err);
            }.bind(this));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera ref={(cam) => {
                    this.camera = cam;
                }}
                    onBarCodeRead={this.onBarCodeRead.bind(this)}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.disk}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
                <Image source={{ uri: this.state.imagePath }} style={styles.preview} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});