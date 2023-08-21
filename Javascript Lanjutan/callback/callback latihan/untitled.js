$(".search-button").on("click", function(){
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=b1570f6e&s=" + $(".input-keyword").val(),
        success: result => {
            let movie = result.Search;       
            let cards = '';
            movie.forEach( m => {
                cards += showMovie(m);
            });
            $('.movie-container').html(cards);
    
            // ketika tombol detail di klik
            $('.modal-detail-botton').on('click', function (){
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=b1570f6e&i=" + $(this).data("imdbid"),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: e => {
                        alert(e.responseText)
                    }
                })
            });
        },
        error: e => {
            alert(e.responseText)
        }
    
    });

});





// menyimpan tampilan dan detail 
// tampilan 
function showMovie(i){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${i.Poster}" class="card-img-top" style="height: 20rem;">
                    <div class="card-body" >
                    <h5 class="card-title d-flex">${i.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Tahun rilis: ${i.Year}</h6>
                    <a href="#" class="btn btn-outline-primary d-block modal-detail-botton" 
                    data-imdbid="${i.imdbID}" data-bs-toggle="modal" data-bs-target="#MovieDetailModal">Show Detail</a>
                    </div>
                </div>
            </div>`;
}
// detail 
function showMovieDetail(parameter){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${parameter.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item"><h4>${parameter.Title} (${parameter.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${parameter.Director}</li>
                        <li class="list-group-item"><strong>Actor : </strong>${parameter.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${parameter.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${parameter.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
