import React from 'react';
import {Image} from 'react-native';


export default function profilePhoto (props: any) {
      return(
            <Image
                  source={props.source}
                  style={{ width: 200, height: 200, borderRadius:100, alignItems: 'center' }}/>
      );
}
