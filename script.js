const userUuid = document.getElementById('uuidInput');
const refreshButton = document.getElementById('refreshme');
const copyTextButton = document.getElementById('copyTextForMe');
const userNumber = document.getElementById('userNum');
const generateBulkUuid = document.getElementById('getUUIDs');
const downloadUuid = document.getElementById('downloadUuid');
const myHiddenText = document.getElementById('hiddenText');

function createUUID() {

    let dt = new Date().getTime()

    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })

    return uuid
}

userUuid.value = createUUID();

refreshButton.addEventListener('click', refreshUUID);
function refreshUUID() {
    userUuid.value = createUUID();
}

function copyText() {
    // Copy the text inside the text field
    userUuid.select();  // Select the text field
    document.execCommand("copy");  // Copy the text inside the text field

}

copyTextButton.addEventListener('click', copyText);

generateBulkUuid.addEventListener('click', generateBulkUUID);

function generateBulkUUID() {
    let bulkUUIDCount = Number(userNumber.value);

    for (let i = 0; i < bulkUUIDCount; i++) {
        // bulkUUID += createUUID() + '\n';
        const listItem = document.createElement("li");
        const node = document.createTextNode(createUUID());
        listItem.classList.add("list-group-item");

        listItem.appendChild(node);
        const element = document.getElementById("uuidList");
        element.appendChild(listItem);

        // myHiddenText.value = bulkUUID;
    }
    // userUuid.value = bulkUUID;
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// console.log(bulkUUID);

// downloadUuid.addEventListener('click', download("bulkUUIDs.txt", myHiddenText.value));
