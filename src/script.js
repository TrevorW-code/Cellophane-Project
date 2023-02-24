import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import {FlyControls} from 'three/examples/jsm/controls/FlyControls.js'
// import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'

// Loaders
const manager = new THREE.LoadingManager()
const gltfLoader = new GLTFLoader(manager)

// Loader Functions
const progressBar = document.getElementById("progress-bar")

manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    progressBar.style.width = ( itemsLoaded / itemsTotal * 100 ) + '%';
};

manager.onLoad = function ( ) {
	console.log('Loading complete!');
    document.getElementById("loading-screen").style.zIndex = "0";
    document.getElementById("trademark").style.zIndex = "0";
    document.getElementById("progress").style.zIndex = "0";
};

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scenes
const TheatreScene = new THREE.Scene()
const SkyScene = new THREE.Scene()
SkyScene.background = new THREE.Color(0xf5ffd3);
const HellScene = new THREE.Scene()

// Folders
const mountain = gui.addFolder('Mountain')
const cloud = gui.addFolder('Cloud')
const woman = gui.addFolder('Theatre Woman')
const woman2 = gui.addFolder('Sky Woman')
const woman3 = gui.addFolder('Mountain Woman')
const theatre = gui.addFolder('Theatre')
const light1 = gui.addFolder('Point Light 1')
const light2 = gui.addFolder('Theatre Spotlight')
const light3 = gui.addFolder('Point Light 3')
const light4 = gui.addFolder('Hell Light')
const light5 = gui.addFolder('Theatre Light 2')

//Load Hell Mountain
gltfLoader.load('mountain.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(1 / 100);
    HellScene.add(object)
    object.position.y = 0;

    mountain.add(object.position, "x").min(-100).max(100)
    mountain.add(object.position, "y").min(-100).max(100)
    mountain.add(object.position, "z").min(-100).max(100)
    mountain.add(object.rotation, "x").min(0).max(9)
    mountain.add(object.rotation, "y").min(0).max(9)
    mountain.add(object.rotation, "z").min(0).max(9)
})

// Load Cloud 1
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    SkyScene.add(object)

    cloud.add(object.position, "x").min(-100).max(100)
    cloud.add(object.position, "y").min(-100).max(100)
    cloud.add(object.position, "z").min(-100).max(100)
    cloud.add(object.rotation, "x").min(0).max(9)
    cloud.add(object.rotation, "y").min(0).max(9)
    cloud.add(object.rotation, "z").min(0).max(9)
})

// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = .5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 1;

    SkyScene.add(object)
})
// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 1.5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 2;

    SkyScene.add(object)
})
// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 2.5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 3;

    SkyScene.add(object)
})
// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 3.5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 4;

    SkyScene.add(object)
})
// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 4.5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 5;

    SkyScene.add(object)
})
// Load Cloud 2
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 5.5;

    SkyScene.add(object)
})
// Load Cloud 3
gltfLoader.load('scene.gltf', (gltf) => {
    var object = gltf.scene;
    object.scale.multiplyScalar(30 / 100);
    object.rotation.y = 5.9;

    SkyScene.add(object)
})

// Load Woman Theatre
gltfLoader.load('woman.gltf', (gltf) => {
    // make the woman wireframe
    var object = gltf.scene;
    object.traverse((node) => {
      if (!node.isMesh) return;
      node.material.wireframe = true;
    });

    // Make woman metal
    //  object.traverse((node) => {
    //   if (!node.isMesh) return;
    //   node.material.metalness = 1;
    //   node.material.roughness = 0;
    // });
    
    // Shrinking Model
    object.scale.multiplyScalar(3 / 100);
    // Set defaults for first scene
    object.position.x = 15; 
    object.position.y = -0.63;
    object.position.z = 0;

    // next to chair for height reference

    // gltf.scene.position.x = 11; 
    // gltf.scene.position.y = -1.93;
    // gltf.scene.position.z = 0;
    gltf.scene.rotation.y = 4.5;
    // Gui Stuff
    woman.add(object.position, "x").min(-100).max(100)
    woman.add(object.position, "y").min(-100).max(100)
    woman.add(object.position, "z").min(-100).max(100)

    woman.add(object.rotation, "x").min(0).max(9)
    woman.add(object.rotation, "y").min(0).max(9)
    woman.add(object.rotation, "z").min(0).max(9)
    TheatreScene.add(object);
})

