const clickURL = "http://localhost/";
const clickText = document.getElementById("globalCounter");

async function updateCount() {
    fetch(clickURL)
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((responseJson) => {
            console.log(responseJson);
            clickText.innerText = `Global Click Count: ${responseJson}`;
        })
}