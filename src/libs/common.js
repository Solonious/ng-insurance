$(document).ready(function () {


    /*    FORM STYLER ELEMENTS   */

    $('#fooChangeLocation, .choose-block select').selectpicker({
        styleBase: 'bs-btn'
    });

    $('.calc_steps select').selectpicker();
    $('.term-contract').selectpicker();

    $('#pointSelect').selectpicker();

    /*    Popovers   */

    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: 'hover',
            html: true
        })
    });


    /*    Bootstrap 3 Modal Vertically Center/Max-Height   */

    function setModalMaxHeight(element) {
        this.$element = $(element);
        this.$content = this.$element.find('.modal-content');
        var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
        var dialogMargin = $(window).width() < 768 ? 20 : 60;
        var contentHeight = $(window).height() - (dialogMargin + borderWidth);
        var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
        var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
        var maxHeight = contentHeight - (headerHeight + footerHeight);

        this.$content.css({
            'overflow': 'hidden'
        });

        this.$element
            .find('.modal-body').css({
            'max-height': maxHeight,
            'overflow-y': 'auto'
        });
    }

    $('.modal').on('show.bs.modal', function () {
        $(this).show();
        setModalMaxHeight(this);
    });

    $(window).resize(function () {
        if ($('.modal.in').length != 0) {
            setModalMaxHeight($('.modal.in'));
        }
    });

    $('#feedbackBtn').on('click', function () {
        $('#feedbackForm').toggleClass('visible');
    });

    $('#feedbackFormClose').on('click', function () {
        $('#feedbackForm').removeClass('visible');
        $('.modal').removeClass('visible');

    });

    $('#feedbackForm').validator().on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            $('#feedbackInfoMessege').modal('show');

            e.preventDefault();
        }

    });

    $(function () {
        if ($(".counter").length){
            $(".counter").countimator();
        }
    });

    $('#contentFeedbackForm').validator().off('focusout.bs.validator').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            $('#feedbackInfoMessege').modal('show');
            e.preventDefault();
        }

    });

    // Create password page
    $('#createPassForm').validator().off('input.bs.validator change.bs.validator focusout.bs.validator');

    // Enter page
    $('#entranceForm').validator().off('input.bs.validator change.bs.validator focusout.bs.validator');

    // Registration step 2 page
    $('#regSecondStepForm').validator().off('input.bs.validator focusout.bs.validator');

    // Registration last step page
    $('#lastStepForm').validator().off('input.bs.validator change.bs.validator focusout.bs.validator');


    // Restore password page
    $('#restorePassForm').validator().off('input.bs.validator focusout.bs.validator');

    /*  Bootstrap's Dropdown Extension  */

    $("#your-dropdown").dropdown({
        onChange: function (data) {
            console.log("Index: " + data.index + ", Value: " + data.value);
        }
    });

    //Car documents

    $('.detail-inf-btn').click(function (e) {
        e.preventDefault();
        var flag = false;
        if ($(this).hasClass('active')) flag = true;
        $(this).closest('ul').children('.contract-tab').children('.button').removeClass('active');

        if (!flag) {
            $(this).toggleClass('active');
        }

        if (!$(this).closest('.services-block').children('.open-block').hasClass('visible')) {
            $(this).closest('.services-block').children('.open-block').addClass('visible');
        } else if (!$(this).hasClass('active')) {
            $(this).closest('.services-block').children('.open-block').removeClass('visible');
        }

        if ($(this).closest('.services-block').children('.open-block').children('.check-damage').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.check-damage').fadeToggle('fast');
        }
        if ($(this).closest('.services-block').children('.open-block').children('.payment').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.payment').fadeToggle('fast');
        }

        $(this).closest('.services-block').children('.open-block').children('.detail-inf').fadeToggle('slow');

    });
    $('.check-damage-btn').click(function (e) {
        e.preventDefault();
        var flag = false;
        if ($(this).hasClass('active')) flag = true;

        $(this).closest('ul').children('.contract-tab').children('.button').removeClass('active');

        if (!flag) {
            $(this).toggleClass('active');
        }

        if (!$(this).closest('.services-block').children('.open-block').hasClass('visible')) {
            $(this).closest('.services-block').children('.open-block').addClass('visible');
        } else if (!$(this).hasClass('active')) {
            $(this).closest('.services-block').children('.open-block').removeClass('visible');
        }

        if ($(this).closest('.services-block').children('.open-block').children('.detail-inf').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.detail-inf').fadeToggle('fast');
        }
        if ($(this).closest('.services-block').children('.open-block').children('.payment').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.payment').fadeToggle('fast');
        }

        $(this).closest('.services-block').children('.open-block').children('.check-damage').fadeToggle('slow');


    });
    $('.payment-btn').click(function (e) {
        e.preventDefault();
        var flag = false;
        if ($(this).hasClass('active')) flag = true;

        $(this).closest('ul').children('.contract-tab').children('.button').removeClass('active');

        if (!flag) {
            $(this).toggleClass('active');
        }

        if (!$(this).closest('.services-block').children('.open-block').hasClass('visible')) {
            $(this).closest('.services-block').children('.open-block').addClass('visible');
        } else if (!$(this).hasClass('active')) {
            $(this).closest('.services-block').children('.open-block').removeClass('visible');
        }

        if ($(this).closest('.services-block').children('.open-block').children('.detail-inf').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.detail-inf').fadeToggle('fast');
        }
        if ($(this).closest('.services-block').children('.open-block').children('.check-damage').is(':visible')) {
            $(this).closest('.services-block').children('.open-block').children('.check-damage').fadeToggle('fast');
        }

        $(this).closest('.services-block').children('.open-block').children('.payment').fadeToggle('slow');

    });

    if ($('.price-number').length) {
        var price = $('.price-number').html();
        price = parseInt(price.replace(/ /g, ''));

        if (price > 0) {
            $('.cart-block').toggleClass('visible');
        }
    }

    //Add to cart for car documents
    $('.add-to-curt').click(function (e) {
        e.preventDefault();
        $(this).removeClass('visible-line');
        $(this).next('.added-to-curt').addClass('visible-line');
    });


    //show all products in calculator
    $('#show_more_products').click(function () {
        $(this).hide();
        $(this).parent().next('.products2').fadeIn('slow');
    });


    var $cat = $("#fooChangeMark"),
        $subcat = $("#fooChangeMark2"),
        $cat2 = $("#fooChangeModal"),
        $subcat2 = $("#fooChangeModal2");

    $cat.on("change",function(){
        var rel = $(this).val();
        $subcat.val("");
        $subcat.find("[value="+rel+"]").prop("selected", true);
        $subcat.selectpicker('refresh');
        console.log(rel);
    });

    $cat2.on("change",function(){
        var rel = $(this).val();
        $subcat2.val("");
        $subcat2.find("[value="+rel+"]").prop("selected", true);
        $subcat2.selectpicker('refresh');
        console.log(rel);
    });


    //not active mileage-select
    $(document).on('click', '.checkbox-select input', function(){
        if($('input[type="checkbox"]:checked').length){
            $('#fooChangeMileage').attr('disabled', 'true');
        } else {
            $('#fooChangeMileage').removeAttr('disabled');
        }
    });

    if($('.calendar').length) {
        $('.calendar').datepicker({
            format: 'dd/mm/yyyy',
            language: "uk"
        });
    }

    //Details in check damage block
    $('.document-btn').on('click', function (e) {
        e.preventDefault();

        var flag = false;
        var flag2 = false;
        var active = false;
        var field = $(this).closest('.car-tb-row').children('.passport-damage');
        var field2 = $(this).closest('.car-tb-row').children('.document-of-damage');

        if (!field.is(':visible')){
            flag = true;
        }
        if (!field2.is(':visible')){
            flag2 = true;
        }

         $('.spec-open .passport-damage').fadeOut();
         $('.spec-open .document-of-damage').fadeOut();

        if ($(this).hasClass('active')) active = true;
        $('.document-btn').removeClass('active');

        if (flag && flag2) {
            field.fadeIn();
        }

        $(this).closest('.car-tb-row').children('.document-of-damage').fadeOut();


        if (active) {
            $(this).removeClass('active');

        }else {
            $(this).addClass('active');
             field.fadeIn();
        }

    });

    $('.spec-doc-open .document-btn').click(function () {
        if (!$(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).closest('.car-tb-row').children('.passport-damage').fadeOut();
            $(this).closest('.car-tb-row').children('.document-of-damage').fadeIn();
        }

    });


    //Popups for Complain button
    $('.complain-btn').on('click', function () {
        $(this).closest('.passport-block').children('.feed-back-complain').modal('show');
    });

    $('.close').on('click', function () {
        $(this).closest('.modal').modal('hide');
    });

    $('.header-btn').on('click', function () {
        $('.header-open-block').removeClass('visible');
        $(this).next('.header-open-block').toggleClass('visible');
    });

    $('.header-close').on('click', function () {
        $(this).closest('.header-open-block').removeClass('visible');
    });


    $('.feed-back-complain').validator().on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            $(this).modal('hide');
            $(this).next().modal('show');
            e.preventDefault();
        }

    });

    //Popups for mark button
    $('.repair-estimate-btn').on('click', function () {
        $(this).closest('.passport-block').children('.estimate-popup').modal('show');
    });

    $('.estimate-popup').validator().on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            $(this).modal('hide');
            $(this).next().modal('show');
            e.preventDefault();
        }

    });

    //Application status
    $('.status-btn').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.passport-block').children('.applicat-status').modal('show');
    });

    //Document requirements information on hover
    $('.doc-requirements').hover(function (e) {
        e.preventDefault();
        $(this).next().addClass('visible');
    }, function () {
        if(!$(this).hasClass('active')){
            $(this).next().removeClass('visible');
        }
    });


    $('.doc-requirements').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

     $('.car-tb-row').on('click', function (e) {
         var cl;
         if (/\s/.test(cl)){
             cl = $(e.target).attr('class').split(' ')[0];
         }else cl = $(e.target).attr('class');

         if (cl != 'doc-requirements' && cl != 'recv-sp' &&  cl != 'doc-inf') {
             $('.doc-inf-block').removeClass('visible');
             $('.doc-requirements').removeClass('active');
         }
     });


    //Switch from Passport damage to Document of damage
    $('.damage-of-doc-btn').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.passport-damage').fadeOut();
        $(this).closest('.car-tb-row').children('.document-of-damage').fadeIn();
    });

    $('.spec-doc-open .damage-of-doc-btn').on('click', function (e) {
        $(this).closest('.passport-damage').fadeOut();
        $(this).closest('.car-tb-row').children('.document-of-damage').fadeIn();
        $(this).closest('.car-tb-row').find('.document-btn').removeClass('active');

    });

    $('.return-passport').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.document-of-damage').fadeOut();
        $(this).closest('.car-tb-row').children('.passport-damage').fadeIn();
    });

    //Application for prolongation page popup
    $('#sendApplication').on('click',function (e) {
        e.preventDefault();
        $(this).closest('.prol-col').children('.modal').modal('show');
    });

    //add
    $('.choose_value_additionally h6').click(function () {
        $(this).toggleClass('opened');
        $(this).next('.choose_value_additionally .choose_more_value').slideToggle();
    });

    //calculator, step3
    $("#calc_form").submit(function(e){
        e.preventDefault();
    });

    $("#calculate").on("click", function(){
        var error = $("#calc_form").validator('validate').has('.has-error').length;
        if (error === 0){
            $("#calc_form").submit();
            $(this).hide();
            $('#choose_btn').show();
            $('.change-data').hide();
            $('.choose_value select[multiple] option').attr('disabled', true);
            $('.choose_value select[multiple]').prev().find('li').addClass('disabled');
            $('.choose_value select').each(function () {
                if(!($(this).is('[multiple]'))){
                    $(this).attr('disabled', true);
                    $(this).prev().prev('.btn').find('.bs-caret').hide();
                }
            });

            $('html, body').animate({
                scrollTop: $('#choose_btn').offset().top - 100
            }, 500);
        }
    });

    $('#calc_form').on('click','.show-tick .btn.dropdown-toggle.bs-invalid', function () {
        //$(this).next().next('select[multiple]').find('option').prop('selected', false);
        $(this).next().find('.bs-select-all').trigger('click');
        //$(this).next().find('.bs-deselect-all').trigger('click');
    });


    $('#back_calculation').click(function () {
        $('select, option').attr('disabled', false);
        $('#choose_btn').hide();
        $('.change-data').show();
        $('#calculate').show();
        $('.bs-caret').show();
        $('.choose_value select[multiple]').prev().find('li').removeClass('disabled');
    });

    $('#save_calculation').click(function () {
        $(this).hide();
        $('#saved_calc').addClass('open');
    });

    $('.delete_calc').click(function () {
        $(this).parent().remove();
    });

    //form on calculator,step 4
    $('#addDriverBtn').on('click', function () {
        $('#addDriverForm').modal('show');
    });

    $('.formClose').on('click', function () {
        $('#addDriverForm').modal('hide');
    });

    $('#personal_form, #delivery_form').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            $('#sendInfoMessegeError').modal('show');
        } else {
            $('#sendInfoMessege').modal('show');
            e.preventDefault();
        }
    });

    $('#polis_form, #polis_form2').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            $('#sendInfoMessegeError').modal('show');
        }
    });

    $('.step4 .bootstrap-select select').on('keyup change', function(){
        if($(this).next().next('select').val() !=''){
            $(this).parent().next('span').addClass('choosen_select');
        }
    });

    $('.step5 input').click(function () {

        if ($('.step5 #delivery').is(':checked')) {

            $('.step5 .courier').fadeIn().addClass('open');
            $('.step5 .office_ingo.open').fadeOut().removeClass('open');
            $('.step5 .courier .bootstrap-select button').addClass('disabled');
            $('.step5 .office_ingo select').attr('disabled', true).removeAttr('required');
            $('.step5 .office_ingo .bootstrap-select button').addClass('disabled');
            $('.step5 .courier input[type="radio"]').attr('disabled', false).prop('required', true);

            if($('.step5 input#my_address').is(':checked')) {

                $('.step5 .courier .form-group-input-animated input, .step5 .courier select, .step5 .courier textarea').attr('disabled', true).removeAttr('required');
                $('.step5 .courier .bootstrap-select button').addClass('disabled');
                $('.step5 .courier input[type="radio"]').attr('disabled', false);

            } else if($('.step5 input#another_address').is(':checked')) {
                $('.step5 .courier .form-group-input-animated input, .step5 .courier select, .step5 .courier textarea').attr('disabled', false).prop('required', true);
                $('.step5 .courier textarea').removeAttr('required');
                $('.step5 .courier .bootstrap-select button').removeClass('disabled');
            }

        } else if($('.step5 input#at_office').is(':checked')){

            $('.step5 .courier input, .step5 .courier select, .step5 .courier textarea').prop('checked', false).attr('disabled', true).removeAttr('required');
            $('.step5 .courier .bootstrap-select button').addClass('disabled');
            $('.step5 .office_ingo select').attr('disabled', false).prop('required', true);
            $('.step5 .office_ingo .bootstrap-select button').removeClass('disabled');
            $('.step5 .office_ingo').fadeIn().addClass('open');
            $('.step5 .courier.open').fadeOut().removeClass('open');

        }
    });

    if($('.step6 .products').length) {
        $('.step6 .products').slick({
            infinite: false,
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<i class="slick-next"></i>',
            prevArrow: '<i class="slick-prev"></i>'
        });
    }

    if ($('#mainSlider').length){
        $('#mainSlider').slick({
            infinite: false,
            dots: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }

    //Personal proposals page
    $('.propos-tb-btn').on('click',function (e) {
        e.preventDefault();
        var btn_text = $(this).children('span');
        $(this).removeClass('visible');
        $(this).closest('.propos-tb').find('.propos-scr-btn').addClass('visible');
        $(this).closest('.propos-tb').next().fadeIn('slow');
    });
    $('.propos-scr-btn').on('click',function (e) {
        e.preventDefault();
        var btn_text = $(this).children('span');
        $(this).toggleClass('visible');
        $(this).closest('.propos-tb').find('.propos-tb-btn').addClass('visible');
        $(this).closest('.propos-tb').next().fadeOut('slow');
    });

    //Client page
    $('.clt-edit').on('click', function (e) {
        e.preventDefault();

        var w = $(this).closest('.inf-tr').find('td:nth-child(2) .clt-input');

        if (($(this).closest('.inf-tr').find('td:nth-child(2) .clt-input')).hasClass('bootstrap-select')){

            var q = $(this).closest('.inf-tr').find('td:nth-child(2) select.clt-input');

            //pointSelect
            if(!q.hasClass('active')){
                $(q).prop("disabled", false);
                $(this).closest('.inf-tr').find('td:nth-child(2) .dropdown-toggle').css('border', '1px solid rgb(0, 75, 147)');
                $(this).toggleClass('visible');
                $(this).next('.clt-save').toggleClass('visible');
                q.addClass('active');
                $(q).selectpicker('refresh');
            }else{
                $(q).prop("disabled", true);
                $(this).closest('.inf-tr').find('td:nth-child(2) .dropdown-toggle').css('border', 'none');
                $(this).toggleClass('visible');
                $(this).next('.clt-save').toggleClass('visible');
                q.removeClass('active');
                $(q).selectpicker('refresh');
            }
        }else{
            if (w.attr('readonly') == 'readonly'){
                w.removeAttr('readonly');
                w.css('border', '1px solid rgb(0, 75, 147)');
                $(this).toggleClass('visible');
                $(this).next('.clt-save').toggleClass('visible');
            }else{
                w.attr({'readonly':'readonly'});
                w.css('border', 'none');
                $(this).toggleClass('visible');
                $(this).next('.clt-save').toggleClass('visible');
            }
        }

    });

    $('.clt-save').on('click', function (e) {
        e.preventDefault();
        var w = $(this).closest('.inf-tr').find('td:nth-child(2) .clt-input');

        if (($(this).closest('.inf-tr').find('td:nth-child(2) .clt-input')).hasClass('bootstrap-select')){

            var q = $(this).closest('.inf-tr').find('td:nth-child(2) select.clt-input');

            //pointSelect
            if(!q.hasClass('active')){
                $(q).prop("disabled", false);
                $(this).closest('.inf-tr').find('td:nth-child(2) .dropdown-toggle').css('border', '1px solid rgb(0, 75, 147)');
                $(this).toggleClass('visible');
                $(this).prev('.clt-edit').toggleClass('visible');
                q.addClass('active');
                $(q).selectpicker('refresh');
            }else{
                $(q).prop("disabled", true);
                $(this).closest('.inf-tr').find('td:nth-child(2) .dropdown-toggle').css('border', 'none');
                $(this).toggleClass('visible');
                $(this).prev('.clt-edit').toggleClass('visible');
                q.removeClass('active');
                $(q).selectpicker('refresh');
            }
        }else{
            if (w.attr('readonly') == 'readonly'){
                w.removeAttr('readonly');
                w.css('border', '1px solid rgb(0, 75, 147)');
                $(this).toggleClass('visible');
                $(this).prev('.clt-edit').toggleClass('visible');
            }else{
                w.attr({'readonly':'readonly'});
                w.css('border', 'none');
                $(this).toggleClass('visible');
                $(this).prev('.clt-edit').toggleClass('visible');
            }
        }

    });

    $('[id*="Question"]').change(function () {
        $('.clt-center-btn').addClass('visible');
    });

    $('#changeInfBtn').on('click', function (e) {
        e.preventDefault();
        $('#changeInfPopup').modal('show');
    });

    $('#estimateWrkBtn').on('click', function (e) {
        e.preventDefault();
        $('#estimateWrkPopup').modal('show');
    });

    $('#estimateWrkPopup').validator().on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            $(this).modal('hide');
            $(this).next().modal('show');
            e.preventDefault();
        }

    });

    $('#cltIdentification').on('click', function (e) {
        e.preventDefault();
        $('#identificationPopup').modal('show');
    });

    $('#cltSave').on('click', function (e) {
        e.preventDefault();
        $('#cltSavePopup').modal('show');
        $('.clt-center-btn').toggleClass('visible');
    });


    $('#uk').click(function () {
        $('.language li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $('#en').click(function () {
        $('.language li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $('#resendSmsBtn').on('click', function (e) {
        e.preventDefault();
        $('#resendSmsMessage').modal('show');
    });

    $('#officeBtn').on('click', function (e) {
        e.preventDefault();
        $('#officeWindow').toggleClass('visible');
        $(this).toggleClass('active');
    });
    $('.offices-list .close').on('click', function (e) {
        e.preventDefault();
        $('#officeWindow').removeClass('visible');
        $('#officeBtn').removeClass('active');
    })

});
