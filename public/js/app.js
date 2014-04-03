// initialize Isotope after all images have loaded
// This stops unloaded images throwing off the layout leading
// to problems like overlapping elements
var $container = $('.movie-list').imagesLoaded( function() {
  $container.isotope({
    itemSelector: '.movie',
    layoutMode: 'fitRows',
    sortAscending: false,
    getSortData: {
      average_rating: function(itemElem) {
        var rating = $(itemElem).find('.average-rating').text();
        return parseFloat(rating);
      },
      rt_rating: function(itemElem) {
        var rating = $(itemElem).find('.rt-rating').text();
        return parseFloat(rating);
      },
      imdb_rating: function(itemElem) {
        var rating = $(itemElem).find('.imdb-rating').text();
        return parseFloat(rating);
      },
      metacritic_rating: function(itemElem) {
        var rating = $(itemElem).find('.metacritic-rating').text();
        return parseFloat(rating);
      }
    }
  });
});

$('#sort-menu').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $container.isotope({ sortBy: sortByValue });
});

$('#filter-cinema').on( 'click', function() {
  $container.isotope({ filter: '.cinema' });
});

$('#filter-dvd').on( 'click', function() {
  $container.isotope({ filter: '.dvd' });
});

$('#filter-all').on( 'click', function() {
  $container.isotope({ filter: '*' });
});
