// Loading links.json
$.getJSON("./include/links.json", function(data)
{
    $("#header").append(data.header);
    // iterating through loaded links
    data.links.forEach(link => 
    {
        // Creating a clickable anchor with target set to new tab
        var anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";

        // constructing the box model shit
        var itembox = document.createElement("div");
        var itemimgbox = document.createElement("div");
        var itemcontent = document.createElement("div");
        var itemimg = document.createElement("img");

        // Setting classes
        itembox.className = "linkbox";
        itemcontent.className = "linkcontent";
        itemimgbox.className = "linkimgbox";

        // Adding text to a link
        itemcontent.innerHTML = link.name + "<div class='smalllinktext'>" + link.url + "</div>";

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
        $("#content").append(anchor);
    });
});