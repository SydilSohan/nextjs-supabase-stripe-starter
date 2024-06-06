"use client";
import * as THREE from "three";
import * as dat from "dat.gui";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Nebula from "@/public/Hubble-Veil-Nebula-scaled.webp";
import Nebula2 from "@/public/R (4).jpeg";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { read } from "fs";
type FormValues = {
  gltf: File;
};
function MyThree() {
  const form = useForm();
  const refContainer = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const [userProps, setUserProps] = useState({
    color: 0xffff00,
    wireframe: false,
    speed: 0.01,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    ambientLight: {
      enabled: true,
      color: 0xffffff,
      intensity: 0.5,
    },
    orbitControl: {
      enabled: true,
      autoRotate: false,
      autoRotateSpeed: 0.5,
      enableDamping: true,
      dampingFactor: 0.25,
      rotateSpeed: 0.5,
      zoomSpeed: 0.5,
      panSpeed: 0.5,
      target: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    directionalLight: {
      enabled: true,
      color: 0xffffff,
      intensity: 0.5,
      position: {
        x: -30,
        y: 50,
        z: 0,
      },
    },
    gridHelper: {
      enabled: true,
    },
    box: {
      enabled: true,
      color: 0x00ff00,
      rotation: {
        x: 0.01,
        y: 0.01,
      },
    },
    plane: {
      enabled: true,
      color: 0xffffff,
      side: THREE.DoubleSide,
      rotation: {
        x: -0.5 * Math.PI,
      },
    },
    sphere: {
      enabled: true,
      color: 0xffff00,
      wireframe: true,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    axesHelper: {
      enabled: true,
      size: 5,
    },
    sphereGemoetry: {
      radius: 5,
      widthSegments: 50,
      heightSegments: 50,
    },
    planeGeometry: {
      width: 30,
      height: 30,
    },
    boxGeometry: {
      width: 1,
      height: 1,
      depth: 1,
    },

    camera: {
      fov: 50,
      near: 0.1,
      far: 1000,
      position: {
        x: 20,
        y: 2,
        z: 30,
      },
    },
    renderer: {
      antialias: true,
    },
    animateBox: {
      step: 0,
    },
    options: {
      color: 0xffff00,
      wireframe: false,
      speed: 0.01,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    gui: {
      color: 0xffff00,
      wireframe: false,
      speed: 0.01,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    sphereMaterial: {
      color: 0xffff00,
      wireframe: true,
    },
    boxMaterial: {
      color: 0x00ff00,
    },
    planeMaterial: {
      color: 0xffffff,
      side: THREE.DoubleSide,
    },
  });
  useEffect(() => {
    // === THREE.JS CODE START ===

    var camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(-30, 50, 0);
    const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
    directionalLight.castShadow = true;
    const dLightShadowHelper = new THREE.CameraHelper(
      directionalLight.shadow.camera
    );

    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;

    sceneRef.current.add(dLightShadowHelper);
    sceneRef.current.add(dLightHelper);
    sceneRef.current.add(directionalLight);
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js sceneRef.current instead of the document.body
    (refContainer?.current! as any).appendChild(renderer.domElement);
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    sceneRef.current.add(box);
    const planeGeometry = new THREE.PlaneGeometry(30, 30);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true;
    sceneRef.current.add(plane);
    const gridHelper = new THREE.GridHelper();
    sceneRef.current.add(gridHelper);
    // sceneRef.current.fog = new THREE.Fog(0xffffff, 0.015, 200);
    const textureLoader = new THREE.TextureLoader();
    sceneRef.current.background = textureLoader.load(
      "/Hubble-Veil-Nebula-scaled.webp"
    );
    let step = 0;
    const options = {
      color: 0xffff00,
      wireframe: false,
      speed: 0.01,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(-100, 100, 0);
    spotLight.angle = 0.1;
    sceneRef.current.add(spotLight);
    const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
    sceneRef.current.add(cameraHelper);
    const gui = new dat.GUI();
    gui.addColor(options, "color").onChange((e) => {
      sphere.material.color.set(e);
    });
    gui.add(options, "wireframe").onChange((e) => {
      sphere.material.wireframe = e;
    });
    gui.add(options, "speed", 0, 0.1);
    gui.add(options.position, "x", -10, 10).onChange((e) => {
      sphere.position.x = e;
    });

    gui.add(options.position, "y", -10, 10).onChange((e) => {
      sphere.position.y = e;
    });
    gui.add(options.position, "z", -10, 10).onChange((e) => {
      sphere.position.z = e;
    });
    const animateBox = (time: number) => {
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      step += options.speed;
      sphere.position.y = 10 * Math.abs(Math.sin(step));
      renderer.render(sceneRef.current, camera);
    };
    renderer.setAnimationLoop(animateBox);
    const axesHelper = new THREE.AxesHelper(5);

    const sphereGemoetry = new THREE.SphereGeometry(1, 20, 20);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGemoetry, sphereMaterial);
    sphere.castShadow = true;
    sceneRef.current.add(sphere);
    sphere.position.set(0, 0, 0);

    sceneRef.current.add(axesHelper);
    camera.position.set(20, 2, 30);
    orbitControls.update();
  }, []);
  useEffect(() => {
    const gltf = form.getValues("gltf");
    if (gltf) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(gltf);
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const gltfLoader = new GLTFLoader();
        gltfLoader.parse(arrayBuffer!, "", (gltf) => {
          // Add the loaded model to the scene
          let gltfModel;
          gltfModel = gltf;
          gltfModel.scene.position.set(
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10
          );
          sceneRef.current.add(gltf.scene);

          // Add rotation controls to dat.GUI
          const gui = new dat.GUI();

          const rotationFolder = gui.addFolder("Rotation");
          rotationFolder.add(gltf.scene.rotation, "x").min(0).max(9);
          rotationFolder.add(gltf.scene.rotation, "y").min(0).max(9);
          rotationFolder.add(gltf.scene.rotation, "z").min(0).max(9);
          rotationFolder.open(); // Open the folder by default

          if (gltfModel.animations && gltfModel.animations.length > 0) {
            const clock = new THREE.Clock();
            const mixer = new THREE.AnimationMixer(gltfModel.scene);
            const action = mixer.clipAction(gltfModel.animations[0]);
            const animate = function () {
              requestAnimationFrame(animate);
              mixer.update(clock.getDelta());
            };

            action.play();
          }
        });
      };
    }
  }, [form.watch("gltf")]);
  return (
    <>
      <div
        suppressHydrationWarning
        className="overflow-hidden"
        ref={refContainer}
      ></div>

      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="gltf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GLTF File</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        const file = e?.target?.files[0];
                        form.setValue("gltf", file);
                      }
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

export default MyThree;
