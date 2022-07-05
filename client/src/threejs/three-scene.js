import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

class ThreeScene extends Component {
  componentDidMount() {
    //scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x909090);

    //renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enable = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.mount.appendChild(this.renderer.domElement);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 10;

    this.secondLight = new THREE.SpotLight();
    this.secondLight.position.set(20, 20, 20);
    this.scene.add(this.secondLight);

    //Create a DirectionalLight and turn on shadows for the light
    this.lightColor = 0xffffff;
    this.lightIntensity = 1;
    this.light = new THREE.DirectionalLight(
      this.lightColor,
      this.lightIntensity,
    );
    this.light.castShadow = true;
    this.light.position.set(-1, 10, -2);
    this.light.target.position.set(-4, 0, -4);
    this.scene.add(this.light);
    this.scene.add(this.light.target);

    this.loader = new FBXLoader();
    this.loader.load(
      'C:/Users/thier/Desktop/Chess/client/src/threejs/Queen.fbx',
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(mesh);
        console.log('mesh added');
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      },
    );

    // animate & render
    this.animation();
    this.renderer.render(this.scene, this.camera);

    new OrbitControls(this.camera, this.renderer.domElement);
    // Event handler
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  };

  animation = () => {
    requestAnimationFrame(this.animation);
    //this.cube.rotation.x += 0.01;
    //this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
