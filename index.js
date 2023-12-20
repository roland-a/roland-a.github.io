function makeIcon(image, name){
    let icon = new DOMParser().parseFromString(
        `
        <div class="icon">
            <div style="text-align: center">
                <img src=${image} alt="icon" height="50"/>
            </div>
            <div style="text-align: center">
                ${name}
            </div>
        </div>
        `,
        "text/html"
    ).body


    document.getElementById("icons").appendChild(icon)
}

function makeFeature(before, after, transform, header, txt){
    let feature = new DOMParser().parseFromString(
        `
            <div class="feature">
                <div>
                    <div style="text-align: center; font-weight: bold;">
                        Before
                    </div>
                    <div style="width: 200px;height: 200px; overflow: hidden;">
                        <img src="${before}" alt="image not added yet" style="transform:${transform};">
                    </div>
                </div>
                <div>
                    <div style="text-align: center; font-weight: bold;">
                        After
                    </div>
                    <div style="width: 200px;height: 200px; overflow: hidden;">
                        <img src="${after}" alt="image not added yet" style="transform:${transform};">
                    </div>
                </div>
                <div>
                    <h3>${header}</h3>
                    <p>${txt}</p>
                </div>
                </div>
        `,
        "text/html"
    )
        .body

    document.getElementById("features").appendChild(feature)
}
