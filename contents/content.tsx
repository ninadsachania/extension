import styleText from "data-text:../app.css";
import type { PlasmoGetStyle } from "plasmo";
import { screen } from '@testing-library/react';
import { within } from "@testing-library/dom";
import React from "react";
import { useState,useEffect, useCallback } from "react";
import { sendToBackground } from "@plasmohq/messaging";

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://scm.jbhunt.com/shipper/ngx/create-shipment/*"],
  all_frames: true
}


// const handleClick = () => {
//   if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/rates") {
//     console.log(localStorage.getItem("data"));
//   } else if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo") {
//     const items = document.querySelectorAll("[formcontrolname]");

//     const pickup_location = items[0].childNodes[0].childNodes[0].value;
//     const pickup_date = items[1].childNodes[0].childNodes[0].value;
//     const pickup_additional_services = [];

//     const pickup_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
//     for (const elem of pickup_additional_services_elems) {
//       if (elem.nodeName === "DIV") {
//         pickup_additional_services.push(elem.childNodes[0].innerHTML);
//       }
//     }

//     const delivery_location = items[2].childNodes[0].childNodes[0].value;
//     const delivery_additional_services = [];

//     const delivery_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
//     for (const elem of delivery_additional_services_elems) {
//       if (elem.nodeName === "DIV") {
//         delivery_additional_services.push(elem.childNodes[0].innerHTML);
//       }
//     }


//     const handling_type = items[3].childNodes[0].childNodes[0].getAttribute('aria-valuenow');
//     const handling_unit_type = items[4].childNodes[0].childNodes[1].innerText;

//     const weight = items[5].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const freight_class = items[6].childNodes[0].childNodes[1].childNodes[0].nodeValue;
//     console.log(freight_class);

//     const length = items[7].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const width = items[8].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const height = items[9].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const is_stackable_checked = items[10].childNodes[0].getAttribute('class').includes('p-checkbox-checked');
//     const is_extreme_length_checked = items[11].childNodes[0].getAttribute('class').includes('p-checkbox-checked');
//     const is_hazmat_checked = items[12].childNodes[0].getAttribute('class').includes('p-checkbox-checked');


//     const item = {
//       "pickup_location": pickup_location,
//       "pickup_date": pickup_date,
//       "pickup_additional_services": pickup_additional_services,

//       "delivery_location": delivery_location,
//       "delivery_additional_services": delivery_additional_services,

//       "items": [
//         {
//           "handling_type": handling_type,
//           "handling_unit_type": handling_unit_type,
//           "weight": weight,
//           "freight_class": freight_class,
//           "length": length,
//           "width": width,
//           "height": height,
//           "is_stackable_checked": is_stackable_checked,
//           "is_extreme_length_checked": is_extreme_length_checked,
//           "is_hazmat_checked": is_hazmat_checked
//         }
//       ]
//     };


//     console.log(JSON.stringify(item, null, 2));

//     // insert data into localStorage
//     localStorage.setItem("data", JSON.stringify(item));
//   }
// };

// let temp;
export const getRootContainer = () => {
  var elemDiv = document.createElement("div")
  elemDiv.setAttribute("id", "EXTENSION_ROOT")
  document.body.appendChild(elemDiv)
  return document.getElementById("EXTENSION_ROOT")
}

const Example = (props) => {
  const  [isData, setIsData] = useState(false);
  const [data, setData] = useState(localStorage.getItem("finalData"));
  
const handleClick = () => {
  if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo") {
    console.log('React Testing Library');
  } else if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/rates") {
    const data = localStorage.getItem('data');

    sendToBackground({
      name: "ping",
      body: {
        'data': data
      }
    }).then((res) => {
      console.log(JSON.stringify(res, null, 2));
    }).catch((e)=>{
      console.error("while sendToBackground ", e);
    })

    // console.log(resp);
  }
};




let dataItems = [];

