import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {

	window.alert('Go ahead and try');
	const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(8, 1, 9,);
const material = new THREE.MeshBasicMaterial({ color: 0x63504f });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;


function animate(params) {
    cube.rotation.x += 0.11;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

}

renderer.setAnimationLoop(animate);

} else {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
