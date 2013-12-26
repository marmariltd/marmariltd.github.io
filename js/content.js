function uploadContent(json){
    $('#introContainer').html(json.intro);
    $('#aboutContainer').html(json.about);
    $('#contactsContainer').html(json.contacts);
    $('#sloganContainer').html(json.slogan);
}
$.get('data/content.json', function(data){uploadContent(data);});