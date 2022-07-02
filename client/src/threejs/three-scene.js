import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component {
  componentDidMount() {
    //scene
    console.log('Hello');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x909090);

    //renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mount.appendChild(this.renderer.domElement);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 5;

    // Create a Box
    var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0xc4c4c4,
    });
    this.cube = new THREE.Mesh(geometry, material);

    // add the cube to the scene
    this.scene.add(this.cube);
    this.animation();
    this.renderer.render(this.scene, this.camera);

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
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
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
