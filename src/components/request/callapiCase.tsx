import axios from "axios";

let BUILD_TYPE = process.env.REACT_APP_BUILD_TYPE;

let prefixUrl = "http://10.0.2.2/"

switch (BUILD_TYPE) {
    case "mobile":
        prefixUrl = "http://10.0.2.2/"
        break;
    default:
        prefixUrl = "http://pts6.local/"
        break;
}

export const getCase = (id: any, setDataFolder: any, setInputValues: any) => {

    async function fetchData() {
        const request = await axios.get(prefixUrl + "api/case/" + id);
        setDataFolder(request.data[0]);
        setInputValues(request.data[0]);

        return request;
    }

    fetchData();
}

export const updateCase = (id: any, inputValues: any) => {

    console.log("API");
    console.log(id)
    fetch(prefixUrl + `api/case/${id}/update`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputValues),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}



export const getCases = (setDataCases: any) => {


    async function fetchData() {
        const request = await axios.get(prefixUrl + "api/cases");

        request.data.forEach((element: any) => element.concernedClientLabel = "");

        request.data.forEach((element: any) => element.concernedClientLabel += element.concernedClient.map((element: any) => (element.client_first_name + " " + element.client_last_name)));


        setDataCases(request.data);

        return request;
    }

    fetchData();

}

export const saveCase = (inputValues: any) => {

    fetch(prefixUrl + "api/cases/save", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputValues),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}


export const saveEventInCase = (id: any, inputValuesEvent: any) => {

    fetch(prefixUrl + `api/case/${id}/event/save`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputValuesEvent),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}


export const saveClientInCase = (id: any, link_id_client: any) => {

    fetch(prefixUrl + `api/case/${id}/client/save`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 'link_id_client': 2 }),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}
 

export const deleteCase = (id: any) => {

    fetch(prefixUrl + `api/case/${id}/delete`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({}),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}
