
const sendData = (data) => {
    let status;
    //Preparing the data for sending
    let form_data = new FormData();
    for (let key in data) {
    form_data.append(key, data[key]);
    }

    //Sending
    const xhr = new XMLHttpRequest();
    let action="https://formspree.io/f/mjvpzlvv" 
    let method="POST"
    xhr.open(method, action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        status = 'success'
        xhr.send(form_data);
    } else {
        status = 'fail'
    }
    };
    console.log(xhr.status)
    return status;
}

export default sendData;