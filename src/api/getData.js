import Axios from "axios";
import {baseUrl} from './baseUrl'
const GetData = async () => {
  const response = await Axios.get(
    `${baseUrl}store/collections/`
  ).catch((err) => {
    alert(err.message)
  });

   const {data}  = response.data;
   return data

  
};

export default GetData;