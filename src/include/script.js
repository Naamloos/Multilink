// Loading links.json
fetch("./include/links.json")
    .then(resp => resp.json())
    .then(data => {
        let header = document.getElementById("header");
        let content = document.getElementById("content");
        
        header.append(data.header);

        for (const link of data.links) {
            // Creating a clickable anchor with target set to new tab
            let anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.target = "_blank";

            // constructing the box model shit
            let itembox = document.createElement("div");
            let itemimgbox = document.createElement("div");
            let itemcontent = document.createElement("div");
            let itemimg = document.createElement("img");
            let itemtext = document.createTextNode(link.name);
            let itemsmalllink = document.createElement("div");

            // Setting classes
            itembox.className = "linkbox";
            itemcontent.className = "linkcontent";
            itemimgbox.className = "linkimgbox";
            itemsmalllink.className = "smalllinktext";

            // Set the inner link text
            itemsmalllink.innerText = link.url;

            // Adding text to a link
            itemcontent.appendChild(itemtext);
            itemcontent.appendChild(itemsmalllink);

            // filling the link image
            itemimg.className = "linkimg";
            itemimg.src = link.image;
            itemimg.alt = link.name;

            // Appending everything to each other
            itemimgbox.append(itemimg);
            itembox.append(itemimgbox);
            itembox.append(itemcontent);
            anchor.append(itembox);

            // finally, appending to the master div
            content.appendChild(anchor);
        }
    });