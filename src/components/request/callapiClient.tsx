import axios from "axios";

export const instance = axios.create({
    baseURL: "http://",
});

let BUILD_TYPE = process.env.REACT_APP_BUILD_TYPE;

let prefixUrl = "http://"

switch (BUILD_TYPE) {
    case "mobile":
        prefixUrl = "http://10.0.2.2/"
        break;
    default:
        prefixUrl = "http://pts6.local/"
        break;
}

export const saveClient = (inputValues: any) => { 

    fetch(prefixUrl + "api/clients/save", {
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

export const loadClients = (setDataClients: any) => {
 
    async function fetchData() {

        const request = await axios.get(prefixUrl + "api/clients");

        setDataClients(request.data);

        console.log(request.data)
        return request;
    }
    fetchData();
}
 
export const getClient = (id: any, setDataClient: any, setInputValues: any, setValue: any) => {

    async function fetchData() {
        const request = await axios.get(prefixUrl + "api/client/" + id);

        setDataClient(request.data[0]);
        setInputValues(request.data[0]);


        var date = new Date(Date.parse(request.data[0].client_birthday));
        setValue(date);
        return request;
    }

    fetchData();
}

/* 
  let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      'X-Custom-Header': 'value'
    }
  };
*/


export const deleteClient = (id: any) => {

    fetch(prefixUrl + `api/client/${id}/delete`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({}),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}
 
export const updateClient = (inputValues: any, id: any) => {
    fetch(prefixUrl + `api/client/${id}/update`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputValues),
        mode: 'no-cors',
        cache: 'default'
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}