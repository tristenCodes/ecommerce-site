import url from 'url';


const imageDictionary : { [key: number]: string }=   {
    1: 'gucciflipflop.png',
    2: 'pradashirt.png',
    3: 'pradashirt2.png',
    4: 'mallard.png'
  };


const fetchImage =  (id : number) :  string => {
    
    let url = '/images/';
    url = url.concat(imageDictionary[id]);
    return url;

};

export default fetchImage;