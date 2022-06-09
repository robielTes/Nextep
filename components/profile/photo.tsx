import React from 'react';
import {Image, StyleSheet} from 'react-native';


export default function profilePhoto (props: any) {
      return(
            <Image
                  source={props.source}
                  style={styles.container}/>
      );
}

const styles = StyleSheet.create({
      container:{width: 200, height: 200, borderRadius:100, alignItems: 'center'},
});