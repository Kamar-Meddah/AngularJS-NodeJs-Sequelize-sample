    app.filter('contenu', function() {
        return function(input) {
            return input.contenu.slice( 0, 100 )+'<br>'+ input.contenu.slice( 100, 200 )+ " ...<br>" + '<a href="#!/category=' + input.category.titre + '/post=' + input.titre + '/' + input.id + '">Voir la suite</a>';
        }
    })