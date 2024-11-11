import React from 'react';
import { useGLTF } from "@react-three/drei";

const InitialMap = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/initialMap.glb');
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Grass004"
          geometry={nodes.Grass004.geometry}
          material={materials.Mat_tree}
          position={[18.579, 0.223, -15.054]}
        />
        <mesh
          name="Grass006"
          geometry={nodes.Grass006.geometry}
          material={materials['Mat_tree.001']}
          position={[15.455, 0.223, -15.054]}
        />
        <mesh
          name="Grass008"
          geometry={nodes.Grass008.geometry}
          material={materials['Mat_tree.001']}
          position={[19.93, 0.317, -15.054]}
        />
        <mesh
          name="Grass007"
          geometry={nodes.Grass007.geometry}
          material={materials['Mat_tree.001']}
          position={[17.235, 0.223, -15.054]}
        />
        <mesh
          name="Grass"
          geometry={nodes.Grass.geometry}
          material={materials.Mat_tree}
          position={[13.828, 0.223, -15.054]}
        />
        <mesh
          name="Grass009"
          geometry={nodes.Grass009.geometry}
          material={materials['Mat_tree.001']}
          position={[19.735, 0.223, -13.837]}
        />
        <mesh
          name="Grass010"
          geometry={nodes.Grass010.geometry}
          material={materials['Mat_tree.001']}
          position={[19.735, 0.223, -12.603]}
        />
        <mesh
          name="Grass011"
          geometry={nodes.Grass011.geometry}
          material={materials['Mat_tree.001']}
          position={[19.735, 0.223, -11.212]}
        />
        <mesh
          name="Grass012"
          geometry={nodes.Grass012.geometry}
          material={materials['Mat_tree.001']}
          position={[12.658, 0.223, -15.054]}
        />
        <mesh
          name="Stone"
          geometry={nodes.Stone.geometry}
          material={materials['Mat_tree.001']}
          position={[23.013, 0.501, 24.578]}
        />
        <mesh
          name="Stone001"
          geometry={nodes.Stone001.geometry}
          material={materials['Mat_tree.001']}
          position={[19.259, 0.745, 24.692]}
        />
        <mesh
          name="Stone002"
          geometry={nodes.Stone002.geometry}
          material={materials['Mat_tree.001']}
          position={[21.454, 0.685, 24.692]}
        />
        <mesh
          name="Stone003"
          geometry={nodes.Stone003.geometry}
          material={materials['Mat_tree.001']}
          position={[15.787, 0.818, 24.692]}
        />
        <mesh
          name="Stump"
          geometry={nodes.Stump.geometry}
          material={materials['Mat_tree.001']}
          position={[19.584, 0.22, 4.991]}
        />
        <mesh
          name="Stump001"
          geometry={nodes.Stump001.geometry}
          material={materials['Mat_tree.001']}
          position={[18.579, 0.235, 4.991]}
        />
        <mesh
          name="Stump002"
          geometry={nodes.Stump002.geometry}
          material={materials['Mat_tree.001']}
          position={[17.386, 0.235, 4.991]}
        />
        <mesh
          name="Stump003"
          geometry={nodes.Stump003.geometry}
          material={materials['Mat_tree.001']}
          position={[20.46, 0.235, 4.991]}
        />
        <mesh
          name="Stump004"
          geometry={nodes.Stump004.geometry}
          material={materials['Mat_tree.001']}
          position={[19.418, 0.223, 7.525]}
        />
        <mesh
          name="Stump005"
          geometry={nodes.Stump005.geometry}
          material={materials['Mat_tree.001']}
          position={[18.394, 0.223, 7.525]}
        />
        <mesh
          name="Stump006"
          geometry={nodes.Stump006.geometry}
          material={materials['Mat_tree.001']}
          position={[16.818, 0.223, 7.525]}
        />
        <mesh
          name="Stump007"
          geometry={nodes.Stump007.geometry}
          material={materials['Mat_tree.001']}
          position={[20.402, 0.223, 7.525]}
        />
        <mesh
          name="Stone004"
          geometry={nodes.Stone004.geometry}
          material={materials['Mat_tree.001']}
          position={[10.535, 0.223, 24.76]}
        />
        <mesh
          name="Stone005"
          geometry={nodes.Stone005.geometry}
          material={materials['Mat_tree.001']}
          position={[5.149, 0.223, 24.76]}
        />
        <mesh
          name="Stone006"
          geometry={nodes.Stone006.geometry}
          material={materials['Mat_tree.001']}
          position={[22.988, 0.186, 21.496]}
        />
        <mesh
          name="Stone007"
          geometry={nodes.Stone007.geometry}
          material={materials['Mat_tree.001']}
          position={[19.283, 0.194, 21.572]}
        />
        <mesh
          name="Stone008"
          geometry={nodes.Stone008.geometry}
          material={materials['Mat_tree.001']}
          position={[21.384, 0.21, 21.492]}
        />
        <mesh
          name="Stone009"
          geometry={nodes.Stone009.geometry}
          material={materials['Mat_tree.001']}
          position={[15.826, 0.245, 21.509]}
        />
        <mesh
          name="Stone010"
          geometry={nodes.Stone010.geometry}
          material={materials['Mat_tree.001']}
          position={[10.535, 0.223, 20.523]}
        />
        <mesh
          name="Stone011"
          geometry={nodes.Stone011.geometry}
          material={materials['Mat_tree.001']}
          position={[5.109, 0.223, 19.346]}
        />
        <mesh
          name="Stone012"
          geometry={nodes.Stone012.geometry}
          material={materials['Mat_tree.001']}
          position={[26.72, 0.17, 24.604]}
        />
        <mesh
          name="Stone013"
          geometry={nodes.Stone013.geometry}
          material={materials['Mat_tree.001']}
          position={[26.656, 0.17, 21.531]}
        />
        <mesh
          name="Stump008"
          geometry={nodes.Stump008.geometry}
          material={materials['Mat_tree.001']}
          position={[-6.531, 0.223, -11.589]}
        />
        <mesh
          name="Stone014"
          geometry={nodes.Stone014.geometry}
          material={materials['Mat_tree.001']}
          position={[24.848, 0.17, 24.604]}
        />
        <mesh
          name="Stone015"
          geometry={nodes.Stone015.geometry}
          material={materials['Mat_tree.001']}
          position={[24.848, 0.17, 21.473]}
        />
        <mesh
          name="Ground001"
          geometry={nodes.Ground001.geometry}
          material={materials['Mat_tree.001']}
          position={[-1.888, 0.195, 11.943]}
        />
        <mesh
          name="Ground004"
          geometry={nodes.Ground004.geometry}
          material={materials['Mat_tree.001']}
          position={[-11.077, 0.195, 10.615]}
        />
        <mesh
          name="Ground"
          geometry={nodes.Ground.geometry}
          material={materials['Mat_tree.001']}
          position={[-24.535, 0.195, 11.808]}
        />
        <mesh
          name="Flowers023"
          geometry={nodes.Flowers023.geometry}
          material={materials.Mat_tree}
          position={[10.61, 0.223, 0.249]}
        />
        <mesh
          name="Tree022"
          geometry={nodes.Tree022.geometry}
          material={materials['Mat_tree.001']}
          position={[-0.507, 0.223, -12.058]}
        />
        <mesh
          name="Tree023"
          geometry={nodes.Tree023.geometry}
          material={materials['Mat_tree.001']}
          position={[8.94, 0.223, -15.747]}
        />
        <mesh
          name="Tree024"
          geometry={nodes.Tree024.geometry}
          material={materials['Mat_tree.001']}
          position={[10.513, 0.223, -5.791]}
        />
        <mesh
          name="Tree025"
          geometry={nodes.Tree025.geometry}
          material={materials['Mat_tree.001']}
          position={[3.703, 0.14, 4.802]}
        />
        <mesh
          name="Tree026"
          geometry={nodes.Tree026.geometry}
          material={materials['Mat_tree.001']}
          position={[7.152, 0.223, -5.948]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials['Mat_tree.001']}
          position={[0, 0.222, -2.94]}
          scale={28.088}
        />
        <mesh
          name="Ground006"
          geometry={nodes.Ground006.geometry}
          material={materials['Mat_tree.002']}
          position={[-24.535, 0.195, 6.812]}
        />
        <mesh
          name="Ground007"
          geometry={nodes.Ground007.geometry}
          material={materials['Mat_tree.003']}
          position={[-24.535, 0.195, 2.17]}
        />
        <mesh
          name="Ground008"
          geometry={nodes.Ground008.geometry}
          material={materials['Mat_tree.004']}
          position={[-24.535, 0.195, -12.278]}
        />
        <mesh
          name="Ground009"
          geometry={nodes.Ground009.geometry}
          material={materials['Mat_tree.005']}
          position={[-24.535, 0.195, -7.637]}
        />
        <mesh
          name="Ground010"
          geometry={nodes.Ground010.geometry}
          material={materials['Mat_tree.006']}
          position={[-24.535, 0.195, -2.641]}
        />
        <mesh
          name="Ground011"
          geometry={nodes.Ground011.geometry}
          material={materials['Mat_tree.007']}
          position={[-24.535, 0.195, -15.267]}
        />
        <mesh
          name="Ground012"
          geometry={nodes.Ground012.geometry}
          material={materials['Mat_tree.008']}
          position={[-24.535, 0.195, -20.263]}
        />
        <mesh
          name="Ground013"
          geometry={nodes.Ground013.geometry}
          material={materials['Mat_tree.009']}
          position={[-24.535, 0.195, -24.905]}
        />
        <mesh
          name="Ground016"
          geometry={nodes.Ground016.geometry}
          material={materials['Mat_tree.012']}
          position={[-23.351, 0.417, 17.114]}
        />
        <mesh
          name="Ground017"
          geometry={nodes.Ground017.geometry}
          material={materials['Mat_tree.013']}
          position={[-5.645, 0.054, 21.989]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Ground018"
          geometry={nodes.Ground018.geometry}
          material={materials['Mat_tree.014']}
          position={[-0.649, 0.054, 22.016]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Ground019"
          geometry={nodes.Ground019.geometry}
          material={materials['Mat_tree.015']}
          position={[3.992, 0.054, 22.042]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Ground020"
          geometry={nodes.Ground020.geometry}
          material={materials['Mat_tree.016']}
          position={[-10.456, 0.054, 21.962]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Ground021"
          geometry={nodes.Ground021.geometry}
          material={materials['Mat_tree.017']}
          position={[-15.098, 0.054, 21.936]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Ground022"
          geometry={nodes.Ground022.geometry}
          material={materials['Mat_tree.018']}
          position={[-20.093, 0.054, 21.908]}
          rotation={[Math.PI, -1.565, Math.PI]}
        />
        <mesh
          name="Tree027"
          geometry={nodes.Tree027.geometry}
          material={materials['Mat_tree.019']}
          position={[5.873, 0.223, -8.769]}
        />
        <mesh
          name="Tree028"
          geometry={nodes.Tree028.geometry}
          material={materials['Mat_tree.020']}
          position={[24.61, 0.223, -5.876]}
        />
        <mesh
          name="Tree029"
          geometry={nodes.Tree029.geometry}
          material={materials['Mat_tree.021']}
          position={[24.918, 0.223, -13.219]}
        />
        <mesh
          name="Tree030"
          geometry={nodes.Tree030.geometry}
          material={materials['Mat_tree.022']}
          position={[24.61, 0.223, -9.556]}
        />
        <mesh
          name="Tree031"
          geometry={nodes.Tree031.geometry}
          material={materials['Mat_tree.023']}
          position={[24.61, 0.223, -16.733]}
        />
        <mesh
          name="Tree032"
          geometry={nodes.Tree032.geometry}
          material={materials['Mat_tree.024']}
          position={[23.573, 0.223, -19.758]}
        />
        <mesh
          name="Tree033"
          geometry={nodes.Tree033.geometry}
          material={materials['Mat_tree.025']}
          position={[24.61, 0.223, -23.47]}
        />
        <mesh
          name="Tree034"
          geometry={nodes.Tree034.geometry}
          material={materials['Mat_tree.026']}
          position={[20.039, 0.223, -20.187]}
        />
        <mesh
          name="Tree035"
          geometry={nodes.Tree035.geometry}
          material={materials['Mat_tree.027']}
          position={[13.878, 0.223, -10.836]}
        />
        <mesh
          name="Tree036"
          geometry={nodes.Tree036.geometry}
          material={materials['Mat_tree.028']}
          position={[14.374, 0.223, -15.956]}
        />
        <mesh
          name="Tree037"
          geometry={nodes.Tree037.geometry}
          material={materials['Mat_tree.029']}
          position={[13.878, 0.223, -19.849]}
        />
        <mesh
          name="Tree038"
          geometry={nodes.Tree038.geometry}
          material={materials['Mat_tree.030']}
          position={[17.717, 0.223, -23.635]}
        />
        <mesh
          name="Tree039"
          geometry={nodes.Tree039.geometry}
          material={materials['Mat_tree.031']}
          position={[13.878, 0.223, -6.697]}
        />
        <mesh
          name="Tree040"
          geometry={nodes.Tree040.geometry}
          material={materials['Mat_tree.032']}
          position={[18.528, 0.223, -6.697]}
        />
        <mesh
          name="Tree041"
          geometry={nodes.Tree041.geometry}
          material={materials['Mat_tree.033']}
          position={[20.773, 0.223, -10.386]}
        />
        <mesh
          name="Tree042"
          geometry={nodes.Tree042.geometry}
          material={materials['Mat_tree.034']}
          position={[18.856, 0.223, -14.739]}
        />
        <mesh
          name="Tree011"
          geometry={nodes.Tree011.geometry}
          material={materials['Mat_tree.035']}
          position={[2.879, 0.223, -12.722]}
        />
        <mesh
          name="Tree012"
          geometry={nodes.Tree012.geometry}
          material={materials['Mat_tree.036']}
          position={[4.675, 0.223, -15.545]}
        />
        <mesh
          name="Tree013"
          geometry={nodes.Tree013.geometry}
          material={materials['Mat_tree.037']}
          position={[-1.45, 0.223, -19.298]}
        />
        <mesh
          name="Tree014"
          geometry={nodes.Tree014.geometry}
          material={materials['Mat_tree.038']}
          position={[-1.45, 0.223, -15.847]}
        />
        <mesh
          name="Tree015"
          geometry={nodes.Tree015.geometry}
          material={materials['Mat_tree.039']}
          position={[6.982, 0.223, -20.821]}
        />
        <mesh
          name="Flowers041"
          geometry={nodes.Flowers041.geometry}
          material={materials['Mat_tree.042']}
          position={[11.913, 0.222, 3.663]}
        />
        <mesh
          name="Grass013"
          geometry={nodes.Grass013.geometry}
          material={materials['Mat_tree.045']}
          position={[18.579, 0.223, -16.828]}
        />
        <mesh
          name="Stump009"
          geometry={nodes.Stump009.geometry}
          material={materials['Mat_tree.047']}
          position={[-6.531, 0.223, -15.888]}
        />
        <mesh
          name="Stump010"
          geometry={nodes.Stump010.geometry}
          material={materials['Mat_tree.048']}
          position={[-8.907, 0.223, -15.888]}
        />
        <mesh
          name="Stump011"
          geometry={nodes.Stump011.geometry}
          material={materials['Mat_tree.049']}
          position={[-8.297, 0.223, -13.368]}
        />
        <mesh
          name="Stump012"
          geometry={nodes.Stump012.geometry}
          material={materials['Mat_tree.050']}
          position={[-11.208, 0.223, -13.368]}
        />
        <mesh
          name="Stump013"
          geometry={nodes.Stump013.geometry}
          material={materials['Mat_tree.051']}
          position={[-8.309, 0.223, -18.088]}
        />
        <mesh
          name="Stump014"
          geometry={nodes.Stump014.geometry}
          material={materials['Mat_tree.052']}
          position={[-10.98, 0.223, -15.566]}
        />
        <mesh
          name="Stump015"
          geometry={nodes.Stump015.geometry}
          material={materials['Mat_tree.053']}
          position={[-5.609, 0.223, -13.368]}
        />
        <mesh
          name="Stump016"
          geometry={nodes.Stump016.geometry}
          material={materials['Mat_tree.054']}
          position={[-13.409, 0.223, -16.295]}
        />
        <mesh
          name="Stump017"
          geometry={nodes.Stump017.geometry}
          material={materials['Mat_tree.055']}
          position={[-6.702, 0.223, -20.796]}
        />
        <mesh
          name="Stump018"
          geometry={nodes.Stump018.geometry}
          material={materials['Mat_tree.056']}
          position={[-13.563, 0.223, -19.868]}
        />
        <mesh
          name="Stump019"
          geometry={nodes.Stump019.geometry}
          material={materials['Mat_tree.057']}
          position={[-11.706, 0.223, -20.2]}
        />
        <mesh
          name="Stump020"
          geometry={nodes.Stump020.geometry}
          material={materials['Mat_tree.058']}
          position={[-9.056, 0.223, -22.732]}
        />
        <mesh
          name="Stump021"
          geometry={nodes.Stump021.geometry}
          material={materials['Mat_tree.059']}
          position={[-9.056, 0.223, -19.945]}
        />
        <mesh
          name="Stump022"
          geometry={nodes.Stump022.geometry}
          material={materials['Mat_tree.060']}
          position={[-4.67, 0.223, -19.546]}
        />
        <mesh
          name="Stump023"
          geometry={nodes.Stump023.geometry}
          material={materials['Mat_tree.061']}
          position={[-7.063, 0.223, -18.255]}
        />
        <mesh
          name="Stump024"
          geometry={nodes.Stump024.geometry}
          material={materials['Mat_tree.062']}
          position={[-4.67, 0.223, -17.529]}
        />
        <mesh
          name="Stump025"
          geometry={nodes.Stump025.geometry}
          material={materials['Mat_tree.063']}
          position={[-3.354, 0.223, -16.034]}
        />
        <mesh
          name="Stump026"
          geometry={nodes.Stump026.geometry}
          material={materials['Mat_tree.064']}
          position={[-10.676, 0.223, -18.245]}
        />
        <mesh
          name="Stump027"
          geometry={nodes.Stump027.geometry}
          material={materials['Mat_tree.065']}
          position={[-3.98, 0.223, -21.523]}
        />
        <mesh
          name="Stump028"
          geometry={nodes.Stump028.geometry}
          material={materials['Mat_tree.066']}
          position={[-5.528, 0.223, -23.472]}
        />
      </group>
    </group>
  );
}

export default InitialMap;

useGLTF.preload('/models-3d/initialMap.glb');

