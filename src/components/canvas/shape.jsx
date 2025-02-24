import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const ShapeCanvas = () => {
  return (
    <Canvas>
    <Suspense fallback={null}>
      <Sphere args={[1, 100, 200]} scale={0.8}>
        <MeshDistortMaterial
          color='#915EFF'
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
      </Suspense>
    </Canvas>

  );
};

export default ShapeCanvas;