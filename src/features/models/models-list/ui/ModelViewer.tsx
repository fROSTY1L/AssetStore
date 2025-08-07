import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Loader } from '@react-three/drei';

interface ModelViewerProps {
  modelUrl: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}