// Load Woman SkyScene
gltfLoader.load('woman.gltf', (gltf) => {
    // make the woman wireframe
    var object = gltf.scene;
    object.traverse((node) => {
      if (!node.isMesh) return;
      node.material.wireframe = true;
    });

    // Make woman metal
    //  object.traverse((node) => {
    //   if (!node.isMesh) return;
    //   node.material.metalness = 1;
    //   node.material.roughness = 0;
    // });
    
    // Shrinking Model
    object.scale.multiplyScalar(20 / 100);
    // Set defaults for first scene
    object.position.x = 0; 
    object.position.y = 2;
    object.position.z = 0;

    // next to chair for height reference

    // gltf.scene.position.x = 11; 
    // gltf.scene.position.y = -1.93;
    // gltf.scene.position.z = 0;
    gltf.scene.rotation.y = 4.5;
    // Gui Stuff
    woman2.add(object.position, "x").min(-100).max(100)
    woman2.add(object.position, "y").min(-100).max(100)
    woman2.add(object.position, "z").min(-100).max(100)

    woman2.add(object.rotation, "x").min(0).max(9)
    woman2.add(object.rotation, "y").min(0).max(9)
    woman2.add(object.rotation, "z").min(0).max(9)
    SkyScene.add(object);
})

// Load Woman HellScene
gltfLoader.load('woman.gltf', (gltf) => {
    // make the woman wireframe
    var object = gltf.scene;
    object.traverse((node) => {
      if (!node.isMesh) return;
      node.material.wireframe = true;
    });

    // Make woman metal
    //  object.traverse((node) => {
    //   if (!node.isMesh) return;
    //   node.material.metalness = 1;
    //   node.material.roughness = 0;
    // });
    
    // Shrinking Model
    object.scale.multiplyScalar(5 / 100);
    // Set defaults for first scene
    object.position.x = 1.7; 
    object.position.y = -1.5;
    object.position.z = -35;

    // next to chair for height reference

    // gltf.scene.position.x = 11; 
    // gltf.scene.position.y = -1.93;
    // gltf.scene.position.z = 0;
    gltf.scene.rotation.y = 4.5;
    // Gui Stuff
    woman3.add(object.position, "x").min(-100).max(100)
    woman3.add(object.position, "y").min(-100).max(100)
    woman3.add(object.position, "z").min(-100).max(100)

    woman3.add(object.rotation, "x").min(0).max(9)
    woman3.add(object.rotation, "y").min(0).max(9)
    woman3.add(object.rotation, "z").min(0).max(9)
    HellScene.add(object);
})


// Load Theatre
gltfLoader.load('theatre.gltf', (gltf) => {
    TheatreScene.add(gltf.scene)

    theatre.add(gltf.scene.rotation, "x").min(0).max(9)
    theatre.add(gltf.scene.rotation, "y").min(0).max(9)
    theatre.add(gltf.scene.rotation, "z").min(0).max(9)
})


// Light 1


// adding light 1 with variable position and color
const pointLight1 = new THREE.PointLight(0xe7eda4, .3)
// setting default position
pointLight1.position.set(0,15,0)
light1.add(pointLight1.position, 'y').min(-100).max(100).step(1)
light1.add(pointLight1.position, 'x').min(-100).max(100).step(1)
light1.add(pointLight1.position, 'z').min(-100).max(100).step(1)
light1.add(pointLight1, 'intensity').min(0).max(5).step(0.01)
// color varible
const light1Color = {
    color: 0xe7eda4
}
// change color gui
light1.addColor(light1Color, 'color')
    .onChange(() => {
        pointLight1.color.set(light1Color.color)
    })
// add light
SkyScene.add(pointLight1)
// point helper
const pointLightHelper1 = new THREE.PointLightHelper(pointLight1,1)
SkyScene.add(pointLightHelper1)



// Theatre Light 1 (Light 2)


