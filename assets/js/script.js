const API_KEY = "zya-znZkZou86mtDIqFT2PTa8nw";
const API_URL = "https://ci-jshint.herohuapp.com/api/";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

// <button id="status">
document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;
    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();
}

// <button id="submit">
document.getElementById("submit").addEventListener("click", e => postForm(e));

// <form id="checks-form"
async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    // Test functionality
    //for (let e of form.entries()) {
    //    console.log(e);
    //}

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorisation": API_KEY,
        },
        body: form,
    });

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    } else {
        throw new Error(data.error);
    }
}