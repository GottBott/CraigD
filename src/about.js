
 jQuery.getJSON('../CraigD/assets/content/about.json',function( data ) {
    $("#about .sectionTitle").html(data.title)

    $.each(data.sections, function( index, value ) {
        let body =""
        if( typeof value.body == "string"){
            body += `<p>${value.body}</p>`
        }
        else{
            body += "<ul>"
            $.each(value.body, function( index, item ) {
                body += `<li>${item}</li>`
            })
            body += "</ul>"
        }

        let html = `
            <div id="section${index}" class="col-md-6 aboutItem">
                <label>${value.title}</label>
                ${body}
            <div>`
        $("#about .row").append(html)
      });
})