const saveData = () => {

  const getPickupLocation = () => {
    const region = screen.getByRole('region', {
      name: /pickup/i
    });

    return within(region).getByRole('searchbox').value;
  }

  const getPickupDate = () => {
    const region = screen.getByRole('region', {
      name: /pickup/i
    });

    return within(region).getByRole('textbox').value;
  }

  const getPickupAdditionalServices = () => {
    let ret = [];
    const pickup_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
    for (const elem of pickup_additional_services_elems) {
      if (elem.nodeName === "DIV") {
        ret.push(elem.childNodes[0].innerHTML);
      }
    }
    return ret;
  }


  const getDeliveryLocation = () => {
    const region = screen.getByRole('region', {
      name: /delivery/i
    });

    return within(region).getByRole('searchbox').value;
  }

  const delivery_additional_services = () => {
    let ret = [];
    const delivery_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
    for (const elem of delivery_additional_services_elems) {
      if (elem.nodeName === "DIV") {
        ret.push(elem.childNodes[0].innerHTML);
      }
    }
    return ret;
  }

  const getHandlingUnit = () => {
    return screen.getByText(/handling unit/i).parentElement.querySelector('input').value;
  }

  const getHandlingUnitType = () => {
    return screen.getByText(/pallets/i).innerText;
  }

  const getWeight = () => {
    return screen.getByText(/total weight \(lbs\)/i).parentElement.querySelector('input').value;
  }

  const getFreightClass = () => {
    const label = screen.getByText(/Freight Class$/, {
      exact: true,
    });

    return label.parentElement.childNodes[1].childNodes[0].childNodes[1].innerText;
  }


  const getLength = () => {
    return screen.getByText(/length \(in\)/i).parentElement.querySelector('input').value;
  }

  const getWidth = () => {
    return screen.getByText(/width \(in\)/i).parentElement.querySelector('input').value;
  }

  const getHeight = () => {
    return screen.getByText(/height \(in\)/i).parentElement.querySelector('input').value;
  }

  const getIsStackableChecked = () => {
    return screen.getByText(/stackable/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
  }

  const getIsExtremeLengthChecked = () => {
    return screen.getByText(/extreme length/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
  }

  const getIsHazmatChecked = () => {
    return screen.getByText(/hazmat/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
  }

  const tempData = {
    "pickup_location": getPickupLocation(),
    "pickup_date": getPickupDate(),
    "pickup_additional_services": getPickupAdditionalServices(),
  
    "delivery_location": getDeliveryLocation(),
    "delivery_additional_services": delivery_additional_services(),
  
    "items": [
      {
        "handling_type": getHandlingUnit(),
        "handling_unit_type": getHandlingUnitType(),
        "weight": getWeight(),
        "freight_class": getFreightClass(),
        "length": getLength(),
        "width": getWidth(),
        "height": getHeight(),
        "is_stackable_checked": getIsStackableChecked(),
        "is_extreme_length_checked": getIsExtremeLengthChecked(),
        "is_hazmat_checked": getIsHazmatChecked()
      }
    ]
  }
  console.log(tempData);
  
  console.log(JSON.stringify(tempData, null, 2));

  // save the data to localStorage
  localStorage.setItem('data', JSON.stringify(tempData));

  

  // setData(tempData);
  // setIsData(true);
}
const serviceWorkerRequest =  useCallback((event) => {
  console.log(event.target);
  console.log(window.location.href);
  if ((event.target.nodeName === "SPAN" && event.target.innerText === "Get Rates") ||
    (event.target.nodeName === "DIV" && event.target.getAttribute('class').includes('buttons-container')) || 
    (event.target.nodeName === "BUTTON" && event.target.getAttribute('class').includes('continue-button')) ||
    (event.target.nodeName === "P-BUTTON" && event.target.getAttribute('styleClass').includes('continue-button'))) {
    console.log('Wyatt Earp: We need the button was clicked');
    console.log('Did we get here?');
    const data = localStorage.getItem('data');

    sendToBackground({
      name: "ping",
      body: {
        'data': data
      }
    }).then((res) => {
      dataItems = res['body']['bids'];
      setData(dataItems);
      console.log(data);
      localStorage.setItem("finalData",JSON.stringify(dataItems));
      console.log("this is our data", data);
      // console.log(JSON.stringify(res, null, 2));
    }).catch((e)=>{
      console.log("while fetching data",e )
    })
  }
},[]);
const saveDataToLocal = useCallback((event) => {
  // console.log("rerender");

  if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo" &&
    event.target.nodeName === "BUTTON" &&
    event.target.innerText === "Get Rates") {
      console.log("hello whatever");
    saveData();
    console.log("done")
  }
},[])


useEffect(()=>{
  console.log(document);

  console.log("final data rerender",data);
  document.addEventListener('mouseover', saveDataToLocal);
  document.addEventListener('click', serviceWorkerRequest);
  return () =>{
    document.removeEventListener('mouseover',saveDataToLocal);
    document.removeEventListener('click',serviceWorkerRequest);
  }

},[saveDataToLocal,serviceWorkerRequest,data]);

  if(!data) {
    console.log("theres no data");
    return (
      <div
        style={{width:"30vw",height:"100vh", backgroundColor:"red",color:"white",fontSize:"25px",zIndex:1000, display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}
      >
       data not found
      </div>
    )
  }

  return (
      <div
        style={{width:"30vw",height:"100vh", backgroundColor:"red",color:"white",fontSize:"25px",zIndex:1000}}
      >
        {JSON.parse(data)?.map((item, idx)=>{
          return <div key={idx}>{item?.carrier}</div>
        })}
      </div>
    )
    //{/* </div> */

//     <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
//   {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
//   <div class="fixed inset-0"></div>

//   <div class="fixed inset-0 overflow-hidden">
//     <div class="absolute inset-0 overflow-hidden">
//       <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//         {/* <!--
//           Slide-over panel, show/hide based on slide-over state.

//           Entering: "transform transition ease-in-out duration-500 sm:duration-700"
//             From: "translate-x-full"
//             To: "translate-x-0"
//           Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
//             From: "translate-x-0"
//             To: "translate-x-full"
//         --> */}
//         <div class="pointer-events-auto w-screen max-w-md">
//           <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
//             <div class="px-4 sm:px-6">
//               <div class="flex items-start justify-between">
//                 <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
//                 <div class="ml-3 flex h-7 items-center">
//                   <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                     <span class="sr-only">Close panel</span>
//                     <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div class="relative mt-6 flex-1 px-4 sm:px-6">
//               {/* <!-- Replace with your content --> */}
//               <div class="absolute inset-0 px-4 sm:px-6">
//                 <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
//               </div>
//               {/* <!-- /End replace --> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
  
}

export default Example;