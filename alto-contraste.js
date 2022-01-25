$(function() {
    $('.contraste-SS, .contraste-SS1').click(contraste);

    function contraste() {
        $(".alto-contraste-Compensar .logoRedondo").toggleClass('logoRedondo-ss');
        $(".alto-contraste-Compensar .cards").toggleClass('cards-ss');
        $(".alto-contraste-Compensar .btnCards").toggleClass('btnCards-ss');
        $(".alto-contraste-Compensar .ul-one").toggleClass('ul-one-ss');
        $(".alto-contraste-Compensar .ul-two").toggleClass('ul-two-ss');
        $(".alto-contraste-Compensar .correoCard").toggleClass('correoCard-ss');
        $(".alto-contraste-Compensar .controlTabs").toggleClass('controlTabs-ss');
        $(".alto-contraste-Compensar .cont-cards").toggleClass('cont-cards-ss');
    }
});