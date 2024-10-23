//"use client";
//
//import { Canvas } from "@react-three/fiber";
//import { type MotionValue, motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
//
//export const Section2 = () => {
//  const { scrollY } = useScroll();
//  const animationTriggers: number[] = [1800, 2100, 2700, 3000];
//  const opacity = useTransform(scrollY, animationTriggers, [0, 1, 1, 0]);
//  const blur = useTransform(scrollY, animationTriggers, [7, 0, 0, 7]);
//  const filter = useMotionTemplate`blur(${blur}px)`;
//
//  return (
//    <>
//      <motion.p
//        style={{ opacity, filter }}
//        className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%_-_1.875rem)] left-1/2 w-full text-center text-3xl tracking-tight"
//      >
//        pushing boundaries
//        <br />
//        with every project
//      </motion.p>
//
//      <Canvas
//        className="-z-10 pointer-events-none absolute h-screen"
//        camera={{ position: [0, 0, 10] }}
//        aria-hidden="true"
//      >
//        <ambientLight intensity={1} />
//        {Array.from({ length: 5 }, (_, i) => (
//          <Line key={performance.now().toString()} index={i} scrollY={scrollY} />
//        ))}
//      </Canvas>
//    </>
//  );
//};
//
//import { extend } from "@react-three/fiber";
//import { motion as m3d } from "framer-motion-3d";
//import { MeshLineGeometry, MeshLineMaterial } from "meshline";
//
//extend({ MeshLineGeometry, MeshLineMaterial });
//
//type LineProps = { index: number; scrollY: MotionValue<number> };
//
//const Line = ({ index, scrollY }: LineProps) => {
//  const opacity = useTransform(
//    scrollY,
//    [1800 + index * 100, 1800 + index * 200, 1800 + index * 300, 1800 + index * 400],
//    [0, 1, 1, 0],
//  );
//  console.log(opacity);
//  const positionY = (index - 0.5) * 1.5;
//
//  return (
//    <m3d.mesh position={[0, positionY, 0]} initial={{ opacity: 0 }}>
//      <meshLineGeometry points={[-2.5, 0, 0, 2.5, 0, 0]} />
//      <meshLineMaterial lineWidth={0.1} color="#6BD490" />
//    </m3d.mesh>
//  );
//};
