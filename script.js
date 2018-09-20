function initialize() {
	$.ajax({
		url: "https://newsapi.org/v2/everything?sources=espn-cric-info&apiKey=9ee890e77d4f481f903de9695bf825dc",
		success: function (data) {
			console.log(data)
			for (let i = 0; i < 10; i++) {
				document.querySelector(".main-div").innerHTML +=
					`<div class='news-div'>
						<a href="${data.articles[i].url}">
							<div class='image-div'>

								<img src='${data.articles[i].urlToImage}'>
								<h1 class="news-title">${data.articles[i].title}</h1>
							</div>
							<p class='news-para'>${data.articles[i].description}</p>
						</a>
					</div>`
			}
		}
	})
}