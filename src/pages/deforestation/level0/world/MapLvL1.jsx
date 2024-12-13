import React from 'react';
import { useGLTF } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier';

const MapLvL1 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/lvl1.glb');
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
              position={[23.013, 0.501, 21.146]}
            />
            <mesh
              name="Ground001"
              castShadow
              receiveShadow
              geometry={nodes.Ground001.geometry}
              material={materials['Mat_tree.001']}
              position={[-17.986, 0.195, -16.057]}
              rotation={[Math.PI, -1.475, Math.PI]}
            />
            <mesh
              name="Ground004"
              castShadow
              receiveShadow
              geometry={nodes.Ground004.geometry}
              material={materials['Mat_tree.001']}
              position={[-35.098, 0.195, 5.606]}
            />
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials['Mat_tree.001']}
              position={[-13.954, 0.222, 9.766]}
              rotation={[-Math.PI, 0, 0]}
              scale={[-61.571, -28.088, -60.317]}
            />
            <mesh
              name="Ground011"
              castShadow
              receiveShadow
              geometry={nodes.Ground011.geometry}
              material={materials['Mat_tree.007']}
              position={[-63.284, 0.195, -15.267]}
              scale={[1.824, 1.67, 17.559]}
            />
            <mesh
              name="Ground018"
              castShadow
              receiveShadow
              geometry={nodes.Ground018.geometry}
              material={materials['Mat_tree.014']}
              position={[-14.133, 0.054, 28.146]}
              rotation={[Math.PI, -1.565, Math.PI]}
            />
            <mesh
              name="Ground003"
              castShadow
              receiveShadow
              geometry={nodes.Ground003.geometry}
              material={materials['Mat_tree.011']}
              position={[-61.428, 0.195, 52.098]}
              scale={[1.014, 1.637, 7.994]}
            />
            <mesh
              name="Ground005"
              castShadow
              receiveShadow
              geometry={nodes.Ground005.geometry}
              material={materials['Mat_tree.040']}
              position={[-11.497, 0.195, -51.386]}
              rotation={[0, -1.561, 0]}
              scale={[1.014, 1.75, 18.584]}
            />
            <mesh
              name="Stump028"
              castShadow
              receiveShadow
              geometry={nodes.Stump028.geometry}
              material={materials['Mat_tree.069']}
              position={[30.365, 0.223, -16.947]}
            />
            <mesh
              name="Stump027"
              castShadow
              receiveShadow
              geometry={nodes.Stump027.geometry}
              material={materials['Mat_tree.070']}
              position={[31.914, 0.223, -14.997]}
            />
            <mesh
              name="Stump026"
              castShadow
              receiveShadow
              geometry={nodes.Stump026.geometry}
              material={materials['Mat_tree.071']}
              position={[25.218, 0.223, -11.719]}
            />
            <mesh
              name="Stump024"
              castShadow
              receiveShadow
              geometry={nodes.Stump024.geometry}
              material={materials['Mat_tree.073']}
              position={[31.224, 0.223, -11.003]}
            />
            <mesh
              name="Stump023"
              castShadow
              receiveShadow
              geometry={nodes.Stump023.geometry}
              material={materials['Mat_tree.074']}
              position={[28.831, 0.223, -11.73]}
            />
            <mesh
              name="Stump022"
              castShadow
              receiveShadow
              geometry={nodes.Stump022.geometry}
              material={materials['Mat_tree.075']}
              position={[31.224, 0.223, -13.02]}
            />
            <mesh
              name="Stump021"
              castShadow
              receiveShadow
              geometry={nodes.Stump021.geometry}
              material={materials['Mat_tree.076']}
              position={[26.837, 0.223, -13.42]}
            />
            <mesh
              name="Stump020"
              castShadow
              receiveShadow
              geometry={nodes.Stump020.geometry}
              material={materials['Mat_tree.077']}
              position={[26.837, 0.223, -16.207]}
            />
            <mesh
              name="Stump019"
              castShadow
              receiveShadow
              geometry={nodes.Stump019.geometry}
              material={materials['Mat_tree.078']}
              position={[24.187, 0.223, -13.674]}
            />
            <mesh
              name="Stump018"
              castShadow
              receiveShadow
              geometry={nodes.Stump018.geometry}
              material={materials['Mat_tree.079']}
              position={[22.33, 0.223, -13.343]}
            />
            <mesh
              name="Stump017"
              castShadow
              receiveShadow
              geometry={nodes.Stump017.geometry}
              material={materials['Mat_tree.080']}
              position={[29.192, 0.223, -14.27]}
            />
            <mesh
              name="Stump016"
              castShadow
              receiveShadow
              geometry={nodes.Stump016.geometry}
              material={materials['Mat_tree.081']}
              position={[22.485, 0.223, -9.77]}
            />
            <mesh
              name="Stump015"
              castShadow
              receiveShadow
              geometry={nodes.Stump015.geometry}
              material={materials['Mat_tree.082']}
              position={[30.285, 0.223, -6.842]}
            />
            <mesh
              name="Stump014"
              castShadow
              receiveShadow
              geometry={nodes.Stump014.geometry}
              material={materials['Mat_tree.083']}
              position={[24.914, 0.223, -9.041]}
            />
            <mesh
              name="Stump013"
              castShadow
              receiveShadow
              geometry={nodes.Stump013.geometry}
              material={materials['Mat_tree.084']}
              position={[27.585, 0.223, -11.563]}
            />
            <mesh
              name="Stump012"
              castShadow
              receiveShadow
              geometry={nodes.Stump012.geometry}
              material={materials['Mat_tree.085']}
              position={[24.685, 0.223, -6.842]}
            />
            <mesh
              name="Stump011"
              castShadow
              receiveShadow
              geometry={nodes.Stump011.geometry}
              material={materials['Mat_tree.086']}
              position={[27.597, 0.223, -6.842]}
            />
            <mesh
              name="Stump010"
              castShadow
              receiveShadow
              geometry={nodes.Stump010.geometry}
              material={materials['Mat_tree.087']}
              position={[26.986, 0.223, -9.362]}
            />
            <mesh
              name="Stump009"
              castShadow
              receiveShadow
              geometry={nodes.Stump009.geometry}
              material={materials['Mat_tree.088']}
              position={[29.362, 0.223, -9.362]}
            />
            <mesh
              name="Stump008"
              castShadow
              receiveShadow
              geometry={nodes.Stump008.geometry}
              material={materials['Mat_tree.089']}
              position={[29.362, 0.223, -5.064]}
            />
            <mesh
              name="Stump029"
              castShadow
              receiveShadow
              geometry={nodes.Stump029.geometry}
              material={materials['Mat_tree.213']}
              position={[42.239, 0.223, -13.823]}
            />
            <mesh
              name="Stump030"
              castShadow
              receiveShadow
              geometry={nodes.Stump030.geometry}
              material={materials['Mat_tree.214']}
              position={[43.788, 0.223, -11.873]}
            />
            <mesh
              name="Stump031"
              castShadow
              receiveShadow
              geometry={nodes.Stump031.geometry}
              material={materials['Mat_tree.215']}
              position={[37.092, 0.223, -8.595]}
            />
            <mesh
              name="Stump033"
              castShadow
              receiveShadow
              geometry={nodes.Stump033.geometry}
              material={materials['Mat_tree.217']}
              position={[43.098, 0.223, -7.879]}
            />
            <mesh
              name="Stump034"
              castShadow
              receiveShadow
              geometry={nodes.Stump034.geometry}
              material={materials['Mat_tree.218']}
              position={[40.705, 0.223, -8.606]}
            />
            <mesh
              name="Stump035"
              castShadow
              receiveShadow
              geometry={nodes.Stump035.geometry}
              material={materials['Mat_tree.219']}
              position={[43.098, 0.223, -9.896]}
            />
            <mesh
              name="Stump036"
              castShadow
              receiveShadow
              geometry={nodes.Stump036.geometry}
              material={materials['Mat_tree.220']}
              position={[38.712, 0.223, -10.296]}
            />
            <mesh
              name="Stump037"
              castShadow
              receiveShadow
              geometry={nodes.Stump037.geometry}
              material={materials['Mat_tree.221']}
              position={[38.712, 0.223, -13.083]}
            />
            <mesh
              name="Stump038"
              castShadow
              receiveShadow
              geometry={nodes.Stump038.geometry}
              material={materials['Mat_tree.222']}
              position={[36.062, 0.223, -10.55]}
            />
            <mesh
              name="Stump039"
              castShadow
              receiveShadow
              geometry={nodes.Stump039.geometry}
              material={materials['Mat_tree.223']}
              position={[34.204, 0.223, -10.219]}
            />
            <mesh
              name="Stump040"
              castShadow
              receiveShadow
              geometry={nodes.Stump040.geometry}
              material={materials['Mat_tree.224']}
              position={[41.066, 0.223, -11.147]}
            />
            <mesh
              name="Stump041"
              castShadow
              receiveShadow
              geometry={nodes.Stump041.geometry}
              material={materials['Mat_tree.225']}
              position={[34.359, 0.223, -6.646]}
            />
            <mesh
              name="Stump042"
              castShadow
              receiveShadow
              geometry={nodes.Stump042.geometry}
              material={materials['Mat_tree.226']}
              position={[42.159, 0.223, -3.718]}
            />
            <mesh
              name="Stump043"
              castShadow
              receiveShadow
              geometry={nodes.Stump043.geometry}
              material={materials['Mat_tree.227']}
              position={[36.788, 0.223, -5.917]}
            />
            <mesh
              name="Stump044"
              castShadow
              receiveShadow
              geometry={nodes.Stump044.geometry}
              material={materials['Mat_tree.228']}
              position={[39.459, 0.223, -8.439]}
            />
            <mesh
              name="Stump045"
              castShadow
              receiveShadow
              geometry={nodes.Stump045.geometry}
              material={materials['Mat_tree.229']}
              position={[36.559, 0.223, -3.718]}
            />
            <mesh
              name="Stump046"
              castShadow
              receiveShadow
              geometry={nodes.Stump046.geometry}
              material={materials['Mat_tree.230']}
              position={[39.471, 0.223, -3.718]}
            />
            <mesh
              name="Stump047"
              castShadow
              receiveShadow
              geometry={nodes.Stump047.geometry}
              material={materials['Mat_tree.231']}
              position={[38.86, 0.223, -6.239]}
            />
            <mesh
              name="Stump048"
              castShadow
              receiveShadow
              geometry={nodes.Stump048.geometry}
              material={materials['Mat_tree.232']}
              position={[41.236, 0.223, -6.239]}
            />
            <mesh
              name="Stump049"
              castShadow
              receiveShadow
              geometry={nodes.Stump049.geometry}
              material={materials['Mat_tree.233']}
              position={[41.236, 0.223, -1.94]}
            />
            <mesh
              name="Ground008"
              castShadow
              receiveShadow
              geometry={nodes.Ground008.geometry}
              material={materials['Mat_tree.234']}
              position={[-11.497, 0.195, 70.284]}
              rotation={[0, -1.561, 0]}
              scale={[1.014, 1.572, 18.584]}
            />
            <mesh
              name="Tree113"
              castShadow
              receiveShadow
              geometry={nodes.Tree113.geometry}
              material={materials['Mat_tree.248']}
              position={[32.448, 0.223, 28.77]}
            />
            <mesh
              name="Tree114"
              castShadow
              receiveShadow
              geometry={nodes.Tree114.geometry}
              material={materials['Mat_tree.249']}
              position={[32.448, 0.223, 36.297]}
            />
            <mesh
              name="Tree115"
              castShadow
              receiveShadow
              geometry={nodes.Tree115.geometry}
              material={materials['Mat_tree.250']}
              position={[32.448, 0.223, 44.291]}
            />
            <mesh
              name="Tree116"
              castShadow
              receiveShadow
              geometry={nodes.Tree116.geometry}
              material={materials['Mat_tree.251']}
              position={[27.162, 0.223, 42.312]}
            />
            <mesh
              name="Tree117"
              castShadow
              receiveShadow
              geometry={nodes.Tree117.geometry}
              material={materials['Mat_tree.252']}
              position={[20.528, 0.223, 48.983]}
            />
            <mesh
              name="Tree118"
              castShadow
              receiveShadow
              geometry={nodes.Tree118.geometry}
              material={materials['Mat_tree.253']}
              position={[25.713, 0.223, 48.983]}
            />
            <mesh
              name="Tree119"
              castShadow
              receiveShadow
              geometry={nodes.Tree119.geometry}
              material={materials['Mat_tree.254']}
              position={[29.935, 0.223, 51.105]}
            />
            <mesh
              name="Tree120"
              castShadow
              receiveShadow
              geometry={nodes.Tree120.geometry}
              material={materials['Mat_tree.255']}
              position={[22.899, 0.223, 44.691]}
            />
            <mesh
              name="Tree121"
              castShadow
              receiveShadow
              geometry={nodes.Tree121.geometry}
              material={materials['Mat_tree.256']}
              position={[25.431, 0.223, 54.725]}
            />
            <mesh
              name="Tree122"
              castShadow
              receiveShadow
              geometry={nodes.Tree122.geometry}
              material={materials['Mat_tree.257']}
              position={[37.834, 0.223, 48.983]}
            />
            <mesh
              name="Tree123"
              castShadow
              receiveShadow
              geometry={nodes.Tree123.geometry}
              material={materials['Mat_tree.258']}
              position={[34.494, 0.223, 55.162]}
            />
            <mesh
              name="Tree124"
              castShadow
              receiveShadow
              geometry={nodes.Tree124.geometry}
              material={materials['Mat_tree.259']}
              position={[37.628, 0.223, 41.015]}
            />
            <mesh
              name="Tree103"
              castShadow
              receiveShadow
              geometry={nodes.Tree103.geometry}
              material={materials['Mat_tree.260']}
              position={[15.258, 0.223, 51.681]}
            />
            <mesh
              name="Tree104"
              castShadow
              receiveShadow
              geometry={nodes.Tree104.geometry}
              material={materials['Mat_tree.261']}
              position={[17.865, 0.223, 57.511]}
            />
            <mesh
              name="Tree125"
              castShadow
              receiveShadow
              geometry={nodes.Tree125.geometry}
              material={materials['Mat_tree.262']}
              position={[6.947, 0.223, 51.681]}
            />
            <mesh
              name="Tree102"
              castShadow
              receiveShadow
              geometry={nodes.Tree102.geometry}
              material={materials['Mat_tree.263']}
              position={[-2.052, 0.223, 51.969]}
            />
            <mesh
              name="Tree101"
              castShadow
              receiveShadow
              geometry={nodes.Tree101.geometry}
              material={materials['Mat_tree.264']}
              position={[-5.178, 0.223, 57.689]}
            />
            <mesh
              name="Tree105"
              castShadow
              receiveShadow
              geometry={nodes.Tree105.geometry}
              material={materials['Mat_tree.265']}
              position={[3.94, 0.223, 58.175]}
            />
            <mesh
              name="Tree100"
              castShadow
              receiveShadow
              geometry={nodes.Tree100.geometry}
              material={materials['Mat_tree.266']}
              position={[9.095, 0.223, 45.824]}
            />
            <mesh
              name="Tree112"
              castShadow
              receiveShadow
              geometry={nodes.Tree112.geometry}
              material={materials['Mat_tree.267']}
              position={[6.573, 0.223, 40.469]}
            />
            <mesh
              name="Tree098"
              castShadow
              receiveShadow
              geometry={nodes.Tree098.geometry}
              material={materials['Mat_tree.268']}
              position={[16.211, 0.223, 43.322]}
            />
            <mesh
              name="Tree097"
              castShadow
              receiveShadow
              geometry={nodes.Tree097.geometry}
              material={materials['Mat_tree.269']}
              position={[20.296, 0.223, 38.921]}
            />
            <mesh
              name="Tree096"
              castShadow
              receiveShadow
              geometry={nodes.Tree096.geometry}
              material={materials['Mat_tree.270']}
              position={[14.158, 0.223, 33.184]}
            />
            <mesh
              name="Tree095"
              castShadow
              receiveShadow
              geometry={nodes.Tree095.geometry}
              material={materials['Mat_tree.271']}
              position={[8.298, 0.223, 34.313]}
            />
            <mesh
              name="Tree054"
              castShadow
              receiveShadow
              geometry={nodes.Tree054.geometry}
              material={materials['Mat_tree.272']}
              position={[9.102, 0.223, 27.664]}
            />
            <mesh
              name="Tree056"
              castShadow
              receiveShadow
              geometry={nodes.Tree056.geometry}
              material={materials['Mat_tree.273']}
              position={[13.709, 0.223, 23.274]}
            />
            <mesh
              name="Tree057"
              castShadow
              receiveShadow
              geometry={nodes.Tree057.geometry}
              material={materials['Mat_tree.274']}
              position={[19.846, 0.223, 19.44]}
            />
            <mesh
              name="Tree058"
              castShadow
              receiveShadow
              geometry={nodes.Tree058.geometry}
              material={materials['Mat_tree.275']}
              position={[19.976, 0.223, 27.115]}
            />
            <mesh
              name="Tree051"
              castShadow
              receiveShadow
              geometry={nodes.Tree051.geometry}
              material={materials['Mat_tree.276']}
              position={[16.584, 0.223, -23.013]}
            />
            <mesh
              name="Tree047"
              castShadow
              receiveShadow
              geometry={nodes.Tree047.geometry}
              material={materials['Mat_tree.277']}
              position={[11.567, 0.223, -25.861]}
            />
            <mesh
              name="Tree048"
              castShadow
              receiveShadow
              geometry={nodes.Tree048.geometry}
              material={materials['Mat_tree.278']}
              position={[7.784, 0.223, -14.998]}
            />
            <mesh
              name="Tree049"
              castShadow
              receiveShadow
              geometry={nodes.Tree049.geometry}
              material={materials['Mat_tree.279']}
              position={[0.609, 0.223, -23.013]}
            />
            <mesh
              name="Tree017"
              castShadow
              receiveShadow
              geometry={nodes.Tree017.geometry}
              material={materials['Mat_tree.280']}
              position={[0.609, 0.223, -27.335]}
            />
            <mesh
              name="Tree018"
              castShadow
              receiveShadow
              geometry={nodes.Tree018.geometry}
              material={materials['Mat_tree.281']}
              position={[-5.359, 0.223, -29.013]}
            />
            <mesh
              name="Tree021"
              castShadow
              receiveShadow
              geometry={nodes.Tree021.geometry}
              material={materials['Mat_tree.282']}
              position={[-6.195, 0.223, -22.909]}
            />
            <mesh
              name="Tree016"
              castShadow
              receiveShadow
              geometry={nodes.Tree016.geometry}
              material={materials['Mat_tree.283']}
              position={[-6.195, 0.223, -16.828]}
            />
            <mesh
              name="Tree004"
              castShadow
              receiveShadow
              geometry={nodes.Tree004.geometry}
              material={materials['Mat_tree.284']}
              position={[-0.546, 0.223, -17.222]}
            />
            <mesh
              name="Tree009"
              castShadow
              receiveShadow
              geometry={nodes.Tree009.geometry}
              material={materials['Mat_tree.285']}
              position={[-2.503, 0.223, -10.724]}
            />
            <mesh
              name="Tree008"
              castShadow
              receiveShadow
              geometry={nodes.Tree008.geometry}
              material={materials['Mat_tree.286']}
              position={[-4.184, 0.223, -5.836]}
            />
            <mesh
              name="Tree002"
              castShadow
              receiveShadow
              geometry={nodes.Tree002.geometry}
              material={materials['Mat_tree.287']}
              position={[-8.953, 0.223, -2.653]}
            />
            <mesh
              name="Tree031"
              castShadow
              receiveShadow
              geometry={nodes.Tree031.geometry}
              material={materials['Mat_tree.288']}
              position={[-10.357, 0.223, -7.858]}
            />
            <mesh
              name="Tree001"
              castShadow
              receiveShadow
              geometry={nodes.Tree001.geometry}
              material={materials['Mat_tree.289']}
              position={[-9.689, 0.223, -13.134]}
            />
            <mesh
              name="Tree003"
              castShadow
              receiveShadow
              geometry={nodes.Tree003.geometry}
              material={materials['Mat_tree.290']}
              position={[-11.171, 0.223, -22.322]}
            />
            <mesh
              name="Tree010"
              castShadow
              receiveShadow
              geometry={nodes.Tree010.geometry}
              material={materials['Mat_tree.291']}
              position={[-11.699, 0.223, -29.142]}
            />
            <mesh
              name="Tree019"
              castShadow
              receiveShadow
              geometry={nodes.Tree019.geometry}
              material={materials['Mat_tree.292']}
              position={[-14.662, 0.223, -35.678]}
            />
            <mesh
              name="Tree026"
              castShadow
              receiveShadow
              geometry={nodes.Tree026.geometry}
              material={materials['Mat_tree.293']}
              position={[-17.622, 0.223, -30.902]}
            />
            <mesh
              name="Tree020"
              castShadow
              receiveShadow
              geometry={nodes.Tree020.geometry}
              material={materials['Mat_tree.294']}
              position={[-14.771, 0.223, -19.804]}
            />
            <mesh
              name="Tree032"
              castShadow
              receiveShadow
              geometry={nodes.Tree032.geometry}
              material={materials['Mat_tree.295']}
              position={[-18.502, 0.223, -24.918]}
            />
            <mesh
              name="Tree033"
              castShadow
              receiveShadow
              geometry={nodes.Tree033.geometry}
              material={materials['Mat_tree.296']}
              position={[-25.706, 0.223, -28.626]}
            />
            <mesh
              name="Tree038"
              castShadow
              receiveShadow
              geometry={nodes.Tree038.geometry}
              material={materials['Mat_tree.297']}
              position={[-23.624, 0.223, -33.035]}
            />
            <mesh
              name="Tree043"
              castShadow
              receiveShadow
              geometry={nodes.Tree043.geometry}
              material={materials['Mat_tree.298']}
              position={[-29.17, 0.223, -25.991]}
            />
            <mesh
              name="Tree029"
              castShadow
              receiveShadow
              geometry={nodes.Tree029.geometry}
              material={materials['Mat_tree.299']}
              position={[-30.044, 0.223, -20.776]}
            />
            <mesh
              name="Tree037"
              castShadow
              receiveShadow
              geometry={nodes.Tree037.geometry}
              material={materials['Mat_tree.300']}
              position={[-31.655, 0.223, -15.909]}
            />
            <mesh
              name="Tree036"
              castShadow
              receiveShadow
              geometry={nodes.Tree036.geometry}
              material={materials['Mat_tree.301']}
              position={[-29.773, 0.223, -9.432]}
            />
            <mesh
              name="Tree030"
              castShadow
              receiveShadow
              geometry={nodes.Tree030.geometry}
              material={materials['Mat_tree.302']}
              position={[-32.953, 0.223, -6.12]}
            />
            <mesh
              name="Tree035"
              castShadow
              receiveShadow
              geometry={nodes.Tree035.geometry}
              material={materials['Mat_tree.303']}
              position={[-22.475, 0.223, -10.277]}
            />
            <mesh
              name="Tree007"
              castShadow
              receiveShadow
              geometry={nodes.Tree007.geometry}
              material={materials['Mat_tree.304']}
              position={[-25.364, 0.223, -7.017]}
            />
            <mesh
              name="Tree041"
              castShadow
              receiveShadow
              geometry={nodes.Tree041.geometry}
              material={materials['Mat_tree.305']}
              position={[-23.531, 0.223, -0.711]}
            />
            <mesh
              name="Tree040"
              castShadow
              receiveShadow
              geometry={nodes.Tree040.geometry}
              material={materials['Mat_tree.306']}
              position={[-24.244, 0.223, -14.747]}
            />
            <mesh
              name="Tree042"
              castShadow
              receiveShadow
              geometry={nodes.Tree042.geometry}
              material={materials['Mat_tree.307']}
              position={[-23.293, 0.223, -20.318]}
            />
            <mesh
              name="Tree034"
              castShadow
              receiveShadow
              geometry={nodes.Tree034.geometry}
              material={materials['Mat_tree.308']}
              position={[-11.383, 0.223, 1.975]}
            />
            <mesh
              name="Tree046"
              castShadow
              receiveShadow
              geometry={nodes.Tree046.geometry}
              material={materials['Mat_tree.309']}
              position={[-14.044, 0.223, -2.952]}
            />
            <mesh
              name="Tree005"
              castShadow
              receiveShadow
              geometry={nodes.Tree005.geometry}
              material={materials['Mat_tree.310']}
              position={[-18.537, 0.223, -5.764]}
            />
            <mesh
              name="Tree028"
              castShadow
              receiveShadow
              geometry={nodes.Tree028.geometry}
              material={materials['Mat_tree.311']}
              position={[-18.537, 0.223, -0.097]}
            />
            <mesh
              name="Tree006"
              castShadow
              receiveShadow
              geometry={nodes.Tree006.geometry}
              material={materials['Mat_tree.312']}
              position={[-16.894, 0.223, 5.531]}
            />
            <mesh
              name="Tree044"
              castShadow
              receiveShadow
              geometry={nodes.Tree044.geometry}
              material={materials['Mat_tree.313']}
              position={[-10.949, 0.223, 6.796]}
            />
            <mesh
              name="Tree078"
              castShadow
              receiveShadow
              geometry={nodes.Tree078.geometry}
              material={materials['Mat_tree.314']}
              position={[-23.111, 0.223, 5.613]}
            />
            <mesh
              name="Tree045"
              castShadow
              receiveShadow
              geometry={nodes.Tree045.geometry}
              material={materials['Mat_tree.315']}
              position={[-28.779, 0.223, 0.984]}
            />
            <mesh
              name="Tree039"
              castShadow
              receiveShadow
              geometry={nodes.Tree039.geometry}
              material={materials['Mat_tree.316']}
              position={[-19.934, 0.223, 9.27]}
            />
            <mesh
              name="Tree062"
              castShadow
              receiveShadow
              geometry={nodes.Tree062.geometry}
              material={materials['Mat_tree.317']}
              position={[-14.23, 0.223, 11.092]}
            />
            <mesh
              name="Tree080"
              castShadow
              receiveShadow
              geometry={nodes.Tree080.geometry}
              material={materials['Mat_tree.318']}
              position={[-15.025, 0.223, 17.66]}
            />
            <mesh
              name="Tree072"
              castShadow
              receiveShadow
              geometry={nodes.Tree072.geometry}
              material={materials['Mat_tree.319']}
              position={[-8.393, 0.223, 13.376]}
            />
            <mesh
              name="Tree081"
              castShadow
              receiveShadow
              geometry={nodes.Tree081.geometry}
              material={materials['Mat_tree.320']}
              position={[-1.938, 0.223, 13.166]}
            />
            <mesh
              name="Tree079"
              castShadow
              receiveShadow
              geometry={nodes.Tree079.geometry}
              material={materials['Mat_tree.321']}
              position={[4.07, 0.223, 14.834]}
            />
            <mesh
              name="Tree082"
              castShadow
              receiveShadow
              geometry={nodes.Tree082.geometry}
              material={materials['Mat_tree.322']}
              position={[4.07, 0.223, 19.345]}
            />
            <mesh
              name="Tree083"
              castShadow
              receiveShadow
              geometry={nodes.Tree083.geometry}
              material={materials['Mat_tree.323']}
              position={[-2.414, 0.223, 19.472]}
            />
            <mesh
              name="Tree084"
              castShadow
              receiveShadow
              geometry={nodes.Tree084.geometry}
              material={materials['Mat_tree.324']}
              position={[-6.949, 0.223, 20.337]}
            />
            <mesh
              name="Tree085"
              castShadow
              receiveShadow
              geometry={nodes.Tree085.geometry}
              material={materials['Mat_tree.325']}
              position={[-2.687, 0.223, 25.542]}
            />
            <mesh
              name="Tree091"
              castShadow
              receiveShadow
              geometry={nodes.Tree091.geometry}
              material={materials['Mat_tree.326']}
              position={[-5.997, 0.223, 29.06]}
            />
            <mesh
              name="Tree092"
              castShadow
              receiveShadow
              geometry={nodes.Tree092.geometry}
              material={materials['Mat_tree.327']}
              position={[1.113, 0.223, 31.668]}
            />
            <mesh
              name="Tree087"
              castShadow
              receiveShadow
              geometry={nodes.Tree087.geometry}
              material={materials['Mat_tree.328']}
              position={[2.672, 0.223, 25.172]}
            />
            <mesh
              name="Tree086"
              castShadow
              receiveShadow
              geometry={nodes.Tree086.geometry}
              material={materials['Mat_tree.329']}
              position={[-0.641, 0.223, 36.495]}
            />
            <mesh
              name="Tree093"
              castShadow
              receiveShadow
              geometry={nodes.Tree093.geometry}
              material={materials['Mat_tree.330']}
              position={[-6.602, 0.223, 34.745]}
            />
            <mesh
              name="Tree094"
              castShadow
              receiveShadow
              geometry={nodes.Tree094.geometry}
              material={materials['Mat_tree.331']}
              position={[-5.404, 0.223, 39.853]}
            />
            <mesh
              name="Tree074"
              castShadow
              receiveShadow
              geometry={nodes.Tree074.geometry}
              material={materials['Mat_tree.332']}
              position={[-11.315, 0.223, 22.429]}
            />
            <mesh
              name="Tree073"
              castShadow
              receiveShadow
              geometry={nodes.Tree073.geometry}
              material={materials['Mat_tree.333']}
              position={[-21.68, 0.223, 13.767]}
            />
            <mesh
              name="Tree067"
              castShadow
              receiveShadow
              geometry={nodes.Tree067.geometry}
              material={materials['Mat_tree.334']}
              position={[-25.391, 0.223, 16.756]}
            />
            <mesh
              name="Tree076"
              castShadow
              receiveShadow
              geometry={nodes.Tree076.geometry}
              material={materials['Mat_tree.335']}
              position={[-26.206, 0.223, 21.527]}
            />
            <mesh
              name="Tree068"
              castShadow
              receiveShadow
              geometry={nodes.Tree068.geometry}
              material={materials['Mat_tree.336']}
              position={[-28.16, 0.223, 26.178]}
            />
            <mesh
              name="Tree069"
              castShadow
              receiveShadow
              geometry={nodes.Tree069.geometry}
              material={materials['Mat_tree.337']}
              position={[-26.128, 0.223, 32.974]}
            />
            <mesh
              name="Tree075"
              castShadow
              receiveShadow
              geometry={nodes.Tree075.geometry}
              material={materials['Mat_tree.338']}
              position={[-21.58, 0.223, 35.619]}
            />
            <mesh
              name="Tree064"
              castShadow
              receiveShadow
              geometry={nodes.Tree064.geometry}
              material={materials['Mat_tree.339']}
              position={[-18.739, 0.223, 32.42]}
            />
            <mesh
              name="Tree088"
              castShadow
              receiveShadow
              geometry={nodes.Tree088.geometry}
              material={materials['Mat_tree.340']}
              position={[-20.975, 0.223, 27.151]}
            />
            <mesh
              name="Tree063"
              castShadow
              receiveShadow
              geometry={nodes.Tree063.geometry}
              material={materials['Mat_tree.341']}
              position={[-10.178, 0.223, 39.853]}
            />
            <mesh
              name="Tree090"
              castShadow
              receiveShadow
              geometry={nodes.Tree090.geometry}
              material={materials['Mat_tree.342']}
              position={[-7.673, 0.223, 44.546]}
            />
            <mesh
              name="Tree059"
              castShadow
              receiveShadow
              geometry={nodes.Tree059.geometry}
              material={materials['Mat_tree.343']}
              position={[-13.802, 0.223, 47.584]}
            />
            <mesh
              name="Tree061"
              castShadow
              receiveShadow
              geometry={nodes.Tree061.geometry}
              material={materials['Mat_tree.344']}
              position={[-24.209, 0.223, 53.974]}
            />
            <mesh
              name="Tree060"
              castShadow
              receiveShadow
              geometry={nodes.Tree060.geometry}
              material={materials['Mat_tree.345']}
              position={[-19.918, 0.223, 41.29]}
            />
            <mesh
              name="Tree065"
              castShadow
              receiveShadow
              geometry={nodes.Tree065.geometry}
              material={materials['Mat_tree.346']}
              position={[-25.333, 0.223, 42.942]}
            />
            <mesh
              name="Tree066"
              castShadow
              receiveShadow
              geometry={nodes.Tree066.geometry}
              material={materials['Mat_tree.347']}
              position={[-29.257, 0.223, 36.461]}
            />
            <mesh
              name="Tree070"
              castShadow
              receiveShadow
              geometry={nodes.Tree070.geometry}
              material={materials['Mat_tree.348']}
              position={[-33.332, 0.223, 41.842]}
            />
            <mesh
              name="Tree110"
              castShadow
              receiveShadow
              geometry={nodes.Tree110.geometry}
              material={materials['Mat_tree.349']}
              position={[-37.472, 0.223, 37.868]}
            />
            <mesh
              name="Tree111"
              castShadow
              receiveShadow
              geometry={nodes.Tree111.geometry}
              material={materials['Mat_tree.350']}
              position={[-29.861, 0.223, 49.431]}
            />
            <mesh
              name="Tree109"
              castShadow
              receiveShadow
              geometry={nodes.Tree109.geometry}
              material={materials['Mat_tree.351']}
              position={[-15.256, 0.223, 41.006]}
            />
            <mesh
              name="Tree089"
              castShadow
              receiveShadow
              geometry={nodes.Tree089.geometry}
              material={materials['Mat_tree.352']}
              position={[-15.256, 0.223, 35.732]}
            />
            <mesh
              name="Tree077"
              castShadow
              receiveShadow
              geometry={nodes.Tree077.geometry}
              material={materials['Mat_tree.353']}
              position={[-14.846, 0.223, 53.678]}
            />
            <mesh
              name="Tree107"
              castShadow
              receiveShadow
              geometry={nodes.Tree107.geometry}
              material={materials['Mat_tree.354']}
              position={[-14.846, 0.223, 57.646]}
            />
            <mesh
              name="Tree106"
              castShadow
              receiveShadow
              geometry={nodes.Tree106.geometry}
              material={materials['Mat_tree.355']}
              position={[-19.853, 0.223, 22.177]}
            />
            <mesh
              name="Stone001"
              castShadow
              receiveShadow
              geometry={nodes.Stone001.geometry}
              material={materials['Mat_tree.001']}
              position={[12.307, 0.745, 20.877]}
            />
            <mesh
              name="Stone002"
              castShadow
              receiveShadow
              geometry={nodes.Stone002.geometry}
              material={materials['Mat_tree.001']}
              position={[17.861, 0.685, 22.016]}
            />
            <mesh
              name="Stone003"
              castShadow
              receiveShadow
              geometry={nodes.Stone003.geometry}
              material={materials['Mat_tree.001']}
              position={[15.787, 0.818, 16.65]}
            />
            <mesh
              name="Stone004"
              castShadow
              receiveShadow
              geometry={nodes.Stone004.geometry}
              material={materials['Mat_tree.001']}
              position={[8.9, 0.223, -8.63]}
            />
            <mesh
              name="Stone005"
              castShadow
              receiveShadow
              geometry={nodes.Stone005.geometry}
              material={materials['Mat_tree.001']}
              position={[-42.878, 0.223, 58.84]}
            />
            <mesh
              name="Stone006"
              castShadow
              receiveShadow
              geometry={nodes.Stone006.geometry}
              material={materials['Mat_tree.001']}
              position={[19.183, 0.186, -2.844]}
            />
            <mesh
              name="Stone007"
              castShadow
              receiveShadow
              geometry={nodes.Stone007.geometry}
              material={materials['Mat_tree.001']}
              position={[19.283, 0.194, -5.852]}
            />
            <mesh
              name="Stone008"
              castShadow
              receiveShadow
              geometry={nodes.Stone008.geometry}
              material={materials['Mat_tree.001']}
              position={[21.384, 0.21, -0.031]}
            />
            <mesh
              name="Stone009"
              castShadow
              receiveShadow
              geometry={nodes.Stone009.geometry}
              material={materials['Mat_tree.001']}
              position={[15.826, 0.245, -1.578]}
            />
            <mesh
              name="Stone010"
              castShadow
              receiveShadow
              geometry={nodes.Stone010.geometry}
              material={materials['Mat_tree.001']}
              position={[-43.346, 0.223, -39.645]}
            />
            <mesh
              name="Stone011"
              castShadow
              receiveShadow
              geometry={nodes.Stone011.geometry}
              material={materials['Mat_tree.001']}
              position={[-17.77, 0.223, -11.662]}
            />
            <mesh
              name="Stone012"
              castShadow
              receiveShadow
              geometry={nodes.Stone012.geometry}
              material={materials['Mat_tree.001']}
              position={[26.72, 0.17, -4.457]}
            />
            <mesh
              name="Stone013"
              castShadow
              receiveShadow
              geometry={nodes.Stone013.geometry}
              material={materials['Mat_tree.001']}
              position={[9.746, 0.17, -1.275]}
            />
            <mesh
              name="Stone014"
              castShadow
              receiveShadow
              geometry={nodes.Stone014.geometry}
              material={materials['Mat_tree.001']}
              position={[22.269, 0.17, 16.732]}
            />
            <mesh
              name="Stone015"
              castShadow
              receiveShadow
              geometry={nodes.Stone015.geometry}
              material={materials['Mat_tree.001']}
              position={[24.848, 0.17, -1.794]}
            />
            <mesh
              name="Ground007"
              castShadow
              receiveShadow
              geometry={nodes.Ground007.geometry}
              material={materials['Mat_tree.171']}
              position={[-37.121, 0.195, 26.905]}
            />
            <mesh
              name="Flowers020"
              castShadow
              receiveShadow
              geometry={nodes.Flowers020.geometry}
              material={materials['Mat_tree.167']}
              position={[-2.312, 0.222, 41.435]}
            />
            <mesh
              name="Flowers019"
              castShadow
              receiveShadow
              geometry={nodes.Flowers019.geometry}
              material={materials['Mat_tree.166']}
              position={[0.41, 0.222, 44.946]}
            />
            <mesh
              name="Flowers018"
              castShadow
              receiveShadow
              geometry={nodes.Flowers018.geometry}
              material={materials['Mat_tree.165']}
              position={[-2.857, 0.222, 45.944]}
            />
            <mesh
              name="Flowers017"
              castShadow
              receiveShadow
              geometry={nodes.Flowers017.geometry}
              material={materials['Mat_tree.164']}
              position={[-3.329, 0.222, 43.47]}
            />
            <mesh
              name="Flowers016"
              castShadow
              receiveShadow
              geometry={nodes.Flowers016.geometry}
              material={materials['Mat_tree.163']}
              position={[-0.812, 0.222, 48.007]}
            />
            <mesh
              name="Flowers015"
              castShadow
              receiveShadow
              geometry={nodes.Flowers015.geometry}
              material={materials['Mat_tree.162']}
              position={[4.603, 0.222, 52.242]}
            />
            <mesh
              name="Flowers004"
              castShadow
              receiveShadow
              geometry={nodes.Flowers004.geometry}
              material={materials['Mat_tree.161']}
              position={[2.086, 0.222, 47.705]}
            />
            <mesh
              name="Flowers003"
              castShadow
              receiveShadow
              geometry={nodes.Flowers003.geometry}
              material={materials['Mat_tree.160']}
              position={[2.557, 0.222, 50.178]}
            />
            <mesh
              name="Flowers002"
              castShadow
              receiveShadow
              geometry={nodes.Flowers002.geometry}
              material={materials['Mat_tree.159']}
              position={[5.825, 0.222, 49.181]}
            />
            <mesh
              name="Flowers001"
              castShadow
              receiveShadow
              geometry={nodes.Flowers001.geometry}
              material={materials['Mat_tree.158']}
              position={[3.102, 0.222, 45.67]}
            />
            <mesh
              name="Tree055"
              castShadow
              receiveShadow
              geometry={nodes.Tree055.geometry}
              material={materials['Mat_tree.154']}
              position={[15.914, 0.223, 29.558]}
            />
            <mesh
              name="Tree053"
              castShadow
              receiveShadow
              geometry={nodes.Tree053.geometry}
              material={materials['Mat_tree.152']}
              position={[24.472, 0.223, 33.886]}
            />
            <mesh
              name="Ground006"
              castShadow
              receiveShadow
              geometry={nodes.Ground006.geometry}
              material={materials['Mat_tree.130']}
              position={[-40.623, 0.195, -15.376]}
            />
            <mesh
              name="Flowers005"
              castShadow
              receiveShadow
              geometry={nodes.Flowers005.geometry}
              material={materials['Mat_tree.134']}
              position={[-5.814, 0.222, -0.845]}
            />
            <mesh
              name="Flowers006"
              castShadow
              receiveShadow
              geometry={nodes.Flowers006.geometry}
              material={materials['Mat_tree.135']}
              position={[-3.092, 0.222, 2.666]}
            />
            <mesh
              name="Flowers007"
              castShadow
              receiveShadow
              geometry={nodes.Flowers007.geometry}
              material={materials['Mat_tree.136']}
              position={[-6.359, 0.222, 3.663]}
            />
            <mesh
              name="Flowers008"
              castShadow
              receiveShadow
              geometry={nodes.Flowers008.geometry}
              material={materials['Mat_tree.137']}
              position={[-6.831, 0.222, 1.19]}
            />
            <mesh
              name="Flowers009"
              castShadow
              receiveShadow
              geometry={nodes.Flowers009.geometry}
              material={materials['Mat_tree.138']}
              position={[-4.314, 0.222, 5.727]}
            />
            <mesh
              name="Flowers010"
              castShadow
              receiveShadow
              geometry={nodes.Flowers010.geometry}
              material={materials['Mat_tree.139']}
              position={[1.101, 0.222, 9.961]}
            />
            <mesh
              name="Flowers011"
              castShadow
              receiveShadow
              geometry={nodes.Flowers011.geometry}
              material={materials['Mat_tree.140']}
              position={[-1.416, 0.222, 5.424]}
            />
            <mesh
              name="Flowers012"
              castShadow
              receiveShadow
              geometry={nodes.Flowers012.geometry}
              material={materials['Mat_tree.141']}
              position={[-0.945, 0.222, 7.898]}
            />
            <mesh
              name="Flowers013"
              castShadow
              receiveShadow
              geometry={nodes.Flowers013.geometry}
              material={materials['Mat_tree.142']}
              position={[2.323, 0.222, 6.9]}
            />
            <mesh
              name="Flowers014"
              castShadow
              receiveShadow
              geometry={nodes.Flowers014.geometry}
              material={materials['Mat_tree.143']}
              position={[-0.4, 0.222, 3.389]}
            />
            <mesh
              name="Tree050"
              castShadow
              receiveShadow
              geometry={nodes.Tree050.geometry}
              material={materials['Mat_tree.147']}
              position={[12.412, 0.223, -12.722]}
            />
            <mesh
              name="Tree052"
              castShadow
              receiveShadow
              geometry={nodes.Tree052.geometry}
              material={materials['Mat_tree.149']}
              position={[20.97, 0.223, -8.395]}
            />
            <mesh
              name="Stone016"
              castShadow
              receiveShadow
              geometry={nodes.Stone016.geometry}
              material={materials['Mat_tree.205']}
              position={[-17.77, 0.223, -11.662]}
            />
            <mesh
              name="Tree099"
              castShadow
              receiveShadow
              geometry={nodes.Tree099.geometry}
              material={materials['Mat_tree.212']}
              position={[31.863, 0.223, 6.043]}
            />
            <mesh
              name="Tree027"
              castShadow
              receiveShadow
              geometry={nodes.Tree027.geometry}
              material={materials['Mat_tree.110']}
              position={[27.912, 0.223, 16.587]}
            />
            <mesh
              name="Tree025"
              castShadow
              receiveShadow
              geometry={nodes.Tree025.geometry}
              material={materials['Mat_tree.111']}
              position={[3.703, 0.14, 4.802]}
            />
            <mesh
              name="Tree024"
              castShadow
              receiveShadow
              geometry={nodes.Tree024.geometry}
              material={materials['Mat_tree.111']}
              position={[27.772, 0.223, 9.809]}
            />
            <mesh
              name="Tree023"
              castShadow
              receiveShadow
              geometry={nodes.Tree023.geometry}
              material={materials['Mat_tree.111']}
              position={[28.885, 0.223, 22.301]}
            />
            <mesh
              name="Tree022"
              castShadow
              receiveShadow
              geometry={nodes.Tree022.geometry}
              material={materials['Mat_tree.111']}
              position={[32.448, 0.223, 12.905]}
            />
            <mesh
              name="Tree015"
              castShadow
              receiveShadow
              geometry={nodes.Tree015.geometry}
              material={materials['Mat_tree.105']}
              position={[9.465, 0.223, -20.821]}
            />
            <mesh
              name="Tree014"
              castShadow
              receiveShadow
              geometry={nodes.Tree014.geometry}
              material={materials['Mat_tree.106']}
              position={[35.394, 0.223, 10.27]}
            />
            <mesh
              name="Tree013"
              castShadow
              receiveShadow
              geometry={nodes.Tree013.geometry}
              material={materials['Mat_tree.107']}
              position={[31.662, 0.223, -0.102]}
            />
            <mesh
              name="Tree012"
              castShadow
              receiveShadow
              geometry={nodes.Tree012.geometry}
              material={materials['Mat_tree.108']}
              position={[26.112, 0.223, 3.745]}
            />
            <mesh
              name="Tree011"
              castShadow
              receiveShadow
              geometry={nodes.Tree011.geometry}
              material={materials['Mat_tree.109']}
              position={[34.411, 0.223, 19.621]}
            />
            <mesh
              name="Stump007"
              castShadow
              receiveShadow
              geometry={nodes.Stump007.geometry}
              material={materials['Mat_tree.111']}
              position={[20.402, 0.223, 7.525]}
            />
            <mesh
              name="Stump006"
              castShadow
              receiveShadow
              geometry={nodes.Stump006.geometry}
              material={materials['Mat_tree.111']}
              position={[16.818, 0.223, 7.525]}
            />
            <mesh
              name="Stump005"
              castShadow
              receiveShadow
              geometry={nodes.Stump005.geometry}
              material={materials['Mat_tree.111']}
              position={[18.394, 0.223, 7.525]}
            />
            <mesh
              name="Stump004"
              castShadow
              receiveShadow
              geometry={nodes.Stump004.geometry}
              material={materials['Mat_tree.111']}
              position={[19.418, 0.223, 7.525]}
            />
            <mesh
              name="Stump003"
              castShadow
              receiveShadow
              geometry={nodes.Stump003.geometry}
              material={materials['Mat_tree.111']}
              position={[20.46, 0.235, 4.991]}
            />
            <mesh
              name="Stump002"
              castShadow
              receiveShadow
              geometry={nodes.Stump002.geometry}
              material={materials['Mat_tree.111']}
              position={[17.386, 0.235, 4.991]}
            />
            <mesh
              name="Stump001"
              castShadow
              receiveShadow
              geometry={nodes.Stump001.geometry}
              material={materials['Mat_tree.111']}
              position={[18.579, 0.235, 4.991]}
            />
            <mesh
              name="Stump"
              castShadow
              receiveShadow
              geometry={nodes.Stump.geometry}
              material={materials['Mat_tree.111']}
              position={[19.584, 0.22, 4.991]}
            />
          </group>
        </group>
      </RigidBody>
    </group>
  );
}

export default MapLvL1;

useGLTF.preload('/models-3d/lvl1.glb');

