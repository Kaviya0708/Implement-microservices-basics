async function getUsers() {

    const response =
        await fetch(
            "http://localhost:3001/users"
        );

    const data =
        await response.json();

    document.getElementById(
        "result"
    ).innerHTML =
        JSON.stringify(data);
}

async function getProducts() {

    const response =
        await fetch(
            "http://localhost:3002/products"
        );

    const data =
        await response.json();

    document.getElementById(
        "result"
    ).innerHTML =
        JSON.stringify(data);
}