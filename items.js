import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const items = [
    {
      id: 1,
      icon: faMusic,
      title: "Tire Pressure",
    },
    {
      id: 2,
      icon: faClock,
      title: "Engine Oil Level",
      subTitle: "check"
    },
    {
      id: 3,
      icon: faThermometerHalf,
      title: "Engine Temperature",
      subTitle: "20°F"
    },
    {
      id: 4,
      icon: faCar,
      title: "Window Screen Washer fluid",
    },
    {
      id: 5,
      icon: faBolt,
      title: "Engine Coolent & Remaining Life",
    },
    {
      id: 6, 
      icon: faMapMarkerAlt, 
      title: "Air Filter"
    },    
    {
      id: 7, 
      icon: faShoppingBag, 
      title: "Exterior Lights,Head,Tail,Break"
    },        
    {
      id: 8, 
      icon: faKey, 
      title: "Indicators, Park, Hazard ",
      subTitle: "-----"
    },        
    {
      id: 9, 
      icon: faWrench, 
      title: "Key Remote,Operation/Range "
    },        
    {
      id: 10, 
      icon: faExclamationTriangle, 
      title: "Warning Lights,Instruments Check "
    }, 
    {
      id: 11, 
      icon: faExclamationTriangle, 
      title: "Parking Break Operation" 
    },   
    {
      id: 12, 
      icon: faExclamationTriangle, 
      title: "Horn Operation "
    },   
    {
      id: 13, 
      icon: faExclamationTriangle, 
      title: "Internal Lights "
    },   
    {
      id: 14, 
      icon: faExclamationTriangle, 
      title: "Seat Belts "
    },   
           
];

export default items;