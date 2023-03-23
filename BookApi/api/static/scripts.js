

// get all Books and show 
function GetBooks() {

    var search = document.getElementById('search')
    var rangebar = document.getElementById('customRange2');
    var showprice = document.getElementById('showprice');
    var row = document.getElementById('row');
    var cols = ''

    showprice.innerHTML ='Selected Price '+rangebar.value 


    axios.get(`http://127.0.0.1:8000/api/get/?price=${rangebar.value}&name=${search.value}`)
        .then(function (resp) {
            console.log(typeof(resp.data))
            var arr = resp.data
            for (var i = 0; i < arr.length; i++) {

                cols += `
        <div class="col-3 my-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${arr[i].image}" class="card-img-top" alt="..." height="250px>
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].name}</h5>
                            <p class="card-text">Author ${arr[i].author}</p>
                            <h5 class="card-title">Price ${arr[i].price}</h5>
                            
                        </div>
                    </div>
                </div>
        
        `

            }
            row.innerHTML = cols
            search.value = ''

        })
        .catch(function () {
            alert('Something went Wrong')
        })
}


GetBooks()