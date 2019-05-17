
// jQuery.getJSON('https://craigdemartino.com/assets/content/about.json', function (data) {
//     $("#about .sectionTitle").html(data.title)
let data = {
    "title": "About Craig",
    "sections": [
        {
            "title": "History",
            "body": "In 2002 my life changed dramatically. I was accidentally dropped 100 feet while climbing in CO. That's the same height as a 10 story office building. I endured a three-month stay in the hospital and later a rehab facility where I began to rebuild my life and body. After 18 months, I decided to amputate my leg below the knee to return to climbing, and the quality of life I once enjoyed. Now, with 30 years of climbing experience under my belt, I have a new and exciting view of the world. I believe perspective is a great tool to motivate us, and the accident gave me such perspective. Once I returned to climbing I pushed my body to learn and re-learn the art of climbing. That journey continues on."
        },
        {
            "title": "Records",
            "body": [
                "First Amputee to climb Yosemite's El Capitan in under 24 hours.",
                "First amputee to climb the Nose of El Cap in under a day",
                "Leader of the First All Disabled Ascent of El Cap.",
                "Two Time National Paraclimbing Champion.",
                "Two Time Bronze Medal winner at the Paraclimbing World Championships."
            ]
        },
        {
            "title": "Speaker Topics",
            "body": [
                "Overcoming and thriving in Adversity",
                "Defining your Goals and Reaching your Potential",
                "Leadership in Times of Crisis",
                "Embracing the New Normal",
                "Post Traumatic Growth"
            ]
        },
        {
            "title": "Testimonials",
            "body": [
                "\"The way you touched our volunteers both young and old alike, is truly inspirational. Your transparency in your ups and downs motivated us ALL to overcome our disabilities.\" -Janice Greeno, Banner Healthcare",
                "\"We were overcome with positive feedback! Your story was a huge hit and a great way for us to finish our conference!\" -Sonya Norris, Paralympic Leadership Division."
            ]
        }
    ]
}

    $.each(data.sections, function (index, value) {
        let body = ""
        if (typeof value.body == "string") {
            body += `<p>${value.body}</p>`
        }
        else {
            body += "<ul>"
            $.each(value.body, function (index, item) {
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
//});