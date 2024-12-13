import React from 'react';
import { useGLTF } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier';

const MapLvL2 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/lvl2.glb');
  return (
    <group {...props} dispose={null}>
    <RigidBody type="fixed" colliders="trimesh">
        <group {...props} dispose={null}>
        <group name="Scene">
            <mesh
            name="Stone"
            castShadow
            receiveShadow
            geometry={nodes.Stone.geometry}
            material={materials['Mat_tree.001']}
            position={[23.01, 0.5, 24.58]}
            />
            <mesh
            name="Ground001"
            castShadow
            receiveShadow
            geometry={nodes.Ground001.geometry}
            material={materials['Mat_tree.001']}
            position={[-17.99, 0.19, -16.06]}
            rotation={[Math.PI, -1.48, Math.PI]}
            />
            <mesh
            name="Ground004"
            castShadow
            receiveShadow
            geometry={nodes.Ground004.geometry}
            material={materials['Mat_tree.001']}
            position={[-35.1, 0.19, 5.61]}
            />
            <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials['Mat_tree.001']}
            position={[-13.95, 0.22, 9.77]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-61.57, -28.09, -60.32]}
            />
            <mesh
            name="Ground011"
            castShadow
            receiveShadow
            geometry={nodes.Ground011.geometry}
            material={materials['Mat_tree.007']}
            position={[-63.28, 0.19, -15.27]}
            scale={[1.82, 1.67, 17.56]}
            />
            <mesh
            name="Ground018"
            castShadow
            receiveShadow
            geometry={nodes.Ground018.geometry}
            material={materials['Mat_tree.014']}
            position={[-14.13, 0.05, 28.15]}
            rotation={[Math.PI, -1.57, Math.PI]}
            />
            <mesh
            name="Ground003"
            castShadow
            receiveShadow
            geometry={nodes.Ground003.geometry}
            material={materials['Mat_tree.011']}
            position={[-61.43, 0.19, 52.1]}
            scale={[1.01, 1.64, 7.99]}
            />
            <mesh
            name="Ground005"
            castShadow
            receiveShadow
            geometry={nodes.Ground005.geometry}
            material={materials['Mat_tree.040']}
            position={[-11.5, 0.19, -51.39]}
            rotation={[0, -1.56, 0]}
            scale={[1.01, 1.75, 18.58]}
            />
            <mesh
            name="Stump028"
            castShadow
            receiveShadow
            geometry={nodes.Stump028.geometry}
            material={materials['Mat_tree.069']}
            position={[30.36, 0.22, -16.95]}
            />
            <mesh
            name="Stump027"
            castShadow
            receiveShadow
            geometry={nodes.Stump027.geometry}
            material={materials['Mat_tree.070']}
            position={[31.91, 0.22, -15]}
            />
            <mesh
            name="Stump026"
            castShadow
            receiveShadow
            geometry={nodes.Stump026.geometry}
            material={materials['Mat_tree.071']}
            position={[25.22, 0.22, -11.72]}
            />
            <mesh
            name="Stump024"
            castShadow
            receiveShadow
            geometry={nodes.Stump024.geometry}
            material={materials['Mat_tree.073']}
            position={[31.22, 0.22, -11]}
            />
            <mesh
            name="Stump023"
            castShadow
            receiveShadow
            geometry={nodes.Stump023.geometry}
            material={materials['Mat_tree.074']}
            position={[28.83, 0.22, -11.73]}
            />
            <mesh
            name="Stump022"
            castShadow
            receiveShadow
            geometry={nodes.Stump022.geometry}
            material={materials['Mat_tree.075']}
            position={[31.22, 0.22, -13.02]}
            />
            <mesh
            name="Stump021"
            castShadow
            receiveShadow
            geometry={nodes.Stump021.geometry}
            material={materials['Mat_tree.076']}
            position={[26.84, 0.22, -13.42]}
            />
            <mesh
            name="Stump020"
            castShadow
            receiveShadow
            geometry={nodes.Stump020.geometry}
            material={materials['Mat_tree.077']}
            position={[26.84, 0.22, -16.21]}
            />
            <mesh
            name="Stump019"
            castShadow
            receiveShadow
            geometry={nodes.Stump019.geometry}
            material={materials['Mat_tree.078']}
            position={[24.19, 0.22, -13.67]}
            />
            <mesh
            name="Stump018"
            castShadow
            receiveShadow
            geometry={nodes.Stump018.geometry}
            material={materials['Mat_tree.079']}
            position={[22.33, 0.22, -13.34]}
            />
            <mesh
            name="Stump017"
            castShadow
            receiveShadow
            geometry={nodes.Stump017.geometry}
            material={materials['Mat_tree.080']}
            position={[29.19, 0.22, -14.27]}
            />
            <mesh
            name="Stump016"
            castShadow
            receiveShadow
            geometry={nodes.Stump016.geometry}
            material={materials['Mat_tree.081']}
            position={[22.48, 0.22, -9.77]}
            />
            <mesh
            name="Stump015"
            castShadow
            receiveShadow
            geometry={nodes.Stump015.geometry}
            material={materials['Mat_tree.082']}
            position={[30.28, 0.22, -6.84]}
            />
            <mesh
            name="Stump014"
            castShadow
            receiveShadow
            geometry={nodes.Stump014.geometry}
            material={materials['Mat_tree.083']}
            position={[24.91, 0.22, -9.04]}
            />
            <mesh
            name="Stump013"
            castShadow
            receiveShadow
            geometry={nodes.Stump013.geometry}
            material={materials['Mat_tree.084']}
            position={[27.58, 0.22, -11.56]}
            />
            <mesh
            name="Stump012"
            castShadow
            receiveShadow
            geometry={nodes.Stump012.geometry}
            material={materials['Mat_tree.085']}
            position={[24.69, 0.22, -6.84]}
            />
            <mesh
            name="Stump011"
            castShadow
            receiveShadow
            geometry={nodes.Stump011.geometry}
            material={materials['Mat_tree.086']}
            position={[27.6, 0.22, -6.84]}
            />
            <mesh
            name="Stump010"
            castShadow
            receiveShadow
            geometry={nodes.Stump010.geometry}
            material={materials['Mat_tree.087']}
            position={[26.99, 0.22, -9.36]}
            />
            <mesh
            name="Stump009"
            castShadow
            receiveShadow
            geometry={nodes.Stump009.geometry}
            material={materials['Mat_tree.088']}
            position={[29.36, 0.22, -9.36]}
            />
            <mesh
            name="Stump008"
            castShadow
            receiveShadow
            geometry={nodes.Stump008.geometry}
            material={materials['Mat_tree.089']}
            position={[29.36, 0.22, -5.06]}
            />
            <mesh
            name="Stump029"
            castShadow
            receiveShadow
            geometry={nodes.Stump029.geometry}
            material={materials['Mat_tree.213']}
            position={[42.24, 0.22, -13.82]}
            />
            <mesh
            name="Stump030"
            castShadow
            receiveShadow
            geometry={nodes.Stump030.geometry}
            material={materials['Mat_tree.214']}
            position={[43.79, 0.22, -11.87]}
            />
            <mesh
            name="Stump031"
            castShadow
            receiveShadow
            geometry={nodes.Stump031.geometry}
            material={materials['Mat_tree.215']}
            position={[37.09, 0.22, -8.6]}
            />
            <mesh
            name="Stump033"
            castShadow
            receiveShadow
            geometry={nodes.Stump033.geometry}
            material={materials['Mat_tree.217']}
            position={[43.1, 0.22, -7.88]}
            />
            <mesh
            name="Stump034"
            castShadow
            receiveShadow
            geometry={nodes.Stump034.geometry}
            material={materials['Mat_tree.218']}
            position={[40.7, 0.22, -8.61]}
            />
            <mesh
            name="Stump035"
            castShadow
            receiveShadow
            geometry={nodes.Stump035.geometry}
            material={materials['Mat_tree.219']}
            position={[43.1, 0.22, -9.9]}
            />
            <mesh
            name="Stump036"
            castShadow
            receiveShadow
            geometry={nodes.Stump036.geometry}
            material={materials['Mat_tree.220']}
            position={[38.71, 0.22, -10.3]}
            />
            <mesh
            name="Stump037"
            castShadow
            receiveShadow
            geometry={nodes.Stump037.geometry}
            material={materials['Mat_tree.221']}
            position={[38.71, 0.22, -13.08]}
            />
            <mesh
            name="Stump038"
            castShadow
            receiveShadow
            geometry={nodes.Stump038.geometry}
            material={materials['Mat_tree.222']}
            position={[36.06, 0.22, -10.55]}
            />
            <mesh
            name="Stump039"
            castShadow
            receiveShadow
            geometry={nodes.Stump039.geometry}
            material={materials['Mat_tree.223']}
            position={[34.2, 0.22, -10.22]}
            />
            <mesh
            name="Stump040"
            castShadow
            receiveShadow
            geometry={nodes.Stump040.geometry}
            material={materials['Mat_tree.224']}
            position={[41.07, 0.22, -11.15]}
            />
            <mesh
            name="Stump041"
            castShadow
            receiveShadow
            geometry={nodes.Stump041.geometry}
            material={materials['Mat_tree.225']}
            position={[34.36, 0.22, -6.65]}
            />
            <mesh
            name="Stump042"
            castShadow
            receiveShadow
            geometry={nodes.Stump042.geometry}
            material={materials['Mat_tree.226']}
            position={[42.16, 0.22, -3.72]}
            />
            <mesh
            name="Stump043"
            castShadow
            receiveShadow
            geometry={nodes.Stump043.geometry}
            material={materials['Mat_tree.227']}
            position={[36.79, 0.22, -5.92]}
            />
            <mesh
            name="Stump044"
            castShadow
            receiveShadow
            geometry={nodes.Stump044.geometry}
            material={materials['Mat_tree.228']}
            position={[39.46, 0.22, -8.44]}
            />
            <mesh
            name="Stump045"
            castShadow
            receiveShadow
            geometry={nodes.Stump045.geometry}
            material={materials['Mat_tree.229']}
            position={[36.56, 0.22, -3.72]}
            />
            <mesh
            name="Stump046"
            castShadow
            receiveShadow
            geometry={nodes.Stump046.geometry}
            material={materials['Mat_tree.230']}
            position={[39.47, 0.22, -3.72]}
            />
            <mesh
            name="Stump047"
            castShadow
            receiveShadow
            geometry={nodes.Stump047.geometry}
            material={materials['Mat_tree.231']}
            position={[38.86, 0.22, -6.24]}
            />
            <mesh
            name="Stump048"
            castShadow
            receiveShadow
            geometry={nodes.Stump048.geometry}
            material={materials['Mat_tree.232']}
            position={[41.24, 0.22, -6.24]}
            />
            <mesh
            name="Stump049"
            castShadow
            receiveShadow
            geometry={nodes.Stump049.geometry}
            material={materials['Mat_tree.233']}
            position={[41.24, 0.22, -1.94]}
            />
            <mesh
            name="Ground008"
            castShadow
            receiveShadow
            geometry={nodes.Ground008.geometry}
            material={materials['Mat_tree.234']}
            position={[-11.5, 0.19, 70.28]}
            rotation={[0, -1.56, 0]}
            scale={[1.01, 1.57, 18.58]}
            />
            <mesh
            name="Tree106"
            castShadow
            receiveShadow
            geometry={nodes.Tree106.geometry}
            material={materials['Mat_tree.241']}
            position={[-14.64, 0.22, 57.74]}
            />
            <mesh
            name="Tree107"
            castShadow
            receiveShadow
            geometry={nodes.Tree107.geometry}
            material={materials['Mat_tree.242']}
            position={[-14.64, 0.22, 53.67]}
            />
            <mesh
            name="Tree108"
            castShadow
            receiveShadow
            geometry={nodes.Tree108.geometry}
            material={materials['Mat_tree.243']}
            position={[-23.56, 0.22, 53.67]}
            />
            <mesh
            name="Tree109"
            castShadow
            receiveShadow
            geometry={nodes.Tree109.geometry}
            material={materials['Mat_tree.244']}
            position={[-30.28, 0.22, 49.09]}
            />
            <mesh
            name="Tree110"
            castShadow
            receiveShadow
            geometry={nodes.Tree110.geometry}
            material={materials['Mat_tree.245']}
            position={[-33.8, 0.22, 41.65]}
            />
            <mesh
            name="Tree111"
            castShadow
            receiveShadow
            geometry={nodes.Tree111.geometry}
            material={materials['Mat_tree.246']}
            position={[-38.05, 0.22, 37.31]}
            />
            <mesh
            name="Tree113"
            castShadow
            receiveShadow
            geometry={nodes.Tree113.geometry}
            material={materials['Mat_tree.248']}
            position={[32.45, 0.22, 28.77]}
            />
            <mesh
            name="Tree114"
            castShadow
            receiveShadow
            geometry={nodes.Tree114.geometry}
            material={materials['Mat_tree.249']}
            position={[32.45, 0.22, 36.3]}
            />
            <mesh
            name="Tree115"
            castShadow
            receiveShadow
            geometry={nodes.Tree115.geometry}
            material={materials['Mat_tree.250']}
            position={[32.45, 0.22, 44.29]}
            />
            <mesh
            name="Tree116"
            castShadow
            receiveShadow
            geometry={nodes.Tree116.geometry}
            material={materials['Mat_tree.251']}
            position={[27.16, 0.22, 42.31]}
            />
            <mesh
            name="Tree117"
            castShadow
            receiveShadow
            geometry={nodes.Tree117.geometry}
            material={materials['Mat_tree.252']}
            position={[20.53, 0.22, 48.98]}
            />
            <mesh
            name="Tree118"
            castShadow
            receiveShadow
            geometry={nodes.Tree118.geometry}
            material={materials['Mat_tree.253']}
            position={[25.71, 0.22, 48.98]}
            />
            <mesh
            name="Tree119"
            castShadow
            receiveShadow
            geometry={nodes.Tree119.geometry}
            material={materials['Mat_tree.254']}
            position={[29.94, 0.22, 51.11]}
            />
            <mesh
            name="Tree120"
            castShadow
            receiveShadow
            geometry={nodes.Tree120.geometry}
            material={materials['Mat_tree.255']}
            position={[22.9, 0.22, 44.69]}
            />
            <mesh
            name="Tree121"
            castShadow
            receiveShadow
            geometry={nodes.Tree121.geometry}
            material={materials['Mat_tree.256']}
            position={[25.43, 0.22, 54.72]}
            />
            <mesh
            name="Tree122"
            castShadow
            receiveShadow
            geometry={nodes.Tree122.geometry}
            material={materials['Mat_tree.257']}
            position={[37.83, 0.22, 48.98]}
            />
            <mesh
            name="Tree123"
            castShadow
            receiveShadow
            geometry={nodes.Tree123.geometry}
            material={materials['Mat_tree.258']}
            position={[34.49, 0.22, 55.16]}
            />
            <mesh
            name="Tree124"
            castShadow
            receiveShadow
            geometry={nodes.Tree124.geometry}
            material={materials['Mat_tree.259']}
            position={[37.63, 0.22, 41.01]}
            />
            <mesh
            name="Tree103"
            castShadow
            receiveShadow
            geometry={nodes.Tree103.geometry}
            material={materials['Mat_tree.260']}
            position={[15.26, 0.22, 51.68]}
            />
            <mesh
            name="Tree104"
            castShadow
            receiveShadow
            geometry={nodes.Tree104.geometry}
            material={materials['Mat_tree.261']}
            position={[17.87, 0.22, 57.51]}
            />
            <mesh
            name="Tree125"
            castShadow
            receiveShadow
            geometry={nodes.Tree125.geometry}
            material={materials['Mat_tree.262']}
            position={[6.95, 0.22, 51.68]}
            />
            <mesh
            name="Tree102"
            castShadow
            receiveShadow
            geometry={nodes.Tree102.geometry}
            material={materials['Mat_tree.263']}
            position={[-2.05, 0.22, 51.97]}
            />
            <mesh
            name="Tree101"
            castShadow
            receiveShadow
            geometry={nodes.Tree101.geometry}
            material={materials['Mat_tree.264']}
            position={[-5.18, 0.22, 57.69]}
            />
            <mesh
            name="Tree105"
            castShadow
            receiveShadow
            geometry={nodes.Tree105.geometry}
            material={materials['Mat_tree.265']}
            position={[3.94, 0.22, 58.17]}
            />
            <mesh
            name="Tree100"
            castShadow
            receiveShadow
            geometry={nodes.Tree100.geometry}
            material={materials['Mat_tree.266']}
            position={[9.09, 0.22, 45.82]}
            />
            <mesh
            name="Tree112"
            castShadow
            receiveShadow
            geometry={nodes.Tree112.geometry}
            material={materials['Mat_tree.267']}
            position={[6.57, 0.22, 40.47]}
            />
            <mesh
            name="Tree098"
            castShadow
            receiveShadow
            geometry={nodes.Tree098.geometry}
            material={materials['Mat_tree.268']}
            position={[16.21, 0.22, 43.32]}
            />
            <mesh
            name="Tree097"
            castShadow
            receiveShadow
            geometry={nodes.Tree097.geometry}
            material={materials['Mat_tree.269']}
            position={[20.3, 0.22, 38.92]}
            />
            <mesh
            name="Tree096"
            castShadow
            receiveShadow
            geometry={nodes.Tree096.geometry}
            material={materials['Mat_tree.270']}
            position={[14.16, 0.22, 33.18]}
            />
            <mesh
            name="Tree095"
            castShadow
            receiveShadow
            geometry={nodes.Tree095.geometry}
            material={materials['Mat_tree.271']}
            position={[8.3, 0.22, 34.31]}
            />
            <mesh
            name="Tree054"
            castShadow
            receiveShadow
            geometry={nodes.Tree054.geometry}
            material={materials['Mat_tree.272']}
            position={[9.1, 0.22, 27.66]}
            />
            <mesh
            name="Tree056"
            castShadow
            receiveShadow
            geometry={nodes.Tree056.geometry}
            material={materials['Mat_tree.273']}
            position={[13.71, 0.22, 23.27]}
            />
            <mesh
            name="Tree057"
            castShadow
            receiveShadow
            geometry={nodes.Tree057.geometry}
            material={materials['Mat_tree.274']}
            position={[19.85, 0.22, 19.44]}
            />
            <mesh
            name="Tree058"
            castShadow
            receiveShadow
            geometry={nodes.Tree058.geometry}
            material={materials['Mat_tree.275']}
            position={[19.98, 0.22, 27.11]}
            />
            <mesh
            name="Tree051"
            castShadow
            receiveShadow
            geometry={nodes.Tree051.geometry}
            material={materials['Mat_tree.276']}
            position={[16.58, 0.22, -23.01]}
            />
            <mesh
            name="Tree047"
            castShadow
            receiveShadow
            geometry={nodes.Tree047.geometry}
            material={materials['Mat_tree.277']}
            position={[11.57, 0.22, -25.86]}
            />
            <mesh
            name="Tree048"
            castShadow
            receiveShadow
            geometry={nodes.Tree048.geometry}
            material={materials['Mat_tree.278']}
            position={[7.78, 0.22, -15]}
            />
            <mesh
            name="Tree049"
            castShadow
            receiveShadow
            geometry={nodes.Tree049.geometry}
            material={materials['Mat_tree.279']}
            position={[0.61, 0.22, -23.01]}
            />
            <mesh
            name="Tree017"
            castShadow
            receiveShadow
            geometry={nodes.Tree017.geometry}
            material={materials['Mat_tree.280']}
            position={[0.61, 0.22, -27.33]}
            />
            <mesh
            name="Tree018"
            castShadow
            receiveShadow
            geometry={nodes.Tree018.geometry}
            material={materials['Mat_tree.281']}
            position={[-5.36, 0.22, -29.01]}
            />
            <mesh
            name="Tree021"
            castShadow
            receiveShadow
            geometry={nodes.Tree021.geometry}
            material={materials['Mat_tree.282']}
            position={[-6.2, 0.22, -22.91]}
            />
            <mesh
            name="Tree016"
            castShadow
            receiveShadow
            geometry={nodes.Tree016.geometry}
            material={materials['Mat_tree.283']}
            position={[-6.2, 0.22, -16.83]}
            />
            <mesh
            name="Tree004"
            castShadow
            receiveShadow
            geometry={nodes.Tree004.geometry}
            material={materials['Mat_tree.284']}
            position={[-0.55, 0.22, -17.22]}
            />
            <mesh
            name="Tree009"
            castShadow
            receiveShadow
            geometry={nodes.Tree009.geometry}
            material={materials['Mat_tree.285']}
            position={[-2.5, 0.22, -10.72]}
            />
            <mesh
            name="Tree008"
            castShadow
            receiveShadow
            geometry={nodes.Tree008.geometry}
            material={materials['Mat_tree.286']}
            position={[-4.18, 0.22, -5.84]}
            />
            <mesh
            name="Tree002"
            castShadow
            receiveShadow
            geometry={nodes.Tree002.geometry}
            material={materials['Mat_tree.287']}
            position={[-8.95, 0.22, -2.65]}
            />
            <mesh
            name="Tree031"
            castShadow
            receiveShadow
            geometry={nodes.Tree031.geometry}
            material={materials['Mat_tree.288']}
            position={[-10.36, 0.22, -7.86]}
            />
            <mesh
            name="Tree001"
            castShadow
            receiveShadow
            geometry={nodes.Tree001.geometry}
            material={materials['Mat_tree.289']}
            position={[-9.69, 0.22, -13.13]}
            />
            <mesh
            name="Tree003"
            castShadow
            receiveShadow
            geometry={nodes.Tree003.geometry}
            material={materials['Mat_tree.290']}
            position={[-11.17, 0.22, -22.32]}
            />
            <mesh
            name="Tree010"
            castShadow
            receiveShadow
            geometry={nodes.Tree010.geometry}
            material={materials['Mat_tree.291']}
            position={[-11.7, 0.22, -29.14]}
            />
            <mesh
            name="Tree019"
            castShadow
            receiveShadow
            geometry={nodes.Tree019.geometry}
            material={materials['Mat_tree.292']}
            position={[-14.66, 0.22, -35.68]}
            />
            <mesh
            name="Tree026"
            castShadow
            receiveShadow
            geometry={nodes.Tree026.geometry}
            material={materials['Mat_tree.293']}
            position={[-17.62, 0.22, -30.9]}
            />
            <mesh
            name="Tree020"
            castShadow
            receiveShadow
            geometry={nodes.Tree020.geometry}
            material={materials['Mat_tree.294']}
            position={[-14.77, 0.22, -19.8]}
            />
            <mesh
            name="Tree032"
            castShadow
            receiveShadow
            geometry={nodes.Tree032.geometry}
            material={materials['Mat_tree.295']}
            position={[-18.5, 0.22, -24.92]}
            />
            <mesh
            name="Tree033"
            castShadow
            receiveShadow
            geometry={nodes.Tree033.geometry}
            material={materials['Mat_tree.296']}
            position={[-25.71, 0.22, -28.63]}
            />
            <mesh
            name="Tree038"
            castShadow
            receiveShadow
            geometry={nodes.Tree038.geometry}
            material={materials['Mat_tree.297']}
            position={[-23.62, 0.22, -33.04]}
            />
            <mesh
            name="Tree043"
            castShadow
            receiveShadow
            geometry={nodes.Tree043.geometry}
            material={materials['Mat_tree.298']}
            position={[-29.17, 0.22, -25.99]}
            />
            <mesh
            name="Tree029"
            castShadow
            receiveShadow
            geometry={nodes.Tree029.geometry}
            material={materials['Mat_tree.299']}
            position={[-30.04, 0.22, -20.78]}
            />
            <mesh
            name="Tree037"
            castShadow
            receiveShadow
            geometry={nodes.Tree037.geometry}
            material={materials['Mat_tree.300']}
            position={[-31.66, 0.22, -15.91]}
            />
            <mesh
            name="Tree036"
            castShadow
            receiveShadow
            geometry={nodes.Tree036.geometry}
            material={materials['Mat_tree.301']}
            position={[-29.77, 0.22, -9.43]}
            />
            <mesh
            name="Tree030"
            castShadow
            receiveShadow
            geometry={nodes.Tree030.geometry}
            material={materials['Mat_tree.302']}
            position={[-32.95, 0.22, -6.12]}
            />
            <mesh
            name="Tree035"
            castShadow
            receiveShadow
            geometry={nodes.Tree035.geometry}
            material={materials['Mat_tree.303']}
            position={[-22.47, 0.22, -10.28]}
            />
            <mesh
            name="Tree007"
            castShadow
            receiveShadow
            geometry={nodes.Tree007.geometry}
            material={materials['Mat_tree.304']}
            position={[-25.36, 0.22, -7.02]}
            />
            <mesh
            name="Tree041"
            castShadow
            receiveShadow
            geometry={nodes.Tree041.geometry}
            material={materials['Mat_tree.305']}
            position={[-23.53, 0.22, -0.71]}
            />
            <mesh
            name="Tree040"
            castShadow
            receiveShadow
            geometry={nodes.Tree040.geometry}
            material={materials['Mat_tree.306']}
            position={[-24.24, 0.22, -14.75]}
            />
            <mesh
            name="Tree042"
            castShadow
            receiveShadow
            geometry={nodes.Tree042.geometry}
            material={materials['Mat_tree.307']}
            position={[-23.29, 0.22, -20.32]}
            />
            <mesh
            name="Stone001"
            castShadow
            receiveShadow
            geometry={nodes.Stone001.geometry}
            material={materials['Mat_tree.001']}
            position={[19.26, 0.75, 24.69]}
            />
            <mesh
            name="Stone002"
            castShadow
            receiveShadow
            geometry={nodes.Stone002.geometry}
            material={materials['Mat_tree.001']}
            position={[21.45, 0.68, 24.69]}
            />
            <mesh
            name="Stone003"
            castShadow
            receiveShadow
            geometry={nodes.Stone003.geometry}
            material={materials['Mat_tree.001']}
            position={[15.79, 0.82, 24.69]}
            />
            <mesh
            name="Stone004"
            castShadow
            receiveShadow
            geometry={nodes.Stone004.geometry}
            material={materials['Mat_tree.001']}
            position={[10.54, 0.22, 24.76]}
            />
            <mesh
            name="Stone005"
            castShadow
            receiveShadow
            geometry={nodes.Stone005.geometry}
            material={materials['Mat_tree.001']}
            position={[5.15, 0.22, 24.76]}
            />
            <mesh
            name="Stone006"
            castShadow
            receiveShadow
            geometry={nodes.Stone006.geometry}
            material={materials['Mat_tree.001']}
            position={[22.99, 0.19, 21.5]}
            />
            <mesh
            name="Stone007"
            castShadow
            receiveShadow
            geometry={nodes.Stone007.geometry}
            material={materials['Mat_tree.001']}
            position={[19.28, 0.19, 21.57]}
            />
            <mesh
            name="Stone008"
            castShadow
            receiveShadow
            geometry={nodes.Stone008.geometry}
            material={materials['Mat_tree.001']}
            position={[21.38, 0.21, 21.49]}
            />
            <mesh
            name="Stone009"
            castShadow
            receiveShadow
            geometry={nodes.Stone009.geometry}
            material={materials['Mat_tree.001']}
            position={[15.83, 0.24, 21.51]}
            />
            <mesh
            name="Stone010"
            castShadow
            receiveShadow
            geometry={nodes.Stone010.geometry}
            material={materials['Mat_tree.001']}
            position={[10.54, 0.22, 20.52]}
            />
            <mesh
            name="Stone011"
            castShadow
            receiveShadow
            geometry={nodes.Stone011.geometry}
            material={materials['Mat_tree.001']}
            position={[-17.77, 0.22, -11.66]}
            />
            <mesh
            name="Stone012"
            castShadow
            receiveShadow
            geometry={nodes.Stone012.geometry}
            material={materials['Mat_tree.001']}
            position={[26.72, 0.17, -4.46]}
            />
            <mesh
            name="Stone013"
            castShadow
            receiveShadow
            geometry={nodes.Stone013.geometry}
            material={materials['Mat_tree.001']}
            position={[9.75, 0.17, -1.27]}
            />
            <mesh
            name="Stone014"
            castShadow
            receiveShadow
            geometry={nodes.Stone014.geometry}
            material={materials['Mat_tree.001']}
            position={[24.85, 0.17, 24.6]}
            />
            <mesh
            name="Stone015"
            castShadow
            receiveShadow
            geometry={nodes.Stone015.geometry}
            material={materials['Mat_tree.001']}
            position={[24.85, 0.17, 21.47]}
            />
            <mesh
            name="Tree063"
            castShadow
            receiveShadow
            geometry={nodes.Tree063.geometry}
            material={materials['Mat_tree.204']}
            position={[-20.75, 0.22, 27.54]}
            />
            <mesh
            name="Tree064"
            castShadow
            receiveShadow
            geometry={nodes.Tree064.geometry}
            material={materials['Mat_tree.203']}
            position={[-21.67, 0.22, 35.38]}
            />
            <mesh
            name="Tree065"
            castShadow
            receiveShadow
            geometry={nodes.Tree065.geometry}
            material={materials['Mat_tree.202']}
            position={[-20.25, 0.22, 41.15]}
            />
            <mesh
            name="Tree066"
            castShadow
            receiveShadow
            geometry={nodes.Tree066.geometry}
            material={materials['Mat_tree.201']}
            position={[-25.56, 0.22, 42.99]}
            />
            <mesh
            name="Tree067"
            castShadow
            receiveShadow
            geometry={nodes.Tree067.geometry}
            material={materials['Mat_tree.200']}
            position={[-21.89, 0.22, 13.91]}
            />
            <mesh
            name="Tree068"
            castShadow
            receiveShadow
            geometry={nodes.Tree068.geometry}
            material={materials['Mat_tree.199']}
            position={[-26.24, 0.22, 21.34]}
            />
            <mesh
            name="Tree069"
            castShadow
            receiveShadow
            geometry={nodes.Tree069.geometry}
            material={materials['Mat_tree.198']}
            position={[-27.99, 0.22, 26.32]}
            />
            <mesh
            name="Tree070"
            castShadow
            receiveShadow
            geometry={nodes.Tree070.geometry}
            material={materials['Mat_tree.197']}
            position={[-29.41, 0.22, 36.28]}
            />
            <mesh
            name="Tree071"
            castShadow
            receiveShadow
            geometry={nodes.Tree071.geometry}
            material={materials['Mat_tree.196']}
            position={[-19.57, 0.22, 22.09]}
            />
            <mesh
            name="Tree072"
            castShadow
            receiveShadow
            geometry={nodes.Tree072.geometry}
            material={materials['Mat_tree.195']}
            position={[-15, 0.22, 17.47]}
            />
            <mesh
            name="Tree073"
            castShadow
            receiveShadow
            geometry={nodes.Tree073.geometry}
            material={materials['Mat_tree.194']}
            position={[-11.19, 0.22, 22.52]}
            />
            <mesh
            name="Tree074"
            castShadow
            receiveShadow
            geometry={nodes.Tree074.geometry}
            material={materials['Mat_tree.193']}
            position={[-5.4, 0.22, 39.57]}
            />
            <mesh
            name="Tree075"
            castShadow
            receiveShadow
            geometry={nodes.Tree075.geometry}
            material={materials['Mat_tree.192']}
            position={[-26.17, 0.22, 32.72]}
            />
            <mesh
            name="Tree076"
            castShadow
            receiveShadow
            geometry={nodes.Tree076.geometry}
            material={materials['Mat_tree.191']}
            position={[-25.44, 0.22, 16.41]}
            />
            <mesh
            name="Tree077"
            castShadow
            receiveShadow
            geometry={nodes.Tree077.geometry}
            material={materials['Mat_tree.190']}
            position={[-15, 0.22, 36.4]}
            />
            <mesh
            name="Tree094"
            castShadow
            receiveShadow
            geometry={nodes.Tree094.geometry}
            material={materials['Mat_tree.189']}
            position={[-6.54, 0.22, 34.58]}
            />
            <mesh
            name="Tree093"
            castShadow
            receiveShadow
            geometry={nodes.Tree093.geometry}
            material={materials['Mat_tree.188']}
            position={[-0.82, 0.22, 36.4]}
            />
            <mesh
            name="Tree092"
            castShadow
            receiveShadow
            geometry={nodes.Tree092.geometry}
            material={materials['Mat_tree.187']}
            position={[-6.25, 0.22, 28.9]}
            />
            <mesh
            name="Tree091"
            castShadow
            receiveShadow
            geometry={nodes.Tree091.geometry}
            material={materials['Mat_tree.186']}
            position={[-2.82, 0.22, 25.38]}
            />
            <mesh
            name="Tree090"
            castShadow
            receiveShadow
            geometry={nodes.Tree090.geometry}
            material={materials['Mat_tree.185']}
            position={[-10.5, 0.22, 39.1]}
            />
            <mesh
            name="Tree089"
            castShadow
            receiveShadow
            geometry={nodes.Tree089.geometry}
            material={materials['Mat_tree.184']}
            position={[-15.26, 0.22, 42.01]}
            />
            <mesh
            name="Tree088"
            castShadow
            receiveShadow
            geometry={nodes.Tree088.geometry}
            material={materials['Mat_tree.183']}
            position={[-18.75, 0.22, 32.18]}
            />
            <mesh
            name="Tree087"
            castShadow
            receiveShadow
            geometry={nodes.Tree087.geometry}
            material={materials['Mat_tree.182']}
            position={[1.2, 0.22, 31.66]}
            />
            <mesh
            name="Tree086"
            castShadow
            receiveShadow
            geometry={nodes.Tree086.geometry}
            material={materials['Mat_tree.181']}
            position={[3.03, 0.22, 25.06]}
            />
            <mesh
            name="Tree085"
            castShadow
            receiveShadow
            geometry={nodes.Tree085.geometry}
            material={materials['Mat_tree.180']}
            position={[-7.26, 0.22, 20.23]}
            />
            <mesh
            name="Tree084"
            castShadow
            receiveShadow
            geometry={nodes.Tree084.geometry}
            material={materials['Mat_tree.179']}
            position={[-2.55, 0.22, 19.29]}
            />
            <mesh
            name="Tree083"
            castShadow
            receiveShadow
            geometry={nodes.Tree083.geometry}
            material={materials['Mat_tree.178']}
            position={[4.04, 0.22, 19.29]}
            />
            <mesh
            name="Tree082"
            castShadow
            receiveShadow
            geometry={nodes.Tree082.geometry}
            material={materials['Mat_tree.177']}
            position={[4.04, 0.22, 14.77]}
            />
            <mesh
            name="Tree081"
            castShadow
            receiveShadow
            geometry={nodes.Tree081.geometry}
            material={materials['Mat_tree.176']}
            position={[-8.34, 0.22, 13.14]}
            />
            <mesh
            name="Tree080"
            castShadow
            receiveShadow
            geometry={nodes.Tree080.geometry}
            material={materials['Mat_tree.175']}
            position={[-14.09, 0.22, 11.38]}
            />
            <mesh
            name="Tree079"
            castShadow
            receiveShadow
            geometry={nodes.Tree079.geometry}
            material={materials['Mat_tree.174']}
            position={[-2.02, 0.22, 13.14]}
            />
            <mesh
            name="Tree078"
            castShadow
            receiveShadow
            geometry={nodes.Tree078.geometry}
            material={materials['Mat_tree.173']}
            position={[-11.09, 0.22, 6.67]}
            />
            <mesh
            name="Tree062"
            castShadow
            receiveShadow
            geometry={nodes.Tree062.geometry}
            material={materials['Mat_tree.172']}
            position={[-20.11, 0.22, 9.1]}
            />
            <mesh
            name="Ground007"
            castShadow
            receiveShadow
            geometry={nodes.Ground007.geometry}
            material={materials['Mat_tree.171']}
            position={[-37.12, 0.19, 26.9]}
            />
            <mesh
            name="Tree061"
            castShadow
            receiveShadow
            geometry={nodes.Tree061.geometry}
            material={materials['Mat_tree.170']}
            position={[-13.46, 0.22, 47.75]}
            />
            <mesh
            name="Tree060"
            castShadow
            receiveShadow
            geometry={nodes.Tree060.geometry}
            material={materials['Mat_tree.169']}
            position={[-19.36, 0.22, 47.99]}
            />
            <mesh
            name="Tree059"
            castShadow
            receiveShadow
            geometry={nodes.Tree059.geometry}
            material={materials['Mat_tree.168']}
            position={[-7.57, 0.22, 44.58]}
            />
            <mesh
            name="Flowers020"
            castShadow
            receiveShadow
            geometry={nodes.Flowers020.geometry}
            material={materials['Mat_tree.167']}
            position={[-2.31, 0.22, 41.44]}
            />
            <mesh
            name="Flowers019"
            castShadow
            receiveShadow
            geometry={nodes.Flowers019.geometry}
            material={materials['Mat_tree.166']}
            position={[0.41, 0.22, 44.95]}
            />
            <mesh
            name="Flowers018"
            castShadow
            receiveShadow
            geometry={nodes.Flowers018.geometry}
            material={materials['Mat_tree.165']}
            position={[-2.86, 0.22, 45.94]}
            />
            <mesh
            name="Flowers017"
            castShadow
            receiveShadow
            geometry={nodes.Flowers017.geometry}
            material={materials['Mat_tree.164']}
            position={[-3.33, 0.22, 43.47]}
            />
            <mesh
            name="Flowers016"
            castShadow
            receiveShadow
            geometry={nodes.Flowers016.geometry}
            material={materials['Mat_tree.163']}
            position={[-0.81, 0.22, 48.01]}
            />
            <mesh
            name="Flowers015"
            castShadow
            receiveShadow
            geometry={nodes.Flowers015.geometry}
            material={materials['Mat_tree.162']}
            position={[4.6, 0.22, 52.24]}
            />
            <mesh
            name="Flowers004"
            castShadow
            receiveShadow
            geometry={nodes.Flowers004.geometry}
            material={materials['Mat_tree.161']}
            position={[2.09, 0.22, 47.7]}
            />
            <mesh
            name="Flowers003"
            castShadow
            receiveShadow
            geometry={nodes.Flowers003.geometry}
            material={materials['Mat_tree.160']}
            position={[2.56, 0.22, 50.18]}
            />
            <mesh
            name="Flowers002"
            castShadow
            receiveShadow
            geometry={nodes.Flowers002.geometry}
            material={materials['Mat_tree.159']}
            position={[5.82, 0.22, 49.18]}
            />
            <mesh
            name="Flowers001"
            castShadow
            receiveShadow
            geometry={nodes.Flowers001.geometry}
            material={materials['Mat_tree.158']}
            position={[3.1, 0.22, 45.67]}
            />
            <mesh
            name="Tree055"
            castShadow
            receiveShadow
            geometry={nodes.Tree055.geometry}
            material={materials['Mat_tree.154']}
            position={[15.91, 0.22, 29.56]}
            />
            <mesh
            name="Tree053"
            castShadow
            receiveShadow
            geometry={nodes.Tree053.geometry}
            material={materials['Mat_tree.152']}
            position={[24.47, 0.22, 33.89]}
            />
            <mesh
            name="Tree039"
            castShadow
            receiveShadow
            geometry={nodes.Tree039.geometry}
            material={materials['Mat_tree.093']}
            position={[-29.06, 0.22, 0.71]}
            />
            <mesh
            name="Tree028"
            castShadow
            receiveShadow
            geometry={nodes.Tree028.geometry}
            material={materials['Mat_tree.104']}
            position={[-18.5, 0.22, -5.88]}
            />
            <mesh
            name="Tree005"
            castShadow
            receiveShadow
            geometry={nodes.Tree005.geometry}
            material={materials['Mat_tree.116']}
            position={[-14, 0.22, -3.18]}
            />
            <mesh
            name="Tree006"
            castShadow
            receiveShadow
            geometry={nodes.Tree006.geometry}
            material={materials['Mat_tree.117']}
            position={[-18.76, 0.22, -0.27]}
            />
            <mesh
            name="Ground006"
            castShadow
            receiveShadow
            geometry={nodes.Ground006.geometry}
            material={materials['Mat_tree.130']}
            position={[-40.62, 0.19, -15.38]}
            />
            <mesh
            name="Tree044"
            castShadow
            receiveShadow
            geometry={nodes.Tree044.geometry}
            material={materials['Mat_tree.131']}
            position={[-16.97, 0.22, 5.46]}
            />
            <mesh
            name="Tree045"
            castShadow
            receiveShadow
            geometry={nodes.Tree045.geometry}
            material={materials['Mat_tree.132']}
            position={[-22.86, 0.22, 5.71]}
            />
            <mesh
            name="Tree046"
            castShadow
            receiveShadow
            geometry={nodes.Tree046.geometry}
            material={materials['Mat_tree.133']}
            position={[-11.08, 0.22, 2.3]}
            />
            <mesh
            name="Flowers005"
            castShadow
            receiveShadow
            geometry={nodes.Flowers005.geometry}
            material={materials['Mat_tree.134']}
            position={[-5.81, 0.22, -0.85]}
            />
            <mesh
            name="Flowers006"
            castShadow
            receiveShadow
            geometry={nodes.Flowers006.geometry}
            material={materials['Mat_tree.135']}
            position={[-3.09, 0.22, 2.67]}
            />
            <mesh
            name="Flowers007"
            castShadow
            receiveShadow
            geometry={nodes.Flowers007.geometry}
            material={materials['Mat_tree.136']}
            position={[-6.36, 0.22, 3.66]}
            />
            <mesh
            name="Flowers008"
            castShadow
            receiveShadow
            geometry={nodes.Flowers008.geometry}
            material={materials['Mat_tree.137']}
            position={[-6.83, 0.22, 1.19]}
            />
            <mesh
            name="Flowers009"
            castShadow
            receiveShadow
            geometry={nodes.Flowers009.geometry}
            material={materials['Mat_tree.138']}
            position={[-4.31, 0.22, 5.73]}
            />
            <mesh
            name="Flowers010"
            castShadow
            receiveShadow
            geometry={nodes.Flowers010.geometry}
            material={materials['Mat_tree.139']}
            position={[1.1, 0.22, 9.96]}
            />
            <mesh
            name="Flowers011"
            castShadow
            receiveShadow
            geometry={nodes.Flowers011.geometry}
            material={materials['Mat_tree.140']}
            position={[-1.42, 0.22, 5.42]}
            />
            <mesh
            name="Flowers012"
            castShadow
            receiveShadow
            geometry={nodes.Flowers012.geometry}
            material={materials['Mat_tree.141']}
            position={[-0.94, 0.22, 7.9]}
            />
            <mesh
            name="Flowers013"
            castShadow
            receiveShadow
            geometry={nodes.Flowers013.geometry}
            material={materials['Mat_tree.142']}
            position={[2.32, 0.22, 6.9]}
            />
            <mesh
            name="Flowers014"
            castShadow
            receiveShadow
            geometry={nodes.Flowers014.geometry}
            material={materials['Mat_tree.143']}
            position={[-0.4, 0.22, 3.39]}
            />
            <mesh
            name="Tree050"
            castShadow
            receiveShadow
            geometry={nodes.Tree050.geometry}
            material={materials['Mat_tree.147']}
            position={[12.41, 0.22, -12.72]}
            />
            <mesh
            name="Tree052"
            castShadow
            receiveShadow
            geometry={nodes.Tree052.geometry}
            material={materials['Mat_tree.149']}
            position={[20.97, 0.22, -8.4]}
            />
            <mesh
            name="Stone016"
            castShadow
            receiveShadow
            geometry={nodes.Stone016.geometry}
            material={materials['Mat_tree.205']}
            position={[-17.77, 0.22, -11.66]}
            />
            <mesh
            name="Tree099"
            castShadow
            receiveShadow
            geometry={nodes.Tree099.geometry}
            material={materials['Mat_tree.212']}
            position={[31.86, 0.22, 6.04]}
            />
            <mesh
            name="Tree027"
            castShadow
            receiveShadow
            geometry={nodes.Tree027.geometry}
            material={materials['Mat_tree.110']}
            position={[27.91, 0.22, 16.59]}
            />
            <mesh
            name="Tree025"
            castShadow
            receiveShadow
            geometry={nodes.Tree025.geometry}
            material={materials['Mat_tree.111']}
            position={[3.7, 0.14, 4.8]}
            />
            <mesh
            name="Tree024"
            castShadow
            receiveShadow
            geometry={nodes.Tree024.geometry}
            material={materials['Mat_tree.111']}
            position={[27.77, 0.22, 9.81]}
            />
            <mesh
            name="Tree023"
            castShadow
            receiveShadow
            geometry={nodes.Tree023.geometry}
            material={materials['Mat_tree.111']}
            position={[28.89, 0.22, 22.3]}
            />
            <mesh
            name="Tree022"
            castShadow
            receiveShadow
            geometry={nodes.Tree022.geometry}
            material={materials['Mat_tree.111']}
            position={[32.45, 0.22, 12.91]}
            />
            <mesh
            name="Tree015"
            castShadow
            receiveShadow
            geometry={nodes.Tree015.geometry}
            material={materials['Mat_tree.105']}
            position={[9.47, 0.22, -20.82]}
            />
            <mesh
            name="Tree014"
            castShadow
            receiveShadow
            geometry={nodes.Tree014.geometry}
            material={materials['Mat_tree.106']}
            position={[35.39, 0.22, 10.27]}
            />
            <mesh
            name="Tree013"
            castShadow
            receiveShadow
            geometry={nodes.Tree013.geometry}
            material={materials['Mat_tree.107']}
            position={[31.66, 0.22, -0.1]}
            />
            <mesh
            name="Tree012"
            castShadow
            receiveShadow
            geometry={nodes.Tree012.geometry}
            material={materials['Mat_tree.108']}
            position={[26.11, 0.22, 3.75]}
            />
            <mesh
            name="Tree011"
            castShadow
            receiveShadow
            geometry={nodes.Tree011.geometry}
            material={materials['Mat_tree.109']}
            position={[34.41, 0.22, 19.62]}
            />
            <mesh
            name="Stump007"
            castShadow
            receiveShadow
            geometry={nodes.Stump007.geometry}
            material={materials['Mat_tree.111']}
            position={[20.4, 0.22, 7.53]}
            />
            <mesh
            name="Stump006"
            castShadow
            receiveShadow
            geometry={nodes.Stump006.geometry}
            material={materials['Mat_tree.111']}
            position={[16.82, 0.22, 7.53]}
            />
            <mesh
            name="Stump005"
            castShadow
            receiveShadow
            geometry={nodes.Stump005.geometry}
            material={materials['Mat_tree.111']}
            position={[18.39, 0.22, 7.53]}
            />
            <mesh
            name="Stump004"
            castShadow
            receiveShadow
            geometry={nodes.Stump004.geometry}
            material={materials['Mat_tree.111']}
            position={[19.42, 0.22, 7.53]}
            />
            <mesh
            name="Stump003"
            castShadow
            receiveShadow
            geometry={nodes.Stump003.geometry}
            material={materials['Mat_tree.111']}
            position={[20.46, 0.24, 4.99]}
            />
            <mesh
            name="Stump002"
            castShadow
            receiveShadow
            geometry={nodes.Stump002.geometry}
            material={materials['Mat_tree.111']}
            position={[17.39, 0.24, 4.99]}
            />
            <mesh
            name="Stump001"
            castShadow
            receiveShadow
            geometry={nodes.Stump001.geometry}
            material={materials['Mat_tree.111']}
            position={[18.58, 0.24, 4.99]}
            />
            <mesh
            name="Stump"
            castShadow
            receiveShadow
            geometry={nodes.Stump.geometry}
            material={materials['Mat_tree.111']}
            position={[19.58, 0.22, 4.99]}
            />
            </group>
            </group>
        </RigidBody>
    </group>
  );
}

export default MapLvL2;

useGLTF.preload('/models-3d/lvl2.glb');
