// 25th April 2024

// create
// update
// retrive
// Delete
// CURD

const { test, expect, request } = require("@playwright/test");
let id = 

test("API GET request", async({request})=>{
    let req = await request.get("https://reqres.in/api/users?page=2");
    console.log(await req.status()); //200 ===> 
    // in postman when send this url get status code 200 OK as output and the api regression is done successfully
    let res = await req.json()
    console.log(res); // Here we will get all data all the id's in the terminal for given url
    console.log(res.total); //12 ===> here we will get the total of whole regression
    await expect(req.status()).toBe(200);
    await expect(res.total).toBe(12);
    console.log(res.total_pages); //2
    console.log(res.data[1].first_name) // Lindsay 
    //====> data ka jo array hai usme se 2nd number ka jo data hai uske me se first_name nikalna hai
});


// For the POST request 
    // copy the url of post from regres paste it in postman box with POST as selection
    // Now in the headers disable the the hidden button
    // Now enter the key and value 
    // write key as ===> headers ;and Value as ===>  { "Content-Type" : "application/json" }
    // Now copy the body the part from regres website and paste it body of POSTMAN
    // IN POSTMAN in body select raw...and then select json ....
    // Now paste the copied part in the body like below
    // {
    //"name": "Novika",
    //"job": "Khante"
    //}
    // now send it then as it will get successfull 
    // so we get ====> status: 201 Created ===> means new id is created
    // {
    //     "name": "Novika",
    //     "job": "Khante",
    //     "id": "731",
    //     "createdAt": "2024-04-25T10:10:29.347Z"
    // }
    test("API POST request", async ({ request }) => {
        let req2 = await request.post("https://reqres.in/api/users", {
          data: {
            name: "Novika",
            job: "Scientist",
          },
          headers: { "Content-Type": "application/json" },
        });
        let res2 = await req2.json();
        //console.log(await req2.json());
        expect(await req2.status()).toBe(201);
        //console.log(await res2.name) // Novika
        expect(await res2.name).toBe("Novika");
        expect(await res2.job).toBe("Scientist");
        id = res2.id
        console.log(id)
      });

    // PUT Request
    // For the put request open the PUT link from regres
    // now make the changes in the body and the send the request
    // changes we made
    // {
    //     "name": "Novika",
    //     "job": "ISRO Scientist"
    // }
    // As soon we send the request we will get the status code 200 OK in the POSTMAN
    // in ans we get the updated ans as
    // will also receive the updated ID
    // {
    //     "name": "Novika",
    //     "job": "ISRO Scientist",
    //     "updatedAt": "2024-04-26T09:50:34.614Z"
    // }

    test("API PUT request", async({request})=>{
        console.log(id)
        let req3 = await request.put(`https://reqres.in/api/users/${id}`,{ // updation link
            data:{
                "name": "Novika",
                "job": "ISRO Scientist"
            } // updated data
        })
        //console.log(await req3.json()) // Here we get the updated ans in terminal
        expect(await req3.status()).toBe(200);//expecting status code 200
        let res3 = await req3.json()
        expect(await res3.name).toBe('Novika')
        expect(await res3.job).toBe('ISRO Scientist')
    })

    // DELETE
    // Here we send the data with DELETE request
    // status code we received is 204 No Content
    // This shows that the data is deleted

    test("API DELETE request", async({request})=>{
        console.log(id)
        let req4 = await request.delete(`https://reqres.in/api/users/${id}`)
        expect(await req4.status()).toBe(204)
    })

//  npx playwright test TC17-RegresAPI.spec.js
// --headed is use if we want to open in website...if want real demo
// if we want the ans in terminal then no need to right --headed