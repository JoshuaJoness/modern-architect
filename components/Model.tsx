import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import { Html } from "drei";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { AnimationClip } from "three/src/animation/AnimationClip"; //Animation types

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

const Model = () => {
  /* Refs */
  const group: group = useRef();
  const actions: actions = useRef();

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);
  const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  /* Mixer */
  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {

      console.log(gltf, 'GLTF')

      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      // await gltf.scene.scale.set(100,100,100) 

      // gltf.scene.scale.set(0.03, 0.03, 0.03);


      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  /* Set animation */
  useEffect(() => {
    if (animation && typeof group.current != "undefined") {
      console.log(animation, 'ANIMATION')
      console.log(group.current, 'group.current')
      if (model) {
        model.rotation.order = ""; /* This did something... set model 'up-right' */
        // TODO here, trying to stop model from rotating when animations are loaded...
        // model.rotation.x = 0;
        // model.rotation.y = 0;
        // model.rotation.z = 0;
      }
      // console.log(mixer.clipAction, 'MIXER')

      // actions.current = {
      //   idle: mixer.clipAction(animation[0], group.current as Object3D),
      // };
      // actions.current.idle.play();
      // TODO, above is causing crash... do I need this? It seems to be some sort of animation
      // return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  // useEffect(() => {
  //   console.log(model,'model')
  // }, [model])

  /* Animation update */
  useFrame((_, delta) => mixer.update(delta));
  /* Rotation */
  useFrame(() => {
    if (typeof group.current != "undefined")
      return (group.current.rotation.y += 0.01);
  });

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;