// adding light 2 with variable position and color
const pointLight2 = new THREE.PointLight(0xF7E3C9, .5)
// setting defaults position
pointLight2.position.set(13,0,0)
light2.add(pointLight2.position, 'y').min(-100).max(100).step(1)
light2.add(pointLight2.position, 'x').min(-100).max(100).step(1)
light2.add(pointLight2.position, 'z').min(-100).max(100).step(1)
light2.add(pointLight2, 'intensity').min(0).max(5).step(0.01)
// color varible
const light2Color = {
    color: 0xF7E3C9
}
// change color gui
light2.addColor(light2Color, 'color')
    .onChange(() => {
        pointLight2.color.set(light2Color.color)
    })
// add light
TheatreScene.add(pointLight2)
// point helper
const pointLightHelper2 = new THREE.PointLightHelper(pointLight2,1)
TheatreScene.add(pointLightHelper2)

const pointLight5 = new THREE.PointLight(0xF7E3C9, 1)
// setting defaults position
pointLight5.position.set(13,20,0)
light5.add(pointLight5.position, 'y').min(-100).max(100).step(1)
light5.add(pointLight5.position, 'x').min(-100).max(100).step(1)
light5.add(pointLight5.position, 'z').min(-100).max(100).step(1)
light5.add(pointLight5, 'intensity').min(0).max(5).step(0.01)
// color varible
const light5Color = {
    color: 0xF7E3C9
}
// change color gui
light5.addColor(light2Color, 'color')
    .onChange(() => {
        pointLight5.color.set(light5Color.color)
    })
// add light
TheatreScene.add(pointLight5)
// point helper
const pointLightHelper5 = new THREE.PointLightHelper(pointLight5,1)
TheatreScene.add(pointLightHelper5)

// Ambient Light
const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
TheatreScene.add(ambientLight);
SkyScene.add(ambientLight);
HellScene.add(ambientLight);



// Light 3 



// adding light 3 with variable position and color
const pointLight3 = new THREE.PointLight(0xCCA376, .75)
// setting default position
pointLight3.position.set(0,0,0)
light3.add(pointLight3.position, 'y').min(-100).max(100).step(1)
light3.add(pointLight3.position, 'x').min(-100).max(100).step(1)
light3.add(pointLight3.position, 'z').min(-100).max(100).step(1)
light3.add(pointLight3, 'intensity').min(0).max(5).step(0.01)
// color varible
const light3Color = {
    color: 0xA3825E
}
// change color gui
light3.addColor(light3Color, 'color')
    .onChange(() => {
        pointLight3.color.set(light3Color.color)
    })
// add light
SkyScene.add(pointLight3)
// point helper
const pointLightHelper3 = new THREE.PointLightHelper(pointLight3,1)
SkyScene.add(pointLightHelper3)


// Light 4


// adding light 2 with variable position and color
const pointLight4 = new THREE.PointLight(0xff0000, 1.57)
// setting defaults position
pointLight4.position.set(-3,31,-33)
light4.add(pointLight4.position, 'y').min(-100).max(100).step(1)
light4.add(pointLight4.position, 'x').min(-100).max(100).step(1)
light4.add(pointLight4.position, 'z').min(-100).max(100).step(1)
light4.add(pointLight4, 'intensity').min(0).max(5).step(0.01)
// color varible
const light4Color = {
    color: 0xff0000
}
// change color gui
light4.addColor(light4Color, 'color')
    .onChange(() => {
        pointLight4.color.set(light4Color.color)
    })
// add light
TheatreScene.add(pointLight4)
// point helper
const pointLightHelper4 = new THREE.PointLightHelper(pointLight4,1)

HellScene.add(pointLight4);
HellScene.add(pointLightHelper4);








/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


// Resize Window
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 22
camera.position.y = 22
camera.position.z = 22
TheatreScene.add(camera)
SkyScene.add(camera)

// Controls

const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// const controls = new FlyControls( camera, canvas );
// controls.movementSpeed = 2500;
// controls.domElement = container;
// controls.rollSpeed = Math.PI / 6;
// controls.autoForward = false;
// controls.dragToLook = false;

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

let scene = TheatreScene;

document.getElementById('scene1').onclick = function () {scene = TheatreScene;};
document.getElementById('scene2').onclick = function () {scene = SkyScene;};
document.getElementById('scene3').onclick = function () {scene = HellScene;};


const tick = () =>

{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    // renderer.render(TheatreScene, camera)
    // renderer.render(SkyScene, camera)
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()