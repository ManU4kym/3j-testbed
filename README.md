# Play ground

## starter

```javascript
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {

 window.alert('Continue');

} else {

 const warning = WebGL.getWebGL2ErrorMessage();
 document.getElementById( 'container' ).appendChild( warning );

}

```
