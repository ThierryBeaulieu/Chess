import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class ThreeScene extends Component {
  componentDidMount() {
    // scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x909090);

    // renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enable = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.mount.appendChild(this.renderer.domElement);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 10;

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    this.scene.add(this.pointLight);

    // Particules
    const particulesGeometry = new THREE.BufferGeometry();
    const particuleCount = 5000;

    const positionArray = new Float32Array(particuleCount * 3);

    for (let i = 0; i < particuleCount * 3; i++) {
      positionArray[i] = Math.random();
    }

    particulesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3),
    );

    // Material
    this.material = new THREE.PointsMaterial({
      size: 0.005,
    });

    // Mesh
    const cloud = new THREE.Points(particulesGeometry, this.material);
    this.scene.add(cloud);

    // Animate & render
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
