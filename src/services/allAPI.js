import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// upload details of a series
export const uploadSeries = async(reqBody)=>{
    // make call post http request to http://localhost:4000/series to add series info in json server and return response to my add component
    return await commonAPI("POST", `${serverURL}/series`, reqBody)
}

// get all series from json server
export const getAllSeries = async ()=>{
    // make get http request to http://localhost:4000/series to get all series from json server and return response to my list component
    return await commonAPI("GET",`${serverURL}/series`,"")
}
// get a series from json server
export const getASeries = async (id)=>{
    // make get http request to http://localhost:4000/series/name to get a series from json server and return response to Series Card component
    return await commonAPI("GET",`${serverURL}/series/${id}`,"")
}
// delete a series from json server
export const deleteASeries = async (id)=>{
    // make delete http request to http://localhost:4000/series/name to remove a series from json server and return response to the component
    return await commonAPI("DELETE",`${serverURL}/series/${id}`,{})
}
// store watching video category for already watching to json server
export const addToAlreadyWatched = async (videoDetails)=>{
    // make call post http request to http://localhost:4000/alreadyWatched to add video category in json server and return response to already watched component
  return await commonAPI("POST", `${serverURL}/alreadyWatched`,videoDetails)
}
// get all already watched to json server
export const getAllAlreadyWatched = async ()=>{
    // make get post http request to http://localhost:4000/alreadyWatched to get video history in json server and return response to watch history component
  return await commonAPI("GET", `${serverURL}/alreadyWatched`,"")
}
// delete a series from json server
export const deleteAlreadyWatched = async (id)=>{
  // make delete http request to http://localhost:4000/series/name to remove a series from json server and return response to the component
  return await commonAPI("DELETE",`${serverURL}/alreadyWatched/${id}`,{})
}
// store watching video category for currently watching to json server
export const addToCurrentlyWatching = async (videoDetails)=>{
    // make call post http request to http://localhost:4000/currentlywatching to add video category in json server and return response to currently watched component
  return await commonAPI("POST", `${serverURL}/currentlyWatching`,videoDetails)
}
// get all already watched to json server
export const getAllCurrentlyWatching = async ()=>{
    // make get post http request to http://localhost:4000/history to get video history in json server and return response to watch history component
  return await commonAPI("GET", `${serverURL}/currentlyWatching`,"")
}
// delete a series from json server
export const deleteCurrentlyWatching = async (id)=>{
  // make delete http request to http://localhost:4000/series/name to remove a series from json server and return response to the component
  return await commonAPI("DELETE",`${serverURL}/currentlyWatching/${id}`,{})
}
// store watching video category for want to watch to json server
export const addToWantToWatch = async (videoDetails)=>{
    // make call post http request to http://localhost:4000/wanttowatch to add video category in json server and return response to want to watch component
  return await commonAPI("POST", `${serverURL}/wantToWatch`,videoDetails)
}
// get all already watched to json server
export const getAllWantToWatch = async ()=>{
    // make get post http request to http://localhost:4000/history to get video history in json server and return response to watch history component
  return await commonAPI("GET", `${serverURL}/wantToWatch`,"")
}
// delete a series from json server
export const deleteWantToWatch = async (id)=>{
  // make delete http request to http://localhost:4000/series/name to remove a series from json server and return response to the component
  return await commonAPI("DELETE",`${serverURL}/wantToWatch/${id}`,{})
}

export const updateCategory = async (id,body)=>{
  return await commonAPI("PUT", `${serverURL}/alreadyWatched/${id}`,body)}