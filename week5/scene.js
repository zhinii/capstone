
const scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var canvas = document.querySelector("#objectScene")
      var renderer = new THREE.WebGLRenderer({canvas});
   var loader = new THREE.GLTFLoader();


        const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
    scene.background = new THREE.Color('grey');
      const controls = new THREE.OrbitControls( camera, canvas );
 camera.position.z = 5;
  camera.position.y = 5;
      controls.update();

//add model object eher

  
loader.load('caseObj.glb',function(gltf){
    scene.add(gltf.scene);  
    });
     


     //end model object code here
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

      var animate = function () {
        requestAnimationFrame( animate );
      controls.update();

        renderer.render( scene, camera );
      };

      animate();