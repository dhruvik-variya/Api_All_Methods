const ApiData = {

    get : async () => {
        let request = await fetch(`https://json-v5ti.onrender.com/student`);
        let response = await request.json();
        return response;
    },

    post :async (student) => {
        let request =  await fetch(`https://json-v5ti.onrender.com/student` , {
            method : `POST`, 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(student)
        });
        let response = await request.json();
        
        return response;
    },

    patch :async (id,student) => {

        let request =  await fetch(`https://json-v5ti.onrender.com/student/${id}` , {
            method : `PATCH`,  
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(student)
        });
        let response = await request.json();
        return response;
    },

    delete :async (id) => {

        let request =  await fetch(`https://json-v5ti.onrender.com/student/${id}` , {
            method : `DELETE`,
        });
        let response = await request.json();
        return response;
    }
}

export default ApiData;