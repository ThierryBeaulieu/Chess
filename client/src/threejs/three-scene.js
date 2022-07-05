import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class ThreeScene extends Component {
  componentDidMount() {
    // mouse
    this.mouseX = 0;
    this.mouseY = 0;

    // scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x909090);

    // renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // shadow configuration
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
    const particuleCount = 10000;

    const positionArray = new Float32Array(particuleCount * 3);

    for (let i = 0; i < particuleCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 20;
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
    this.animationcloud = new THREE.Points(particulesGeometry, this.material);
    this.scene.add(this.animationcloud);

    // Animate & render
    this.animation();
    this.renderer.render(this.scene, this.camera);

    // Navigate
    new OrbitControls(this.camera, this.renderer.domElement);

    // Event handler
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('mousemove', this.animateParticules);
  }

  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  };

  animateParticules = (event) => {
    this.mouseY = event.clientY;
    this.mouseX = event.clientX;
  };

  clock = new THREE.Clock();

  elapsedTime = this.clock.getElapsedTime();

  animation = () => {
    requestAnimationFrame(this.animation);
    this.animationcloud.rotation.y = this.mouseX * 0.005;
    this.animationcloud.rotation.x = this.mouseY * 0.005;
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
