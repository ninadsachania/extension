import styleText from "data-text:../app.css";
import type { PlasmoGetStyle } from "plasmo";
import { screen } from '@testing-library/react';
import { within } from "@testing-library/dom";
import React from "react";
import { useState, useEffect, useCallback } from "react";
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
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState(null);

  // const handleClick = () => {
  //   if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo") {
  //     console.log('React Testing Library');
  //   } else if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/rates") {
  //     const data = localStorage.getItem('data');

  //     sendToBackground({
  //       name: "ping",
  //       body: {
  //         'data': data
  //       }
  //     }).then((res) => {
  //       console.log(JSON.stringify(res, null, 2));
  //     }).catch((e) => {
  //       console.error("while sendToBackground ", e);
  //     })

  //     // console.log(resp);
  //   }
  // };

  const handleClick = (e) => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.style.display = 'none';
    console.log('Close button was clicked.');
  }




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
  const serviceWorkerRequest = useCallback((event) => {
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
        // localStorage.setItem("finalData",JSON.stringify(dataItems));
        console.log("this is our data", data);
        // console.log(JSON.stringify(res, null, 2));
      }).catch((e) => {
        console.log("while fetching data", e)
      })
    }
  }, []);
  const saveDataToLocal = useCallback((event) => {
    // console.log("rerender");

    if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo" &&
      event.target.nodeName === "BUTTON" &&
      event.target.innerText === "Get Rates") {
      console.log("hello whatever");
      saveData();
      console.log("done")
    }
  }, [])


  useEffect(() => {
    console.log(document);

    const style = document.createElement("style");
    style.setAttribute("id", "container");
    style.textContent = styleText;
    document.body.appendChild(style);

    console.log("final data rerender", data);
    document.addEventListener('mouseover', saveDataToLocal);
    document.addEventListener('click', serviceWorkerRequest);
    return () => {
      document.removeEventListener('mouseover', saveDataToLocal);
      document.removeEventListener('click', serviceWorkerRequest);
    }

  }, [saveDataToLocal, serviceWorkerRequest]);

  if (!data) {
    console.log("theres no data");
    return (
      <></>
    );
  }

  return (
    <div id="data-container" style={{zIndex: 100000}} className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <div className="pointer-events-auto w-screen max-w-2xl">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center">
                      <button onClick={handleClick} type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Start */}
                  {data.map(item => (
                    <div className="px-6 lg:px-8">
                      <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                          <h1 className="text-xl font-semibold text-gray-900">{item['carrier']}</h1>
                          <img src={item['vendorLogo']}></img>
                          {/* <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> */}
                        </div>
                        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                                <button type="button" className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
                                            </div> */}
                      </div>
                      <div className="mt-8 flow-root">
                        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            {/* <Table /> */}

                            <table className="min-w-full divide-y divide-gray-300">
                              {/* {for (const ke)} */}
                              <tbody className="divide-y divide-gray-200">
                                <tr>
                                  <td className="font-bold whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Bill ID</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['bidId']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Full Amount</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${item['amount']['fullAmount']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Net Amount</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${item['amount']['netAmount']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Transit Time</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['transitTime']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Guranteed?</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{(item['guranteed'] ? "Yes" : "No")}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Delivery Date</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['deliveryDate']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Vendor Name</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['vendorName']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier Name</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierName']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier Code</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierCode']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Quote ID</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['quoteId']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier ID</td>
                                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierID']}</td>
                                </tr>

                                <tr>
                                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0"><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Go
                                  </button></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example;