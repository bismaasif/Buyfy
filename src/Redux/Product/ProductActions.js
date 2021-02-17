import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import { v4 as uuidv4 } from 'uuid';

export var ProductActions=(productobj)=>async()=>{
    try {
        console.log(productobj)
        //1- send file to storage and get download url
        var imgRef=storage.child(`products/img-${uuidv4()}`);
        var filelistenser=imgRef.put(productobj.coverpic);
        //listetener 4 parameters-event change, progress of file , error, trigger when file is completed
     filelistenser.on("state-change" , (snapshot)=>{
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

     },
     (error)=>{
         console.log(error)
     },
     async ()=>{
        var downloadedurl= await imgRef.getDownloadURL();
       // console.log(downloadedurl)
       //2-modify productobj with url and createdat
     productobj.coverpic= downloadedurl
     productobj.createdAt=serverTimestamp();
     productobj.cost=parseFloat(productobj.cost);
     productobj.quantity=parseInt(productobj.quantity);
     console.log(productobj);
        //3-create doc in firestore
        await firestore.collection("products").add(productobj);
     });
        
        
    } catch (error) {
        console.log(error)
        
    }
}