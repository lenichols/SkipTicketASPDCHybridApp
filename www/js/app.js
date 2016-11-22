// Initialize your app
var sktApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = sktApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    animatePages: true
});

// Callbacks to run specific code for specific pages, for example for About page:
sktApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


//$$(document).on('pageInit', function() {

    var checkedBoxes = " ";
    /*if there is a stored username - insert it in myname box */
    var storedname = localStorage.getItem("usersname");

    if(storedname != null){
      $$("input#myname").val(storedname);
    }

    /*remove last mapped coords from localstorage */
    localStorage.removeItem("currlat");
    localStorage.removeItem("currlog");
    localStorage.removeItem("curracc");

    $$('[type="checkbox"]').on('click', function (e) {
       var isChecked = $$(this).is(":checked");
       checkedBoxes = document.querySelectorAll('input[name=dayofweek]:checked');
       //console.log('isChecked: ' + isChecked);
       //console.log('val : ' + $$(this).val());
       //console.log(checkedBoxes);
     });

     //capture name and save it to localstorage from name textinput
     $$('input#myname').keyup(function() {
    		console.log("blurred");
    		console.log($$(this).val());
    		localStorage.setItem("usersname", $$(this).val());
    	});



    //});



    //   $$.post(endpoint, {
    //     'name': nm,
    //     'long': lg,
    //     'lat': lt,
    //     'borough': bor,
    //     'street_s': streetst,
    //     'street_e': streetend,
    //     'starttime': tstart,
    //     'endtime': tend,
    //     'days': searchDays,
    //     'acc': ac
    //   }).done(function( data ) {
    //         if(data === 'message inserted'){
    //           //location.reload();
    //           swal({
    //             title: "ASP Data",
    //             text: "Location submitted successfully!",
    //             type: "info",
    //             showCancelButton: true,
    //             closeOnConfirm: true,
    //             showLoaderOnConfirm: true,
    //           }, function(){
    //             setTimeout(function(){
    //               location.reload();
    //             }, 2000);
    //           });
    //         } else {
    //           swal('ASP Data', 'Something went wrong: ' + data);
    //         }
    //
    //     }).fail(function() {
    //       alert('nothing happened');
    //     });
    //
    // });
