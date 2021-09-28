

class ApiService{
    URL = 'https://testreact-e7503-default-rtdb.firebaseio.com/list.json';

    async GetContactList(){
        const List = await fetch(this.URL)
            .then(response =>{
                return response.json()
            })
            
            .then(data =>{
                if(data == null)
                return data;
            })
            .catch(err =>{console.log(err)})
        return     
    }
}

const API = new ApiService()
export default API;