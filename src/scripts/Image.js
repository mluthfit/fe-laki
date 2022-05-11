import activity from '../images/activity-features.png';
import analysis from '../images/analysis-features.png';
import camera from '../images/camera-features.png';
import jumbotron from '../images/jumbotron.png';
import laptop from '../images/laptop.png';
import logo from '../images/logo.png';
import pc from '../images/pc.png';

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], filename, {type:mime});
}

export { 
  activity,
  analysis, 
  camera, 
  jumbotron, 
  laptop, 
  logo, 
  pc, 
  dataURLtoFile
};