import type { PlasmoMessaging } from "@plasmohq/messaging"


const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    console.log('Hello, World');
    console.log(req.body.data);

    const json_data = JSON.parse(req.body.data);
    console.log(json_data);


    const url = `https://api.firstshipper.com/quote`;
    fetch(url, {
        'method': 'POST',
        'headers': {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJyeWU1em9zZnh1aGMxbWoiLCJleHAiOjE2Nzc1NjE2MDEsImlkIjoiZm92aW5kamNlYjQ3anQ2IiwidHlwZSI6ImF1dGhSZWNvcmQifQ.cCSZK10iDgxUgkrFs6YIojdLkWVXJwd1VqpDraflvgM',
            'Content-Type': 'application/json'
        },
        'body': `{
        "quoteId": "",
        "requesterId": "",
        "mode": "",
        "liablePartyId": "",
        "pickupDate": "2023-03-22T22:00:00.00z",
        "displayDate": "2023-03-22",
        "deliveryDate": "2023-05-13T22:00:00.00z",
        "totalItems": null,
        "totalWeight": null,
        "validUntil": "",
        "editMode": true,
        "businessId": "asuanku@gmail.com",
        "type": "quoteRequest",
        "commodities": [
            {
                "density": null,
                "length": 48,
                "width": 48,
                "height": 75,
                "weight": 1000,
                "dimensionDisplay": "",
                "packageType": 1,
                "quantity": 1,
                "freightClass": 5,
                "commodityInstructions": "",
                "index": 0,
                "shipmentDescription": " novelties",
                "dimensionUOM": {
                    "INCH": true,
                    "CM": false
                },
                "weightUOM": {
                    "LB": true,
                    "KG": false
                },
                "commodityServices": {
                    "protectFromFreeze": false,
                    "sortAndSegregate": false,
                    "guaranteed": false,
                    "hazardous": false,
                    "stackable": false
                }
            }
        ],
        "pickup": {
            "id": "",
            "companyName": "",
            "address": {
                "addressLine1": " ",
                "addressLine2": "",
                "city": "Los Angeles",
                "county": "Los Angeles County",
                "state": "California",
                "stateCode": "CA",
                "country": "United States",
                "countryCode": "US",
                "zipCode": "90013",
                "streetName": "",
                "extendedZipCode": "90013",
                "freeFormAddress": "90013, Los Angeles, CA",
                "localName": "",
                "lat": 34.0445905,
                "long": -118.2405557,
                "businessId": "",
                "type": ""
            },
            "contact": {
                "name": "",
                "phoneNumber": "",
                "emailAddress": "",
                "phoneNumberDisplay": "",
                "roles": [],
                "prefferedContactMethod": "",
                "businessId": "",
                "type": ""
            },
            "businessHours": {
                "start": "",
                "end": ""
            },
            "businessId": "",
            "type": ""
        },
        "delivery": {
            "id": "",
            "companyName": "",
            "address": {
                "addressLine1": " ",
                "addressLine2": "",
                "city": "",
                "county": "Kings County",
                "state": "New York",
                "stateCode": "NY",
                "country": "United States",
                "countryCode": "US",
                "zipCode": "11224",
                "streetName": "",
                "extendedZipCode": "11224",
                "freeFormAddress": "11224, , NY",
                "localName": "",
                "lat": 40.5749261,
                "long": -73.9859414,
                "businessId": "",
                "type": ""
            },
            "contact": {
                "name": "",
                "phoneNumber": "",
                "emailAddress": "",
                "phoneNumberDisplay": "",
                "roles": [],
                "prefferedContactMethod": "",
                "businessId": "",
                "type": ""
            },
            "businessHours": {
                "start": "",
                "end": ""
            },
            "businessId": "",
            "type": ""
        },
        "specialInstruction": "",
        "shipperPickupReadyBy": "",
        "shipperInstructions": null,
        "receiverInstructions": null,
        "locationServices": {
            "pickupLocationWithDock": true,
            "liftGatePickup": false,
            "pickupAppointment": false,
            "insidePickup": false,
            "pickupNotification": false,
            "shipperDeliveryNotification": false,
            "deliveryLocationWithDock": true,
            "liftGateDelivery": false,
            "deliveryAppointment": false,
            "insideDelivery": false,
            "receiverPickupNotification": false,
            "deliveryNotification": false
        },
        "business": {
            "type": "business",
            "businessName": "pipeking llc",
            "businessId": "asuanku@gmail.com",
            "accountingEmail": "asuanku@gmail.com",
            "customerServiceEmail": "asuanku@gmail.com",
            "adminEmail": "asuanku@gmail.com",
            "phoneNumber": {
                "phoneNumber": "5622922707",
                "type": 1
            },
            "needsDefaultDeliveryAddressUpdate": true,
            "defaultPickupAddress": {
                "addressLine1": "306 East 3rd Street",
                "streetName": "East 3rd Street",
                "city": "Los Angeles",
                "county": "Los Angeles County",
                "zipCode": "90013",
                "state": "California",
                "stateCode": "CA",
                "extendedZipCode": "90013",
                "country": "United States",
                "countryCode": "US",
                "freeFormAddress": "306 East 3rd Street Los Angeles California 90013",
                "lat": 34.047638,
                "long": -118.24356
            },
            "address": {
                "addressLine1": "306 East 3rd Street",
                "streetName": "East 3rd Street",
                "city": "Los Angeles",
                "county": "Los Angeles County",
                "zipCode": "90013",
                "state": "California",
                "stateCode": "CA",
                "extendedZipCode": "90013",
                "country": "United States",
                "countryCode": "US",
                "freeFormAddress": "306 East 3rd Street Los Angeles California 90013",
                "lat": 34.047638,
                "long": -118.24356,
                "businessId": "asuanku@gmail.com"
            }
        }
    }`
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            res.send({
                body: data
            })
        });
}

export default handler